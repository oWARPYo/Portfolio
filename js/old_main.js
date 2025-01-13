
let isDarkMode = true;

function toggleTheme() {
    const body = document.body;
    const imagesFixes = document.getElementsByClassName('image-fixe');
    const themeIcon = document.getElementById('theme-icon');
    const gradient = document.getElementById('gradient');
    const logo = document.getElementById('logo');
    const navbar = document.getElementById('navbar-ul'); // Sélectionner la navbar

    // Changement de thème
    if (isDarkMode) {
        body.style.filter = 'invert(1)';
        body.style.backgroundColor = '#0e0e0e';
        for (let i = 0; i < imagesFixes.length; i++) {
            imagesFixes[i].style.filter = 'invert(1)';
        };
        themeIcon.src = '../assets/images/theme_icon_light.png';
        themeIcon.style.filter = 'invert(0)';
        logo.style.filter = 'invert(0)';
        gradient.style.filter = 'invert(1)'
        navbar.style.position = 'fixed'; // Assurer que la navbar garde sa position
    } else {
        body.style.filter = 'invert(0)';
        body.style.backgroundColor = '#f1f1f1';
        for (let i = 0; i < imagesFixes.length; i++) {
            imagesFixes[i].style.filter = 'invert(0)';
        };
        themeIcon.src = '../assets/images/theme_icon_dark.png';
        themeIcon.style.filter = 'invert(0)';
        logo.style.filter = 'invert(0)';
        gradient.style.filter = 'invert(0)';
        navbar.style.position = 'fixed'; // Assurer que la navbar garde sa position
    }

    // Basculer l'état du mode sombre
    isDarkMode = !isDarkMode;
}