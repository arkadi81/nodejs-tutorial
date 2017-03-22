/*jslint node: true */
/*jshint esversion: 6 */
'use strict';

// implementation of a usable module with a person object
var EventEmitter = require('events').EventEmitter;
var util = require('util'); // needed for inherits

var Person = function(name) {
  // the unnamed function is the constructor
  this.name = name;
  
};

util.inherits(Person, EventEmitter); 

module.exports = Person; // require will return Person constructor function
// when this is required, we will be returning constructor function