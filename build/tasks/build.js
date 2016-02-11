var gulp = require('gulp');
var runSequence = require('run-sequence');
var to5 = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('../paths');
var compilerOptions = require('../babel-options');
var assign = Object.assign || require('object.assign');

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

gulp.task('build-html-commonjs', function () {
	return gulp.src(paths.html).
		pipe(gulp.dest(paths.output + 'commonjs'));
});

gulp.task('build-css-commonjs', function () {
	return gulp.src(paths.css).
		pipe(gulp.dest(paths.output + 'commonjs'));
});

gulp.task('build-commonjs', function () {
	return gulp.src(paths.source).
		pipe(sourcemaps.init()).
		pipe(to5(assign({}, compilerOptions, {modules:'common'}))).
		pipe(sourcemaps.write()).
		pipe(gulp.dest(paths.output + 'commonjs'));
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
		pipe(to5(assign({}, compilerOptions, {modules:'amd'}))).
		pipe(sourcemaps.write()).
		pipe(gulp.dest(paths.output + 'amd'));
});

gulp.task('build-html-system', function () {
	return gulp.src(paths.html).
		pipe(gulp.dest(paths.output + 'system'));
});

gulp.task('build-css-system', function () {
	return gulp.src(paths.css).
		pipe(gulp.dest(paths.output + 'system'));
});

gulp.task('build-system', ['build-html-system'], function () {
	return gulp.src(paths.source).
		pipe(sourcemaps.init()).
		pipe(to5(assign({}, compilerOptions, {modules:'system'}))).
		pipe(sourcemaps.write()).
		pipe(gulp.dest(paths.output + 'system'));
});

gulp.task('build-html-demo', function () {
	return gulp.src(paths.demoHtml).
		pipe(gulp.dest(paths.output + 'demo'));
});

gulp.task('build-css-demo', function () {
	return gulp.src(paths.demoCss).
		pipe(gulp.dest(paths.output + 'demo'));
});

gulp.task('build-demo', function () {
	return gulp.src(paths.demoSource).
		pipe(sourcemaps.init()).
		pipe(to5(assign({}, compilerOptions, {modules:'system'}))).
		pipe(sourcemaps.write()).
		pipe(gulp.dest(paths.output + 'demo'));
});

gulp.task('build-html', [
	'build-html-es6',
	'build-html-commonjs',
	'build-html-amd',
	'build-html-system',
	'build-html-demo'
]);

gulp.task('build-css', [
	'build-css-es6',
	'build-css-commonjs',
	'build-css-amd',
	'build-css-system',
	'build-css-demo'
]);

gulp.task('build-js', [
	'build-es6',
	'build-commonjs',
	'build-amd',
	'build-system',
	'build-demo'
]);

gulp.task('build', function(callback) {
	return runSequence(
		'clean',
		['build-js', 'build-html', 'build-css'],
		callback
	);
});
