// Starting from a blank JavaScript file, 
// create a Node application that takes 
// in two command line arguments and checks 
// if they are equal. 
	// If the two numbers are equal then output: "true". 
// Otherwise output: "false".

// Bonus: Check if the two numbers are both multiples of 7. 
// Again output "true" if they are and output "false" if they are not.

Hint: console.log(process.argv) as a starting point if you are completely lost.


var x = process.argv[2];
var y = process.argv[3];

console.log(x === y);  // output true if equal

console.log(((x % 7) === 0) && ((y % 7) === 0)); // both divisible by 7

// consider possibilities for parseFloat