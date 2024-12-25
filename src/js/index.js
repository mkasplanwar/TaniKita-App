// Get DOM elements
const navToggle = document.getElementById('navToggle');
const closeMenu = document.getElementById('closeMenu');
const offCanvasMenu = document.getElementById('offCanvasMenu');
const overlay = document.getElementById('overlay');

// Toggle menu
navToggle.addEventListener('click', () => {
    offCanvasMenu.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
});

// Close menu function
const closeOffCanvasMenu = () => {
    offCanvasMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
};

// Event listeners for closing menu
closeMenu.addEventListener('click', closeOffCanvasMenu);
overlay.addEventListener('click', closeOffCanvasMenu);

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.off-canvas-menu .nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', closeOffCanvasMenu);
});

// Handle escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && offCanvasMenu.classList.contains('active')) {
        closeOffCanvasMenu();
    }
});