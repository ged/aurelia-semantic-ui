var path = require('path');

var appRoot = 'src/';
var demoRoot = 'demo/';

module.exports = {
	root: appRoot,
	demo: demoRoot,
	source: appRoot + '**/*.js',
	css: appRoot + '**/*.css',
	html: appRoot + '**/*.html',
	output: 'dist/',
	doc:'./doc',
	e2eSpecsSrc: 'test/e2e/src/*.js',
	e2eSpecsDist: 'test/e2e/dist/'
};