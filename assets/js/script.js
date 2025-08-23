document.addEventListener('DOMContentLoaded', () => {
    // Menu Toggle for Mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navbarLinks = document.querySelector('.navbar-links');

    menuToggle.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
    });

    // Mode Toggle Functionality (Sinkron dengan academy.html)
    const modeToggle = document.getElementById('mode-toggle');
    const body = document.body;

    // Load saved mode from localStorage (sinkron dengan academy.html)
    const savedMode = localStorage.getItem('theme');
    if (savedMode === 'light') {
        body.classList.add('light-mode');
        modeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    modeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const isLightMode = body.classList.contains('light-mode');
        modeToggle.innerHTML = isLightMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', isLightMode ? 'light' : 'dark'); // Sinkronkan perubahan
    });

    // Navigation Functionality
    const prevButton = document.querySelector('.nav-button:nth-child(1)'); // Tombol pertama (Previous)
    const nextButton = document.querySelector('.nav-button:nth-child(2)'); // Tombol kedua (Next)
    const exitButton = document.querySelector('.nav-button:nth-child(3)'); // Tombol ketiga (Exit)

    // Tentukan urutan unit (sesuaikan dengan jumlah unit Anda)
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    const units = ['../../academy/unit-1', '../../academy/unit-2', '../../academy/unit-3'];
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    const currentPage = window.location.pathname.split('/').pop();

    const currentIndex = units.indexOf(currentPage);

    // Logika untuk tombol Previous
    if (prevButton) {
        if (currentIndex === 0) {
            prevButton.style.display = 'none'; // Hilangkan tombol Previous di unit pertama
        } else {
            prevButton.href = units[currentIndex - 1];
            prevButton.style.display = 'inline-block'; // Tampilkan jika ada unit sebelumnya
        }
    }

    // Logika untuk tombol Next
    if (nextButton) {
        if (currentIndex === units.length - 1) {
            nextButton.style.display = 'none'; // Hilangkan tombol Next di unit terakhir
        } else {
            nextButton.href = units[currentIndex + 1];
            nextButton.style.display = 'inline-block'; // Tampilkan jika ada unit berikutnya
        }
    }

    // Logika untuk tombol Exit
    if (exitButton) {
        exitButton.addEventListener('click', () => {
            window.location.href = '../academy.html';
        });
    }
});