var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomNumber = Math.floor(100000 + Math.random() * 900000);
var randomNumber2 = Math.floor(100000 + Math.random() * 900000);
var button = document.querySelector(".btn");

color1.value = "#" + randomNumber;
color2.value = "#" + randomNumber2;

function setGradient() {
	body.style.background =
	"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

//RNG that always generates 6 numbers
//Has limitations in colors but this is the best I can do for now
button.onclick = function() {
	var randomNumber = Math.floor(100000 + Math.random() * 900000);
	var randomNumber2 = Math.floor(100000 + Math.random() * 900000);
	color1.value = "#" + randomNumber;
	color2.value = "#" + randomNumber2;
	setGradient();
}

//To start with a random color
setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);