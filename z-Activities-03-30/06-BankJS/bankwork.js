// 1, 2.33, 4.23, -2, -2, -.25, 5, 10, 5

// bank.txt (6-BankJS > UNSOLVED)
// Instructions:

// Starting from scratch, build a Node application 
// called bank.js which allows takes in user inputs 
// via the command line to register bank transactions.

// The transactions possible are:

// total - this should tally up all 
// of the money in the bank balance and display it for the user.

// deposit <number> - this should add a 
// positive amount to the bank balance. 
// (No need to display the total here)

// withdraw <number> - this should add a 
// negative amount to the bank balance. 
// (No need to display the total here)

// lotto - this should subtract an amount 
// from the bank balance, but if a random 
// number is hit it should add back a larger 
// amount into the bank balance.

// For all deposits, withdrawals, or lotto 
// purchases the transaction should be registered in the bank.txt file.

// HINT: Consider making a series of if-then 
// or switch-case statements to identify the 
// "type" of transaction and the "amount" involved (if relevant).

// Bonus: If you finish early, consider finding 
// creative ways to expand the functionality. 
// Perhaps add a login, perhaps always provide 
// the total, perhaps add a warning if the user 
// tries to withdraw more than they hold, etc.

// -----------------------------------------------------
// fs is an NPM package for reading and writing files
var bankFile = 'bank.txt';

var balance = 0.0; // initialize bank balance

var fs = require("fs");

// This block of code will read from the "movies.txt" file.
// It's important to include the "utf8" parameter or the code will provide stream data (garbage)
// The code will store the contents of the reading inside the variable "data"
var fs = require('fs');
fs.readFile(bankFile, "utf8", function(err, data) {
    if(err) throw err;
    var dataArr = data.toString().split("\n");
    balance = 0.0;
    for(i in dataArr) {
        console.log(dataArr[i]);
        balance = balance + dataArr[i];
    }
    console.log('check dataArr: ', dataArr);
    console.log('dataArr type: ', typeof(dataArr));
    console.log('bank balance: ', balance);
});



var operation = process.argv[2];
var amount = process.argv[3];

switch(operation) {
  case 'deposit':
    console.log('deposit: ', amount);
    console.log('appending to ', bankFile);
    fs.appendFile(bankFile, '\n' + amount, function(err) {
  // If the code experiences any errors it will log the error to the console.
       if (err) {
         return console.log(err);
       }
  // Otherwise, it will print: "movies.txt was updated!"
  console.log("things.txt was updated!");
});
    break;
  case 'withdrawal':
    console.log('withdraw: ', amount);
    break;
  case 'lotto':
    console.log('bet amount on lotto: ', amount);
    break;
}



