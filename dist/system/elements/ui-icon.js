System.register(['../constants', '../ui-attribute', 'aurelia-framework'], function (_export) {
	"use strict";

	var constants, UIAttribute, bindableToggle, bindableEnum, customAttribute, bindable, UIIconAttribute, UIIconsAttribute;

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
			bindableToggle = _uiAttribute.bindableToggle;
			bindableEnum = _uiAttribute.bindableEnum;
		}, function (_aureliaFramework) {
			customAttribute = _aureliaFramework.customAttribute;
			bindable = _aureliaFramework.bindable;
		}],
		execute: function () {
			UIIconAttribute = (function (_UIAttribute) {
				var _instanceInitializers = {};

				_inherits(UIIconAttribute, _UIAttribute);

				function UIIconAttribute() {
					_classCallCheck(this, _UIIconAttribute);

					_get(Object.getPrototypeOf(_UIIconAttribute.prototype), 'constructor', this).apply(this, arguments);

					_defineDecoratedPropertyDescriptor(this, 'name', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'size', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'color', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'disabled', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'loading', _instanceInitializers);
				}

				_createDecoratedClass(UIIconAttribute, [{
					key: 'bind',
					value: function bind() {
						var _element$classList;

						(_element$classList = this.element.classList).add.apply(_element$classList, _toConsumableArray(this.name.split(' ')));
						this.element.classList.add('icon');
					}
				}, {
					key: 'nameChanged',
					value: function nameChanged(newValue, oldValue) {
						var _element$classList2, _element$classList3;

						this.logger.debug('Name changed from ' + oldValue + ' to ' + newValue);
						(_element$classList2 = this.element.classList).remove.apply(_element$classList2, _toConsumableArray(oldValue.split(' ')));
						(_element$classList3 = this.element.classList).add.apply(_element$classList3, _toConsumableArray(newValue.split(' ')));
					}
				}, {
					key: 'name',
					decorators: [bindable],
					initializer: function initializer() {
						return "help circle";
					},
					enumerable: true
				}, {
					key: 'size',
					decorators: [bindableEnum.apply(undefined, _toConsumableArray(constants.VALID_SIZES))],
					initializer: null,
					enumerable: true
				}, {
					key: 'color',
					decorators: [bindableEnum.apply(undefined, _toConsumableArray(constants.VALID_COLORS))],
					initializer: null,
					enumerable: true
				}, {
					key: 'disabled',
					decorators: [bindableToggle],
					initializer: null,
					enumerable: true
				}, {
					key: 'loading',
					decorators: [bindableToggle],
					initializer: null,
					enumerable: true
				}], null, _instanceInitializers);

				var _UIIconAttribute = UIIconAttribute;
				UIIconAttribute = customAttribute('ui-icon')(UIIconAttribute) || UIIconAttribute;
				return UIIconAttribute;
			})(UIAttribute);

			_export('UIIconAttribute', UIIconAttribute);

			UIIconsAttribute = (function (_UIAttribute2) {
				var _instanceInitializers2 = {};

				_inherits(UIIconsAttribute, _UIAttribute2);

				function UIIconsAttribute() {
					_classCallCheck(this, _UIIconsAttribute);

					_get(Object.getPrototypeOf(_UIIconsAttribute.prototype), 'constructor', this).apply(this, arguments);

					_defineDecoratedPropertyDescriptor(this, 'size', _instanceInitializers2);
				}

				_createDecoratedClass(UIIconsAttribute, [{
					key: 'size',
					decorators: [bindableEnum.apply(undefined, _toConsumableArray(constants.VALID_SIZES))],
					initializer: null,
					enumerable: true
				}], null, _instanceInitializers2);

				var _UIIconsAttribute = UIIconsAttribute;
				UIIconsAttribute = customAttribute('ui-icons')(UIIconsAttribute) || UIIconsAttribute;
				return UIIconsAttribute;
			})(UIAttribute);

			_export('UIIconsAttribute', UIIconsAttribute);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWljb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGFBQVksQ0FBQzs7c0ZBWUEsZUFBZSxFQTBCZixnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBaENyQixTQUFTOzs4QkFDVCxXQUFXO2lDQUFFLGNBQWM7K0JBQUUsWUFBWTs7dUNBQ3pDLGVBQWU7Z0NBQUUsUUFBUTs7O0FBSXBCLGtCQUFlOzs7Y0FBZixlQUFlOzthQUFmLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBQWYsZUFBZTs7WUFTdkIsZ0JBQUc7OztBQUVOLDRCQUFBLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFDLEdBQUcsTUFBQSx3Q0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO0FBQ3RELFVBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBRSxNQUFNLENBQUUsQ0FBQztNQUNyQzs7O1lBR1UscUJBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRzs7O0FBQ2pDLFVBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyx3QkFBdUIsUUFBUSxZQUFPLFFBQVEsQ0FBSSxDQUFDO0FBQ3BFLDZCQUFBLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFDLE1BQU0sTUFBQSx5Q0FBSyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7QUFDeEQsNkJBQUEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUMsR0FBRyxNQUFBLHlDQUFLLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztNQUNyRDs7O2tCQWxCQSxRQUFROzthQUFRLGFBQWE7Ozs7O2tCQUM3QixZQUFZLHFDQUFLLFNBQVMsQ0FBQyxXQUFXLEVBQUU7Ozs7O2tCQUN4QyxZQUFZLHFDQUFLLFNBQVMsQ0FBQyxZQUFZLEVBQUU7Ozs7O2tCQUN6QyxjQUFjOzs7OztrQkFDZCxjQUFjOzs7OzsyQkFOSCxlQUFlO0FBQWYsbUJBQWUsR0FEM0IsZUFBZSxDQUFFLFNBQVMsQ0FBRSxDQUNoQixlQUFlLEtBQWYsZUFBZTtXQUFmLGVBQWU7TUFBUyxXQUFXOzs7O0FBMEJuQyxtQkFBZ0I7OztjQUFoQixnQkFBZ0I7O2FBQWhCLGdCQUFnQjs7Ozs7Ozs7MEJBQWhCLGdCQUFnQjs7a0JBRTNCLFlBQVkscUNBQUssU0FBUyxDQUFDLFdBQVcsRUFBRTs7Ozs7NEJBRjdCLGdCQUFnQjtBQUFoQixvQkFBZ0IsR0FENUIsZUFBZSxDQUFFLFVBQVUsQ0FBRSxDQUNqQixnQkFBZ0IsS0FBaEIsZ0JBQWdCO1dBQWhCLGdCQUFnQjtNQUFTLFdBQVciLCJmaWxlIjoiZWxlbWVudHMvdWktaWNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogSWNvbiAtIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vZWxlbWVudHMvaWNvbi5odG1sIy9kZWZpbml0aW9uXG4gKi9cblxuaW1wb3J0IHtjb25zdGFudHN9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge1VJQXR0cmlidXRlLCBiaW5kYWJsZVRvZ2dsZSwgYmluZGFibGVFbnVtfSBmcm9tICcuLi91aS1hdHRyaWJ1dGUnO1xuaW1wb3J0IHtjdXN0b21BdHRyaWJ1dGUsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cblxuQGN1c3RvbUF0dHJpYnV0ZSggJ3VpLWljb24nIClcbmV4cG9ydCBjbGFzcyBVSUljb25BdHRyaWJ1dGUgZXh0ZW5kcyBVSUF0dHJpYnV0ZSB7XG5cblx0QGJpbmRhYmxlIG5hbWUgPSBcImhlbHAgY2lyY2xlXCI7XG5cdEBiaW5kYWJsZUVudW0oIC4uLmNvbnN0YW50cy5WQUxJRF9TSVpFUyApIHNpemU7XG5cdEBiaW5kYWJsZUVudW0oIC4uLmNvbnN0YW50cy5WQUxJRF9DT0xPUlMgKSBjb2xvcjtcblx0QGJpbmRhYmxlVG9nZ2xlIGRpc2FibGVkO1xuXHRAYmluZGFibGVUb2dnbGUgbG9hZGluZztcblxuXG5cdGJpbmQoKSB7XG5cdFx0Ly8gTm8gc3VwZXIsIGFzIHRoZSBjbGFzc0xpc3QgZG9lc24ndCBnZXQgdGhlICd1aScgY2xhc3MuXG5cdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoIC4uLnRoaXMubmFtZS5zcGxpdCgnICcpICk7XG5cdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoICdpY29uJyApO1xuXHR9XG5cblxuXHRuYW1lQ2hhbmdlZCggbmV3VmFsdWUsIG9sZFZhbHVlICkge1xuXHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBgTmFtZSBjaGFuZ2VkIGZyb20gJHtvbGRWYWx1ZX0gdG8gJHtuZXdWYWx1ZX1gICk7XG5cdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoIC4uLm9sZFZhbHVlLnNwbGl0KCcgJykgKTtcblx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCggLi4ubmV3VmFsdWUuc3BsaXQoJyAnKSApO1xuXHR9XG5cbn1cblxuXG5AY3VzdG9tQXR0cmlidXRlKCAndWktaWNvbnMnIClcbmV4cG9ydCBjbGFzcyBVSUljb25zQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG5cdEBiaW5kYWJsZUVudW0oIC4uLmNvbnN0YW50cy5WQUxJRF9TSVpFUyApIHNpemU7XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
