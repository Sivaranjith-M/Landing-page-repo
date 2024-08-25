function toggleMenu() {
    const menu = document.getElementById('menuToggle');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

// Scroll to the section when a menu item is clicked
document.querySelectorAll('.menu-toggle a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetID = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
            const menu = document.getElementById('menuToggle');
            menu.style.display = 'none'; // Close the menu after selection
        }
    });
});
