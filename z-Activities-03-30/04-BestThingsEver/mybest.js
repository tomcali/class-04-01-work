// lazy boy recliner, massage, meditation, hot shower, 
// cheese fondue, hot coffee with cashew milk, 
// kitten falling asleep on my lap

// Core node package for reading and writing files
var fs = require("fs");

// This block of code will create a file called "movies.txt".
// It will then print "Inception, Die Hard" in the file
fs.writeFile("things.txt", "\nlazy boy recliner"  + "\nmassage" +
	"\nmeditation" + "\n"
	+ "\nhot shower"
	+ "\ncheese fondue"
	+ "\nhot coffee with cashew milk"
	+ "\nkitten falling asleep on my lap", function(err) {

  // If the code experiences any errors it will log the error to the console.
  if (err) {
    return console.log(err);
  }

  // Otherwise, it will print: "movies.txt was updated!"
  console.log("things.txt was updated!");

});