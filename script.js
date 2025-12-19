document.addEventListener('DOMContentLoaded', () => {
    // 1. MOBILE MENU
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('open');
            menuToggle.innerHTML = mobileNav.classList.contains('open') ? '&#10005;' : '&#9776;';
        });
    }

    // 2. FADE-IN ANIMATION
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = { threshold: 0.2 };
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);
    faders.forEach(fader => appearOnScroll.observe(fader));

    // 3. FORM SUBMISSION
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbwkzpVFcVmefsicAN7-a6aVUFIF2xrEOqEJA4J0nDFOF474hjjRfF_kLTO7FGQAhUx_ug/exec';

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            formStatus.innerHTML = 'Sedang mengirim...';
            
            fetch(WEB_APP_URL, {
                method: 'POST',
                body: formData,
                mode: 'no-cors'
            })
            .then(() => {
                formStatus.innerHTML = '✅ Pesanan Berhasil Dikirim!';
                formStatus.style.color = 'green';
                contactForm.reset();
            })
            .catch(() => {
                formStatus.innerHTML = '❌ Gagal mengirim. Coba lagi.';
                formStatus.style.color = 'red';
            });
        });
    }
});
