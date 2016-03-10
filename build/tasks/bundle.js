var gulp = require('gulp');
var bundler = require('aurelia-bundler');
var runSequence = require('run-sequence');

var config = {
	force: true,
	baseURL: '.',
	configPath: './config.js',
	bundles: {
		"dist/demo/app-build": {
			includes: [
				'[demo/*.js]',
				'demo/*.html!text',
				'demo/*.css!text'
			],
			options: {
				inject: true,
				minify: true,
				rev: true
			}
		},
		"dist/demo/vendor-build": {
			includes: [
				"aurelia-animator-css",
				"aurelia-bootstrapper",
				"aurelia-framework",
				"aurelia-history-browser",
				"aurelia-loader-default",
				"aurelia-logging-console",
				"aurelia-router",
				"aurelia-templating-binding",
				"aurelia-templating-resources",
				"aurelia-templating-router",
				"prismjs",
				"jquery",
				"numeral",
				"moment",
				"dompurify",
				"semantic",
				"semantic/semantic.css!text"
			],
			options: {
				inject: true,
				minify: true
			}
		}
	}
};

gulp.task('bundle', function() {
	return bundler.bundle( config );
});

gulp.task('unbundle', function() {
	return bundler.unbundle( config );
});

gulp.task('rebundle', function(callback) {
	return runSequence( 'unbundle', 'bundle', callback );
});

