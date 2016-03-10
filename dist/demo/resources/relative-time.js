System.register(['moment'], function (_export) {
	'use strict';

	var Moment, RelativeTimeValueConverter;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_moment) {
			Moment = _moment['default'];
		}],
		execute: function () {
			RelativeTimeValueConverter = (function () {
				function RelativeTimeValueConverter() {
					_classCallCheck(this, RelativeTimeValueConverter);
				}

				_createClass(RelativeTimeValueConverter, [{
					key: 'toView',
					value: function toView(value) {
						var withoutPrefix = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

						var moment = Moment(value);
						if (moment.isAfter()) {
							return moment.toNow(withoutPrefix);
						} else {
							return moment.fromNow(withoutPrefix);
						}
					}
				}]);

				return RelativeTimeValueConverter;
			})();

			_export('RelativeTimeValueConverter', RelativeTimeValueConverter);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9yZWxhdGl2ZS10aW1lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzthQVNhLDBCQUEwQjs7Ozs7Ozs7Ozs7QUFBMUIsNkJBQTBCO2FBQTFCLDBCQUEwQjsyQkFBMUIsMEJBQTBCOzs7aUJBQTFCLDBCQUEwQjs7WUFDaEMsZ0JBQUUsS0FBSyxFQUF3QjtVQUF0QixhQUFhLHlEQUFDLEtBQUs7O0FBQ2pDLFVBQUksTUFBTSxHQUFHLE1BQU0sQ0FBRSxLQUFLLENBQUUsQ0FBQztBQUM3QixVQUFLLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBRztBQUN2QixjQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUUsYUFBYSxDQUFFLENBQUM7T0FDckMsTUFBTTtBQUNOLGNBQU8sTUFBTSxDQUFDLE9BQU8sQ0FBRSxhQUFhLENBQUUsQ0FBQztPQUN2QztNQUNEOzs7V0FSVywwQkFBMEIiLCJmaWxlIjoicmVzb3VyY2VzL3JlbGF0aXZlLXRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlbGF0aXZlIFRpbWUgVmFsdWVDb252ZXJ0ZXIgZm9yIHRoZSBBZG1pbiBBcHBcbiAqXG4gKiBIYW5kbGVzIGFueSB2YWx1ZSB0aGF0IG1vbWVudCgpIGFjY2VwdHMuXG4gKlxuICovXG5cbmltcG9ydCBNb21lbnQgZnJvbSAnbW9tZW50JztcblxuZXhwb3J0IGNsYXNzIFJlbGF0aXZlVGltZVZhbHVlQ29udmVydGVyIHtcblx0dG9WaWV3KCB2YWx1ZSwgd2l0aG91dFByZWZpeD1mYWxzZSApIHtcblx0XHRsZXQgbW9tZW50ID0gTW9tZW50KCB2YWx1ZSApO1xuXHRcdGlmICggbW9tZW50LmlzQWZ0ZXIoKSApIHtcblx0XHRcdHJldHVybiBtb21lbnQudG9Ob3coIHdpdGhvdXRQcmVmaXggKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG1vbWVudC5mcm9tTm93KCB3aXRob3V0UHJlZml4ICk7XG5cdFx0fVxuXHR9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
