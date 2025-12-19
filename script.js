document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Logic
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');
    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('open');
            menuToggle.innerHTML = mobileNav.classList.contains('open') ? '&#10005;' : '&#9776;';
        });
    }

    // 2. Database Submission Logic
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbwkzpVFcVmefsicAN7-a6aVUFIF2xrEOqEJA4J0nDFOF474hjjRfF_kLTO7FGQAhUx_ug/exec';

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); 

            const formData = new FormData(this);
            formStatus.innerHTML = 'Memproses Pesanan...';
            formStatus.style.color = '#5B4B8A';
            
            fetch(WEB_APP_URL, {
                method: 'POST',
                body: formData,
                mode: 'no-cors' 
            })
            .then(() => {
                formStatus.innerHTML = '✅ Sukses! Data Anda telah masuk ke database kami.';
                formStatus.style.color = '#25D366';
                contactForm.reset(); 
            })
            .catch(error => {
                formStatus.innerHTML = '❌ Gagal terhubung ke database.';
                formStatus.style.color = 'red';
                console.error('Error:', error);
            });
        });
    }
});
