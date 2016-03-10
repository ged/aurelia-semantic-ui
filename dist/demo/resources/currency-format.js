System.register(['numeral'], function (_export) {
	'use strict';

	var numeral, CurrencyFormatValueConverter;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_numeral) {
			numeral = _numeral['default'];
		}],
		execute: function () {
			CurrencyFormatValueConverter = (function () {
				function CurrencyFormatValueConverter() {
					_classCallCheck(this, CurrencyFormatValueConverter);
				}

				_createClass(CurrencyFormatValueConverter, [{
					key: 'toView',
					value: function toView(value) {
						if (typeof value === 'object') {
							var symbol = value.currency_symbol || '$';
							return numeral(value.cents / 100).format('(' + symbol + '0,0.00)');
						} else {
							var dollars = Number.parseInt(value);
							return numeral(dollars).format('($0,0)');
						}
					}
				}]);

				return CurrencyFormatValueConverter;
			})();

			_export('CurrencyFormatValueConverter', CurrencyFormatValueConverter);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9jdXJyZW5jeS1mb3JtYXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2NBV2EsNEJBQTRCOzs7Ozs7Ozs7OztBQUE1QiwrQkFBNEI7YUFBNUIsNEJBQTRCOzJCQUE1Qiw0QkFBNEI7OztpQkFBNUIsNEJBQTRCOztZQUNsQyxnQkFBRSxLQUFLLEVBQUc7QUFDZixVQUFLLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRztBQUNoQyxXQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsZUFBZSxJQUFJLEdBQUcsQ0FBQztBQUMxQyxjQUFPLE9BQU8sQ0FBRSxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBRSxDQUFDLE1BQU0sT0FBTSxNQUFNLGFBQVcsQ0FBQztPQUNsRSxNQUFNO0FBQ04sV0FBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBRSxLQUFLLENBQUUsQ0FBQztBQUN2QyxjQUFPLE9BQU8sQ0FBRSxPQUFPLENBQUUsQ0FBQyxNQUFNLENBQUUsUUFBUSxDQUFFLENBQUM7T0FDN0M7TUFDRDs7O1dBVFcsNEJBQTRCIiwiZmlsZSI6InJlc291cmNlcy9jdXJyZW5jeS1mb3JtYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEN1cnJlbmN5IFZhbHVlQ29udmVydGVyIGZvciB0aGUgQWRtaW4gQXBwXG4gKlxuICogSGFuZGxlcyB0aGUgYGFtb3VudGAgc3RydWN0IHJldHVybmVkIGJ5IG91ciBzZXJ2aWNlcyBieSBmb3JtYXR0aW5nXG4gKiBpbnRvIHRoZSBhcHByb3ByaWF0ZSB0ZXh0IHJlcHJlc2VudGF0aW9uLlxuICpcbiAqL1xuXG5pbXBvcnQgbnVtZXJhbCBmcm9tICdudW1lcmFsJztcblxuXG5leHBvcnQgY2xhc3MgQ3VycmVuY3lGb3JtYXRWYWx1ZUNvbnZlcnRlciB7XG5cdHRvVmlldyggdmFsdWUgKSB7XG5cdFx0aWYgKCB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICkge1xuXHRcdFx0bGV0IHN5bWJvbCA9IHZhbHVlLmN1cnJlbmN5X3N5bWJvbCB8fCAnJCc7XG5cdFx0XHRyZXR1cm4gbnVtZXJhbCggdmFsdWUuY2VudHMgLyAxMDAgKS5mb3JtYXQoIGAoJHtzeW1ib2x9MCwwLjAwKWAgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGV0IGRvbGxhcnMgPSBOdW1iZXIucGFyc2VJbnQoIHZhbHVlICk7XG5cdFx0XHRyZXR1cm4gbnVtZXJhbCggZG9sbGFycyApLmZvcm1hdCggJygkMCwwKScgKTtcblx0XHR9XG5cdH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
