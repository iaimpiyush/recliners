import { cart } from './cart.js';

$(document).ready(function() {
    // Initialize cart badge
    $('#cartBadge').text(cart.getCartCount());

    window.addEventListener('cartUpdated', (e) => {
        $('#cartBadge').text(e.detail.count);
        // GSAP pop animation on badge update
        if (typeof gsap !== 'undefined') {
            gsap.fromTo('#cartBadge', 
                { scale: 1.5, backgroundColor: '#ffffff', color: '#F38D36' },
                { scale: 1, backgroundColor: '#F38D36', color: '#ffffff', duration: 0.5, ease: 'back.out(1.7)' }
            );
        }
    });
});
