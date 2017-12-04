var getHTML = require('../getHTML.js').getHTML;

var requestOptions = {
  host: 'sytranis.github.io',
  path: '/http-examples/step1.html'
};

var printUpperCase = function(html) {
  console.log(html.toUpperCase());
};

getHTML(requestOptions, printUpperCase);