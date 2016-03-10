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

	var UISegmentAttribute = (function (_UIAttribute) {
		var _instanceInitializers = {};

		_inherits(UISegmentAttribute, _UIAttribute);

		function UISegmentAttribute() {
			_classCallCheck(this, _UISegmentAttribute);

			_get(Object.getPrototypeOf(_UISegmentAttribute.prototype), 'constructor', this).apply(this, arguments);

			_defineDecoratedPropertyDescriptor(this, 'loading', _instanceInitializers);

			_defineDecoratedPropertyDescriptor(this, 'disabled', _instanceInitializers);

			_defineDecoratedPropertyDescriptor(this, 'color', _instanceInitializers);
		}

		_createDecoratedClass(UISegmentAttribute, [{
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
			key: 'color',
			decorators: [_uiAttribute.bindableEnum.apply(undefined, _toConsumableArray(_constants.constants.VALID_COLORS))],
			initializer: null,
			enumerable: true
		}], null, _instanceInitializers);

		var _UISegmentAttribute = UISegmentAttribute;
		UISegmentAttribute = (0, _aureliaFramework.customAttribute)('ui-segment')(UISegmentAttribute) || UISegmentAttribute;
		return UISegmentAttribute;
	})(_uiAttribute.UIAttribute);

	exports.UISegmentAttribute = UISegmentAttribute;

	var UISegmentsAttribute = (function (_UIAttribute2) {
		_inherits(UISegmentsAttribute, _UIAttribute2);

		function UISegmentsAttribute() {
			_classCallCheck(this, _UISegmentsAttribute);

			_get(Object.getPrototypeOf(_UISegmentsAttribute.prototype), 'constructor', this).apply(this, arguments);
		}

		var _UISegmentsAttribute = UISegmentsAttribute;
		UISegmentsAttribute = (0, _aureliaFramework.customAttribute)('ui-segments')(UISegmentsAttribute) || UISegmentsAttribute;
		return UISegmentsAttribute;
	})(_uiAttribute.UIAttribute);

	exports.UISegmentsAttribute = UISegmentsAttribute;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLXNlZ21lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGFBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBV0Esa0JBQWtCOzs7WUFBbEIsa0JBQWtCOztXQUFsQixrQkFBa0I7Ozs7Ozs7Ozs7Ozt3QkFBbEIsa0JBQWtCOzs2QkFKVixjQUFjOztXQU1SLEtBQUs7Ozs7OzZCQU5YLGNBQWM7O1dBT1AsS0FBSzs7Ozs7Z0JBQy9CLGFBUm1DLFlBQVkscUNBUTlCLFdBVFgsU0FBUyxDQVNZLFlBQVksRUFBRTs7Ozs7NEJBSjlCLGtCQUFrQjtBQUFsQixvQkFBa0IsR0FEOUIsc0JBRk8sZUFBZSxFQUVMLFlBQVksQ0FBRSxDQUNuQixrQkFBa0IsS0FBbEIsa0JBQWtCO1NBQWxCLGtCQUFrQjtpQkFKdkIsV0FBVzs7OztLQWNOLG1CQUFtQjtZQUFuQixtQkFBbUI7O1dBQW5CLG1CQUFtQjs7Ozs7OzZCQUFuQixtQkFBbUI7QUFBbkIscUJBQW1CLEdBRC9CLHNCQVpPLGVBQWUsRUFZTCxhQUFhLENBQUUsQ0FDcEIsbUJBQW1CLEtBQW5CLG1CQUFtQjtTQUFuQixtQkFBbUI7aUJBZHhCLFdBQVciLCJmaWxlIjoiZWxlbWVudHMvdWktc2VnbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogU2VnbWVudCAtIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vZWxlbWVudHMvc2VnbWVudC5odG1sXG4gKi9cblxuaW1wb3J0IHtjb25zdGFudHN9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge1VJQXR0cmlidXRlLCBiaW5kYWJsZVRvZ2dsZSwgYmluZGFibGVFbnVtfSBmcm9tICcuLi91aS1hdHRyaWJ1dGUnO1xuaW1wb3J0IHtjdXN0b21BdHRyaWJ1dGUsIGNvbXB1dGVkRnJvbSwgYmluZGFibGUsIGluamVjdCwgTG9nTWFuYWdlcn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AY3VzdG9tQXR0cmlidXRlKCAndWktc2VnbWVudCcgKVxuZXhwb3J0IGNsYXNzIFVJU2VnbWVudEF0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGVUb2dnbGUgbG9hZGluZyA9IGZhbHNlO1xuXHRAYmluZGFibGVUb2dnbGUgZGlzYWJsZWQgPSBmYWxzZTtcblx0QGJpbmRhYmxlRW51bSggLi4uY29uc3RhbnRzLlZBTElEX0NPTE9SUyApIGNvbG9yO1xuXG59XG5cblxuQGN1c3RvbUF0dHJpYnV0ZSggJ3VpLXNlZ21lbnRzJyApXG5leHBvcnQgY2xhc3MgVUlTZWdtZW50c0F0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcbn1cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
