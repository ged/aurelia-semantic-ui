System.register(['babel/polyfill', 'jquery', 'semantic', 'semantic/semantic.css!'], function (_export) {
	"use strict";

	var JQuery;

	_export('configure', configure);

	function configure(aurelia) {
		aurelia.use.standardConfiguration().developmentLogging().globalResources('demo/resources/index.js').plugin('aurelia-animator-css').plugin('aurelia-semantic-ui');

		aurelia.start().then(function (a) {
			return a.setRoot('demo/app', document.body);
		});
	}

	return {
		setters: [function (_babelPolyfill) {}, function (_jquery) {
			JQuery = _jquery['default'];
		}, function (_semantic) {}, function (_semanticSemanticCss) {}],
		execute: function () {}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGFBQVksQ0FBQzs7Ozs7O0FBU04sVUFBUyxTQUFTLENBQUMsT0FBTyxFQUFFO0FBQ2xDLFNBQU8sQ0FBQyxHQUFHLENBQ1YscUJBQXFCLEVBQUUsQ0FDdkIsa0JBQWtCLEVBQUUsQ0FDcEIsZUFBZSxDQUNkLHlCQUF5QixDQUN6QixDQUNELE1BQU0sQ0FBRSxzQkFBc0IsQ0FBRSxDQUNoQyxNQUFNLENBQUUscUJBQXFCLENBQUUsQ0FBQzs7QUFFakMsU0FBTyxDQUFDLEtBQUssRUFBRSxDQUNkLElBQUksQ0FBRSxVQUFBLENBQUM7VUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDO0dBQUEsQ0FBRSxDQUFDO0VBQ25EIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgJ2JhYmVsL3BvbHlmaWxsJztcblxuaW1wb3J0IEpRdWVyeSBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICdzZW1hbnRpYyc7XG5pbXBvcnQgJ3NlbWFudGljL3NlbWFudGljLmNzcyEnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYSkge1xuXHRhdXJlbGlhLnVzZS5cblx0XHRzdGFuZGFyZENvbmZpZ3VyYXRpb24oKS5cblx0XHRkZXZlbG9wbWVudExvZ2dpbmcoKS5cblx0XHRnbG9iYWxSZXNvdXJjZXMoXG5cdFx0XHQnZGVtby9yZXNvdXJjZXMvaW5kZXguanMnXG5cdFx0KS5cblx0XHRwbHVnaW4oICdhdXJlbGlhLWFuaW1hdG9yLWNzcycgKS5cblx0XHRwbHVnaW4oICdhdXJlbGlhLXNlbWFudGljLXVpJyApO1xuXG5cdGF1cmVsaWEuc3RhcnQoKS5cblx0XHR0aGVuKCBhID0+IGEuc2V0Um9vdCgnZGVtby9hcHAnLCBkb2N1bWVudC5ib2R5KSApO1xufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
