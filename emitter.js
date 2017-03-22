/*jslint node: true */
/*jshint esversion: 6 */
'use strict';

// emitter demo
// create and emit custom events

// option 1 for definition ----------------
// var events = require('events');
// // the emitter is a constructor, so we need a new instance

// var emitter = new events.EventEmitter();

// option 2 -- daisychain, pull constructor out! -----
var EventEmitter = require('events').EventEmitter;
var util = require('util'); // needed for inherits
// still needs to be initialized
// eventEmitter is a constructor function

//var emitter = new EventEmitter();
// -------------------------------------

var Person = function(name) {
  // the unnamed function is the constructor
  this.name = name;
  this.on('ask', function(q) {
    // wire costum event for the class / object / function
    // possible only after the inherits is wired. otherwise there's no on method.
    console.log(`ask event triggered, the question is ${q}`);
  });
};

util.inherits(Person, EventEmitter); // Person object now inherits functionality of EventEmitter object
// provides .on method


var ben = new Person('ben');
// build handler

// also possible just emitter.on('customEvent')
ben.on('speak', function(said) {
  // note, wired custom event to ben only
  // function is raised every time custom event happens async
  console.log(`${this.name}: ${said}`);
});

// set custom event to fire
ben.emit('speak',"hi");

ben.emit('ask','how tall is a giraffe?');