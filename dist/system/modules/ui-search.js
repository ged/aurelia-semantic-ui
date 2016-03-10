System.register(['../ui-attribute', 'aurelia-framework'], function (_export) {
	"use strict";

	var UIAttribute, bindableToggle, bindableEnum, inject, customAttribute, children, bindable, UISearchAttribute;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	return {
		setters: [function (_uiAttribute) {
			UIAttribute = _uiAttribute.UIAttribute;
			bindableToggle = _uiAttribute.bindableToggle;
			bindableEnum = _uiAttribute.bindableEnum;
		}, function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
			customAttribute = _aureliaFramework.customAttribute;
			children = _aureliaFramework.children;
			bindable = _aureliaFramework.bindable;
		}],
		execute: function () {
			UISearchAttribute = (function (_UIAttribute) {
				_inherits(UISearchAttribute, _UIAttribute);

				function UISearchAttribute() {
					_classCallCheck(this, _UISearchAttribute);

					_get(Object.getPrototypeOf(_UISearchAttribute.prototype), 'constructor', this).apply(this, arguments);
				}

				_createClass(UISearchAttribute, [{
					key: 'attached',
					value: function attached() {
						this.logger.debug("Activating search on ", this.element);
						$(this.element).search();
					}
				}]);

				var _UISearchAttribute = UISearchAttribute;
				UISearchAttribute = customAttribute('ui-search')(UISearchAttribute) || UISearchAttribute;
				return UISearchAttribute;
			})(UIAttribute);

			_export('UISearchAttribute', UISearchAttribute);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdWktc2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxhQUFZLENBQUM7OzZGQVVBLGlCQUFpQjs7Ozs7Ozs7Ozs7OzhCQUp0QixXQUFXO2lDQUFFLGNBQWM7K0JBQUUsWUFBWTs7OEJBQ3pDLE1BQU07dUNBQUUsZUFBZTtnQ0FBRSxRQUFRO2dDQUFFLFFBQVE7OztBQUd0QyxvQkFBaUI7Y0FBakIsaUJBQWlCOzthQUFqQixpQkFBaUI7Ozs7OztpQkFBakIsaUJBQWlCOztZQUVyQixvQkFBRztBQUNWLFVBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFFLHVCQUF1QixFQUFFLElBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQztBQUMzRCxPQUFDLENBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO01BQzNCOzs7NkJBTFcsaUJBQWlCO0FBQWpCLHFCQUFpQixHQUQ3QixlQUFlLENBQUUsV0FBVyxDQUFFLENBQ2xCLGlCQUFpQixLQUFqQixpQkFBaUI7V0FBakIsaUJBQWlCO01BQVMsV0FBVyIsImZpbGUiOiJtb2R1bGVzL3VpLXNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogU2VhcmNoIC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9tb2R1bGVzL3NlYXJjaC5odG1sXG4gKi9cblxuaW1wb3J0IHtVSUF0dHJpYnV0ZSwgYmluZGFibGVUb2dnbGUsIGJpbmRhYmxlRW51bX0gZnJvbSAnLi4vdWktYXR0cmlidXRlJztcbmltcG9ydCB7aW5qZWN0LCBjdXN0b21BdHRyaWJ1dGUsIGNoaWxkcmVuLCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AY3VzdG9tQXR0cmlidXRlKCAndWktc2VhcmNoJyApXG5leHBvcnQgY2xhc3MgVUlTZWFyY2hBdHRyaWJ1dGUgZXh0ZW5kcyBVSUF0dHJpYnV0ZSB7XG5cblx0YXR0YWNoZWQoKSB7XG5cdFx0dGhpcy5sb2dnZXIuZGVidWcoIFwiQWN0aXZhdGluZyBzZWFyY2ggb24gXCIsIHRoaXMuZWxlbWVudCApO1xuXHRcdCQoIHRoaXMuZWxlbWVudCApLnNlYXJjaCgpO1xuXHR9XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
