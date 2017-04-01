// Here we include the geo-js so we can use it in our Node application.
var geo = require("geo-js");

// Then we use the package to search for the geo at a location
// geo.find({ search: "LosAngeles, CA", degreeType: "F" }, 
//	function(err, result) {

var geocoder = require('geocoder');
 
// Geocoding 
geocoder.geocode("Atlanta, GA", function ( err, data ) {
  // do something with data 


  // If there is an error log it.
  if (err) {
    console.log(err);
  }

// this gives a JSON object as its response... not a JSON string
// But to get a nice lising we need to stringify

  // If there is no error... then print out the geo data.
  // We use JSON.stringify to print the data in string format.
  // We use the JSON.stringify argument of "2" to make the format pretty.
  // See link here: http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
  
  console.log(data);
  // console.log(JSON.stringify(data, null, 2));

});