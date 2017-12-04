var getHTML = require('../getHTML.js').getHTML;

var requestOptions = {
  host: 'sytranis.github.io',
  path: '/http-examples/step1.html'
};

var printReverse = function(html) {
  console.log(html.split('').reverse().join(''));
};

getHTML(requestOptions, printReverse);