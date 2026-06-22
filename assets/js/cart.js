export class CartSystem {
    constructor() {
        this.storageKey = 'amber_recliners_cart';
        this.items = this.loadCart();
    }

    loadCart() {
        const stored = localStorage.getItem(this.storageKey);
        return stored ? JSON.parse(stored) : [];
    }

    saveCart() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.items));
        this.dispatchCartUpdate();
    }

    addToCart(product, quantity = 1, color = null) {
        const existingItemIndex = this.items.findIndex(
            item => item.id === product.id && item.color === color
        );

        if (existingItemIndex > -1) {
            this.items[existingItemIndex].quantity += quantity;
        } else {
            this.items.push({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.images.main,
                color: color || product.colors[0],
                quantity: quantity
            });
        }

        this.saveCart();
    }

    removeFromCart(id, color) {
        this.items = this.items.filter(item => !(item.id === id && item.color === color));
        this.saveCart();
    }

    updateQuantity(id, color, quantity) {
        const item = this.items.find(item => item.id === id && item.color === color);
        if (item) {
            item.quantity = Math.max(1, quantity);
            this.saveCart();
        }
    }

    clearCart() {
        this.items = [];
        this.saveCart();
    }

    getTotals() {
        const subtotal = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        // Assuming free shipping above a threshold, flat rate otherwise.
        const shipping = subtotal > 100000 ? 0 : 5000;
        // Mock 18% GST calculation included in price (if we want to extract it) or added.
        // For simplicity, let's assume price is base price and GST is added, or price is inclusive.
        // Let's assume price is inclusive, so we just calculate tax as a breakdown.
        const tax = subtotal - (subtotal / 1.18); 
        
        return {
            subtotal: subtotal,
            shipping: shipping,
            tax: tax,
            grandTotal: subtotal + shipping
        };
    }

    getCartCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }

    dispatchCartUpdate() {
        const event = new CustomEvent('cartUpdated', {
            detail: { count: this.getCartCount(), totals: this.getTotals() }
        });
        window.dispatchEvent(event);
    }
}

// Export a singleton instance
export const cart = new CartSystem();
