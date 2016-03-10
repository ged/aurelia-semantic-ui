
"use strict";

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _uiAttribute = require('../ui-attribute');

var _aureliaFramework = require('aurelia-framework');

var UIFormAttribute = (function (_UIAttribute) {
	var _instanceInitializers = {};

	_inherits(UIFormAttribute, _UIAttribute);

	function UIFormAttribute() {
		_classCallCheck(this, _UIFormAttribute);

		_get(Object.getPrototypeOf(_UIFormAttribute.prototype), 'constructor', this).apply(this, arguments);

		_defineDecoratedPropertyDescriptor(this, 'loading', _instanceInitializers);

		_defineDecoratedPropertyDescriptor(this, 'state', _instanceInitializers);

		_defineDecoratedPropertyDescriptor(this, 'fields', _instanceInitializers);
	}

	_createDecoratedClass(UIFormAttribute, [{
		key: 'loading',
		decorators: [_uiAttribute.bindableToggle],
		initializer: function initializer() {
			return false;
		},
		enumerable: true
	}, {
		key: 'state',
		decorators: [(0, _uiAttribute.bindableEnum)('error', 'success', 'warning')],
		initializer: null,
		enumerable: true
	}, {
		key: 'fields',
		decorators: [(0, _aureliaFramework.children)('.field')],
		initializer: null,
		enumerable: true
	}], null, _instanceInitializers);

	var _UIFormAttribute = UIFormAttribute;
	UIFormAttribute = (0, _aureliaFramework.customAttribute)('ui-form')(UIFormAttribute) || UIFormAttribute;
	return UIFormAttribute;
})(_uiAttribute.UIAttribute);

exports.UIFormAttribute = UIFormAttribute;

var UICheckboxAttribute = (function (_UIAttribute2) {
	_inherits(UICheckboxAttribute, _UIAttribute2);

	function UICheckboxAttribute() {
		_classCallCheck(this, _UICheckboxAttribute);

		_get(Object.getPrototypeOf(_UICheckboxAttribute.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(UICheckboxAttribute, [{
		key: 'attached',
		value: function attached() {
			this.logger.debug("Activating a ui-checkbox");
			$(this.element).checkbox();
		}
	}]);

	var _UICheckboxAttribute = UICheckboxAttribute;
	UICheckboxAttribute = (0, _aureliaFramework.customAttribute)('ui-checkbox')(UICheckboxAttribute) || UICheckboxAttribute;
	return UICheckboxAttribute;
})(_uiAttribute.UIAttribute);

exports.UICheckboxAttribute = UICheckboxAttribute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL3VpLWZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQU0yQyxpQkFBaUI7O2dDQUNmLG1CQUFtQjs7SUFHaEUsZUFBZTs7O1dBQWYsZUFBZTs7VUFBZixlQUFlOzs7Ozs7Ozs7Ozs7dUJBQWYsZUFBZTs7OztVQUVELEtBQUs7Ozs7O2VBQzlCLCtCQUFhLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDOzs7OztlQUMzQyxnQ0FBVSxRQUFRLENBQUU7Ozs7O3dCQUpULGVBQWU7QUFBZixnQkFBZSxHQUQzQix1Q0FBaUIsU0FBUyxDQUFFLENBQ2hCLGVBQWUsS0FBZixlQUFlO1FBQWYsZUFBZTs7Ozs7SUFVZixtQkFBbUI7V0FBbkIsbUJBQW1COztVQUFuQixtQkFBbUI7Ozs7OztjQUFuQixtQkFBbUI7O1NBRXZCLG9CQUFHO0FBQ1YsT0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUUsMEJBQTBCLENBQUUsQ0FBQztBQUNoRCxJQUFDLENBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0dBQzdCOzs7NEJBTFcsbUJBQW1CO0FBQW5CLG9CQUFtQixHQUQvQix1Q0FBaUIsYUFBYSxDQUFFLENBQ3BCLG1CQUFtQixLQUFuQixtQkFBbUI7UUFBbkIsbUJBQW1CIiwiZmlsZSI6ImNvbGxlY3Rpb25zL3VpLWZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIEZvcm0gLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL2NvbGxlY3Rpb25zL2Zvcm0uaHRtbFxuICovXG5cbmltcG9ydCB7VUlBdHRyaWJ1dGUsIGJpbmRhYmxlVG9nZ2xlLCBiaW5kYWJsZUVudW19IGZyb20gJy4uL3VpLWF0dHJpYnV0ZSc7XG5pbXBvcnQge2luamVjdCwgY3VzdG9tQXR0cmlidXRlLCBjaGlsZHJlbiwgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUF0dHJpYnV0ZSggJ3VpLWZvcm0nIClcbmV4cG9ydCBjbGFzcyBVSUZvcm1BdHRyaWJ1dGUgZXh0ZW5kcyBVSUF0dHJpYnV0ZSB7XG5cblx0QGJpbmRhYmxlVG9nZ2xlIGxvYWRpbmcgPSBmYWxzZTtcblx0QGJpbmRhYmxlRW51bSgnZXJyb3InLCAnc3VjY2VzcycsICd3YXJuaW5nJykgc3RhdGU7XG5cdEBjaGlsZHJlbiggJy5maWVsZCcgKSBmaWVsZHM7XG5cbn1cblxuXG5AY3VzdG9tQXR0cmlidXRlKCAndWktY2hlY2tib3gnIClcbmV4cG9ydCBjbGFzcyBVSUNoZWNrYm94QXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG5cdGF0dGFjaGVkKCkge1xuXHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBcIkFjdGl2YXRpbmcgYSB1aS1jaGVja2JveFwiICk7XG5cdFx0JCggdGhpcy5lbGVtZW50ICkuY2hlY2tib3goKTtcblx0fVxuXG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
