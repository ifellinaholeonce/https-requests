var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytranis.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (res) {
    res.setEncoding('utf8');
    res.on('data', function (data) {
      console.log(data + '---------------------- \n');
    });
  });
}

getAndPrintHTMLChunks();