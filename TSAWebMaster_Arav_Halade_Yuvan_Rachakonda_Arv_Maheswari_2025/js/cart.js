class Cart {
    constructor() {
        this.items = [];
        this.total = 0;
        this.init();
    }

    init() {
        // Initialize cart from localStorage if exists
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            this.items = JSON.parse(savedCart);
            this.updateTotal();
        }
        this.bindEvents();
    }

    bindEvents() {
        // Add to cart button clicks
        document.querySelectorAll('.cart-icon').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const itemId = btn.closest('.menu-card').dataset.itemId;
                this.showAddToCartModal(itemId);
            });
        });
    }

    addItem(item) {
        this.items.push(item);
        this.updateTotal();
        this.saveCart();
        this.updateUI();
        this.showNotification('Item added to cart!');
    }

    updateTotal() {
        this.total = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }

    updateUI() {
        // Update cart badge
        const badge = document.querySelector('.cart-badge');
        const itemCount = this.items.reduce((sum, item) => sum + item.quantity, 0);
        badge.textContent = itemCount;
        badge.style.display = itemCount > 0 ? 'flex' : 'none';

        // Update dropdown
        this.updateDropdown();
    }

    showNotification(message) {
        // Create and show toast notification
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }
}

// Initialize cart
const cart = new Cart(); 