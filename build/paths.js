var path = require('path');

var appRoot = 'src/';
var demoRoot = 'demo/';

module.exports = {
	root: appRoot,
	demo: demoRoot,
	source: appRoot + '**/*.js',
	demoSource: demoRoot + '**/*.js',
	css: appRoot + '**/*.css',
	demoCss: demoRoot + '**/*.css',
	html: appRoot + '**/*.html',
	demoHtml: demoRoot + '**/*.html',
	output: 'dist/',
	doc:'./doc',
	e2eSpecsSrc: 'test/e2e/src/*.js',
	e2eSpecsDist: 'test/e2e/dist/'
};