var gulp = require('gulp');
var bundle = require('aurelia-bundler').bundle;

var config = {
	force: true,
	baseURL: '.',
	configPath: './config.js',
	bundles: {
		"dist/demo/app-build": {
			includes: [
				'demo.html!text',
				'[demo/main.js]',
				'demo/*.html!text',
				'demo/*.css!text'
			],
			options: {
				inject: true,
				// minify: true,
				// rev: true
			}
		},
		"dist/demo/vendor-build": {
			includes: [
				'aurelia-bootstrapper',
				'aurelia-animator-css',
				'prismjs',
				'semantic',
				'semantic/semantic.css!text'
			],
			options: {
				inject: true,
				// minify: true
			}
		}
	}
};

gulp.task('bundle', function() {
	return bundle(config);
});

