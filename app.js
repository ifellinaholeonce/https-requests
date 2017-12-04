var getHTML = require('./getHTML.js').getHTML;
var printHTML = require('./getHTML.js').printHTML;

var requestOptions = {
  host: 'sytranis.github.io',
  path: '/http-examples/step1.html'
};


console.log(getHTML(requestOptions, printHTML));
