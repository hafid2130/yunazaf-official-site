document.addEventListener('DOMContentLoaded', function() {
    // 1. FADE-IN ON SCROLL LOGIC
    const elementsToAnimate = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1 
    });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
    
    // 2. MOBILE NAVIGATION TOGGLE
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', function() {
            // Toggle class 'open' pada mobileNav
            mobileNav.classList.toggle('open');
            // Ganti ikon burger dengan X atau sebaliknya
            if (mobileNav.classList.contains('open')) {
                menuToggle.innerHTML = '&#10005;'; // Ikon X
            } else {
                menuToggle.innerHTML = '&#9776;'; // Ikon Burger
            }
        });
        
        // Tutup menu saat link diklik (opsional)
        const navLinks = mobileNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('open');
                menuToggle.innerHTML = '&#9776;';
            });
        });
    }
});