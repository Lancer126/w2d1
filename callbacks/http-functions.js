var https = require('https');
module.exports = function getHTML (options, callback) {

  var requestOptions = {
    host: "sytantris.github.io",
    path: options[0].toString()
  };

  https.get(requestOptions, callback);
}