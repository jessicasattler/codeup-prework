"use strict";

// Don't change the next two lines!
// These create two variables for you:
//     one with the colors of the rainbow
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

var favorite = 'violet'; // TODO: change this to your favorite color from the list

// TODO: Create a block of if/else statements to check for every color except indigo and violet.

// TODO: In the else, log: I do not know anything by that color.


if (color === 'red') {
	console.log("Apples are red.");

} else if (color === 'orange') {
	console.log("Oranges are orange.");

} else if (color === 'yellow') {
	console.log("Bananas are yellow.");

} else if (color === 'green') {
	console.log ("Pears are green.");

} else if (color === 'blue') {
	console.log ("The ocean is blue.");

} else { 
	console.log ("I don't know anything about that color.");

}

// (condition) ? when true : when false;
(color === favorite) ? console.log(color + "is my favorite color!") : console.log(color + " is not my favorite color.");


// TODO: Using the ternary operator, conditionally log a statement that
//       says whether the random color matches your favorite color.




