console.log("script.js running");

let button = document.querySelector("#lowerCaseButton");
console.log(button);

let h1 = document.getElementById("hello");
console.log(h1);

button.addEventListener("click", function(event){
  console.log("lowercase clicked") ;
  h1.textContent = "hello there"
})

let button1 = document.querySelector("#upperCaseButton");
console.log(button1);

button1.addEventListener("click", function(event){
  console.log("uppercase clicked") ;
  h1.textContent = "HELLO THERE";
})