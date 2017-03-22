/*jslint node: true */
/*jshint esversion: 6 */
'use strict';

/**
*  USING STD IN AND OUT-- and process control------------------------------------
*/

// process.stdout.write("hello "); // no automatic new lines
// process.stdout.write("hello \n\n\n"); // manual new lines

// var input;
// listen to input, call the input event data, return with callback
// data will be triggered
// process.stdin.on('data', function(data) { // data IS KEYWORD, indicating there's input from console
//   // fire when data is sent
//   input = data.toString().trim();
//   process.stdout.write('\n got some data: ' + input +'\n');

//   process.exit(); // will kill process

//   // THIS ASYNC EVENT WILL KEEP GOING AS LONG AS WE LET IT
// });


process.on('exit', function() {
  // exit is keyword. triggered when process exits
  // listen for exit events using handler  
  process.stdout.write(`\n exit event triggered \n`);
});
