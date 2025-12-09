document.addEventListener('DOMContentLoaded', () => {
    // Cari elemen menu burger (ikon ☰)
    const menuToggle = document.getElementById('menuToggle');
    // Cari elemen navigasi mobile (menu yang tersembunyi)
    const mobileNav = document.getElementById('mobileNav');

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', () => {
            // Ketika menuToggle diklik, tambahkan/hapus class 'open' pada mobileNav
            // Class 'open' ini yang akan membuat menu terlihat/tersembunyi di CSS
            mobileNav.classList.toggle('open');
        });
    }

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
