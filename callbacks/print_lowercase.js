var getHTML = require('../getHTML.js').getHTML;

var requestOptions = {
  host: 'sytranis.github.io',
  path: '/http-examples/step1.html'
};

var printLowerCase = function(html) {
  console.log(html.toLowerCase());
};

getHTML(requestOptions, printLowerCase);