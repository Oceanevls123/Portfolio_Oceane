// Sélection du burger et de la navbar
const burger = document.getElementById('burger');
const navbar = document.querySelector('.navbar');

if (burger) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');      // transforme le burger en croix
        if(navbar) navbar.classList.toggle('active'); // ouvre/ferme le menu mobile
    });
}
const filterBtns = document.querySelectorAll('.filter-btn');
const workItems = document.querySelectorAll('.work-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Active class sur le bouton
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        // Afficher/masquer les projets
        workItems.forEach(item => {
            if(filter === 'all') {
                item.classList.remove('hidden');
            } else {
                if(item.classList.contains(filter)) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            }
        });
    });
});
