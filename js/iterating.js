(function(){
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.

    	var names = ["Whitney","Jessica","Leonardo","Rafael","Sofia"];
    // TODO: Create a log statement that will log the number of elements in the names array.
    	console.log ("There are " + names.length + " names in this array.");
    // TODO: Create log statements that will print each of the names array elements individually.
    	console.log ("The first name in this array is " + names [0]);
    	console.log ("The second name in this array is "+ names[1]);
    	console.log ("The third name in this array is " + names [2]);
    	console.log ("The fourth name in this array is " + names[3]);
    	console.log ("The fifth name in this array is " + names[4]);

})();
 
(function(){
	"use strict";

	var names = ['Whitney','Jessica','Leonardo','Rafael','Sofia'];

	//For Loop

	for (var i = 0; i < names.length; i++) {
		console.log('The name at index ' + i + " is: " + names[i]);
	}

	//For-Each Function

	names.forEach(function (element, index, array) {

		//element is the name
		//index is the iterator
		//array is the name array itself

		console.log('The name at index ' + index + ' is: ' + element);

	});


})();

