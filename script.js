document.addEventListener('DOMContentLoaded', () => {

    // === 1. TOGGLE MENU MOBILE (Mobile Burger Menu) ===
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', () => {
            // Ini akan menambahkan/menghapus class 'open' yang mengontrol tampilan menu
            mobileNav.classList.toggle('open');
            // Opsional: Mengganti ikon burger menjadi 'X' saat terbuka
            if (mobileNav.classList.contains('open')) {
                menuToggle.innerHTML = '&#10005;'; // Ikon X
            } else {
                menuToggle.innerHTML = '&#9776;'; // Ikon Burger
            }
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

    // === 3. INISIALISASI SWIPER SLIDER (Hanya Berjalan di produk.html) ===
    // Memeriksa apakah elemen dengan class 'mySwiper' ada di halaman saat ini
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
});
