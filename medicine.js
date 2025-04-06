const cart = [];
const cartItemsEl = document.getElementById('cart-items');
const cartTotalEl = document.getElementById('cart-total');
const cartSidebar = document.getElementById('cart-sidebar');
const toggleCartBtn = document.getElementById('toggle-cart');

// Toggle cart visibility
toggleCartBtn.addEventListener('click', () => {
  cartSidebar.classList.toggle('active');
});

// Add item to cart
document.querySelectorAll('.add-btn').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.product-card');
    const name = card.querySelector('h4').innerText;
    const priceText = card.querySelector('.price').innerText.replace(/[^\d.]/g, '');
    const price = parseFloat(priceText);

    const item = { name, price };
    cart.push(item);
    updateCartUI();
  });
});

// Update sidebar content
function updateCartUI() {
  cartItemsEl.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItemsEl.appendChild(li);
    total += item.price;
  });

  cartTotalEl.textContent = total.toFixed(2);
}