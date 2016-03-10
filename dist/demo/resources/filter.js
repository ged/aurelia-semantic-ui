System.register(['aurelia-framework'], function (_export) {
	'use strict';

	var valueConverter, FilterValueConverter;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_aureliaFramework) {
			valueConverter = _aureliaFramework.valueConverter;
		}],
		execute: function () {
			FilterValueConverter = (function () {
				function FilterValueConverter() {
					_classCallCheck(this, _FilterValueConverter);
				}

				_createClass(FilterValueConverter, [{
					key: 'toView',
					value: function toView(collection, config) {
						return collection.filter(function (item) {
							config.keys().every(function (key) {
								console.debug("Testing for %s: %o == %o", key, item[key], config[key]);
								item[key] == config[key];
							});
						});
					}
				}]);

				var _FilterValueConverter = FilterValueConverter;
				FilterValueConverter = valueConverter('filter')(FilterValueConverter) || FilterValueConverter;
				return FilterValueConverter;
			})();

			_export('FilterValueConverter', FilterValueConverter);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9maWx0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3FCQU9hLG9CQUFvQjs7Ozs7Ozs7c0NBSHpCLGNBQWM7OztBQUdULHVCQUFvQjthQUFwQixvQkFBb0I7Ozs7aUJBQXBCLG9CQUFvQjs7WUFDMUIsZ0JBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRztBQUM1QixhQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUUsVUFBQSxJQUFJLEVBQUk7QUFDakMsYUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBRSxVQUFBLEdBQUcsRUFBSTtBQUMzQixlQUFPLENBQUMsS0FBSyxDQUFFLDBCQUEwQixFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFFLENBQUM7QUFDekUsWUFBSSxDQUFFLEdBQUcsQ0FBRSxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUM7T0FDSCxDQUFDLENBQUM7TUFDSDs7O2dDQVJXLG9CQUFvQjtBQUFwQix3QkFBb0IsR0FEaEMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUNaLG9CQUFvQixLQUFwQixvQkFBb0I7V0FBcEIsb0JBQW9CIiwiZmlsZSI6InJlc291cmNlcy9maWx0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIGZpbHRlciBWYWx1ZUNvbnZlcnRlciBcbiAqL1xuXG5pbXBvcnQge3ZhbHVlQ29udmVydGVyfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkB2YWx1ZUNvbnZlcnRlcignZmlsdGVyJylcbmV4cG9ydCBjbGFzcyBGaWx0ZXJWYWx1ZUNvbnZlcnRlciB7XG5cdHRvVmlldyggY29sbGVjdGlvbiwgY29uZmlnICkge1xuXHRcdHJldHVybiBjb2xsZWN0aW9uLmZpbHRlciggaXRlbSA9PiB7XG5cdFx0XHRjb25maWcua2V5cygpLmV2ZXJ5KCBrZXkgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmRlYnVnKCBcIlRlc3RpbmcgZm9yICVzOiAlbyA9PSAlb1wiLCBrZXksIGl0ZW1ba2V5XSwgY29uZmlnW2tleV0gKTtcblx0XHRcdFx0aXRlbVsga2V5IF0gPT0gY29uZmlnW2tleV07XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
