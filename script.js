document.addEventListener('DOMContentLoaded', () => {

    // 1. TOGGLE MENU MOBILE
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');
    const resellerBanner = document.getElementById('reseller-notification'); 

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('open');
            if (mobileNav.classList.contains('open')) {
                if (resellerBanner) resellerBanner.classList.add('hide-reseller-banner');
                menuToggle.innerHTML = '&#10005;'; 
            } else {
                if (resellerBanner) resellerBanner.classList.remove('hide-reseller-banner');
                menuToggle.innerHTML = '&#9776;'; 
            }
        });
    }

    // 2. FADE-IN SCROLL ANIMATION
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = { threshold: 0.2 };
    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => appearOnScroll.observe(fader));

    // 3. VALIDASI TELEPON
    const inputTelepon = document.getElementById('telepon');
    if (inputTelepon) {
        inputTelepon.addEventListener('input', function (e) {
            this.value = this.value.replace(/[^0-9]/g, '');
        });
    }
    
    // 4. PENGIRIMAN FORM KE GOOGLE APPS SCRIPT
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbwkzpVFcVmefsicAN7-a6aVUFIF2xrEOqEJA4J0nDFOF474hjjRfF_kLTO7FGQAhUx_ug/exec'; 

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            const formData = new FormData(this);
            formStatus.innerHTML = 'Mengirim Pesanan...';
            formStatus.style.color = '#5B4B8A';
            
            fetch(WEB_APP_URL, {
                method: 'POST',
                body: formData,
                mode: 'no-cors' 
            })
            .then(() => {
                formStatus.innerHTML = '✅ Sukses! Data telah tersimpan di database.';
                formStatus.style.color = '#25D366';
                contactForm.reset(); 
            })
            .catch(error => {
                formStatus.innerHTML = '❌ Gagal mengirim. Cek koneksi Anda.';
                formStatus.style.color = 'red';
                console.error('Error:', error);
            });
        });
    }
});
