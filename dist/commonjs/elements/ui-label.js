
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

var UILabelAttribute = (function (_UIAttribute) {
	var _instanceInitializers = {};

	_inherits(UILabelAttribute, _UIAttribute);

	function UILabelAttribute() {
		_classCallCheck(this, _UILabelAttribute);

		_get(Object.getPrototypeOf(_UILabelAttribute.prototype), 'constructor', this).apply(this, arguments);

		_defineDecoratedPropertyDescriptor(this, 'color', _instanceInitializers);

		_defineDecoratedPropertyDescriptor(this, 'size', _instanceInitializers);
	}

	_createDecoratedClass(UILabelAttribute, [{
		key: 'color',
		decorators: [_uiAttribute.bindableEnum.apply(undefined, _toConsumableArray(_constants.constants.VALID_COLORS))],
		initializer: null,
		enumerable: true
	}, {
		key: 'size',
		decorators: [_uiAttribute.bindableEnum.apply(undefined, _toConsumableArray(_constants.constants.VALID_SIZES))],
		initializer: null,
		enumerable: true
	}], null, _instanceInitializers);

	var _UILabelAttribute = UILabelAttribute;
	UILabelAttribute = (0, _aureliaFramework.customAttribute)(_constants.constants.attributePrefix + 'label')(UILabelAttribute) || UILabelAttribute;
	return UILabelAttribute;
})(_uiAttribute.UIAttribute);

exports.UILabelAttribute = UILabelAttribute;

var UILabelsAttribute = (function (_UIAttribute2) {
	var _instanceInitializers2 = {};

	_inherits(UILabelsAttribute, _UIAttribute2);

	function UILabelsAttribute() {
		_classCallCheck(this, _UILabelsAttribute);

		_get(Object.getPrototypeOf(_UILabelsAttribute.prototype), 'constructor', this).apply(this, arguments);

		_defineDecoratedPropertyDescriptor(this, 'color', _instanceInitializers2);

		_defineDecoratedPropertyDescriptor(this, 'size', _instanceInitializers2);
	}

	_createDecoratedClass(UILabelsAttribute, [{
		key: 'color',
		decorators: [_uiAttribute.bindableEnum.apply(undefined, _toConsumableArray(_constants.constants.VALID_COLORS))],
		initializer: null,
		enumerable: true
	}, {
		key: 'size',
		decorators: [_uiAttribute.bindableEnum.apply(undefined, _toConsumableArray(_constants.constants.VALID_SIZES))],
		initializer: null,
		enumerable: true
	}], null, _instanceInitializers2);

	var _UILabelsAttribute = UILabelsAttribute;
	UILabelsAttribute = (0, _aureliaFramework.customAttribute)(_constants.constants.attributePrefix + 'labels')(UILabelsAttribute) || UILabelsAttribute;
	return UILabelsAttribute;
})(_uiAttribute.UIAttribute);

exports.UILabelsAttribute = UILabelsAttribute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWxhYmVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5QkFNVyxjQUFjOzsyQkFDa0IsaUJBQWlCOztnQ0FDM0MsbUJBQW1COztJQUdwQyxnQkFBZ0I7OztXQUFoQixnQkFBZ0I7O1VBQWhCLGdCQUFnQjs7Ozs7Ozs7Ozt1QkFBaEIsZ0JBQWdCOztlQUUzQiw4REFBaUIscUJBQVUsWUFBWSxFQUFFOzs7OztlQUN6Qyw4REFBaUIscUJBQVUsV0FBVyxFQUFFOzs7Ozt5QkFIN0IsZ0JBQWdCO0FBQWhCLGlCQUFnQixHQUQ1Qix1Q0FBb0IscUJBQVUsZUFBZSxXQUFTLENBQzFDLGdCQUFnQixLQUFoQixnQkFBZ0I7UUFBaEIsZ0JBQWdCOzs7OztJQVNoQixpQkFBaUI7OztXQUFqQixpQkFBaUI7O1VBQWpCLGlCQUFpQjs7Ozs7Ozs7Ozt1QkFBakIsaUJBQWlCOztlQUU1Qiw4REFBaUIscUJBQVUsWUFBWSxFQUFFOzs7OztlQUN6Qyw4REFBaUIscUJBQVUsV0FBVyxFQUFFOzs7OzswQkFIN0IsaUJBQWlCO0FBQWpCLGtCQUFpQixHQUQ3Qix1Q0FBb0IscUJBQVUsZUFBZSxZQUFVLENBQzNDLGlCQUFpQixLQUFqQixpQkFBaUI7UUFBakIsaUJBQWlCIiwiZmlsZSI6ImVsZW1lbnRzL3VpLWxhYmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBMYWJlbCAtIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vZWxlbWVudHMvbGFiZWwuaHRtbFxuICovXG5cbmltcG9ydCB7Y29uc3RhbnRzfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtVSUF0dHJpYnV0ZSwgYmluZGFibGVFbnVtLCBiaW5kYWJsZVRvZ2dsZX0gZnJvbSAnLi4vdWktYXR0cmlidXRlJztcbmltcG9ydCB7Y3VzdG9tQXR0cmlidXRlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBjdXN0b21BdHRyaWJ1dGUoIGAke2NvbnN0YW50cy5hdHRyaWJ1dGVQcmVmaXh9bGFiZWxgIClcbmV4cG9ydCBjbGFzcyBVSUxhYmVsQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG5cdEBiaW5kYWJsZUVudW0oIC4uLmNvbnN0YW50cy5WQUxJRF9DT0xPUlMgKSBjb2xvcjtcblx0QGJpbmRhYmxlRW51bSggLi4uY29uc3RhbnRzLlZBTElEX1NJWkVTICkgc2l6ZTtcblxufVxuXG5cbkBjdXN0b21BdHRyaWJ1dGUoIGAke2NvbnN0YW50cy5hdHRyaWJ1dGVQcmVmaXh9bGFiZWxzYCApXG5leHBvcnQgY2xhc3MgVUlMYWJlbHNBdHRyaWJ1dGUgZXh0ZW5kcyBVSUF0dHJpYnV0ZSB7XG5cblx0QGJpbmRhYmxlRW51bSggLi4uY29uc3RhbnRzLlZBTElEX0NPTE9SUyApIGNvbG9yO1xuXHRAYmluZGFibGVFbnVtKCAuLi5jb25zdGFudHMuVkFMSURfU0laRVMgKSBzaXplO1xuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
