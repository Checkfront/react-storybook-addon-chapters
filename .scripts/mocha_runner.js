// IMPORTANT
// ---------
// This is an auto generated file with React CDK.
// Do not modify this file.
// Use `.scripts/user/pretest.js instead`.

require('@babel/register');
require('@babel/polyfill');

// Add jsdom support, which is required for enzyme.
var jsdom = require('jsdom');
const { JSDOM } = jsdom;

const { document } = (new JSDOM('', { url: 'http://localhost:9011'})).window;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = document;
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

process.on('unhandledRejection', function (error) {
  console.error('Unhandled Promise Rejection:');
  console.error(error && error.stack || error);
});

require('./user/pretest.js');
