document.addEventListener('DOMContentLoaded', () => {
    // 1. Toggle Menu Mobile
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');
    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('open');
            menuToggle.innerHTML = mobileNav.classList.contains('open') ? '&#10005;' : '&#9776;';
        });
    }

    // 2. Kirim Form ke Google Sheets
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    
    // GANTI LINK DI BAWAH INI DENGAN URL WEB APP ANDA
    const WEB_APP_URL = 'URL_WEB_APP_ANDA'; 

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            formStatus.innerHTML = "Sedang mengirim pesan...";
            formStatus.style.color = "blue";

            const formData = new FormData(this);
            
            fetch(WEB_APP_URL, {
                method: 'POST',
                body: formData,
                mode: 'no-cors' // Penting untuk Google Apps Script
            })
            .then(() => {
                formStatus.innerHTML = "✅ Pesan Berhasil Dikirim!";
                formStatus.style.color = "green";
                contactForm.reset();
            })
            .catch(error => {
                formStatus.innerHTML = "❌ Gagal mengirim. Coba lagi.";
                formStatus.style.color = "red";
                console.error('Error!', error.message);
            });
        });
    }
});
