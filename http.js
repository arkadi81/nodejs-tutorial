/*jslint node: true */
/*jshint esversion: 6 */
'use strict';

// DEMO / PRACTICE WITH http server


//var http = require("http");
var server = require("http").createServer(function(req, res) {
  // the callback is raised every time our server is hit
  // we get the request with all the info, and an empty response, which we need to fill up
  res.writeHead(200, {"Content-Type":"text/html"}); // fill in headers
  res.end("hello world");


  // serving JSON
  var data = "some json data";
  res.writeHead(200, {"content-type": "text/json"});
  res.end(JSON.stringify(data)); 

  // use fs.createReadStream("path","UTF-8").pipe(res) to instantly stream stuff to client
  // req.method gives get/post/etc
  // we can check req.method to decide how to act and route


}).listen(3000);

console.log('server listening on port 3000');

// browser requests are always get requests

// if we don't define routes, all routes are handled by the exact same callback function
//req.url gives url of requrst
// regex: req.url.match(/.css$/) checks if the thing ends in .css
//stream.pipe(res) allows to sendoff stuff to the requester

// serving JSON allows us to create an API
// any entity which is able to make an http request can use said api.

// serving json:

// function that's a predicate: only returns true or false
var arr = [];
var newArr = arr.filter(function(item) {
  return item.avail === "in stock";
});

// we can use this model to build individual functions which will respond with
// filtered data
// function filteredData(res) {
  // filter through res here, itll get passed back to the server
//}

// then add a route which will activate that function and filter through res

// --save flag adds to package.json
// cross domain resources sharing = CORS opens our api for access from other domains
// body-parser helps parse form variables