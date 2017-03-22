/*jslint node: true */
/*jshint esversion: 6 */
'use strict';

// practicing the fs module, which allows to integrate with file system;

var fs = require("fs");
var path = require("path");
// read this directory, store as array
//var files = fs.readdirSync('.'); 

// we can use Sync OR ASYNC calls using fs, at our discretion.
// notice that sync calls block (meaning everything will be on hold!. they are good to use for 
// reading config stuff at beginning. then its better to use async

// async call here:
// fs.readdir('.', function(err,files) {
//   if (err) {
//     throw err;
//   }
//   console.log(files);
// });

//console.log(files);

// ALL OF THIS STUFF IS DETAILED ON NODE.JS API PAGE WITH LIST OF FUNCTS
// nodejs.org/api

// sync file reading in text mode:
// var fileContents = fs.readFileSync("./fs.js", "UTF-8");
// console.log(fileContents);

// if we do not send text encoding, BINARY is assumed by default!!

// async call (assumed async unless specified otherwise!)
// when reading text, second argument is always type of encoding
// binary files are handles with the nodejs buffer class
// fs.readFile("./fs.js", "UTF-8", function(err,contents) {
//   if (err) {
//     console.log(err);
//   }
//   console.log(contents);

// });

// read all of the files in a certain directory
function readAllFiles() {
  fs.readdir("./", function(err,files) {
    // files is an array of files
    files.forEach(function(fname) {
      var file = path.join(__dirname, fname); // get full path
      var stats = fs.statSync(file); // get stats. file or directory??
      if (stats.isFile()) {
        fs.readFile(file, "UTF-8", function(err,contents) {
          console.log(`contents of filename ${file}: ${contents}`);
        });
      }
    });
  });
}

function createFile() {
  // create new file
  var content = `

    sample markdown title
    =====================

    sample subtitle
    stuff stuff

  `;

  fs.writeFile("sample.md", content.trim(), function(err) {
    if (err) {
      throw (err);
    }
    else
    {
     console.log("file created"); 
    }
  });
}

function appendToFile(filename,content) {
  fs.appendFile(filename,content); // callback function can be written but is optiona;
}

//readAllFiles();
//createFile();
appendToFile("sample.md","hi!");

//fs.mkdir creates function;
//fs.exits to test if file or directory exists
//fs. rename sync or not
//fs.unlink removes files
// we move files by renaming them to a different path
// rmdir will remove directories. to remove dir, first remove all files.
// FOR SYNC REQUESTS USE TRY CATCH FOR ERROR CHECKING!!

// error thrown stops execution of program