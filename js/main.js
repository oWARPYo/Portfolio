function toggleTheme() {
    // Récupérer l'élément <link> du thème
    const themeIcon = document.getElementById('theme-icon');
    var themeLinkRootNavbar = document.getElementById('theme-link-root-navbar');
    var themeLinkRootAccueil = document.getElementById('theme-link-root-accueil');
    var themeLinkNavbar = document.getElementById('theme-link-navbar');
    var themeLinkAccueil = document.getElementById('theme-link-accueil');


    // Changer le chemin du fichier CSS en fonction du thème actuel
    if (themeLinkRootNavbar.getAttribute('href') === '../css/clair/root.css') {
        themeIcon.src = '../assets/images/theme_icon_light.png';
        themeLinkRootNavbar.setAttribute('href', '../css/sombre/root.css');
    } else {
        themeIcon.src = '../assets/images/theme_icon_dark.png';
        themeLinkRootNavbar.setAttribute('href', '../css/clair/root.css');
    }

    // Changer le chemin du fichier CSS en fonction du thème actuel
    if (themeLinkRootAccueil.getAttribute('href') === '../css/clair/root.css') {
        themeLinkRootAccueil.setAttribute('href', '../css/sombre/root.css');
    } else {
        themeLinkRootAccueil.setAttribute('href', '../css/clair/root.css');
    }

    // Changer le chemin du fichier CSS en fonction du thème actuel
    if (themeLinkNavbar.getAttribute('href') === '../css/clair/navbar.css') {
        themeLinkNavbar.setAttribute('href', '../css/sombre/navbar.css');
    } else {
        themeLinkNavbar.setAttribute('href', '../css/clair/navbar.css');
    }

    // Changer le chemin du fichier CSS en fonction du thème actuel
    if (themeLinkAccueil.getAttribute('href') === '../css/clair/accueil.css') {
        themeLinkAccueil.setAttribute('href', '../css/sombre/accueil.css');
    } else {
        themeLinkAccueil.setAttribute('href', '../css/clair/accueil.css');
    }
};




//----------------------------------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    // Votre code ici
    console.log('Le contenu de la page est complètement chargé');

    const scrollThumb = document.getElementById('scrollThumb');
    const thumbHeight = 50;
    let isDragging = false;
    let startY;
    let startScrollY;
    let targetScrollPosition = window.scrollY;
    let isScrolling = false;
    let count=1;

    // Fonction pour mettre à jour la position du thumb en fonction du scroll
    function updateScrollThumb() {
        const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPosition = window.scrollY;
        const thumbPosition = (scrollPosition / pageHeight) * (window.innerHeight - thumbHeight);
        scrollThumb.style.top = `${thumbPosition}px`;
    }

    // Fonction de défilement lissé
    function smoothScroll() {
        if (!isScrolling) return;
        const currentScroll = window.scrollY;
        const distance = targetScrollPosition - currentScroll;
        window.scrollTo(0, currentScroll + distance * 0.1); // Ajuste la vitesse avec un multiplicateur

        if (Math.abs(distance) > 0.5) {
            requestAnimationFrame(smoothScroll);
        } else {
            window.scrollTo(0, targetScrollPosition); // Assure la position finale exacte
            isScrolling = false;
        }
        updateScrollThumb();
    }

    // Écouteur de l'événement wheel pour un scroll lissé
    window.addEventListener('wheel', (event) => {
        targetScrollPosition += event.deltaY;
        targetScrollPosition = Math.max(0, Math.min(targetScrollPosition, document.documentElement.scrollHeight - window.innerHeight));
        
        if (!isScrolling) {
            isScrolling = true;
            smoothScroll();
        }
    });

    // Gère le glissement du thumb
    scrollThumb.addEventListener('mousedown', (event) => {
        scrollThumb.style.backgroundColor = '#116017'
        isDragging = true;
        startY = event.clientY;
        startScrollY = window.scrollY;
        document.body.style.userSelect = 'none';
        isScrolling = false; // Arrête le scroll lissé pendant le glissement du thumb
    });

    document.addEventListener('mousemove', (event) => {
        if (isDragging) {
            const deltaY = event.clientY - startY;
            const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollAmount = (deltaY / (window.innerHeight - thumbHeight)) * pageHeight;
            window.scrollTo(0, startScrollY + scrollAmount);
            targetScrollPosition = window.scrollY; // Met à jour la position cible en conséquence
        }
    });

    document.addEventListener('mouseup', () => {
        scrollThumb.style.backgroundColor = '#1a9424'
        isDragging = false;
        document.body.style.userSelect = '';
        targetScrollPosition = window.scrollY; // Fixe la position cible après le glissement du thumb
    });

    // Synchronise le thumb avec le scroll
    window.addEventListener('scroll', updateScrollThumb);

    // Initialise la position du thumb au chargement de la page
    updateScrollThumb();


    let thumbVisible = false;
    let thumbTimeout;
    let mouseInRightZone = false;

    // Fonction pour afficher le thumb
    function showThumb() {
        if (!thumbVisible) {
            scrollThumb.style.opacity = '1';
            thumbVisible = true;
        }
        clearTimeout(thumbTimeout);
    
        // Cache le thumb après 2 seconde seulement si la souris n'est pas dans la zone de droite
        if (!mouseInRightZone) {
            thumbTimeout = setTimeout(() => {
            scrollThumb.style.opacity = '0';
            thumbVisible = false;
            }, 1000);
        }
    }

    // Fonction pour gérer l'entrée et sortie de la zone des 25px à droite
    // Fonction pour gérer l'entrée et sortie de la zone des 25px à droite
    document.addEventListener('mousemove', (event) => {
        // Si la souris est dans les 25 pixels de droite
        if (window.innerWidth - event.clientX <= 25) {
            mouseInRightZone = true;
            scrollThumb.style.opacity = '1';
            thumbVisible = true;
            clearTimeout(thumbTimeout); // Annule le timeout si la souris est dans la zone
        } else {
            if (!isDragging && thumbVisible) {
                mouseInRightZone = false;
                // Lance le timeout pour cacher le thumb après 1 seconde si la souris sort de la zone
                thumbTimeout = setTimeout(() => {
                    scrollThumb.style.opacity = '0';
                    thumbVisible = false;
                }, 1000);
            }
        }
    });


    // Détecte le scroll et affiche le thumb
    window.addEventListener('scroll', showThumb);


    
});

  