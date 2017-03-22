/*jslint node: true */
/*jshint esversion: 6 */
'use strict';


// demo for process control stuff using stdio

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
