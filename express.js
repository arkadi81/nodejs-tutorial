/*jslint node: true */
/*jshint esversion: 6 */
'use strict';

// Practice building a server and middleware using nodecore and express

var express = require("express");
var app = express();
var cors  = require("cors");
var bodyParser = require("body-parser"); // to get form info thats url encoded

var data = [
  // some mockup data
  { 
    name: "elephant",
    weight: 500
  },
  {
    name: "dog",
    weight: 30
  },
];
  


// here's some middleware
app.use(bodyParser.json()); // parsejson data
app.use(bodyParser.urlencoded({extended: false})); // false unless giant amounts of data, unlikely. 


//app.use(cors()); // allow cross origin resource sharing.
app.use(function(req,res,next) {
  // this is our middleware function - custom
  // each request function will have req, res, and next, which is the next thing which will
  // pipe - express will run through all app.use() instances in the order required.
  // the request will trickle down through all app.use() statements, until we return
  // a response
  console.log(`${req.method} request for '${req.url}'`); // log all resource request
  // unless we tell the thing to serve, we need to invoke next, to send it over to the
  console.log(`request body: ${JSON.stringify(req.body)}`);
  // next app use statement
  next(); // the app.use things are piped in the order they appear

});
app.use(express.static("./public")); // static file server

// setting up routes
app.get("/animals", function(req,res) { // add get route
  // express can dump json quickly and properly without header and content setup
  res.json(data);
  //res.send("penis");
});

app.post("/add", function(req,res) {
  // do some stuff due to post request here. the req.body will have all the data
  data.push(req.body); // req body was already parsed by middleware earlier!!
  res.json(data); // still in API, just respond with new data collection. front end will take care of how
  // it handles the api.
});

app.delete("/delete/:term", function(req,res) {
  // :term will be captured from the value of the route
  
  // reminder: filter functions for js arrays. the callback is 
  // called once for each of the terms in array

  // getting the term variable from: 
  /* ---------------- req.params.term -------------------*/

  data = data.filter(function(value) {
    // T/F
  });
});


app.listen(3000);
console.log("server running on 3000");

module.exports = app; // this is not needed, but if we export it, we can include it elsewhere!

// CORS allows cross domain requests