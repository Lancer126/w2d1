var https = require('https');

getAndPrintHTML();

function getAndPrintHTML () {

  var callback = function(response) {
    var output = "";
    console.log('In response handler callback!');

    response.on('data', function(chunk) {
      output += chunk.toString();
    });
    console.log(output);
  }

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.request(requestOptions, callback).end();

}