/*jslint node: true */
/*jshint esversion: 6 */
'use strict';

// using core node modules
// path, util, v8, readLine
// readline is a wrapper for input and output, 

var path = require("path");
var util = require("util");
var v8 = require("v8"); // google chrome memory module
var readLine = require("readline");

//stdio will handle readline communication interface
var rl = readLine.createInterface(process.stdin, process.stdout);
rl.question("what is your name?", function(answer) {
  var name = answer;
  //util.log(answer);
  //async will go forever
  rl.setPrompt(`what does ${name} like`);
  rl.prompt();

  rl.on('line', function(txt) {
    // rl.on('line', ) will fire as we get a line of input!!
    // will keep going forever
    if (txt.toLowerCase() === 'exit') {
      rl.close(); // our closing trigger
    } 
    else 
    { 
      console.log('ok what else');
    }

  });

  rl.on('close', function() {
    console.log("%s is a string", "hi ");
  });
});

// util.log(path.basename(__filename));

// // convenient way for joining paths
// var dirUploads = path.join(__dirname, "www" , "files", "uploads");

// //console.log(dirUploads);
// util.log(dirUploads); // util.log will add datetime stamp;

// util.log(v8.getHeapStatistics());

/// EVENT HANDLERS CAN CASCAde (rl.on('close'), can trigger process.exit
// which can be handled by process.on('exit', f)) etc