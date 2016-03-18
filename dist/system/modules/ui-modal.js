System.register(['../constants', 'aurelia-framework', '../ui-attribute'], function (_export) {
	"use strict";

	var constants, customAttribute, UIAttribute, bindableToggle, UIModalAttribute;

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	return {
		setters: [function (_constants) {
			constants = _constants.constants;
		}, function (_aureliaFramework) {
			customAttribute = _aureliaFramework.customAttribute;
		}, function (_uiAttribute) {
			UIAttribute = _uiAttribute.UIAttribute;
			bindableToggle = _uiAttribute.bindableToggle;
		}],
		execute: function () {
			UIModalAttribute = (function (_UIAttribute) {
				var _instanceInitializers = {};

				_inherits(UIModalAttribute, _UIAttribute);

				function UIModalAttribute() {
					_classCallCheck(this, _UIModalAttribute);

					_get(Object.getPrototypeOf(_UIModalAttribute.prototype), 'constructor', this).apply(this, arguments);

					_defineDecoratedPropertyDescriptor(this, 'active', _instanceInitializers);
				}

				_createDecoratedClass(UIModalAttribute, [{
					key: 'attached',
					value: function attached() {
						$(this.element).modal();
					}
				}, {
					key: 'activeChanged',
					value: function activeChanged(newValue) {
						if (newValue) {
							$(this.element).modal('show');
						} else {
							$(this.element).modal('hide');
						}
					}
				}, {
					key: 'active',
					decorators: [bindableToggle],
					initializer: function initializer() {
						return false;
					},
					enumerable: true
				}], null, _instanceInitializers);

				var _UIModalAttribute = UIModalAttribute;
				UIModalAttribute = customAttribute('ui-modal')(UIModalAttribute) || UIModalAttribute;
				return UIModalAttribute;
			})(UIAttribute);

			_export('UIModalAttribute', UIModalAttribute);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdWktbW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGFBQVksQ0FBQzs7OERBV0EsZ0JBQWdCOzs7Ozs7Ozs7Ozs7OzswQkFMckIsU0FBUzs7dUNBQ1QsZUFBZTs7OEJBQ2YsV0FBVztpQ0FBRSxjQUFjOzs7QUFHdEIsbUJBQWdCOzs7Y0FBaEIsZ0JBQWdCOzthQUFoQixnQkFBZ0I7Ozs7Ozs7OzBCQUFoQixnQkFBZ0I7O1lBTXBCLG9CQUFHO0FBQ1YsT0FBQyxDQUFFLElBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztNQUMxQjs7O1lBR1ksdUJBQUUsUUFBUSxFQUFHO0FBQ3pCLFVBQUssUUFBUSxFQUFHO0FBQ2YsUUFBQyxDQUFFLElBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQyxLQUFLLENBQUUsTUFBTSxDQUFFLENBQUM7T0FDbEMsTUFBTTtBQUNOLFFBQUMsQ0FBRSxJQUFJLENBQUMsT0FBTyxDQUFFLENBQUMsS0FBSyxDQUFFLE1BQU0sQ0FBRSxDQUFDO09BQ2xDO01BQ0Q7OztrQkFmQSxjQUFjOzthQUFVLEtBQUs7Ozs7OzRCQUZsQixnQkFBZ0I7QUFBaEIsb0JBQWdCLEdBRDVCLGVBQWUsQ0FBRSxVQUFVLENBQUUsQ0FDakIsZ0JBQWdCLEtBQWhCLGdCQUFnQjtXQUFoQixnQkFBZ0I7TUFBUyxXQUFXIiwiZmlsZSI6Im1vZHVsZXMvdWktbW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIE1vZGFsIC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9tb2R1bGVzL21vZGFsLmh0bWxcbiAqL1xuXG5pbXBvcnQge2NvbnN0YW50c30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7Y3VzdG9tQXR0cmlidXRlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge1VJQXR0cmlidXRlLCBiaW5kYWJsZVRvZ2dsZX0gZnJvbSAnLi4vdWktYXR0cmlidXRlJztcblxuQGN1c3RvbUF0dHJpYnV0ZSggJ3VpLW1vZGFsJyApXG5leHBvcnQgY2xhc3MgVUlNb2RhbEF0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGVUb2dnbGUgYWN0aXZlID0gZmFsc2U7XG5cblxuXG5cdGF0dGFjaGVkKCkge1xuXHRcdCQoIHRoaXMuZWxlbWVudCApLm1vZGFsKCk7XG5cdH1cblxuXG5cdGFjdGl2ZUNoYW5nZWQoIG5ld1ZhbHVlICkge1xuXHRcdGlmICggbmV3VmFsdWUgKSB7XG5cdFx0XHQkKCB0aGlzLmVsZW1lbnQgKS5tb2RhbCggJ3Nob3cnICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQoIHRoaXMuZWxlbWVudCApLm1vZGFsKCAnaGlkZScgKTtcblx0XHR9XG5cdH1cblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
