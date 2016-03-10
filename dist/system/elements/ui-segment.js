System.register(['../constants', '../ui-attribute', 'aurelia-framework'], function (_export) {
	"use strict";

	var constants, UIAttribute, bindableToggle, bindableEnum, customAttribute, computedFrom, bindable, inject, LogManager, UISegmentAttribute, UISegmentsAttribute;

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
			computedFrom = _aureliaFramework.computedFrom;
			bindable = _aureliaFramework.bindable;
			inject = _aureliaFramework.inject;
			LogManager = _aureliaFramework.LogManager;
		}],
		execute: function () {
			UISegmentAttribute = (function (_UIAttribute) {
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
					key: 'color',
					decorators: [bindableEnum.apply(undefined, _toConsumableArray(constants.VALID_COLORS))],
					initializer: null,
					enumerable: true
				}], null, _instanceInitializers);

				var _UISegmentAttribute = UISegmentAttribute;
				UISegmentAttribute = customAttribute('ui-segment')(UISegmentAttribute) || UISegmentAttribute;
				return UISegmentAttribute;
			})(UIAttribute);

			_export('UISegmentAttribute', UISegmentAttribute);

			UISegmentsAttribute = (function (_UIAttribute2) {
				_inherits(UISegmentsAttribute, _UIAttribute2);

				function UISegmentsAttribute() {
					_classCallCheck(this, _UISegmentsAttribute);

					_get(Object.getPrototypeOf(_UISegmentsAttribute.prototype), 'constructor', this).apply(this, arguments);
				}

				var _UISegmentsAttribute = UISegmentsAttribute;
				UISegmentsAttribute = customAttribute('ui-segments')(UISegmentsAttribute) || UISegmentsAttribute;
				return UISegmentsAttribute;
			})(UIAttribute);

			_export('UISegmentsAttribute', UISegmentsAttribute);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLXNlZ21lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGFBQVksQ0FBQzs7d0hBV0Esa0JBQWtCLEVBVWxCLG1CQUFtQjs7Ozs7Ozs7Ozs7Ozs7OzswQkFmeEIsU0FBUzs7OEJBQ1QsV0FBVztpQ0FBRSxjQUFjOytCQUFFLFlBQVk7O3VDQUN6QyxlQUFlO29DQUFFLFlBQVk7Z0NBQUUsUUFBUTs4QkFBRSxNQUFNO2tDQUFFLFVBQVU7OztBQUd0RCxxQkFBa0I7OztjQUFsQixrQkFBa0I7O2FBQWxCLGtCQUFrQjs7Ozs7Ozs7Ozs7OzBCQUFsQixrQkFBa0I7O2tCQUU3QixjQUFjOzthQUFXLEtBQUs7Ozs7O2tCQUM5QixjQUFjOzthQUFZLEtBQUs7Ozs7O2tCQUMvQixZQUFZLHFDQUFLLFNBQVMsQ0FBQyxZQUFZLEVBQUU7Ozs7OzhCQUo5QixrQkFBa0I7QUFBbEIsc0JBQWtCLEdBRDlCLGVBQWUsQ0FBRSxZQUFZLENBQUUsQ0FDbkIsa0JBQWtCLEtBQWxCLGtCQUFrQjtXQUFsQixrQkFBa0I7TUFBUyxXQUFXOzs7O0FBVXRDLHNCQUFtQjtjQUFuQixtQkFBbUI7O2FBQW5CLG1CQUFtQjs7Ozs7OytCQUFuQixtQkFBbUI7QUFBbkIsdUJBQW1CLEdBRC9CLGVBQWUsQ0FBRSxhQUFhLENBQUUsQ0FDcEIsbUJBQW1CLEtBQW5CLG1CQUFtQjtXQUFuQixtQkFBbUI7TUFBUyxXQUFXIiwiZmlsZSI6ImVsZW1lbnRzL3VpLXNlZ21lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIFNlZ21lbnQgLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL2VsZW1lbnRzL3NlZ21lbnQuaHRtbFxuICovXG5cbmltcG9ydCB7Y29uc3RhbnRzfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtVSUF0dHJpYnV0ZSwgYmluZGFibGVUb2dnbGUsIGJpbmRhYmxlRW51bX0gZnJvbSAnLi4vdWktYXR0cmlidXRlJztcbmltcG9ydCB7Y3VzdG9tQXR0cmlidXRlLCBjb21wdXRlZEZyb20sIGJpbmRhYmxlLCBpbmplY3QsIExvZ01hbmFnZXJ9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUF0dHJpYnV0ZSggJ3VpLXNlZ21lbnQnIClcbmV4cG9ydCBjbGFzcyBVSVNlZ21lbnRBdHRyaWJ1dGUgZXh0ZW5kcyBVSUF0dHJpYnV0ZSB7XG5cblx0QGJpbmRhYmxlVG9nZ2xlIGxvYWRpbmcgPSBmYWxzZTtcblx0QGJpbmRhYmxlVG9nZ2xlIGRpc2FibGVkID0gZmFsc2U7XG5cdEBiaW5kYWJsZUVudW0oIC4uLmNvbnN0YW50cy5WQUxJRF9DT0xPUlMgKSBjb2xvcjtcblxufVxuXG5cbkBjdXN0b21BdHRyaWJ1dGUoICd1aS1zZWdtZW50cycgKVxuZXhwb3J0IGNsYXNzIFVJU2VnbWVudHNBdHRyaWJ1dGUgZXh0ZW5kcyBVSUF0dHJpYnV0ZSB7XG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
