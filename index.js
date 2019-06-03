var https = require('https');

function getAndPrintHTMLChunks () {

  var callback = function(response) {

    response.on('data', function(chunk) {
      console.log(chunk.toString());
    });
  }

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, callback).end();
}