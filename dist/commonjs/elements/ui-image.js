
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

var UIImageAttribute = (function (_UIAttribute) {
	var _instanceInitializers = {};

	_inherits(UIImageAttribute, _UIAttribute);

	function UIImageAttribute() {
		_classCallCheck(this, _UIImageAttribute);

		_get(Object.getPrototypeOf(_UIImageAttribute.prototype), 'constructor', this).apply(this, arguments);

		_defineDecoratedPropertyDescriptor(this, 'size', _instanceInitializers);

		_defineDecoratedPropertyDescriptor(this, 'hidden', _instanceInitializers);

		_defineDecoratedPropertyDescriptor(this, 'disabled', _instanceInitializers);
	}

	_createDecoratedClass(UIImageAttribute, [{
		key: 'size',
		decorators: [_uiAttribute.bindableEnum.apply(undefined, _toConsumableArray(_constants.constants.VALID_SIZES))],
		initializer: null,
		enumerable: true
	}, {
		key: 'hidden',
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
	}], null, _instanceInitializers);

	var _UIImageAttribute = UIImageAttribute;
	UIImageAttribute = (0, _aureliaFramework.customAttribute)(_constants.constants.attributePrefix + 'image')(UIImageAttribute) || UIImageAttribute;
	return UIImageAttribute;
})(_uiAttribute.UIAttribute);

exports.UIImageAttribute = UIImageAttribute;

var UIImagesAttribute = (function (_UIAttribute2) {
	var _instanceInitializers2 = {};

	_inherits(UIImagesAttribute, _UIAttribute2);

	function UIImagesAttribute() {
		_classCallCheck(this, _UIImagesAttribute);

		_get(Object.getPrototypeOf(_UIImagesAttribute.prototype), 'constructor', this).apply(this, arguments);

		_defineDecoratedPropertyDescriptor(this, 'size', _instanceInitializers2);
	}

	_createDecoratedClass(UIImagesAttribute, [{
		key: 'size',
		decorators: [_uiAttribute.bindableEnum.apply(undefined, _toConsumableArray(_constants.constants.VALID_SIZES))],
		initializer: null,
		enumerable: true
	}], null, _instanceInitializers2);

	var _UIImagesAttribute = UIImagesAttribute;
	UIImagesAttribute = (0, _aureliaFramework.customAttribute)(_constants.constants.attributePrefix + 'images')(UIImagesAttribute) || UIImagesAttribute;
	return UIImagesAttribute;
})(_uiAttribute.UIAttribute);

exports.UIImagesAttribute = UIImagesAttribute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWltYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5QkFNVyxjQUFjOzsyQkFDa0IsaUJBQWlCOztnQ0FDM0MsbUJBQW1COztJQUdwQyxnQkFBZ0I7OztXQUFoQixnQkFBZ0I7O1VBQWhCLGdCQUFnQjs7Ozs7Ozs7Ozs7O3VCQUFoQixnQkFBZ0I7O2VBRTNCLDhEQUFpQixxQkFBVSxXQUFXLEVBQUU7Ozs7Ozs7VUFDaEIsS0FBSzs7Ozs7OztVQUNILEtBQUs7Ozs7O3lCQUpwQixnQkFBZ0I7QUFBaEIsaUJBQWdCLEdBRDVCLHVDQUFvQixxQkFBVSxlQUFlLFdBQVMsQ0FDMUMsZ0JBQWdCLEtBQWhCLGdCQUFnQjtRQUFoQixnQkFBZ0I7Ozs7O0lBVWhCLGlCQUFpQjs7O1dBQWpCLGlCQUFpQjs7VUFBakIsaUJBQWlCOzs7Ozs7Ozt1QkFBakIsaUJBQWlCOztlQUU1Qiw4REFBaUIscUJBQVUsV0FBVyxFQUFFOzs7OzswQkFGN0IsaUJBQWlCO0FBQWpCLGtCQUFpQixHQUQ3Qix1Q0FBb0IscUJBQVUsZUFBZSxZQUFVLENBQzNDLGlCQUFpQixLQUFqQixpQkFBaUI7UUFBakIsaUJBQWlCIiwiZmlsZSI6ImVsZW1lbnRzL3VpLWltYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBJbWFnZSAtIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vZWxlbWVudHMvaW1hZ2UuaHRtbFxuICovXG5cbmltcG9ydCB7Y29uc3RhbnRzfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtVSUF0dHJpYnV0ZSwgYmluZGFibGVFbnVtLCBiaW5kYWJsZVRvZ2dsZX0gZnJvbSAnLi4vdWktYXR0cmlidXRlJztcbmltcG9ydCB7Y3VzdG9tQXR0cmlidXRlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBjdXN0b21BdHRyaWJ1dGUoIGAke2NvbnN0YW50cy5hdHRyaWJ1dGVQcmVmaXh9aW1hZ2VgIClcbmV4cG9ydCBjbGFzcyBVSUltYWdlQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG5cdEBiaW5kYWJsZUVudW0oIC4uLmNvbnN0YW50cy5WQUxJRF9TSVpFUyApIHNpemU7XG5cdEBiaW5kYWJsZVRvZ2dsZSBoaWRkZW4gPSBmYWxzZTtcblx0QGJpbmRhYmxlVG9nZ2xlIGRpc2FibGVkID0gZmFsc2U7XG5cbn1cblxuXG5AY3VzdG9tQXR0cmlidXRlKCBgJHtjb25zdGFudHMuYXR0cmlidXRlUHJlZml4fWltYWdlc2AgKVxuZXhwb3J0IGNsYXNzIFVJSW1hZ2VzQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG5cdEBiaW5kYWJsZUVudW0oIC4uLmNvbnN0YW50cy5WQUxJRF9TSVpFUyApIHNpemU7XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
