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

    // =========================================================
    // BARU DITAMBAHKAN:
    // === 4. HANYA IZINKAN INPUT ANGKA UNTUK TELEPON ===
    const inputTelepon = document.getElementById('telepon');
    if (inputTelepon) {
        inputTelepon.addEventListener('input', function (e) {
            // Hapus karakter non-digit (non-angka) secara real-time
            this.value = this.value.replace(/[^0-9]/g, '');
        });
    }
    // =========================================================

});

// === 5. PENGIRIMAN FORMULIR KE GOOGLE APPS SCRIPT (AJAX) ===
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
// GANTI DENGAN URL WEB APP YANG ANDA DAPATKAN DI LANGKAH 3
const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbyYIu6s-4-zugpd1xRYtg9HZqQ1jZ-XI8XY48Tt5F8EaheWtAuMz49v_11V5t3lSIJKJQ/exec'; 

if (contactForm && formStatus) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Mencegah form submit biasa

        const formData = new FormData(this);
        formStatus.innerHTML = 'Mengirim... Mohon Tunggu...';
        formStatus.style.color = '#5B4B8A';
        
        fetch(WEB_APP_URL, {
            method: 'POST',
            body: formData,
            mode: 'no-cors' // Penting untuk Apps Script
        })
        .then(response => {
            // Karena mode: 'no-cors' selalu menghasilkan respons 'opaque',
            // kita asumsikan pengiriman berhasil jika tidak ada error jaringan.
            formStatus.innerHTML = '✅ Pesanan berhasil dikirim! Kami akan menghubungi Anda segera.';
            formStatus.style.color = '#25D366';
            contactForm.reset(); // Kosongkan formulir setelah sukses
        })
        .catch(error => {
            formStatus.innerHTML = '❌ Terjadi Kesalahan: Gagal mengirim pesan.';
            formStatus.style.color = 'red';
            console.error('Error:', error);
        });
    });
}



