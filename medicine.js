// Cart Logic
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartItemsList = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');

let cart = [];

function updateCartUI() {
  cartItemsList.innerHTML = '';
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item} `;
    cartItemsList.appendChild(li);
  });
  cartCount.textContent = cart.length;
}

function addToCart(productName) {
  cart.push(productName);
  updateCartUI();
}

function toggleCartSidebar() {
  cartSidebar.classList.toggle('active');
}

// Event Listeners
document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    const product = btn.getAttribute('data-product');
    addToCart(product);
  });
});

cartBtn.addEventListener('click', () => {
  window.location.href = 'cart.html'; // Redirects to the cart page
});


  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  setInterval(showNextSlide, 3000); // Change slide every 3 seconds


  // Initialize cart count on load
  document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
  });

  function addToCart(productName) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if product already in cart
    const existingItem = cart.find(item => item.name === productName);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ name: productName, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(`${productName} added to cart!`);
  }

  function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById("cart-count").innerText = totalItems;
  }
  function uploadPrescription() {
    const fileInput = document.getElementById('prescriptionInput');
    const status = document.getElementById('uploadStatus');
  
    if (fileInput.files.length === 0) {
      status.textContent = "Please select a file to upload.";
      status.style.color = "red";
    } else {
      const fileName = fileInput.files[0].name;
      // Simulate upload
      status.textContent = `Prescription "${fileName}" uploaded successfully.`;
      status.style.color = "green";
    }
  }
  // let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(productName, price) {
  const existing = cart.find(item => item.name === productName);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ name: productName, price: price, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${productName} added to cart!`);
}


