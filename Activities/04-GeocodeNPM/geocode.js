// Instructions: 
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format. 

// ========================================================================================================================

// Include the geocoder NPM package (Remember to run "npm install geocoder"!)

var geocoder = require('geocoder');
 
// Geocoding 
geocoder.geocode("LosAngeles, CA", function ( err, data ) {
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
  
  console.log('----- complete response data -----');
  console.log(data);
  console.log('----- typeof response -----');
  console.log(typeof(data)); // looks like JSON object
  console.log('----- list as JSON -----');
  console.log(JSON.stringify(data, null, 2));
  console.log('----- dig into JSON object for location -----');
  console.log('----- typeof results -----');
  console.log(typeof(data.results)); // works this way
  console.log('----- look at results[0] -----');
  console.log(data.results[0]); // works this way
  console.log('----- look at results[0].geometry -----');
  console.log(data.results[0].geometry); // works this way
  console.log('----- look at results[0].geometry.location -----');
  console.log(data.results[0].geometry.location); // works this way
  var latitude = data.results[0].geometry.location.lat;
  console.log('Latitude: ', latitude);
  var longitude = data.results[0].geometry.location.lng;
  console.log('Longitude: ', longitude);


  console.log(typeof(data.results.geometry));


  // console.log(data.results.geometry);


  // console.log(data.results.geometry);



  // console.log(JSON.stringify(data, null, 2));

});


// Take in the command line arguments




// Build your address as an array or string

// geocode.js (04-GeocodeNPM > UNSOLVED)
// Instructions:

// Create a Node application which makes use of the "geocoder" NPM package to obtain detailed geocoding information about a location.

// Then console.log the geocoding information to display in your terminal.

// You can choose to make one of two assumptions 
// when completing this application.

// Easier Option: The user will always provide 
// a location in the following format: "City, State" (example: "Atlanta, GA", "Houston, TX").

// Harder Option: The user can provide a location 
// in any format. In fact, they can even provide a landmark instead of an address. ("151 Sip Ave, Jersey City NJ", "The Eiffel Tower", etc.)

// Remember to log the output using JSON.stringify 
// in a pretty-print format.


// Then use Geocoder NPM to geocode the address
