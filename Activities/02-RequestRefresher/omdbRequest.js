// Basic Node application for requesting data from the OMDB website
// Here we incorporate the "request" npm package
var request = require("request");

// using the imdb API a la a callback function
// callback only executes after the first process finishes
// note that there are query parameters after ?
// key-value pairs in the query parameters are used
// by the API server to satisfy the request
// there is the response and part of the response is the body
// we just want certain portions of the full response
// the data in this case is the body of the response
// the request is a wrapper around the API request
// !error... when there is not an error then do normal processing
// The response is a string that we then parse into a JSON object
// We then run the request module on a URL with a JSON
request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&r=json", 
	    function(error, response, body) {

  // If there were no errors and the response code was 200 
  // (i.e. the request was successful)...
  if (!error && response.statusCode === 200) {

    // Then we print out the imdbRating
    console.log("The movie's rating is: " + JSON.parse(body).imdbRating);

  var jsonString = body; //'{"some":"json"}';
  var jsonPretty = JSON.stringify(JSON.parse(jsonString),null,2); 
  console.log(jsonPretty); 

  }
});
