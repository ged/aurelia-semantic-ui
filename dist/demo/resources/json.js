System.register(['aurelia-framework'], function (_export) {
	'use strict';

	var valueConverter, JSONValueConverter;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_aureliaFramework) {
			valueConverter = _aureliaFramework.valueConverter;
		}],
		execute: function () {
			JSONValueConverter = (function () {
				function JSONValueConverter() {
					_classCallCheck(this, _JSONValueConverter);
				}

				_createClass(JSONValueConverter, [{
					key: 'toView',
					value: function toView(object) {
						var indent = arguments.length <= 1 || arguments[1] === undefined ? 2 : arguments[1];

						return JSON.stringify(object, null, indent);
					}
				}]);

				var _JSONValueConverter = JSONValueConverter;
				JSONValueConverter = valueConverter('json')(JSONValueConverter) || JSONValueConverter;
				return JSONValueConverter;
			})();

			_export('JSONValueConverter', JSONValueConverter);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9qc29uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztxQkFPYSxrQkFBa0I7Ozs7Ozs7O3NDQUh2QixjQUFjOzs7QUFHVCxxQkFBa0I7YUFBbEIsa0JBQWtCOzs7O2lCQUFsQixrQkFBa0I7O1lBQ3hCLGdCQUFFLE1BQU0sRUFBYTtVQUFYLE1BQU0seURBQUMsQ0FBQzs7QUFDdkIsYUFBTyxJQUFJLENBQUMsU0FBUyxDQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFFLENBQUM7TUFDOUM7Ozs4QkFIVyxrQkFBa0I7QUFBbEIsc0JBQWtCLEdBRDlCLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FDVixrQkFBa0IsS0FBbEIsa0JBQWtCO1dBQWxCLGtCQUFrQiIsImZpbGUiOiJyZXNvdXJjZXMvanNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICoganNvbiBWYWx1ZUNvbnZlcnRlciBcbiAqL1xuXG5pbXBvcnQge3ZhbHVlQ29udmVydGVyfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkB2YWx1ZUNvbnZlcnRlcignanNvbicpXG5leHBvcnQgY2xhc3MgSlNPTlZhbHVlQ29udmVydGVyIHtcblx0dG9WaWV3KCBvYmplY3QsIGluZGVudD0yICkge1xuXHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSggb2JqZWN0LCBudWxsLCBpbmRlbnQgKTtcblx0fVxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
