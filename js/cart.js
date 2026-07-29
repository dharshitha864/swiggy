const cartButtons = document.querySelectorAll(".restaurant-card button");

cartButtons.forEach(button => {

button.addEventListener("click", function(){

alert("Item Added to Cart");

});

});