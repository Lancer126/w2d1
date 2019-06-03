var https = require('https');

getAndPrintHTML();

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var callback = function(response) {
    var output = "";
    console.log('In response handler callback!');

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