"use strict";

// TODO:
// Create a function called 'sayHello' that takes a parameter 'name'.
// When called, the function should log a message that says hello from the passed in name.

// TODO: Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.

(function () {
	var myNameIs = 'Jessica'; // TODO: Fill in your name here.

		function sayHello (name){
			console.log("Hello " + name + "!");

	var iffeVar = "I'm local to the IIFE.";
}

sayHello(myNameIs);

})();
// Don't modify the following line
// It generates a random number between 1 and 100 and stores it in random
(function () {
	var random = Math.floor((Math.random()*100)+1);

// TODO:
// Create a function called 'isOdd' that takes a number as a parameter.
// The function should use the ternary operator to log a message.
// The log should tell the number passed in and whether it is odd or not.

// TODO: Call the function 'isOdd' passing the variable 'random' as a parameter.


console.log("Random number is " + random.toString());



function isOdd(numberToTest){
	(numberToTest % 2 === 1) ? console.log("Number was odd") : console.log("Number was even");
}
var iffeVar = "I'm local to the IIFE.";
// function isOdd(numberToTest){
// 	if (numberToTest % 2 === 1) {
// 	console.log("Number was odd.");
// } else {
// 	console.log("Number was even.");
// }
// }
isOdd(random);

})();