/* ============================================
   Vprojectx — Minimal JS
   Scroll reveal + smooth interactions
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // --- Scroll reveal for sections ---
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15,
            rootMargin: '0px 0px -60px 0px',
        }
    );

    sections.forEach((section) => observer.observe(section));

    // --- Nav background on scroll ---
    const nav = document.querySelector('.nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        if (currentScroll > 10) {
            nav.style.borderBottomColor = 'rgba(0,0,0,0.08)';
        } else {
            nav.style.borderBottomColor = 'rgba(0,0,0,0.05)';
        }
        lastScroll = currentScroll;
    });
});

