#!/usr/bin/env node
'use strict';
var argv = require('optimist').argv;
var filendir = require('filendir');
var pathType = require('path-type');
var camel = require('./camel');
var jsContentMain = require('./js-content-main');
var jsContentActions = require('./js-content-actions');
var jsContentReducer = require('./js-content-reducer');
var jsContentBootstrap = require('./js-content-bootstrap');
var jsContentCombinedReducers = require('./js-content-combined-reducers');
var jsContentMainStateless = require('./js-content-main-stateless');
var scssContent = require('./scss-content');
var jsTestMain = require('./js-test-main');
var jsTestMainStateless = require('./js-test-main-stateless');
var jsTestReducers = require('./js-test-reducers');
var jsTestActions = require('./js-test-actions');

if (argv.c === true || argv.c === undefined || argv.c === null) {
  console.log('Component name is mandatory');
  return;
}

pathType.dir(argv.c).then(function () {
	console.log('Directoy name clashed, try another name');
}).catch(function() {
  console.log('Generating folder and files...');
  var dirPathName = './' + argv.c;
  var compTitle = camel.processTitle(argv.c);
  var compCamel = camel.processStandard(argv.c);

  if (argv.s) {
    // Stateless
    filendir.ws(dirPathName + '/' + argv.c + '.js', jsContentMainStateless(compTitle, argv.c));
    filendir.ws(dirPathName + '/test/' + argv.c + '.spec.js', jsTestMainStateless(compTitle, argv.c));
  } else {
    // Redux
    filendir.ws(dirPathName + '/' + argv.c + '.js', jsContentMain(compTitle, compCamel, argv.c));
    filendir.ws(dirPathName + '/' + argv.c + '-actions.js', jsContentActions(compCamel));
    filendir.ws(dirPathName + '/' + argv.c + '-reducer.js', jsContentReducer(argv.c));
    filendir.ws(dirPathName + '/test/' + argv.c + '.spec.js', jsTestMain(compTitle, argv.c));
    filendir.ws(dirPathName + '/test/' + argv.c + '-reducers.spec.js', jsTestReducers(compTitle));
    filendir.ws(dirPathName + '/test/' + argv.c + '-actions.spec.js', jsTestActions(compTitle));
  }

  if (argv.b) {
    // Bootstrap
    filendir.ws(dirPathName + '/hwrld-' + argv.c + '.js', jsContentBootstrap(compTitle, argv.c));
    filendir.ws(dirPathName + '/' + argv.c + '-combined-reducers.js', jsContentCombinedReducers(compTitle));
  }

  // Styles
  filendir.ws(dirPathName + '/' + argv.c + '.scss', scssContent());
  console.log('Files generated');
});
