document.addEventListener('DOMContentLoaded', () => {
    // === 1. TOGGLE MENU MOBILE (Mobile Burger Menu) ===
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('open');
        });
    }

    // === 2. INISIALISASI SWIPER SLIDER (Hanya Berjalan di produk.html) ===
    // Memeriksa apakah elemen dengan class 'mySwiper' ada di halaman saat ini
    if (document.querySelector('.mySwiper')) {
        const swiper = new Swiper(".mySwiper", {
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
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }
        });
    }
    
    // Anda dapat menambahkan kode untuk Fade-in animation jika diperlukan di sini.
});

    // --- Efek Fade In ---
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
    
    // --- INISIALISASI SWIPER SLIDER (Khusus untuk halaman produk.html) ---
    
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

