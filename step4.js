var https = require('https');
var options = process.argv.slice(2);

var html = getHTML(options, function(response) {
    var output = "";

    response.on('data', function(chunk) {
      console.log(chunk);
      output += chunk;
    });
    console.log(output);
    response.on("end", function () {
      return output
    });
  });

console.log(html);

function printHTML (html) {
  console.log(html);
}

function getHTML (options, callback) {

  var requestOptions = {
    host: options[0].toString(),
    path: options[1].toString()
  };

  https.get(requestOptions, callback);

}