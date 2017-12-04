var getAndPrintHTML = function () {
   var https = require('https');

  var requestOptions = {
    host: 'sytranis.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (res) {
    res.setEncoding('utf8');

    let accumulatedData = '';
    res.on('data', function (data) {
      accumulatedData += data;
    });

    res.on('end', function () {
      console.log(accumulatedData);
    });
  });
};

getAndPrintHTML();