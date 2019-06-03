var https = require('https');
module.exports = function getHTML (options, callback) {

  var requestOptions = {
    host: options[0].toString(),
    path: options[1].toString()
  };

  https.get(requestOptions, callback);
}