document.addEventListener('DOMContentLoaded', () => {

    // === 1. TOGGLE MENU MOBILE (Mobile Burger Menu) dan KONTROL BANNER ===
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');
    const resellerBanner = document.getElementById('reseller-notification'); 

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('open');
            
            if (mobileNav.classList.contains('open')) {
                if (resellerBanner) {
                    resellerBanner.classList.add('hide-reseller-banner');
                }
                menuToggle.innerHTML = '&#10005;'; 
            } else {
                if (resellerBanner) {
                    resellerBanner.classList.remove('hide-reseller-banner');
                }
                menuToggle.innerHTML = '&#9776;'; 
            }
        });

        document.querySelectorAll('.mobile-nav a').forEach(link => {
            link.addEventListener('click', () => {
                if (mobileNav.classList.contains('open')) {
                    mobileNav.classList.remove('open');
                    menuToggle.innerHTML = '&#9776;';
                    if (resellerBanner) {
                        resellerBanner.classList.remove('hide-reseller-banner');
                    }
                }
            });
        });
    }

    // === 2. FADE-IN SCROLL ANIMATION ===
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = { threshold: 0.5 };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // === 3. INISIALISASI SWIPER SLIDER (Jika Ada) ===
    if (document.querySelector('.mySwiper') && typeof Swiper !== 'undefined') {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
            },
        });
    }

    // === 4. HANYA IZINKAN INPUT ANGKA UNTUK TELEPON ===
    const inputTelepon = document.getElementById('telepon');
    if (inputTelepon) {
        inputTelepon.addEventListener('input', function (e) {
            this.value = this.value.replace(/[^0-9]/g, '');
        });
    }
    
    // === 5. PENGIRIMAN FORMULIR KE GOOGLE APPS SCRIPT (AJAX) ===
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    
    // *** URL WEB APP ANDA YANG SUDAH TERDEPLOY DAN BERIZIN 'ANYONE' ***
    const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbwQapf43-RUsFISpgPtXNxpxlZ2W7VL3YnwZpgZPfHEEMN2nj8rsk0GDWwPN_EUb0xh/exec'; 
    // ******************************************************

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); 

            const formData = new FormData(this);
            formStatus.innerHTML = 'Mengirim... Mohon Tunggu...';
            formStatus.style.color = '#5B4B8A';
            
            fetch(WEB_APP_URL, {
                method: 'POST',
                body: formData,
                mode: 'no-cors' 
            })
            .then(response => {
                // Asumsi pengiriman berhasil karena masalah CORS di Apps Script
                formStatus.innerHTML = '✅ Pesanan berhasil dikirim! Kami akan menghubungi Anda segera.';
                formStatus.style.color = '#25D366';
                contactForm.reset(); 
            })
            .catch(error => {
                formStatus.innerHTML = '❌ Terjadi Kesalahan: Gagal mengirim pesan. Cek koneksi Anda.';
                formStatus.style.color = 'red';
                console.error('Error:', error);
            });
        });
    }

});


