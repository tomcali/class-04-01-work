// mybestagain.js


var z = 'lazy boy recliner, massage, meditation, hot shower, cheese fondue, hot coffee with cashew milk, kitten falling asleep on my lap';

var zOut = z.split(',');

var yOut = [];
for (i = 0; i < zOut.length; i++) {
  yOut[i] = zOut[i].trim();  // romove white space
}

console.log(yOut); // log directly after split

// Core node package for reading and writing files
var fs = require("fs");

fs.writeFile('thingsagain.txt', yOut, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

  // Otherwise, it will print: "movies.txt was updated!"
  console.log("thingsagain.txt was updated!");





