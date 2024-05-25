#!/usr/bin/node
const request = require('request');
// exporting the in-built request module
request.get(process.argv[2]).on('response', function (response) {
  console.log(`code: ${response.statusCode}`);
});
