var https = require('https');
var getHTML = require('./http-functions');
var options = process.argv.slice(2);

function callb (response) {
  var output = "";
  newChunk = "";
  response.on('data', function(chunk) {
    for (var i = chunk.length - 1; i >= 0; i--) {
      newChunk += chunk[i];
    }

    output += chunk.toString();
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