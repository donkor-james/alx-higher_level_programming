#!/usr/bin/node
const fs = require('fs');
// import the buit in module fs
fs.writeFile(process.argv[2], process.argv[3], (error) => {
  if (error) console.log(error);
// if statement to check for error condition
});
