define(['exports', '../ui-attribute', 'aurelia-framework'], function (exports, _uiAttribute, _aureliaFramework) {
	"use strict";

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var UISearchAttribute = (function (_UIAttribute) {
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
		UISearchAttribute = (0, _aureliaFramework.customAttribute)('ui-search')(UISearchAttribute) || UISearchAttribute;
		return UISearchAttribute;
	})(_uiAttribute.UIAttribute);

	exports.UISearchAttribute = UISearchAttribute;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdWktc2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxhQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7O0tBVUEsaUJBQWlCO1lBQWpCLGlCQUFpQjs7V0FBakIsaUJBQWlCOzs7Ozs7ZUFBakIsaUJBQWlCOztVQUVyQixvQkFBRztBQUNWLFFBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFFLHVCQUF1QixFQUFFLElBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQztBQUMzRCxLQUFDLENBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzNCOzs7MkJBTFcsaUJBQWlCO0FBQWpCLG1CQUFpQixHQUQ3QixzQkFGZSxlQUFlLEVBRWIsV0FBVyxDQUFFLENBQ2xCLGlCQUFpQixLQUFqQixpQkFBaUI7U0FBakIsaUJBQWlCO2lCQUp0QixXQUFXIiwiZmlsZSI6Im1vZHVsZXMvdWktc2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBTZWFyY2ggLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL21vZHVsZXMvc2VhcmNoLmh0bWxcbiAqL1xuXG5pbXBvcnQge1VJQXR0cmlidXRlLCBiaW5kYWJsZVRvZ2dsZSwgYmluZGFibGVFbnVtfSBmcm9tICcuLi91aS1hdHRyaWJ1dGUnO1xuaW1wb3J0IHtpbmplY3QsIGN1c3RvbUF0dHJpYnV0ZSwgY2hpbGRyZW4sIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBjdXN0b21BdHRyaWJ1dGUoICd1aS1zZWFyY2gnIClcbmV4cG9ydCBjbGFzcyBVSVNlYXJjaEF0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcblxuXHRhdHRhY2hlZCgpIHtcblx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggXCJBY3RpdmF0aW5nIHNlYXJjaCBvbiBcIiwgdGhpcy5lbGVtZW50ICk7XG5cdFx0JCggdGhpcy5lbGVtZW50ICkuc2VhcmNoKCk7XG5cdH1cblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
