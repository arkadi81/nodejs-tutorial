/*jslint node: true */
/*jshint esversion: 6 */
'use strict';
/** 
  * grabs the value associated with given flag from argument line
  * process is object included in node, no need to require
  * @param {string} flag the flag we're looking for
*/
module.exports = {
  getFlag: function (flag) {
    var index = process.argv.indexOf(flag);
    return (index === -1) ? null : process.argv[index+1];
  },

};

/** 
* practice using the process.stout object
*/
