"use strict";

// TODO: Ask the user for their name.
	console.log("Before prompt...");
	var userName = prompt("What is your name?");
//       Keep asking if an empty input is provided.
	while (userName === ""){
		userName = prompt("What is your name?");
	}

// TODO: Show an alert message that welcomes the user based on their input.
	alert(userName + ", you say? What a beautiful name you have! ");
	console.log("After prompt...");
// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.
var pizzaFeelings = confirm("Do you like pizza?");
  if (pizzaFeelings) {
  	console.log("User clicked okay.");
}	else
	console.log("User clicked cancel.");

	if (pizzaFeelings){
		alert("Great, I like pizza too.");
	} else{
		alert("Really? How come you don't like pizza?");
	}