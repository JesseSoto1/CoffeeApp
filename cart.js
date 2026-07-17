let cart = JSON.parse(localStorage.getItem("cart")) || [];

const addButtons = document.querySelectorAll(".add-cart");

addButtons.forEach(button => {

    button.addEventListener("click", () => {

        const card = button.parentElement;

        const product = {
            name: card.dataset.name,
            price: Number(card.dataset.price)
        };

        // Add the product to the cart
        cart.push(product);

        // Save the updated cart to localStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        alert(`${product.name} added to cart!`);

        console.log(cart);

    });

});

const buyButtons = document.querySelectorAll('.buy-now');

buyButtons.forEach(button => {

    button.addEventListener("click", () => {

        const card = button.parentElement;

        const product = {
            name: card.dataset.name,
            price: Number(card.dataset.price)
        };

        cart = [product];

        localStorage.setItem("cart", JSON.stringify(cart));

        window.location.href = "cart.html";

    });

});

const carts = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cart-items");

cart.forEach(product => {

    cartItems.innerHTML += `
        <p>${product.name} - $${product.price}</p>
    `;

});