/*jslint node: true */
/*jshint esversion: 6 */
'use strict';

var exec = require("child_process").exec;
var spawn = require("child_process").spawn;

//var cp = spawn("node", ["args here"]);

// cp.stdout.on("data", function(data) {
  // stuff
//})

exec("git version", function(err, stdout) {
  // creates child process, meant for quick SYNC processes that ends
  //err is always first argument passed
  if (err) {
    throw err;
  }
  console.log("listing finished");
  console.log(stdout);
});
console.log("hi"); 

// spawn is meant for async processses that have async in out, longer in/out
// large amounts of data