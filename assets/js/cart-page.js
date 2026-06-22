import { cart } from './cart.js';

$(document).ready(function() {
    const cartBody = $('#cartBody');
    const emptyState = $('#emptyState');
    const cartTable = $('#cartTable');
    const cartActions = $('#cartActions');
    const summaryPanel = $('#cartSummaryPanel');

    function renderCart() {
        const items = cart.items;
        cartBody.empty();

        if (items.length === 0) {
            cartTable.hide();
            cartActions.hide();
            summaryPanel.hide();
            emptyState.fadeIn();
            return;
        }

        emptyState.hide();
        cartTable.show();
        cartActions.show();
        summaryPanel.show();

        items.forEach((item, index) => {
            const tr = $(`
                <tr class="cart-row" data-id="${item.id}" data-color="${item.color}">
                    <td style="width: 120px;">
                        <img src="${item.image}" alt="${item.title}" class="cart-product-img">
                    </td>
                    <td>
                        <div class="cart-product-info">
                            <h4>${item.title}</h4>
                            <p>Color: ${item.color}</p>
                            <p>Price: ₹${item.price.toLocaleString('en-IN')}</p>
                        </div>
                    </td>
                    <td>
                        <div class="cart-qty">
                            <button class="qty-btn dec">-</button>
                            <input type="number" class="qty-input" value="${item.quantity}" min="1">
                            <button class="qty-btn inc">+</button>
                        </div>
                    </td>
                    <td style="font-weight: 600; font-size: 1.125rem;">
                        ₹${(item.price * item.quantity).toLocaleString('en-IN')}
                    </td>
                    <td style="text-align: right;">
                        <button class="cart-remove-btn" aria-label="Remove item"><i class="ph ph-trash"></i></button>
                    </td>
                </tr>
            `);

            // Event Listeners for this row
            tr.find('.inc').on('click', () => {
                cart.updateQuantity(item.id, item.color, item.quantity + 1);
                renderCart();
            });

            tr.find('.dec').on('click', () => {
                if (item.quantity > 1) {
                    cart.updateQuantity(item.id, item.color, item.quantity - 1);
                    renderCart();
                }
            });

            tr.find('.qty-input').on('change', function() {
                let val = parseInt($(this).val());
                if (val < 1 || isNaN(val)) val = 1;
                cart.updateQuantity(item.id, item.color, val);
                renderCart();
            });

            tr.find('.cart-remove-btn').on('click', function() {
                // GSAP remove animation
                if (typeof gsap !== 'undefined') {
                    gsap.to(tr, {
                        opacity: 0,
                        x: 50,
                        duration: 0.3,
                        onComplete: () => {
                            cart.removeFromCart(item.id, item.color);
                            renderCart();
                        }
                    });
                } else {
                    cart.removeFromCart(item.id, item.color);
                    renderCart();
                }
            });

            cartBody.append(tr);
        });

        // GSAP List Reveal
        if (typeof gsap !== 'undefined' && items.length > 0) {
            gsap.from('.cart-row', { opacity: 0, y: 20, duration: 0.4, stagger: 0.1, ease: 'power2.out', clearProps: 'all' });
        }

        updateSummary();
    }

    function updateSummary() {
        const totals = cart.getTotals();
        $('#summarySubtotal').text('₹' + totals.subtotal.toLocaleString('en-IN'));
        $('#summaryShipping').text(totals.shipping === 0 ? 'Free' : '₹' + totals.shipping.toLocaleString('en-IN'));
        $('#summaryTax').text('₹' + totals.tax.toLocaleString('en-IN', { maximumFractionDigits: 0 }));
        $('#summaryTotal').text('₹' + totals.grandTotal.toLocaleString('en-IN'));
    }

    $('#clearCartBtn').on('click', () => {
        if(confirm('Are you sure you want to clear your cart?')) {
            cart.clearCart();
            renderCart();
        }
    });

    // Listen to global cart updates (in case multiple tabs are open)
    window.addEventListener('cartUpdated', () => {
        renderCart();
    });

    // Initial render
    renderCart();
});
