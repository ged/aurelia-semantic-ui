System.register(['../constants', '../ui-attribute', 'aurelia-framework'], function (_export) {
	"use strict";

	var constants, UIAttribute, bindableEnum, bindableToggle, customAttribute, UILabelAttribute, UILabelsAttribute;

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
			UILabelAttribute = (function (_UIAttribute) {
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
					decorators: [bindableEnum.apply(undefined, _toConsumableArray(constants.VALID_COLORS))],
					initializer: null,
					enumerable: true
				}, {
					key: 'size',
					decorators: [bindableEnum.apply(undefined, _toConsumableArray(constants.VALID_SIZES))],
					initializer: null,
					enumerable: true
				}], null, _instanceInitializers);

				var _UILabelAttribute = UILabelAttribute;
				UILabelAttribute = customAttribute(constants.attributePrefix + 'label')(UILabelAttribute) || UILabelAttribute;
				return UILabelAttribute;
			})(UIAttribute);

			_export('UILabelAttribute', UILabelAttribute);

			UILabelsAttribute = (function (_UIAttribute2) {
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
					decorators: [bindableEnum.apply(undefined, _toConsumableArray(constants.VALID_COLORS))],
					initializer: null,
					enumerable: true
				}, {
					key: 'size',
					decorators: [bindableEnum.apply(undefined, _toConsumableArray(constants.VALID_SIZES))],
					initializer: null,
					enumerable: true
				}], null, _instanceInitializers2);

				var _UILabelsAttribute = UILabelsAttribute;
				UILabelsAttribute = customAttribute(constants.attributePrefix + 'labels')(UILabelsAttribute) || UILabelsAttribute;
				return UILabelsAttribute;
			})(UIAttribute);

			_export('UILabelsAttribute', UILabelsAttribute);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWxhYmVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxhQUFZLENBQUM7OzRFQVdBLGdCQUFnQixFQVNoQixpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBZHRCLFNBQVM7OzhCQUNULFdBQVc7K0JBQUUsWUFBWTtpQ0FBRSxjQUFjOzt1Q0FDekMsZUFBZTs7O0FBR1YsbUJBQWdCOzs7Y0FBaEIsZ0JBQWdCOzthQUFoQixnQkFBZ0I7Ozs7Ozs7Ozs7MEJBQWhCLGdCQUFnQjs7a0JBRTNCLFlBQVkscUNBQUssU0FBUyxDQUFDLFlBQVksRUFBRTs7Ozs7a0JBQ3pDLFlBQVkscUNBQUssU0FBUyxDQUFDLFdBQVcsRUFBRTs7Ozs7NEJBSDdCLGdCQUFnQjtBQUFoQixvQkFBZ0IsR0FENUIsZUFBZSxDQUFLLFNBQVMsQ0FBQyxlQUFlLFdBQVMsQ0FDMUMsZ0JBQWdCLEtBQWhCLGdCQUFnQjtXQUFoQixnQkFBZ0I7TUFBUyxXQUFXOzs7O0FBU3BDLG9CQUFpQjs7O2NBQWpCLGlCQUFpQjs7YUFBakIsaUJBQWlCOzs7Ozs7Ozs7OzBCQUFqQixpQkFBaUI7O2tCQUU1QixZQUFZLHFDQUFLLFNBQVMsQ0FBQyxZQUFZLEVBQUU7Ozs7O2tCQUN6QyxZQUFZLHFDQUFLLFNBQVMsQ0FBQyxXQUFXLEVBQUU7Ozs7OzZCQUg3QixpQkFBaUI7QUFBakIscUJBQWlCLEdBRDdCLGVBQWUsQ0FBSyxTQUFTLENBQUMsZUFBZSxZQUFVLENBQzNDLGlCQUFpQixLQUFqQixpQkFBaUI7V0FBakIsaUJBQWlCO01BQVMsV0FBVyIsImZpbGUiOiJlbGVtZW50cy91aS1sYWJlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogTGFiZWwgLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL2VsZW1lbnRzL2xhYmVsLmh0bWxcbiAqL1xuXG5pbXBvcnQge2NvbnN0YW50c30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7VUlBdHRyaWJ1dGUsIGJpbmRhYmxlRW51bSwgYmluZGFibGVUb2dnbGV9IGZyb20gJy4uL3VpLWF0dHJpYnV0ZSc7XG5pbXBvcnQge2N1c3RvbUF0dHJpYnV0ZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AY3VzdG9tQXR0cmlidXRlKCBgJHtjb25zdGFudHMuYXR0cmlidXRlUHJlZml4fWxhYmVsYCApXG5leHBvcnQgY2xhc3MgVUlMYWJlbEF0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGVFbnVtKCAuLi5jb25zdGFudHMuVkFMSURfQ09MT1JTICkgY29sb3I7XG5cdEBiaW5kYWJsZUVudW0oIC4uLmNvbnN0YW50cy5WQUxJRF9TSVpFUyApIHNpemU7XG5cbn1cblxuXG5AY3VzdG9tQXR0cmlidXRlKCBgJHtjb25zdGFudHMuYXR0cmlidXRlUHJlZml4fWxhYmVsc2AgKVxuZXhwb3J0IGNsYXNzIFVJTGFiZWxzQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG5cdEBiaW5kYWJsZUVudW0oIC4uLmNvbnN0YW50cy5WQUxJRF9DT0xPUlMgKSBjb2xvcjtcblx0QGJpbmRhYmxlRW51bSggLi4uY29uc3RhbnRzLlZBTElEX1NJWkVTICkgc2l6ZTtcblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
