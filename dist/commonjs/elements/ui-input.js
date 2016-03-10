
"use strict";

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _constants = require('../constants');

var _uiAttribute = require('../ui-attribute');

var _aureliaFramework = require('aurelia-framework');

var UIInputAttribute = (function (_UIAttribute) {
	var _instanceInitializers = {};

	_inherits(UIInputAttribute, _UIAttribute);

	function UIInputAttribute() {
		_classCallCheck(this, _UIInputAttribute);

		_get(Object.getPrototypeOf(_UIInputAttribute.prototype), 'constructor', this).apply(this, arguments);

		_defineDecoratedPropertyDescriptor(this, 'focus', _instanceInitializers);

		_defineDecoratedPropertyDescriptor(this, 'loading', _instanceInitializers);

		_defineDecoratedPropertyDescriptor(this, 'disabled', _instanceInitializers);

		_defineDecoratedPropertyDescriptor(this, 'error', _instanceInitializers);

		_defineDecoratedPropertyDescriptor(this, 'size', _instanceInitializers);
	}

	_createDecoratedClass(UIInputAttribute, [{
		key: 'focus',
		decorators: [_uiAttribute.bindableToggle],
		initializer: function initializer() {
			return false;
		},
		enumerable: true
	}, {
		key: 'loading',
		decorators: [_uiAttribute.bindableToggle],
		initializer: function initializer() {
			return false;
		},
		enumerable: true
	}, {
		key: 'disabled',
		decorators: [_uiAttribute.bindableToggle],
		initializer: function initializer() {
			return false;
		},
		enumerable: true
	}, {
		key: 'error',
		decorators: [_uiAttribute.bindableToggle],
		initializer: function initializer() {
			return null;
		},
		enumerable: true
	}, {
		key: 'size',
		decorators: [_uiAttribute.bindableEnum.apply(undefined, _toConsumableArray(_constants.constants.VALID_SIZES))],
		initializer: null,
		enumerable: true
	}], null, _instanceInitializers);

	var _UIInputAttribute = UIInputAttribute;
	UIInputAttribute = (0, _aureliaFramework.customAttribute)(_constants.constants.attributePrefix + 'input')(UIInputAttribute) || UIInputAttribute;
	return UIInputAttribute;
})(_uiAttribute.UIAttribute);

exports.UIInputAttribute = UIInputAttribute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWlucHV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5QkFNVyxjQUFjOzsyQkFDa0IsaUJBQWlCOztnQ0FDM0MsbUJBQW1COztJQUdwQyxnQkFBZ0I7OztXQUFoQixnQkFBZ0I7O1VBQWhCLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFBaEIsZ0JBQWdCOzs7O1VBRUosS0FBSzs7Ozs7OztVQUNILEtBQUs7Ozs7Ozs7VUFDSixLQUFLOzs7Ozs7O1VBQ1IsSUFBSTs7Ozs7ZUFFM0IsOERBQWlCLHFCQUFVLFdBQVcsRUFBRTs7Ozs7eUJBUDdCLGdCQUFnQjtBQUFoQixpQkFBZ0IsR0FENUIsdUNBQW9CLHFCQUFVLGVBQWUsV0FBUyxDQUMxQyxnQkFBZ0IsS0FBaEIsZ0JBQWdCO1FBQWhCLGdCQUFnQiIsImZpbGUiOiJlbGVtZW50cy91aS1pbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogSW5wdXQgLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL2VsZW1lbnRzL2lucHV0Lmh0bWxcbiAqL1xuXG5pbXBvcnQge2NvbnN0YW50c30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7VUlBdHRyaWJ1dGUsIGJpbmRhYmxlRW51bSwgYmluZGFibGVUb2dnbGV9IGZyb20gJy4uL3VpLWF0dHJpYnV0ZSc7XG5pbXBvcnQge2N1c3RvbUF0dHJpYnV0ZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AY3VzdG9tQXR0cmlidXRlKCBgJHtjb25zdGFudHMuYXR0cmlidXRlUHJlZml4fWlucHV0YCApXG5leHBvcnQgY2xhc3MgVUlJbnB1dEF0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGVUb2dnbGUgZm9jdXMgPSBmYWxzZTtcblx0QGJpbmRhYmxlVG9nZ2xlIGxvYWRpbmcgPSBmYWxzZTtcblx0QGJpbmRhYmxlVG9nZ2xlIGRpc2FibGVkID0gZmFsc2U7XG5cdEBiaW5kYWJsZVRvZ2dsZSBlcnJvciA9IG51bGw7XG5cblx0QGJpbmRhYmxlRW51bSggLi4uY29uc3RhbnRzLlZBTElEX1NJWkVTICkgc2l6ZTtcblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
