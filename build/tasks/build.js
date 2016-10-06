let gulp = require('gulp');
let runSequence = require('run-sequence');
let to5 = require('gulp-babel');
let paths = require('../paths');
let compilerOptions = require('../babel-options');
let assign = Object.assign || require('object.assign');
let debug = require('gulp-debug');

gulp.task('build-html', function() {
	return gulp.src( paths.html ).
		pipe( debug({ title: 'build-html' }) ).
		pipe( gulp.dest(paths.output + 'es2015') ).
		pipe( gulp.dest(paths.output + 'commonjs') ).
		pipe( gulp.dest(paths.output + 'amd') ).
		pipe( gulp.dest(paths.output + 'system') );
});

gulp.task('build-css', function() {
	return gulp.src( paths.css ).
		pipe( debug({ title: 'build-css' }) ).
		pipe( gulp.dest(paths.output + 'es2015') ).
		pipe( gulp.dest(paths.output + 'commonjs') ).
		pipe( gulp.dest(paths.output + 'amd') ).
		pipe( gulp.dest(paths.output + 'system') );
});

gulp.task('build-es2015', function() {
	return gulp.src( paths.source ).
		pipe( debug({ title: 'build-es2015' }) ).
		pipe( to5(assign({}, compilerOptions.es2015())) ).
		pipe( gulp.dest(paths.output + 'es2015') );
});

gulp.task('build-commonjs', function() {
	return gulp.src( paths.source ).
		pipe( debug({ title: 'build-commonjs' }) ).
		pipe( to5(assign({}, compilerOptions.commonjs())) ).
		pipe( gulp.dest(paths.output + 'commonjs') );
});

gulp.task('build-amd', function() {
	return gulp.src( paths.source ).
		pipe( debug({ title: 'build-amd' }) ).
		pipe( to5(assign({}, compilerOptions.amd())) ).
		pipe( gulp.dest(paths.output + 'amd') );
});

gulp.task('build-system', function() {
	return gulp.src( paths.source ).
		pipe( debug({ title: 'build-system' }) ).
		pipe( to5(assign({}, compilerOptions.system())) ).
		pipe( gulp.dest(paths.output + 'system') );
});

gulp.task('build', function(callback) {
	return runSequence(
		'clean',
		[
			'build-html',
			'build-css',
			// 'build-es2015',
			// 'build-commonjs',
			'build-amd',
			'build-system'
		],
		callback
	);
});

gulp.task('build-all-formats', function(callback) {
	return runSequence(
		'clean',
		[
			'build-html',
			'build-css',
			'build-es2015',
			'build-commonjs',
			'build-amd',
			'build-system'
		],
		callback
	);
});

