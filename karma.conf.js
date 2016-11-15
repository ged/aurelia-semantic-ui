// Karma configuration
// Generated on Fri Dec 05 2014 16:49:29 GMT-0500 (EST)

module.exports = function(config) {
	config.set({
		basePath: '',
		frameworks: ['jspm', 'jasmine'],
		jspm: {
			loadFiles: ['test/helpers.js', 'src/**/*.js', 'test/**/*.js']
		},
		files: [
			'src/**/*.html', 'src/**/*.css', 'test/**/*.html'
		],
		exclude: [],
		preprocessors: {
			'test/**/*.js': ['babel'],
			'src/**/*.js': ['babel']
		},
		babelPreprocessor: {
			options: {
				sourceMap: 'inline',
				presets: [ 'stage-1'],
				plugins: [
					'transform-decorators-legacy',
				]
			}
		},
		reporters: ['mocha'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		// logLevel: config.LOG_DEBUG,
		autoWatch: true,
		browsers: [
			'Chrome',
			// 'Safari',
			// 'Firefox'
		],
		singleRun: false
	});
};
