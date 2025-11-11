/**
 * Fonction pour gérer le bouton "Retour en haut"
 */
document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById('backToTopBtn');

    // Afficher/masquer le bouton en fonction du défilement
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    // Fonction pour remonter en haut de la page
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
