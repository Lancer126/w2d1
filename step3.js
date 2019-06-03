var https = require('https');
var options = process.argv.slice(2);

getAndPrintHTML(options);

function getAndPrintHTML (options) {

  var requestOptions = {
    host: options[0].toString(),
    path: options[1].toString()
  };

  var callback = function(response) {
    var output = "";

    response.on('data', function(chunk) {
      console.log(chunk);
      output += chunk;
    });
    console.log(output);
    response.on("end", function () {
      console.log(output)
    });
  }

  https.get(requestOptions, callback);

}