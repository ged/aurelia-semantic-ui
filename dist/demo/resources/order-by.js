System.register(['aurelia-framework'], function (_export) {
	'use strict';

	var valueConverter, OrderByValueConverter;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_aureliaFramework) {
			valueConverter = _aureliaFramework.valueConverter;
		}],
		execute: function () {
			OrderByValueConverter = (function () {
				function OrderByValueConverter() {
					_classCallCheck(this, _OrderByValueConverter);
				}

				_createClass(OrderByValueConverter, [{
					key: 'toView',
					value: function toView(collection, criteria, direction) {
						var directionFactor = 1;
						if (direction === 'descending') {
							directionFactor = -1;
						}

						var sortFn = function sortFn(a, b) {
							if (a[criteria] < b[criteria]) {
								return -1 * directionFactor;
							} else if (a[criteria] > b[criteria]) {
								return 1 * directionFactor;
							} else {
								return 0;
							}
						};

						return collection.sort(sortFn);
					}
				}]);

				var _OrderByValueConverter = OrderByValueConverter;
				OrderByValueConverter = valueConverter('orderBy')(OrderByValueConverter) || OrderByValueConverter;
				return OrderByValueConverter;
			})();

			_export('OrderByValueConverter', OrderByValueConverter);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9vcmRlci1ieS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7cUJBT2EscUJBQXFCOzs7Ozs7OztzQ0FIMUIsY0FBYzs7O0FBR1Qsd0JBQXFCO2FBQXJCLHFCQUFxQjs7OztpQkFBckIscUJBQXFCOztZQUMzQixnQkFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRztBQUN6QyxVQUFJLGVBQWUsR0FBRyxDQUFDLENBQUM7QUFDeEIsVUFBSyxTQUFTLEtBQUssWUFBWSxFQUFHO0FBQUUsc0JBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQztPQUFFOztBQUUzRCxVQUFJLE1BQU0sR0FBRyxTQUFTLE1BQU0sQ0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFHO0FBQ3BDLFdBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRztBQUNoQyxlQUFPLENBQUMsQ0FBQyxHQUFHLGVBQWUsQ0FBQztRQUM1QixNQUFNLElBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRztBQUN2QyxlQUFPLENBQUMsR0FBRyxlQUFlLENBQUM7UUFDM0IsTUFBTTtBQUNOLGVBQU8sQ0FBQyxDQUFDO1FBQ1Q7T0FDRCxDQUFDOztBQUVGLGFBQU8sVUFBVSxDQUFDLElBQUksQ0FBRSxNQUFNLENBQUUsQ0FBQztNQUNqQzs7O2lDQWhCVyxxQkFBcUI7QUFBckIseUJBQXFCLEdBRGpDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FDYixxQkFBcUIsS0FBckIscUJBQXFCO1dBQXJCLHFCQUFxQiIsImZpbGUiOiJyZXNvdXJjZXMvb3JkZXItYnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIG9yZGVyQnkgVmFsdWVDb252ZXJ0ZXIgXG4gKi9cblxuaW1wb3J0IHt2YWx1ZUNvbnZlcnRlcn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AdmFsdWVDb252ZXJ0ZXIoJ29yZGVyQnknKVxuZXhwb3J0IGNsYXNzIE9yZGVyQnlWYWx1ZUNvbnZlcnRlciB7XG5cdHRvVmlldyggY29sbGVjdGlvbiwgY3JpdGVyaWEsIGRpcmVjdGlvbiApIHtcblx0XHRsZXQgZGlyZWN0aW9uRmFjdG9yID0gMTtcblx0XHRpZiAoIGRpcmVjdGlvbiA9PT0gJ2Rlc2NlbmRpbmcnICkgeyBkaXJlY3Rpb25GYWN0b3IgPSAtMTsgfVxuXG5cdFx0bGV0IHNvcnRGbiA9IGZ1bmN0aW9uIHNvcnRGbiggYSwgYiApIHtcblx0XHRcdGlmICggYVtjcml0ZXJpYV0gPCBiW2NyaXRlcmlhXSApIHtcblx0XHRcdFx0cmV0dXJuIC0xICogZGlyZWN0aW9uRmFjdG9yO1xuXHRcdFx0fSBlbHNlIGlmICggYVtjcml0ZXJpYV0gPiBiW2NyaXRlcmlhXSApIHtcblx0XHRcdFx0cmV0dXJuIDEgKiBkaXJlY3Rpb25GYWN0b3I7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0cmV0dXJuIGNvbGxlY3Rpb24uc29ydCggc29ydEZuICk7XG5cdH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
