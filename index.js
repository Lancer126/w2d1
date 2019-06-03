var https = require('https');

function getAndPrintHTMLChunks () {

  var callback = function(response) {
    console.log('In response handler callback!');

    response.on('data', function(chunk) {
      console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
      console.log(chunk.toString());
    });
  }

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.request(requestOptions, callback).end();



}