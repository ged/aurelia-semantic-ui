var gulp = require('gulp');
var browserSync = require('browser-sync');

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9000
gulp.task('serve', ['build'], function(done) {
	browserSync({
		online: false,
		open: false,
		port: 6161,
		logLevel: 'debug',
		logConnections: true,
		ui: {
			port: 6163,
		},
		server: {
			index: 'demo.html',
			baseDir: ['.'],
			middleware: function (req, res, next) {
				res.setHeader('Access-Control-Allow-Origin', '*');
				next();
			}
		}
	}, done);
});
