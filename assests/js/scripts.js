const form = document.querySelector("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const number = document.getElementById("number");
const password = document.getElementById("password");



// show error message 
function showError(input, message){
let small= document.querySelector(".small");
small.innerHTML=message;
}

//event listner

