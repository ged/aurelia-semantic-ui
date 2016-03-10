System.register([], function (_export) {
	'use strict';

	var UnderscoreValueConverter;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [],
		execute: function () {
			UnderscoreValueConverter = (function () {
				function UnderscoreValueConverter() {
					_classCallCheck(this, UnderscoreValueConverter);
				}

				_createClass(UnderscoreValueConverter, [{
					key: 'toView',
					value: function toView(string) {
						return string.replace(/\s+/, '_');
					}
				}]);

				return UnderscoreValueConverter;
			})();

			_export('UnderscoreValueConverter', UnderscoreValueConverter);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy91bmRlcnNjb3JlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztLQUlhLHdCQUF3Qjs7Ozs7Ozs7O0FBQXhCLDJCQUF3QjthQUF4Qix3QkFBd0I7MkJBQXhCLHdCQUF3Qjs7O2lCQUF4Qix3QkFBd0I7O1lBQzlCLGdCQUFFLE1BQU0sRUFBRztBQUNoQixhQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBRSxDQUFDO01BQ3BDOzs7V0FIVyx3QkFBd0IiLCJmaWxlIjoicmVzb3VyY2VzL3VuZGVyc2NvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVuZGVyc2NvcmluZyB2YWx1ZSBjb252ZXJ0ZXJcbiAqL1xuXG5leHBvcnQgY2xhc3MgVW5kZXJzY29yZVZhbHVlQ29udmVydGVyIHtcblx0dG9WaWV3KCBzdHJpbmcgKSB7XG5cdFx0cmV0dXJuIHN0cmluZy5yZXBsYWNlKCAvXFxzKy8sICdfJyApO1xuXHR9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
