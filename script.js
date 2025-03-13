document.addEventListener("DOMContentLoaded", () => {
    const cartKey = "cart";
    const buttons = document.querySelectorAll("main button");
    const cartContainer = document.querySelector("#kundvagn ul");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            let cart = JSON.parse(localStorage.getItem(cartKey)) || [];
            const productDiv = button.parentElement;
            cart.push({
                name: productDiv.querySelector("h3").innerText,
                price: productDiv.querySelector("p").innerText,
                image: productDiv.querySelector("img").src
            });
            localStorage.setItem(cartKey, JSON.stringify(cart));
        });
    });

    if (cartContainer) {
        const cart = JSON.parse(localStorage.getItem(cartKey)) || [];
        cartContainer.innerHTML = cart.map(product => 
            `<li><img src="${product.image}" width="50"> ${product.name} - ${product.price}</li>`
        ).join("");
    }
});