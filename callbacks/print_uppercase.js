var https = require('https');
var getHTML = require('./http-functions');
var options = process.argv.slice(2);

function callb (response) {
  var output = "";
  response.on('data', function(chunk) {
    output += chunk.toString().toUpperCase();
  });
  response.on("end", function () {
    printHTML (output);
    return output;
  });
}

function printHTML (html) {
  console.log(html);
}

getHTML(options, callb);