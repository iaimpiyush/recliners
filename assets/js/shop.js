import { products } from './data.js';

$(document).ready(function() {
    const grid = $('#productGrid');
    const countDisplay = $('#count');
    const categoryRadios = $('input[name="category"]');
    const priceRange = $('#priceRange');
    const priceLabel = $('#priceLabel');
    const sortSelect = $('#sortSelect');

    let currentCategory = 'All';
    let currentMaxPrice = 200000;
    let currentSort = 'featured';

    function renderProducts() {
        // Filter
        let filtered = products.filter(p => {
            const catMatch = currentCategory === 'All' || p.category === currentCategory;
            const priceMatch = p.price <= currentMaxPrice;
            return catMatch && priceMatch;
        });

        // Sort
        if (currentSort === 'priceLow') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (currentSort === 'priceHigh') {
            filtered.sort((a, b) => b.price - a.price);
        } // 'featured' keeps original order mostly, could sort by isBestSeller

        // Render
        grid.empty();
        countDisplay.text(filtered.length);

        if (filtered.length === 0) {
            grid.html('<p style="grid-column: 1/-1; text-align: center; color: var(--text-gray);">No products found matching your criteria.</p>');
            return;
        }

        filtered.forEach((p, index) => {
            const card = $(`
                <div class="product-card" style="opacity: 0;">
                    <div class="product-image">
                        <img src="${p.images.main}" alt="${p.title}">
                        <div class="product-overlay">
                            <a href="product.html?id=${p.id}" class="btn btn-primary btn-sm">View Details</a>
                        </div>
                    </div>
                    <div class="product-info">
                        <h3>${p.title}</h3>
                        <p>${p.category}</p>
                        <div style="font-weight: 600; color: var(--text-dark); margin-bottom: 16px;">₹${p.price.toLocaleString('en-IN')}</div>
                    </div>
                </div>
            `);
            grid.append(card);
        });

        // GSAP Animation
        if (typeof gsap !== 'undefined') {
            gsap.to('.product-card', {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power2.out',
                clearProps: 'all' // Cleanup inline styles after animation
            });
        } else {
            $('.product-card').css('opacity', 1);
        }
    }

    // Event Listeners
    categoryRadios.on('change', function() {
        currentCategory = $(this).val();
        renderProducts();
    });

    priceRange.on('input', function() {
        currentMaxPrice = parseInt($(this).val());
        priceLabel.text('₹' + currentMaxPrice.toLocaleString('en-IN'));
    });

    priceRange.on('change', function() {
        renderProducts();
    });

    sortSelect.on('change', function() {
        currentSort = $(this).val();
        renderProducts();
    });

    // Initial Render
    renderProducts();
});
