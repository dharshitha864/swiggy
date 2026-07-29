const buttons = document.querySelectorAll(".restaurant-card button");

buttons.forEach(button => {

button.addEventListener("click", function(){

window.location.href="menu.html";

});

});

function searchFood(){

let food=document.getElementById("searchInput").value;

document.getElementById("result").innerHTML="You searched for : "+food;

}