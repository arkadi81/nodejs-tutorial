
/*jslint node: true */
/*jshint esversion: 6 */
'use strict';

// practice with streams, used to handle large amounts of data, async
// stdio uses stream for its implementation
// streams can help a ton with performance and non blocking bottleneck

var fs = require("fs");
var path = require("path");

// streams can be readable/writable/duplex(both), they can work both binary and utf8

fs.readFile("./longass-file.js", "UTF-8", function(err,contents) {
  // async. note, if file big, callback will only be invoked when the entire contents of file
  // have been read
  // will buffer entire file into a single variable. could have a massive impact on performance

});

// --------------------READABLE FILESTREAM ---------------------

var stream = fs.createReadStream("./longass-file.js","UTF-8");
// this guy will be recieving small chunks of data at a time, async
var data = "";

stream.once('data', function() {
  // first time data event is raised. will fire first time only.
});
stream.on('data', function(chunk) {
  //every time
  // will be raised not at the very end, but every time we get a new tiny chunk of info
});

stream.on('end', function() {
  // end event only
  // on end of stream
});

// ----------------------- WRITABLE FILESTREAM------------------------

var writeStream = fs.createWriteStream("./longass-file.js");
stream.write("stuff"); // does not close automatically
// the mode is natively append, if we keep writing things get appended.
stream.close(); // done