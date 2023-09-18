
const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");
close.addEventListener("click", () => {
  menu.style.visibility = "hidden";
});
open.addEventListener("click", () => {
  menu.style.visibility = "visible";
});




document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const cartItemsList = document.querySelector(".cart-items");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const product = this.parentElement;
      const productName = product.querySelector("h2").textContent;
      const cartItem = document.createElement("li");
      cartItem.textContent = productName;
      cartItemsList.appendChild(cartItem);
    });
  });
});



