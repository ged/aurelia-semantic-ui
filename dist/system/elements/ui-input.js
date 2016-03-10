System.register(['../constants', '../ui-attribute', 'aurelia-framework'], function (_export) {
	"use strict";

	var constants, UIAttribute, bindableEnum, bindableToggle, customAttribute, UIInputAttribute;

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
			UIInputAttribute = (function (_UIAttribute) {
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
					decorators: [bindableToggle],
					initializer: function initializer() {
						return false;
					},
					enumerable: true
				}, {
					key: 'loading',
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
				}, {
					key: 'error',
					decorators: [bindableToggle],
					initializer: function initializer() {
						return null;
					},
					enumerable: true
				}, {
					key: 'size',
					decorators: [bindableEnum.apply(undefined, _toConsumableArray(constants.VALID_SIZES))],
					initializer: null,
					enumerable: true
				}], null, _instanceInitializers);

				var _UIInputAttribute = UIInputAttribute;
				UIInputAttribute = customAttribute(constants.attributePrefix + 'input')(UIInputAttribute) || UIInputAttribute;
				return UIInputAttribute;
			})(UIAttribute);

			_export('UIInputAttribute', UIInputAttribute);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWlucHV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxhQUFZLENBQUM7OzRFQVdBLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7OzswQkFMckIsU0FBUzs7OEJBQ1QsV0FBVzsrQkFBRSxZQUFZO2lDQUFFLGNBQWM7O3VDQUN6QyxlQUFlOzs7QUFHVixtQkFBZ0I7OztjQUFoQixnQkFBZ0I7O2FBQWhCLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7OzswQkFBaEIsZ0JBQWdCOztrQkFFM0IsY0FBYzs7YUFBUyxLQUFLOzs7OztrQkFDNUIsY0FBYzs7YUFBVyxLQUFLOzs7OztrQkFDOUIsY0FBYzs7YUFBWSxLQUFLOzs7OztrQkFDL0IsY0FBYzs7YUFBUyxJQUFJOzs7OztrQkFFM0IsWUFBWSxxQ0FBSyxTQUFTLENBQUMsV0FBVyxFQUFFOzs7Ozs0QkFQN0IsZ0JBQWdCO0FBQWhCLG9CQUFnQixHQUQ1QixlQUFlLENBQUssU0FBUyxDQUFDLGVBQWUsV0FBUyxDQUMxQyxnQkFBZ0IsS0FBaEIsZ0JBQWdCO1dBQWhCLGdCQUFnQjtNQUFTLFdBQVciLCJmaWxlIjoiZWxlbWVudHMvdWktaW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIElucHV0IC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9lbGVtZW50cy9pbnB1dC5odG1sXG4gKi9cblxuaW1wb3J0IHtjb25zdGFudHN9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge1VJQXR0cmlidXRlLCBiaW5kYWJsZUVudW0sIGJpbmRhYmxlVG9nZ2xlfSBmcm9tICcuLi91aS1hdHRyaWJ1dGUnO1xuaW1wb3J0IHtjdXN0b21BdHRyaWJ1dGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1pbnB1dGAgKVxuZXhwb3J0IGNsYXNzIFVJSW5wdXRBdHRyaWJ1dGUgZXh0ZW5kcyBVSUF0dHJpYnV0ZSB7XG5cblx0QGJpbmRhYmxlVG9nZ2xlIGZvY3VzID0gZmFsc2U7XG5cdEBiaW5kYWJsZVRvZ2dsZSBsb2FkaW5nID0gZmFsc2U7XG5cdEBiaW5kYWJsZVRvZ2dsZSBkaXNhYmxlZCA9IGZhbHNlO1xuXHRAYmluZGFibGVUb2dnbGUgZXJyb3IgPSBudWxsO1xuXG5cdEBiaW5kYWJsZUVudW0oIC4uLmNvbnN0YW50cy5WQUxJRF9TSVpFUyApIHNpemU7XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
