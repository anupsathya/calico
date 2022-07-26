var speedx;

function formChanged()
{
window.speedx = document.getElementsByName("speed")[0].value;
console.log(speedx);
}

var red = document.getElementById("Red");
var green = document.getElementById("Green");
var blue = document.getElementById("Blue");

// red.oninput = function() {
// 	UART.write(`rgbLed(${this.value},${green.value},${blue.value});\n`);
// 	console.log(this.value);
// 	console.log(green.value);
// 	console.log(blue.value);
// }

// green.oninput = function() {
// 	UART.write(`rgbLed(${red.value},${this.value},${blue.value});\n`);
// 	console.log(red.value);
// 	console.log(this.value);
// 	console.log(blue.value);
// }

// blue.oninput = function() {
// 	UART.write(`rgbLed(${red.value},${green.value},${this.value});\n`);
// 	console.log(red.value);
// 	console.log(green.value);
// 	console.log(this.value);
// }

function rgb() {
	UART.write(`rgbLed(${red.value},${green.value},${blue.value});\n`);
	console.log(red.value);
	console.log(green.value);
	console.log(blue.value);
}