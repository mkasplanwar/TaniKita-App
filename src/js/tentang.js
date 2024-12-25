
        // Animasi scroll
        function revealOnScroll() {
            const elements = document.querySelectorAll('.animate-fade-up');
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight - 100) {
                    element.classList.add('active');
                }
            });
        }

        // Initial check
        document.addEventListener('DOMContentLoaded', () => {
            revealOnScroll();
            // Activate hero animations immediately
            document.querySelectorAll('.founders-hero .animate-fade-up').forEach(el => {
                el.classList.add('active');
            });
        });

        // Scroll event
        window.addEventListener('scroll', revealOnScroll);

        // Lazy loading images
        document.querySelectorAll('img').forEach(img => {
            img.loading = 'lazy';
        });