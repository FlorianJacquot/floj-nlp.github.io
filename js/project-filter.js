/**
 * Fonction pour filtrer les projets
 */
document.querySelectorAll('input[name="filter"]').forEach(radio => {
    radio.addEventListener('change', function() {
        const filter = this.id;
        const projects = document.querySelectorAll('.project-card');

        projects.forEach(project => {
            const badge = project.querySelector('.badge').textContent;
            if (filter === 'all' || badge.includes(this.nextElementSibling.textContent)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});