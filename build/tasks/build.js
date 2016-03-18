var gulp = require('gulp');
var debug = require('gulp-debug');
var runSequence = require('run-sequence');
var to5 = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('../paths');

var babelOptions = {
	plugins: [
		"transform-es2015-modules-amd",
		"transform-decorators-legacy",
		"transform-class-properties"
	],
	presets: [
		"stage-2"
	]
};

gulp.task('build-html-es6', function () {
	return gulp.src(paths.html).
		pipe(gulp.dest(paths.output + 'es6'));
});

gulp.task('build-css-es6', function () {
	return gulp.src(paths.css).
		pipe(gulp.dest(paths.output + 'es6'));
});

gulp.task('build-es6', function () {
	return gulp.src(paths.source).
	pipe(gulp.dest(paths.output + 'es6'));
});

gulp.task('build-html-amd', function () {
	return gulp.src(paths.html).
		pipe(gulp.dest(paths.output + 'amd'));
});

gulp.task('build-css-amd', function () {
	return gulp.src(paths.css).
		pipe(gulp.dest(paths.output + 'amd'));
});

gulp.task('build-amd', function () {
	return gulp.src(paths.source).
		pipe(sourcemaps.init()).
		pipe(to5(babelOptions)).
		pipe(sourcemaps.write()).
		pipe(gulp.dest(paths.output + 'amd'));
});

gulp.task('build-html', [
	'build-html-es6',
	'build-html-amd'
]);

gulp.task('build-css', [
	'build-css-es6',
	'build-css-amd'
]);

gulp.task('build-js', [
	'build-es6',
	'build-amd'
]);

gulp.task('build', function(callback) {
	return runSequence(
		'clean',
		['build-js', 'build-html', 'build-css'],
		callback
	);
});
