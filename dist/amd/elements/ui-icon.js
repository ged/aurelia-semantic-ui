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

	var UIIconAttribute = (function (_UIAttribute) {
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
			decorators: [_aureliaFramework.bindable],
			initializer: function initializer() {
				return "help circle";
			},
			enumerable: true
		}, {
			key: 'size',
			decorators: [_uiAttribute.bindableEnum.apply(undefined, _toConsumableArray(_constants.constants.VALID_SIZES))],
			initializer: null,
			enumerable: true
		}, {
			key: 'color',
			decorators: [_uiAttribute.bindableEnum.apply(undefined, _toConsumableArray(_constants.constants.VALID_COLORS))],
			initializer: null,
			enumerable: true
		}, {
			key: 'disabled',
			decorators: [_uiAttribute.bindableToggle],
			initializer: null,
			enumerable: true
		}, {
			key: 'loading',
			decorators: [_uiAttribute.bindableToggle],
			initializer: null,
			enumerable: true
		}], null, _instanceInitializers);

		var _UIIconAttribute = UIIconAttribute;
		UIIconAttribute = (0, _aureliaFramework.customAttribute)('ui-icon')(UIIconAttribute) || UIIconAttribute;
		return UIIconAttribute;
	})(_uiAttribute.UIAttribute);

	exports.UIIconAttribute = UIIconAttribute;

	var UIIconsAttribute = (function (_UIAttribute2) {
		var _instanceInitializers2 = {};

		_inherits(UIIconsAttribute, _UIAttribute2);

		function UIIconsAttribute() {
			_classCallCheck(this, _UIIconsAttribute);

			_get(Object.getPrototypeOf(_UIIconsAttribute.prototype), 'constructor', this).apply(this, arguments);

			_defineDecoratedPropertyDescriptor(this, 'size', _instanceInitializers2);
		}

		_createDecoratedClass(UIIconsAttribute, [{
			key: 'size',
			decorators: [_uiAttribute.bindableEnum.apply(undefined, _toConsumableArray(_constants.constants.VALID_SIZES))],
			initializer: null,
			enumerable: true
		}], null, _instanceInitializers2);

		var _UIIconsAttribute = UIIconsAttribute;
		UIIconsAttribute = (0, _aureliaFramework.customAttribute)('ui-icons')(UIIconsAttribute) || UIIconsAttribute;
		return UIIconsAttribute;
	})(_uiAttribute.UIAttribute);

	exports.UIIconsAttribute = UIIconsAttribute;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWljb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGFBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBWUEsZUFBZTs7O1lBQWYsZUFBZTs7V0FBZixlQUFlOzs7Ozs7Ozs7Ozs7Ozs7O3dCQUFmLGVBQWU7O1VBU3ZCLGdCQUFHOzs7QUFFTiwwQkFBQSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBQyxHQUFHLE1BQUEsd0NBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztBQUN0RCxRQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUUsTUFBTSxDQUFFLENBQUM7SUFDckM7OztVQUdVLHFCQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUc7OztBQUNqQyxRQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssd0JBQXVCLFFBQVEsWUFBTyxRQUFRLENBQUksQ0FBQztBQUNwRSwyQkFBQSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBQyxNQUFNLE1BQUEseUNBQUssUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO0FBQ3hELDJCQUFBLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFDLEdBQUcsTUFBQSx5Q0FBSyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7SUFDckQ7OztrQ0F4QnVCLFFBQVE7O1dBTWYsYUFBYTs7Ozs7Z0JBQzdCLGFBUm1DLFlBQVkscUNBUTlCLFdBVFgsU0FBUyxDQVNZLFdBQVcsRUFBRTs7Ozs7Z0JBQ3hDLGFBVG1DLFlBQVkscUNBUzlCLFdBVlgsU0FBUyxDQVVZLFlBQVksRUFBRTs7Ozs7NkJBVHRCLGNBQWM7Ozs7OzZCQUFkLGNBQWM7Ozs7O3lCQUt0QixlQUFlO0FBQWYsaUJBQWUsR0FEM0Isc0JBSE8sZUFBZSxFQUdMLFNBQVMsQ0FBRSxDQUNoQixlQUFlLEtBQWYsZUFBZTtTQUFmLGVBQWU7aUJBTHBCLFdBQVc7Ozs7S0ErQk4sZ0JBQWdCOzs7WUFBaEIsZ0JBQWdCOztXQUFoQixnQkFBZ0I7Ozs7Ozs7O3dCQUFoQixnQkFBZ0I7O2dCQUUzQixhQWpDbUMsWUFBWSxxQ0FpQzlCLFdBbENYLFNBQVMsQ0FrQ1ksV0FBVyxFQUFFOzs7OzswQkFGN0IsZ0JBQWdCO0FBQWhCLGtCQUFnQixHQUQ1QixzQkE3Qk8sZUFBZSxFQTZCTCxVQUFVLENBQUUsQ0FDakIsZ0JBQWdCLEtBQWhCLGdCQUFnQjtTQUFoQixnQkFBZ0I7aUJBL0JyQixXQUFXIiwiZmlsZSI6ImVsZW1lbnRzL3VpLWljb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIEljb24gLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL2VsZW1lbnRzL2ljb24uaHRtbCMvZGVmaW5pdGlvblxuICovXG5cbmltcG9ydCB7Y29uc3RhbnRzfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtVSUF0dHJpYnV0ZSwgYmluZGFibGVUb2dnbGUsIGJpbmRhYmxlRW51bX0gZnJvbSAnLi4vdWktYXR0cmlidXRlJztcbmltcG9ydCB7Y3VzdG9tQXR0cmlidXRlLCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5cbkBjdXN0b21BdHRyaWJ1dGUoICd1aS1pY29uJyApXG5leHBvcnQgY2xhc3MgVUlJY29uQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG5cdEBiaW5kYWJsZSBuYW1lID0gXCJoZWxwIGNpcmNsZVwiO1xuXHRAYmluZGFibGVFbnVtKCAuLi5jb25zdGFudHMuVkFMSURfU0laRVMgKSBzaXplO1xuXHRAYmluZGFibGVFbnVtKCAuLi5jb25zdGFudHMuVkFMSURfQ09MT1JTICkgY29sb3I7XG5cdEBiaW5kYWJsZVRvZ2dsZSBkaXNhYmxlZDtcblx0QGJpbmRhYmxlVG9nZ2xlIGxvYWRpbmc7XG5cblxuXHRiaW5kKCkge1xuXHRcdC8vIE5vIHN1cGVyLCBhcyB0aGUgY2xhc3NMaXN0IGRvZXNuJ3QgZ2V0IHRoZSAndWknIGNsYXNzLlxuXHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAuLi50aGlzLm5hbWUuc3BsaXQoJyAnKSApO1xuXHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAnaWNvbicgKTtcblx0fVxuXG5cblx0bmFtZUNoYW5nZWQoIG5ld1ZhbHVlLCBvbGRWYWx1ZSApIHtcblx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggYE5hbWUgY2hhbmdlZCBmcm9tICR7b2xkVmFsdWV9IHRvICR7bmV3VmFsdWV9YCApO1xuXHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCAuLi5vbGRWYWx1ZS5zcGxpdCgnICcpICk7XG5cdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoIC4uLm5ld1ZhbHVlLnNwbGl0KCcgJykgKTtcblx0fVxuXG59XG5cblxuQGN1c3RvbUF0dHJpYnV0ZSggJ3VpLWljb25zJyApXG5leHBvcnQgY2xhc3MgVUlJY29uc0F0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGVFbnVtKCAuLi5jb25zdGFudHMuVkFMSURfU0laRVMgKSBzaXplO1xuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
