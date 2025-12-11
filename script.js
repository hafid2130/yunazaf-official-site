document.addEventListener('DOMContentLoaded', () => {

    // === 1. TOGGLE MENU MOBILE (Mobile Burger Menu) dan KONTROL BANNER ===
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');
    // Ambil elemen banner reseller
    const resellerBanner = document.getElementById('reseller-notification'); 

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', () => {
            // 1. Toggle class 'open' pada mobileNav
            mobileNav.classList.toggle('open');
            
            // 2. Kontrol tampilan banner reseller
            if (mobileNav.classList.contains('open')) {
                // Sembunyikan banner saat menu terbuka
                if (resellerBanner) {
                    resellerBanner.classList.add('hide-reseller-banner');
                }
                // Ganti ikon menjadi 'X'
                menuToggle.innerHTML = '&#10005;'; 
            } else {
                // Tampilkan kembali banner saat menu tertutup
                if (resellerBanner) {
                    resellerBanner.classList.remove('hide-reseller-banner');
                }
                // Kembali ke ikon Burger
                menuToggle.innerHTML = '&#9776;'; 
            }
        });

        // Opsional: Menutup menu saat link di klik (hanya untuk mobile)
        document.querySelectorAll('.mobile-nav a').forEach(link => {
            link.addEventListener('click', () => {
                if (mobileNav.classList.contains('open')) {
                    mobileNav.classList.remove('open');
                    menuToggle.innerHTML = '&#9776;'; // Kembali ke ikon Burger
                    // Tampilkan kembali banner setelah menu tertutup
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
