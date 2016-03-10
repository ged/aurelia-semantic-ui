System.register([], function (_export) {
	"use strict";

	var CapitalizeValueConverter;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	return {
		setters: [],
		execute: function () {
			CapitalizeValueConverter = (function () {
				function CapitalizeValueConverter() {
					_classCallCheck(this, CapitalizeValueConverter);
				}

				_createClass(CapitalizeValueConverter, [{
					key: "toView",
					value: function toView(string) {
						if (!string) {
							return string;
						}
						return string.substr(0, 1).toUpperCase() + string.substr(1);
					}
				}]);

				return CapitalizeValueConverter;
			})();

			_export("CapitalizeValueConverter", CapitalizeValueConverter);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9jYXBpdGFsaXplLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztLQUlhLHdCQUF3Qjs7Ozs7Ozs7O0FBQXhCLDJCQUF3QjthQUF4Qix3QkFBd0I7MkJBQXhCLHdCQUF3Qjs7O2lCQUF4Qix3QkFBd0I7O1lBQzlCLGdCQUFFLE1BQU0sRUFBRztBQUNoQixVQUFLLENBQUMsTUFBTSxFQUFHO0FBQUUsY0FBTyxNQUFNLENBQUE7T0FBRTtBQUNoQyxhQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFDLFdBQVcsRUFBRSxHQUNuQyxNQUFNLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxDQUFDO01BQzFCOzs7V0FMVyx3QkFBd0IiLCJmaWxlIjoicmVzb3VyY2VzL2NhcGl0YWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENhcGl0YWxpemF0aW9uIHZhbHVlIGNvbnZlcnRlclxuICovXG5cbmV4cG9ydCBjbGFzcyBDYXBpdGFsaXplVmFsdWVDb252ZXJ0ZXIge1xuXHR0b1ZpZXcoIHN0cmluZyApIHtcblx0XHRpZiAoICFzdHJpbmcgKSB7IHJldHVybiBzdHJpbmcgfVxuXHRcdHJldHVybiBzdHJpbmcuc3Vic3RyKCAwLCAxICkudG9VcHBlckNhc2UoKSArXG5cdFx0ICAgICAgIHN0cmluZy5zdWJzdHIoIDEgKTtcblx0fVxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
