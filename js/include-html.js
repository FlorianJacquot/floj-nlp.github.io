/**
 * Fonction pour inclure un fichier HTML dans un élément
 * @param {string} filePath - Chemin vers le fichier HTML à inclure
 * @param {string} elementId - ID de l'élément où inclure le contenu
 */
function includeHTML(filePath, elementId) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur lors du chargement de ${filePath}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => {
            console.error(`Erreur : ${error}`);
        });
}

// Inclure les éléments communs
document.addEventListener('DOMContentLoaded', function() {
    // includeHTML('includes/nav-bar.html', 'nav-placeholder');
    // includeHTML('includes/footer.html', 'footer-placeholder');
    // includeHTML('includes/back-to-top.html', 'back-to-top-placeholder');

    const htmlLang = document.documentElement.lang; // Récupère la langue de la page

    const isFrench = htmlLang === 'fr';
    const navPath = isFrench ? 'includes/nav-bar.html' : 'includes_en/nav-bar_en.html';
    const footerPath = isFrench ? 'includes/footer.html' : 'includes_en/footer_en.html';
    const backToTopPath = isFrench ? 'includes/back-to-top.html' : 'includes_en/back-to-top_en.html';

    includeHTML(navPath, 'nav-placeholder');
    includeHTML(footerPath, 'footer-placeholder');
    includeHTML(backToTopPath, 'back-to-top-placeholder');

});
