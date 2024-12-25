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
document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const buyerFlow = document.getElementById('buyerFlow');
    const sellerFlow = document.getElementById('sellerFlow');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            // Show corresponding flow
            if (btn.dataset.tab === 'buyer') {
                buyerFlow.classList.remove('hidden');
                sellerFlow.classList.add('hidden');
                animateSteps(buyerFlow);
            } else {
                sellerFlow.classList.remove('hidden');
                buyerFlow.classList.add('hidden');
                animateSteps(sellerFlow);
            }
        });
    });

    function animateSteps(flow) {
        const steps = flow.querySelectorAll('.step-card');
        steps.forEach((step, index) => {
            step.style.opacity = '0';
            setTimeout(() => {
                step.classList.add('fade-in');
            }, index * 100);
        });
    }

    // Initial animation
    animateSteps(buyerFlow);
});