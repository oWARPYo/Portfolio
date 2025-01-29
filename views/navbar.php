<link id="theme-link-root-navbar" rel="stylesheet" href="../css/clair/root.css">
<link id="theme-link-navbar" rel="stylesheet" href="../css/clair/navbar.css">
<script src="../js/main.js"></script>
<script src="../js/navbar.js"></script>
<nav class="navbar" role="navigation" aria-label="main navigation" id="navbar">

<a href="accueil.php">
    <img src="../assets/images/logo.svg" id="logo" alt="Logo de Jonben" title="Retourner à l'accueil">
</a>

<ul id="navbar-ul">
    <li>
        <a class="navbar-item" href="#profil-section">
            Profil
        </a>
    </li>

    <li class="dropdown">
        <a class="navbar-item" href="services.php">
            Projets
            <img src="../assets/images/arrow.png" class="dropdown-arrow" alt="Arrow">
        </a>
        <ul class="dropdown-content">
            <li><a class="dropdown-content-a" href="services.php">Jonben</a></li>
            <li><a class="dropdown-content-a" href="services.php">Feet'ures</a></li>
            <li><a class="dropdown-content-a" href="services.php">apiTV</a></li>
        </ul>
    </li>

    <li>
        <a class="navbar-item" href="#timeline">
            Parcours
        </a>
    </li>

    <li class="dropdown">
        <a class="navbar-item" href="projets.php">
            Compétences
            <img src="../assets/images/arrow.png" class="dropdown-arrow" alt="Arrow">
        </a>
        <ul class="dropdown-content">
            <li><a class="dropdown-content-a" href="projets.php">Edvance</a></li>
            <li><a class="dropdown-content-a" href="projets.php">Areva</a></li>
            <li><a class="dropdown-content-a" href="projets.php">GE</a></li>
            <li><a class="dropdown-content-a" href="projets.php">Alstom</a></li>
            <li><a class="dropdown-content-a" href="projets.php">Divers</a></li>
        </ul>
    </li>


    <li>
        <a class="navbar-item" href="contact.php">
            Contact
        </a>
    </li>

    <li>
        <a id="theme-toggle" class="navbar-item" onclick="toggleTheme()">
            <img src="../assets/images/theme_icon_dark.png" id="theme-icon" alt="Toggle Theme">
        </a>
    </li>
</ul>    
</nav>



