var _ = require('lodash')

var array = [2, 3, 5, 7, 11]
console.log(_.without(array, 5));


var cssCode = document.querySelector("h3");
var color1 = document.querySelector(".first-color");
var color2 = document.querySelector(".second-color");
var body = document.getElementById("gradient");
var textGradient = document.getElementById(".text-gradient");

function setColor() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    cssCode.textContent = body.style.background + ";";
};

setColor();
color1.addEventListener("input", setColor);
color2.addEventListener("input", setColor);