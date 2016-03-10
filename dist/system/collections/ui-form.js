System.register(['../ui-attribute', 'aurelia-framework'], function (_export) {
	"use strict";

	var UIAttribute, bindableToggle, bindableEnum, inject, customAttribute, children, bindable, UIFormAttribute, UICheckboxAttribute;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	return {
		setters: [function (_uiAttribute) {
			UIAttribute = _uiAttribute.UIAttribute;
			bindableToggle = _uiAttribute.bindableToggle;
			bindableEnum = _uiAttribute.bindableEnum;
		}, function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
			customAttribute = _aureliaFramework.customAttribute;
			children = _aureliaFramework.children;
			bindable = _aureliaFramework.bindable;
		}],
		execute: function () {
			UIFormAttribute = (function (_UIAttribute) {
				var _instanceInitializers = {};

				_inherits(UIFormAttribute, _UIAttribute);

				function UIFormAttribute() {
					_classCallCheck(this, _UIFormAttribute);

					_get(Object.getPrototypeOf(_UIFormAttribute.prototype), 'constructor', this).apply(this, arguments);

					_defineDecoratedPropertyDescriptor(this, 'loading', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'state', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'fields', _instanceInitializers);
				}

				_createDecoratedClass(UIFormAttribute, [{
					key: 'loading',
					decorators: [bindableToggle],
					initializer: function initializer() {
						return false;
					},
					enumerable: true
				}, {
					key: 'state',
					decorators: [bindableEnum('error', 'success', 'warning')],
					initializer: null,
					enumerable: true
				}, {
					key: 'fields',
					decorators: [children('.field')],
					initializer: null,
					enumerable: true
				}], null, _instanceInitializers);

				var _UIFormAttribute = UIFormAttribute;
				UIFormAttribute = customAttribute('ui-form')(UIFormAttribute) || UIFormAttribute;
				return UIFormAttribute;
			})(UIAttribute);

			_export('UIFormAttribute', UIFormAttribute);

			UICheckboxAttribute = (function (_UIAttribute2) {
				_inherits(UICheckboxAttribute, _UIAttribute2);

				function UICheckboxAttribute() {
					_classCallCheck(this, _UICheckboxAttribute);

					_get(Object.getPrototypeOf(_UICheckboxAttribute.prototype), 'constructor', this).apply(this, arguments);
				}

				_createClass(UICheckboxAttribute, [{
					key: 'attached',
					value: function attached() {
						this.logger.debug("Activating a ui-checkbox");
						$(this.element).checkbox();
					}
				}]);

				var _UICheckboxAttribute = UICheckboxAttribute;
				UICheckboxAttribute = customAttribute('ui-checkbox')(UICheckboxAttribute) || UICheckboxAttribute;
				return UICheckboxAttribute;
			})(UIAttribute);

			_export('UICheckboxAttribute', UICheckboxAttribute);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL3VpLWZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGFBQVksQ0FBQzs7NkZBVUEsZUFBZSxFQVVmLG1CQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFkeEIsV0FBVztpQ0FBRSxjQUFjOytCQUFFLFlBQVk7OzhCQUN6QyxNQUFNO3VDQUFFLGVBQWU7Z0NBQUUsUUFBUTtnQ0FBRSxRQUFROzs7QUFHdEMsa0JBQWU7OztjQUFmLGVBQWU7O2FBQWYsZUFBZTs7Ozs7Ozs7Ozs7OzBCQUFmLGVBQWU7O2tCQUUxQixjQUFjOzthQUFXLEtBQUs7Ozs7O2tCQUM5QixZQUFZLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7Ozs7O2tCQUMzQyxRQUFRLENBQUUsUUFBUSxDQUFFOzs7OzsyQkFKVCxlQUFlO0FBQWYsbUJBQWUsR0FEM0IsZUFBZSxDQUFFLFNBQVMsQ0FBRSxDQUNoQixlQUFlLEtBQWYsZUFBZTtXQUFmLGVBQWU7TUFBUyxXQUFXOzs7O0FBVW5DLHNCQUFtQjtjQUFuQixtQkFBbUI7O2FBQW5CLG1CQUFtQjs7Ozs7O2lCQUFuQixtQkFBbUI7O1lBRXZCLG9CQUFHO0FBQ1YsVUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUUsMEJBQTBCLENBQUUsQ0FBQztBQUNoRCxPQUFDLENBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO01BQzdCOzs7K0JBTFcsbUJBQW1CO0FBQW5CLHVCQUFtQixHQUQvQixlQUFlLENBQUUsYUFBYSxDQUFFLENBQ3BCLG1CQUFtQixLQUFuQixtQkFBbUI7V0FBbkIsbUJBQW1CO01BQVMsV0FBVyIsImZpbGUiOiJjb2xsZWN0aW9ucy91aS1mb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBGb3JtIC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9jb2xsZWN0aW9ucy9mb3JtLmh0bWxcbiAqL1xuXG5pbXBvcnQge1VJQXR0cmlidXRlLCBiaW5kYWJsZVRvZ2dsZSwgYmluZGFibGVFbnVtfSBmcm9tICcuLi91aS1hdHRyaWJ1dGUnO1xuaW1wb3J0IHtpbmplY3QsIGN1c3RvbUF0dHJpYnV0ZSwgY2hpbGRyZW4sIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBjdXN0b21BdHRyaWJ1dGUoICd1aS1mb3JtJyApXG5leHBvcnQgY2xhc3MgVUlGb3JtQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG5cdEBiaW5kYWJsZVRvZ2dsZSBsb2FkaW5nID0gZmFsc2U7XG5cdEBiaW5kYWJsZUVudW0oJ2Vycm9yJywgJ3N1Y2Nlc3MnLCAnd2FybmluZycpIHN0YXRlO1xuXHRAY2hpbGRyZW4oICcuZmllbGQnICkgZmllbGRzO1xuXG59XG5cblxuQGN1c3RvbUF0dHJpYnV0ZSggJ3VpLWNoZWNrYm94JyApXG5leHBvcnQgY2xhc3MgVUlDaGVja2JveEF0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcblxuXHRhdHRhY2hlZCgpIHtcblx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggXCJBY3RpdmF0aW5nIGEgdWktY2hlY2tib3hcIiApO1xuXHRcdCQoIHRoaXMuZWxlbWVudCApLmNoZWNrYm94KCk7XG5cdH1cblxufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
