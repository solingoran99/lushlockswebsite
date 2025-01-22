
const services = [
    {
        name: "Haircut",
        image: "images/haircut-logo.jpeg",
        price: 300
    },
    {
        name: "Hair Coloring",
        image: "images/hair-coloring.jpeg",
        price: 500
    },
    {
        name: "Blowout",
        image: "images/blowout.jpeg",
        price: 250
    },
    {
        name: "Highlights",
        image: "images/highlights.jpeg",
        price: 400
    }
];

if (services.length === 0) {
    console.error("No services defined");
}

function renderServices() {
    const serviceList = document.getElementById("service-list");

    if (!serviceList) {
        console.error("Service list container not found");
        return;
    }

    services.forEach((service, index) => {
        const serviceDiv = document.createElement("div");
        serviceDiv.classList.add("service-item");
        serviceDiv.innerHTML = `
            <img src="${service.image}" alt="${service.name}" class="service-image">
            <h3>${service.name}</h3>
            <p>Price: ${service.price}kr</p>
            <button onclick="addToCart(${index})">Add to Cart</button>
        `;
        serviceList.appendChild(serviceDiv);
    });
}

let cart = [];

function addToCart(serviceIndex) {
    if (services[serviceIndex]) {
        const service = services[serviceIndex];
        cart.push(service);
        renderCart();
    } else {
        console.error("Service not found for index", serviceIndex);
    }
}


function renderCart() {
    const cartItems = document.getElementById("cart-items");
    if (!cartItems) {
        console.error("Cart items container not found");
        return;
    }

    cartItems.innerHTML = ''; 

    cart.forEach((item, index) => {
        const cartItem = document.createElement("li");
        cartItem.innerHTML = `${item.name} - ${item.price} <button onclick="removeFromCart(${index})">Remove</button>`;
        cartItems.appendChild(cartItem);
    });
}

function removeFromCart(itemIndex) {
    if (cart[itemIndex]) {
        cart.splice(itemIndex, 1);
        renderCart();
    } else {
        console.error("Item not found in cart for index", itemIndex);
    }
}

function checkout() {
    alert("Proceeding to checkout with " + cart.length + " item(s).");
}

window.onload = function() {
    try {
        renderServices();
    } catch (error) {
        console.error("Error rendering services:", error);
    }
};
