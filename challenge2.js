console.log("challenge2.js running");

let img1 = document.getElementById("fine");
console.log(img1);

img1.addEventListener("mouseover", function(event){
  console.log("on image");
  img1.src = "not-fine.gif"
});

img1.addEventListener("mouseout", function(event){
  console.log("off image");
  img1.src = "fine.gif"
});