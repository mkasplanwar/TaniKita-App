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
        // Sample product data
        const products = [
            {
                id: 1,
                name: "Tomat Segar Premium",
                category: "Sayuran",
                price: 15000,
                location: "Bandung",
                image: "src/illustration/tomat.jpg",
                stock: 100,
                sold: "50 ton"
            },
            {
                id: 2,
                name: "Bayam Pangandaran",
                category: "Sayuran",
                price: 10000,
                location: "Surabaya",
                image: "src/illustration/bayam.jpg",
                stock: 75,
                sold: "1.000 ikat"
            },
            {
                id: 3,
                name: "Beras Anjir Muara",
                category: "Sembako",
                price: 29000,
                location: "Banjarmasin",
                image: "src/illustration/beras.jpg",
                stock: 75,
                sold: "100 kg"
            },
            {
                id: 4,
                name: "Kentang Pelaihari Segar",
                category: "Sayuran",
                price: 15000,
                location: "Pelaihari",
                image: "src/illustration/kentang.jpg",
                stock: 75,
                sold: "150 kg"
            },
            {
                id: 5,
                name: "Apel Premium",
                category: "Buah",
                price: 19000,
                location: "Surabaya",
                image: "src/illustration/apel.jpg",
                stock: 75,
                sold: "450 kg"
            },
            {
                id: 6,
                name: "Pisang Premium",
                category: "Buah",
                price: 12000,
                location: "Bandung",
                image: "src/illustration/pisang.jpg",
                stock: 75,
                sold: "20 sisir"
            },
            {
                id: 7,
                name: "Semangka Tanpa Biji",
                category: "Buah",
                price: 13000,
                location: "Bandung",
                image: "src/illustration/semangka.jpg",
                stock: 75,
                sold: "4 ton"
            },
            {
                id: 8,
                name: "Anggur Premium",
                category: "Buah",
                price: 35000,
                location: "Yogyakarta",
                image: "src/illustration/anggur.jpg",
                stock: 75,
                sold: "150 kg"
            },
            {
                id: 10,
                name: "Nanas Madu",
                category: "Buah",
                price: 11000,
                location: "Medan",
                image: "src/illustration/nanas.jpg",
                stock: 75,
                sold: "200 kg"
            },
        ];

        // DOM Elements
        const searchInput = document.getElementById('searchInput');
        const locationFilter = document.getElementById('locationFilter');
        const categoryFilter = document.getElementById('categoryFilter');
        const sortFilter = document.getElementById('sortFilter');
        const productGrid = document.getElementById('productGrid');

        // Filter and render products
        function filterProducts() {
            let filteredProducts = [...products];

            // Apply search filter
            const searchTerm = searchInput.value.toLowerCase();
            if (searchTerm) {
                filteredProducts = filteredProducts.filter(product => 
                    product.name.toLowerCase().includes(searchTerm) ||
                    product.category.toLowerCase().includes(searchTerm)
                );
            }

            // Apply location filter
            const location = locationFilter.value;
            if (location) {
                filteredProducts = filteredProducts.filter(product => 
                    product.location.toLowerCase() === location.toLowerCase()
                );
            }

            // Apply category filter
            const category = categoryFilter.value;
            if (category) {
                filteredProducts = filteredProducts.filter(product => 
                    product.category.toLowerCase() === category.toLowerCase()
                );
            }

            // Apply sorting
            const sortBy = sortFilter.value;
            switch(sortBy) {
                case 'price-low':
                    filteredProducts.sort((a, b) => a.price - b.price);
                    break;
                case 'price-high':
                    filteredProducts.sort((a, b) => b.price - a.price);
                    break;
                case 'newest':
                    filteredProducts.sort((a, b) => b.id - a.id);
                    break;
            }

            renderProducts(filteredProducts);
        }

        // Render products to grid
        function renderProducts(productsToShow) {
            productGrid.innerHTML = productsToShow.map(product => `
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <div class="product-info">
                        <div class="product-category">${product.category}</div>
                        <h3 class="product-name">${product.name}</h3>
                        <div class="product-price">
                            Rp ${product.price.toLocaleString('id-ID')}/kg
                        </div>
                        <div class="product-meta">
                            <div class="product-location">
                                <i class="fas fa-map-marker-alt"></i>
                                ${product.location}
                            </div>
                            <div>Terjual: ${product.sold}</div>
                        </div>
                        <button class="buy-btn" onclick="handleBuy(${product.id})">
                            <i class="fas fa-shopping-cart"></i>
                            Beli Sekarang
                        </button>
                    </div>
                </div>
            `).join('');
        }

        // Event listeners
        searchInput.addEventListener('input', filterProducts);
        locationFilter.addEventListener('change', filterProducts);
        categoryFilter.addEventListener('change', filterProducts);
        sortFilter.addEventListener('change', filterProducts);

        // Handle buy action
        function handleBuy(productId) {
            const product = products.find(p => p.id === productId);
            if (product) {
                alert(`Anda akan membeli ${product.name} seharga Rp ${product.price.toLocaleString('id-ID')}/kg`);
            }
        }

        // Initialize
        renderProducts(products);