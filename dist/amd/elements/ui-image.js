define(['exports', '../constants', '../ui-attribute', 'aurelia-framework'], function (exports, _constants, _uiAttribute, _aureliaFramework) {
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWltYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxhQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQVdBLGdCQUFnQjs7O1lBQWhCLGdCQUFnQjs7V0FBaEIsZ0JBQWdCOzs7Ozs7Ozs7Ozs7d0JBQWhCLGdCQUFnQjs7Z0JBRTNCLGFBTm1CLFlBQVkscUNBTWQsV0FQWCxTQUFTLENBT1ksV0FBVyxFQUFFOzs7Ozs2QkFOUCxjQUFjOztXQU92QixLQUFLOzs7Ozs2QkFQSSxjQUFjOztXQVFyQixLQUFLOzs7OzswQkFKcEIsZ0JBQWdCO0FBQWhCLGtCQUFnQixHQUQ1QixzQkFGTyxlQUFlLEVBRUYsV0FKYixTQUFTLENBSWMsZUFBZSxXQUFTLENBQzFDLGdCQUFnQixLQUFoQixnQkFBZ0I7U0FBaEIsZ0JBQWdCO2lCQUpyQixXQUFXOzs7O0tBY04saUJBQWlCOzs7WUFBakIsaUJBQWlCOztXQUFqQixpQkFBaUI7Ozs7Ozs7O3dCQUFqQixpQkFBaUI7O2dCQUU1QixhQWhCbUIsWUFBWSxxQ0FnQmQsV0FqQlgsU0FBUyxDQWlCWSxXQUFXLEVBQUU7Ozs7OzJCQUY3QixpQkFBaUI7QUFBakIsbUJBQWlCLEdBRDdCLHNCQVpPLGVBQWUsRUFZRixXQWRiLFNBQVMsQ0FjYyxlQUFlLFlBQVUsQ0FDM0MsaUJBQWlCLEtBQWpCLGlCQUFpQjtTQUFqQixpQkFBaUI7aUJBZHRCLFdBQVciLCJmaWxlIjoiZWxlbWVudHMvdWktaW1hZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIEltYWdlIC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9lbGVtZW50cy9pbWFnZS5odG1sXG4gKi9cblxuaW1wb3J0IHtjb25zdGFudHN9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge1VJQXR0cmlidXRlLCBiaW5kYWJsZUVudW0sIGJpbmRhYmxlVG9nZ2xlfSBmcm9tICcuLi91aS1hdHRyaWJ1dGUnO1xuaW1wb3J0IHtjdXN0b21BdHRyaWJ1dGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1pbWFnZWAgKVxuZXhwb3J0IGNsYXNzIFVJSW1hZ2VBdHRyaWJ1dGUgZXh0ZW5kcyBVSUF0dHJpYnV0ZSB7XG5cblx0QGJpbmRhYmxlRW51bSggLi4uY29uc3RhbnRzLlZBTElEX1NJWkVTICkgc2l6ZTtcblx0QGJpbmRhYmxlVG9nZ2xlIGhpZGRlbiA9IGZhbHNlO1xuXHRAYmluZGFibGVUb2dnbGUgZGlzYWJsZWQgPSBmYWxzZTtcblxufVxuXG5cbkBjdXN0b21BdHRyaWJ1dGUoIGAke2NvbnN0YW50cy5hdHRyaWJ1dGVQcmVmaXh9aW1hZ2VzYCApXG5leHBvcnQgY2xhc3MgVUlJbWFnZXNBdHRyaWJ1dGUgZXh0ZW5kcyBVSUF0dHJpYnV0ZSB7XG5cblx0QGJpbmRhYmxlRW51bSggLi4uY29uc3RhbnRzLlZBTElEX1NJWkVTICkgc2l6ZTtcblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
