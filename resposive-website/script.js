function toggleMenu() {
    const menu = document.getElementById('menu');
    const menuIcon = document.getElementById('menu-icon');

    // Toggle the active class on the menu
    menu.classList.toggle('active');
    
    // Toggle the hamburger icon between 'X' and '≡'
    if (menu.classList.contains('active')) {
        menuIcon.innerHTML = '&times;'; // Change to 'X' symbol when menu is open
    } else {
        menuIcon.innerHTML = '&#9776;'; // Change back to hamburger when menu is closed
    }
}

// Close menu after clicking any menu item
const menuLinks = document.querySelectorAll('.menu-link');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.getElementById('menu');
        const menuIcon = document.getElementById('menu-icon');
        
        // Hide the menu after clicking a link
        menu.classList.remove('active');
        
        // Reset the hamburger icon to '≡'
        menuIcon.innerHTML = '&#9776;';
    });
});