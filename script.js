document.addEventListener("DOMContentLoaded", () => {
    const cartKey = "cart";
    const buttons = document.querySelectorAll("main button");
    const cartContainers = document.querySelectorAll("#kundvagn ul, #kundvagn-lista");

    function updateCartDisplay() {
        const cart = JSON.parse(localStorage.getItem(cartKey)) || [];
        cartContainers.forEach(container => {
            if (container) {
                container.innerHTML = cart.map(product => 
                    `<li><img src="${product.image}" width="50"> ${product.name} - ${product.price}</li>`
                ).join("");
            }
        });
    }

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
            updateCartDisplay();
        });
    });

    updateCartDisplay();
});
