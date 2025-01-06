// Create a product data structure
const products = [
    {
      id: 1,
      name: "Oracare Tooth-Paste",
      price: 10.99,
      description: "Oracare Tooth-Paste description"
    },
    {
      id: 2,
      name: "FiZZ Detergent",
      price: 9.99,
      description: "FiZZ Detergent description"
    },
    {
      id: 3,
      name: "Biotol Bathing-Soap",
      price: 12.99,
      description: "Biotol Bathing-Soap description"
    }
  ];
  
  // Create a shopping cart
  const cart = [];
  
  // Add event listeners to product buttons
  document.querySelectorAll(".pro_box").forEach((box) => {
    box.addEventListener("click", (e) => {
      // Get the product ID
      const productId = e.target.dataset.productId;
  
      // Add product to cart
      cart.push(products.find((product) => product.id === parseInt(productId)));
   
      // Update cart display
      updateCartDisplay();
    });
  });
  
  // Update cart display
  function updateCartDisplay() {
    const cartHtml = cart.map((product) => {
      return `
        <div>
          <h3>${product.name}</h3>
          <p>Price: $${product.price}</p>
          <button class="remove-from-cart">Remove</button>
        </div>
      `;
    }).join("");
  
    document.getElementById("shopping-cart").innerHTML = cartHtml;
  }
  
  // Add event listener to checkout button
  document.getElementById("checkout-btn").addEventListener("click", () => {
    // Process payment and update order status
    // ...
  });