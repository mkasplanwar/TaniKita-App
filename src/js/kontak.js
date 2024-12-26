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
document.addEventListener('DOMContentLoaded', function() {
    // Add animation delays to categories
    const categories = document.querySelectorAll('.partner-category');
    categories.forEach((category, index) => {
        category.style.setProperty('--animation-order', index);
    });
});
AOS.init({
    duration: 800,
    once: true
});
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show loading spinner
    document.getElementById('loadingSpinner').style.display = 'flex';
    
    // Simulate form submission
    setTimeout(() => {
        // Hide loading spinner
        document.getElementById('loadingSpinner').style.display = 'none';
        
        // Show success message
        document.getElementById('successMessage').style.display = 'block';
        
        // Reset form
        this.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            document.getElementById('successMessage').style.display = 'none';
        }, 5000);
    }, 2000);
});

// Form validation
const inputs = document.querySelectorAll('input, textarea, select');
inputs.forEach(input => {
    input.addEventListener('invalid', function(e) {
        e.preventDefault();
        this.classList.add('error');
    });
    
    input.addEventListener('input', function() {
        if (this.classList.contains('error')) {
            this.classList.remove('error');
        }
    });
});
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const answer = button.nextElementSibling;
        const isOpen = button.classList.contains('active');

        // Close all FAQs
        document.querySelectorAll('.faq-question').forEach(otherButton => {
            if (otherButton !== button) {
                otherButton.classList.remove('active');
                otherButton.nextElementSibling.classList.remove('active');
            }
        });

        // Toggle current FAQ
        button.classList.toggle('active');
        answer.classList.toggle('active');

        // Smooth scroll to the clicked FAQ if it's being opened
        if (!isOpen) {
            faqItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });
});