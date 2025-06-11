// Add product to cart
function addToCart(productName, price) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ productName, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${productName} added to cart!`);
}

// Display cart items
function displayCart() {
  const cartContainer = document.getElementById("cart-items");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cartContainer.innerHTML = "";
  cart.forEach((item, index) => {
    total += item.price;
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <p>${item.productName} - ₹${item.price}</p>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartContainer.appendChild(div);
  });

  const totalDiv = document.createElement("p");
  totalDiv.innerHTML = `<strong>Total:</strong> ₹${total}`;
  cartContainer.appendChild(totalDiv);

  // Add "Place Order" button
  const orderButton = document.createElement("button");
  orderButton.textContent = "Place Order";
  orderButton.onclick = placeOrder;
  cartContainer.appendChild(orderButton);
}

// Remove product from cart
function removeFromCart(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

// Place Order function
function placeOrder() {
  localStorage.removeItem("cart");
  alert("Order placed successfully!");
  displayCart(); // Refresh the cart view
}

