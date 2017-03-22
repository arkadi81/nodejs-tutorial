/*jslint node: true */
/*jshint esversion: 6 */
'use strict';

// DEMO / PRACTICE WITH http module
// 2 flavours, http/ https

var https = require("https");
var fs = require("fs");

// this construction is called an OBJECT LITERAL
var options = {
  hostname: "en.wikipedia.org",
  port:443, // usually true for https
  path: "/wiki/Michael_Jordan",
  method: "GET"
};

//async
var req = https.request(options, function(res) { // SUPER IMPORTANT - THIS IS HOW WE HIT OTHER API ENDPOINTS!!!
  // the response is sent over as a stream!

  var body = "";
  console.log("response from server started");
  console.log(`status: ${res.statusCode}`);
  console.log("response headers: %j", res.headers); // %j for JSON

  res.setEncoding("UTF-8");

  res.once('data', function(chunk) {
    console.log(chunk);
  });

  res.on('data', function(chunk) {
    console.log(`-- chunk --${chunk.length}`);
    body += chunk;
  });

  res.on('end', function() {
    fs.writeFile('./michael_jordan.html', body, function(err) {
      if (err) {
        throw err;
      } 
      else
      {
        console.log("file's been downloaded");
      }
    });
  });

});

req.on("error", function(err) {
  console.log(`problem with request, ${err.message}`);
});

req.end(); // SUPER IMPORTANT!!