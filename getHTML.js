var getHTML = function (options, callback) {
  var https = require('https');

  https.get(options, function (res) {
    res.setEncoding('utf8');

    let accumulatedData = '';
    res.on('data', function (data) {
      accumulatedData += data;
    });

    res.on('end', function () {
      callback(accumulatedData);
    });
  });
};


var printHTML = function (html) {
  console.log(html);
};

module.exports = {
  getHTML: getHTML,
  printHTML: printHTML
};