/*jslint node: true */
/*jshint esversion: 6 */
'use strict';

// the sequence of functions creates a timer that runs for 3 seconds 
//and informs us of progress through console.

/** 
* TIMING FUNCTIONS FOR ASYNC WORK--setTimeout--setInterval-clearInterval--clearTimeout-----------------------
*/
var waitTime = 3000; // in ms
var currentTime = 0;
var waitInterval = 500;
var percentWaiting = 0;


function writeWaitingPercent(p) {
  process.stdout.clearLine(); // clear last terminal line
  process.stdout.cursorTo(0); // move cursor to beginning of curline
  process.stdout.write(`waiting ... ${p}%`);
}

var interval = setInterval(function() {
  //heartbeat ticker
  currentTime += waitInterval;
  percentWaiting = Math.floor((currentTime/waitTime)*100);
  //console.log(`waiting ${currentTime/1000} seconds...`);
  writeWaitingPercent(percentWaiting);
  // this will keep going forever!!
}, waitInterval);

setTimeout(function() {
  // do the thing, then wait for waitTime [ms]
  clearInterval(interval); // will stop the defined 'heartbeat' interval;
  percentWaiting = 100;
  writeWaitingPercent(percentWaiting);
  
  console.log("\n done");
},waitTime);

writeWaitingPercent(percentWaiting);
