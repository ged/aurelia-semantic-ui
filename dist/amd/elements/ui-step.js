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

	var UIStepAttribute = (function (_UIAttribute) {
		var _instanceInitializers = {};

		_inherits(UIStepAttribute, _UIAttribute);

		function UIStepAttribute() {
			_classCallCheck(this, _UIStepAttribute);

			_get(Object.getPrototypeOf(_UIStepAttribute.prototype), 'constructor', this).apply(this, arguments);

			_defineDecoratedPropertyDescriptor(this, 'active', _instanceInitializers);

			_defineDecoratedPropertyDescriptor(this, 'disabled', _instanceInitializers);

			_defineDecoratedPropertyDescriptor(this, 'completed', _instanceInitializers);

			_defineDecoratedPropertyDescriptor(this, 'color', _instanceInitializers);
		}

		_createDecoratedClass(UIStepAttribute, [{
			key: 'bind',
			value: function bind() {
				this.element.classList.add('step');
			}
		}, {
			key: 'active',
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
			key: 'completed',
			decorators: [_uiAttribute.bindableToggle],
			initializer: function initializer() {
				return false;
			},
			enumerable: true
		}, {
			key: 'color',
			decorators: [_uiAttribute.bindableEnum.apply(undefined, _toConsumableArray(_constants.constants.VALID_COLORS))],
			initializer: null,
			enumerable: true
		}], null, _instanceInitializers);

		var _UIStepAttribute = UIStepAttribute;
		UIStepAttribute = (0, _aureliaFramework.customAttribute)(_constants.constants.attributePrefix + 'step')(UIStepAttribute) || UIStepAttribute;
		return UIStepAttribute;
	})(_uiAttribute.UIAttribute);

	exports.UIStepAttribute = UIStepAttribute;

	var UIStepsAttribute = (function (_UIAttribute2) {
		_inherits(UIStepsAttribute, _UIAttribute2);

		function UIStepsAttribute() {
			_classCallCheck(this, _UIStepsAttribute);

			_get(Object.getPrototypeOf(_UIStepsAttribute.prototype), 'constructor', this).apply(this, arguments);
		}

		var _UIStepsAttribute = UIStepsAttribute;
		UIStepsAttribute = (0, _aureliaFramework.customAttribute)('ui-steps')(UIStepsAttribute) || UIStepsAttribute;
		return UIStepsAttribute;
	})(_uiAttribute.UIAttribute);

	exports.UIStepsAttribute = UIStepsAttribute;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLXN0ZXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGFBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBV0EsZUFBZTs7O1lBQWYsZUFBZTs7V0FBZixlQUFlOzs7Ozs7Ozs7Ozs7Ozt3QkFBZixlQUFlOztVQVF2QixnQkFBWTtBQUVmLFFBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBRSxNQUFNLENBQUUsQ0FBQztJQUNyQzs7OzZCQWZtQixjQUFjOztXQU1ULEtBQUs7Ozs7OzZCQU5WLGNBQWM7O1dBT1AsS0FBSzs7Ozs7NkJBUFosY0FBYzs7V0FRTixLQUFLOzs7OztnQkFDaEMsYUFUbUMsWUFBWSxxQ0FTOUIsV0FWWCxTQUFTLENBVVksWUFBWSxFQUFFOzs7Ozt5QkFMOUIsZUFBZTtBQUFmLGlCQUFlLEdBRDNCLHNCQUZPLGVBQWUsRUFFRixXQUpiLFNBQVMsQ0FJYyxlQUFlLFVBQVEsQ0FDekMsZUFBZSxLQUFmLGVBQWU7U0FBZixlQUFlO2lCQUpwQixXQUFXOzs7O0tBcUJOLGdCQUFnQjtZQUFoQixnQkFBZ0I7O1dBQWhCLGdCQUFnQjs7Ozs7OzBCQUFoQixnQkFBZ0I7QUFBaEIsa0JBQWdCLEdBRDVCLHNCQW5CTyxlQUFlLEVBbUJMLFVBQVUsQ0FBRSxDQUNqQixnQkFBZ0IsS0FBaEIsZ0JBQWdCO1NBQWhCLGdCQUFnQjtpQkFyQnJCLFdBQVciLCJmaWxlIjoiZWxlbWVudHMvdWktc3RlcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogU3RlcCAtIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vZWxlbWVudHMvc3RlcC5odG1sXG4gKi9cblxuaW1wb3J0IHtjb25zdGFudHN9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge1VJQXR0cmlidXRlLCBiaW5kYWJsZVRvZ2dsZSwgYmluZGFibGVFbnVtfSBmcm9tICcuLi91aS1hdHRyaWJ1dGUnO1xuaW1wb3J0IHtjdXN0b21BdHRyaWJ1dGUsIGNvbXB1dGVkRnJvbSwgYmluZGFibGUsIGluamVjdCwgTG9nTWFuYWdlcn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AY3VzdG9tQXR0cmlidXRlKCBgJHtjb25zdGFudHMuYXR0cmlidXRlUHJlZml4fXN0ZXBgIClcbmV4cG9ydCBjbGFzcyBVSVN0ZXBBdHRyaWJ1dGUgZXh0ZW5kcyBVSUF0dHJpYnV0ZSB7XG5cblx0QGJpbmRhYmxlVG9nZ2xlIGFjdGl2ZSA9IGZhbHNlO1xuXHRAYmluZGFibGVUb2dnbGUgZGlzYWJsZWQgPSBmYWxzZTtcblx0QGJpbmRhYmxlVG9nZ2xlIGNvbXBsZXRlZCA9IGZhbHNlO1xuXHRAYmluZGFibGVFbnVtKCAuLi5jb25zdGFudHMuVkFMSURfQ09MT1JTICkgY29sb3I7XG5cblxuXHRiaW5kKCAuLi5hcmdzICkge1xuXHRcdC8vIE5vIHN1cGVyXG5cdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoICdzdGVwJyApO1xuXHR9XG5cbn1cblxuXG5AY3VzdG9tQXR0cmlidXRlKCAndWktc3RlcHMnIClcbmV4cG9ydCBjbGFzcyBVSVN0ZXBzQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
