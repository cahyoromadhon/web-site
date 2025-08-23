document.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded!'); // Debug: Pastikan JS terload

    // Animasi bubble
    const bubbles = document.querySelectorAll('.bubble');
    bubbles.forEach((bubble, index) => {
        setTimeout(() => {
            bubble.style.opacity = 1;
            bubble.style.transform = 'translateY(0)';
        }, index * 800);
    });

    // Animasi section saat scroll
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null, // Gunakan viewport sebagai root
        rootMargin: '0px',
        threshold: 0.1 // Trigger saat 10% section masuk ke viewport
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Hentikan observasi setelah animasi
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        // Set style awal untuk animasi
        section.style.opacity = 0;
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        sectionObserver.observe(section);
    });

    // TOC Modal Toggle
    const toggleButton = document.getElementById('toc-toggle');
    const modal = document.getElementById('toc-modal');
    const closeButton = document.getElementById('toc-close');

    if (toggleButton && modal && closeButton) {
        toggleButton.addEventListener('click', () => {
            if (modal.classList.contains('show')) {
                modal.classList.remove('show');
            } else {
                modal.classList.add('show');
            }
        });

        closeButton.addEventListener('click', () => {
            modal.classList.remove('show');
        });

        // Close modal when clicking outside
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.classList.remove('show');
            }
        });
    }
});