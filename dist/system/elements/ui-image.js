System.register(['../constants', '../ui-attribute', 'aurelia-framework'], function (_export) {
	"use strict";

	var constants, UIAttribute, bindableEnum, bindableToggle, customAttribute, UIImageAttribute, UIImagesAttribute;

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	return {
		setters: [function (_constants) {
			constants = _constants.constants;
		}, function (_uiAttribute) {
			UIAttribute = _uiAttribute.UIAttribute;
			bindableEnum = _uiAttribute.bindableEnum;
			bindableToggle = _uiAttribute.bindableToggle;
		}, function (_aureliaFramework) {
			customAttribute = _aureliaFramework.customAttribute;
		}],
		execute: function () {
			UIImageAttribute = (function (_UIAttribute) {
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
					decorators: [bindableEnum.apply(undefined, _toConsumableArray(constants.VALID_SIZES))],
					initializer: null,
					enumerable: true
				}, {
					key: 'hidden',
					decorators: [bindableToggle],
					initializer: function initializer() {
						return false;
					},
					enumerable: true
				}, {
					key: 'disabled',
					decorators: [bindableToggle],
					initializer: function initializer() {
						return false;
					},
					enumerable: true
				}], null, _instanceInitializers);

				var _UIImageAttribute = UIImageAttribute;
				UIImageAttribute = customAttribute(constants.attributePrefix + 'image')(UIImageAttribute) || UIImageAttribute;
				return UIImageAttribute;
			})(UIAttribute);

			_export('UIImageAttribute', UIImageAttribute);

			UIImagesAttribute = (function (_UIAttribute2) {
				var _instanceInitializers2 = {};

				_inherits(UIImagesAttribute, _UIAttribute2);

				function UIImagesAttribute() {
					_classCallCheck(this, _UIImagesAttribute);

					_get(Object.getPrototypeOf(_UIImagesAttribute.prototype), 'constructor', this).apply(this, arguments);

					_defineDecoratedPropertyDescriptor(this, 'size', _instanceInitializers2);
				}

				_createDecoratedClass(UIImagesAttribute, [{
					key: 'size',
					decorators: [bindableEnum.apply(undefined, _toConsumableArray(constants.VALID_SIZES))],
					initializer: null,
					enumerable: true
				}], null, _instanceInitializers2);

				var _UIImagesAttribute = UIImagesAttribute;
				UIImagesAttribute = customAttribute(constants.attributePrefix + 'images')(UIImagesAttribute) || UIImagesAttribute;
				return UIImagesAttribute;
			})(UIAttribute);

			_export('UIImagesAttribute', UIImagesAttribute);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWltYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxhQUFZLENBQUM7OzRFQVdBLGdCQUFnQixFQVVoQixpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBZnRCLFNBQVM7OzhCQUNULFdBQVc7K0JBQUUsWUFBWTtpQ0FBRSxjQUFjOzt1Q0FDekMsZUFBZTs7O0FBR1YsbUJBQWdCOzs7Y0FBaEIsZ0JBQWdCOzthQUFoQixnQkFBZ0I7Ozs7Ozs7Ozs7OzswQkFBaEIsZ0JBQWdCOztrQkFFM0IsWUFBWSxxQ0FBSyxTQUFTLENBQUMsV0FBVyxFQUFFOzs7OztrQkFDeEMsY0FBYzs7YUFBVSxLQUFLOzs7OztrQkFDN0IsY0FBYzs7YUFBWSxLQUFLOzs7Ozs0QkFKcEIsZ0JBQWdCO0FBQWhCLG9CQUFnQixHQUQ1QixlQUFlLENBQUssU0FBUyxDQUFDLGVBQWUsV0FBUyxDQUMxQyxnQkFBZ0IsS0FBaEIsZ0JBQWdCO1dBQWhCLGdCQUFnQjtNQUFTLFdBQVc7Ozs7QUFVcEMsb0JBQWlCOzs7Y0FBakIsaUJBQWlCOzthQUFqQixpQkFBaUI7Ozs7Ozs7OzBCQUFqQixpQkFBaUI7O2tCQUU1QixZQUFZLHFDQUFLLFNBQVMsQ0FBQyxXQUFXLEVBQUU7Ozs7OzZCQUY3QixpQkFBaUI7QUFBakIscUJBQWlCLEdBRDdCLGVBQWUsQ0FBSyxTQUFTLENBQUMsZUFBZSxZQUFVLENBQzNDLGlCQUFpQixLQUFqQixpQkFBaUI7V0FBakIsaUJBQWlCO01BQVMsV0FBVyIsImZpbGUiOiJlbGVtZW50cy91aS1pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogSW1hZ2UgLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL2VsZW1lbnRzL2ltYWdlLmh0bWxcbiAqL1xuXG5pbXBvcnQge2NvbnN0YW50c30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7VUlBdHRyaWJ1dGUsIGJpbmRhYmxlRW51bSwgYmluZGFibGVUb2dnbGV9IGZyb20gJy4uL3VpLWF0dHJpYnV0ZSc7XG5pbXBvcnQge2N1c3RvbUF0dHJpYnV0ZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AY3VzdG9tQXR0cmlidXRlKCBgJHtjb25zdGFudHMuYXR0cmlidXRlUHJlZml4fWltYWdlYCApXG5leHBvcnQgY2xhc3MgVUlJbWFnZUF0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGVFbnVtKCAuLi5jb25zdGFudHMuVkFMSURfU0laRVMgKSBzaXplO1xuXHRAYmluZGFibGVUb2dnbGUgaGlkZGVuID0gZmFsc2U7XG5cdEBiaW5kYWJsZVRvZ2dsZSBkaXNhYmxlZCA9IGZhbHNlO1xuXG59XG5cblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1pbWFnZXNgIClcbmV4cG9ydCBjbGFzcyBVSUltYWdlc0F0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGVFbnVtKCAuLi5jb25zdGFudHMuVkFMSURfU0laRVMgKSBzaXplO1xuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
