var gulp        = require( 'gulp' );
var runSequence = require( 'run-sequence' );
var shell       = require( 'gulp-shell' );

var paths       = require( '../paths' );

gulp.task('link-jspm', shell.task([
	'jspm link github:ged/aurelia-semantic-ui@dev -y'
]));


gulp.task('link', function(callback) {
	return runSequence(
		'clean',
		'build',
		'link-jspm',
		callback
	);
});
