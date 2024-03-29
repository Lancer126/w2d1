var https = require('https');
var options = process.argv.slice(2);

function callb (response) {
  var output = "";
  response.on('data', function(chunk) {
    output += chunk;
  });
  response.on("end", function () {
    printHTML (output);
    return output;
  });
}

function getHTML (options, callback) {

  var requestOptions = {
    host: options[0].toString(),
    path: options[1].toString()
  };

  https.get(requestOptions, callback);
}

function printHTML (html) {
  console.log(html);
}

getHTML(options, callb);