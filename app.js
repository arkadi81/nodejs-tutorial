/*jslint node: true */
/*jshint esversion: 6 */
'use strict';

/** An exercise in modelling / designing an api using node and express 
* from scratch
*/
var app = require("express")();
var f = require("./functions.js");

// // app.listen(3000, function() {
//   console.log('listening on 3000');
// });

// apis are built of endpoints, which are built with routes

app.get('/', function(req,res) {
  // this is a callback
  // always req res on callback endpoints
  // req res is the callback /async idea
  res.send('hi');

});



// var user = f.getFlag("--user");
// var msg = (user === null) ? "no user defined" : `welcome ${user}`;
// console.log(msg);

