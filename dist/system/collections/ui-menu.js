System.register(['../ui-attribute', 'aurelia-framework'], function (_export) {
	"use strict";

	var UIAttribute, bindableToggle, bindableEnum, inject, customAttribute, children, bindable, UIMenuAttribute, UIMenuItemAttribute;

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
			UIMenuAttribute = (function (_UIAttribute) {
				var _instanceInitializers = {};

				_inherits(UIMenuAttribute, _UIAttribute);

				function UIMenuAttribute() {
					_classCallCheck(this, _UIMenuAttribute);

					_get(Object.getPrototypeOf(_UIMenuAttribute.prototype), 'constructor', this).apply(this, arguments);

					_defineDecoratedPropertyDescriptor(this, 'router', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'items', _instanceInitializers);
				}

				_createDecoratedClass(UIMenuAttribute, [{
					key: 'isSubmenu',
					value: function isSubmenu() {
						var parent = this.element.parentElement;
						if (!parent) {
							return false;
						}

						var classes = parent.classList;
						if (!classes) {
							return false;
						}

						return classes.contains('item') || classes.contains('menu');
					}
				}, {
					key: 'bind',
					value: function bind() {
						if (this.isSubmenu()) {
							this.element.classList.add('menu');
						} else {
							_get(Object.getPrototypeOf(_UIMenuAttribute.prototype), 'bind', this).call(this);
						}
					}
				}, {
					key: 'router',
					decorators: [bindable],
					initializer: null,
					enumerable: true
				}, {
					key: 'items',
					decorators: [children('[ui-menu-item]')],
					initializer: null,
					enumerable: true
				}], null, _instanceInitializers);

				var _UIMenuAttribute = UIMenuAttribute;
				UIMenuAttribute = customAttribute('ui-menu')(UIMenuAttribute) || UIMenuAttribute;
				return UIMenuAttribute;
			})(UIAttribute);

			_export('UIMenuAttribute', UIMenuAttribute);

			UIMenuItemAttribute = (function (_UIAttribute2) {
				var _instanceInitializers2 = {};

				_inherits(UIMenuItemAttribute, _UIAttribute2);

				function UIMenuItemAttribute() {
					_classCallCheck(this, _UIMenuItemAttribute);

					_get(Object.getPrototypeOf(_UIMenuItemAttribute.prototype), 'constructor', this).apply(this, arguments);

					_defineDecoratedPropertyDescriptor(this, 'active', _instanceInitializers2);
				}

				_createDecoratedClass(UIMenuItemAttribute, [{
					key: 'bind',
					value: function bind() {
						this.element.classList.add('item');
					}
				}, {
					key: 'active',
					decorators: [bindableToggle],
					initializer: function initializer() {
						return false;
					},
					enumerable: true
				}], null, _instanceInitializers2);

				var _UIMenuItemAttribute = UIMenuItemAttribute;
				UIMenuItemAttribute = customAttribute('ui-menu-item')(UIMenuItemAttribute) || UIMenuItemAttribute;
				return UIMenuItemAttribute;
			})(UIAttribute);

			_export('UIMenuItemAttribute', UIMenuItemAttribute);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL3VpLW1lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGFBQVksQ0FBQzs7NkZBVUEsZUFBZSxFQWlDZixtQkFBbUI7Ozs7Ozs7Ozs7Ozs7OzhCQXJDeEIsV0FBVztpQ0FBRSxjQUFjOytCQUFFLFlBQVk7OzhCQUN6QyxNQUFNO3VDQUFFLGVBQWU7Z0NBQUUsUUFBUTtnQ0FBRSxRQUFROzs7QUFHdEMsa0JBQWU7OztjQUFmLGVBQWU7O2FBQWYsZUFBZTs7Ozs7Ozs7OzswQkFBZixlQUFlOztZQU1sQixxQkFBRztBQUNYLFVBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO0FBQ3hDLFVBQUssQ0FBQyxNQUFNLEVBQUc7QUFBRSxjQUFPLEtBQUssQ0FBQztPQUFFOztBQUVoQyxVQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFBO0FBQzlCLFVBQUssQ0FBQyxPQUFPLEVBQUc7QUFBRSxjQUFPLEtBQUssQ0FBQztPQUFFOztBQUVqQyxhQUFRLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztNQUM3RDs7O1lBR0csZ0JBQUc7QUFFTixVQUFLLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRztBQUN2QixXQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUUsTUFBTSxDQUFFLENBQUM7T0FDckMsTUFBTTtBQUNOLHdGQUFhO09BQ2I7TUFDRDs7O2tCQXRCQSxRQUFROzs7OztrQkFDUixRQUFRLENBQUUsZ0JBQWdCLENBQUU7Ozs7OzJCQUhqQixlQUFlO0FBQWYsbUJBQWUsR0FEM0IsZUFBZSxDQUFFLFNBQVMsQ0FBRSxDQUNoQixlQUFlLEtBQWYsZUFBZTtXQUFmLGVBQWU7TUFBUyxXQUFXOzs7O0FBaUNuQyxzQkFBbUI7OztjQUFuQixtQkFBbUI7O2FBQW5CLG1CQUFtQjs7Ozs7Ozs7MEJBQW5CLG1CQUFtQjs7WUFJM0IsZ0JBQUc7QUFFTixVQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUUsTUFBTSxDQUFFLENBQUM7TUFDckM7OztrQkFMQSxjQUFjOzthQUFVLEtBQUs7Ozs7OytCQUZsQixtQkFBbUI7QUFBbkIsdUJBQW1CLEdBRC9CLGVBQWUsQ0FBRSxjQUFjLENBQUUsQ0FDckIsbUJBQW1CLEtBQW5CLG1CQUFtQjtXQUFuQixtQkFBbUI7TUFBUyxXQUFXIiwiZmlsZSI6ImNvbGxlY3Rpb25zL3VpLW1lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIE1lbnUgLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL2NvbGxlY3Rpb25zL21lbnUuaHRtbFxuICovXG5cbmltcG9ydCB7VUlBdHRyaWJ1dGUsIGJpbmRhYmxlVG9nZ2xlLCBiaW5kYWJsZUVudW19IGZyb20gJy4uL3VpLWF0dHJpYnV0ZSc7XG5pbXBvcnQge2luamVjdCwgY3VzdG9tQXR0cmlidXRlLCBjaGlsZHJlbiwgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUF0dHJpYnV0ZSggJ3VpLW1lbnUnIClcbmV4cG9ydCBjbGFzcyBVSU1lbnVBdHRyaWJ1dGUgZXh0ZW5kcyBVSUF0dHJpYnV0ZSB7XG5cblx0QGJpbmRhYmxlIHJvdXRlcjtcblx0QGNoaWxkcmVuKCAnW3VpLW1lbnUtaXRlbV0nICkgaXRlbXM7XG5cblxuXHRpc1N1Ym1lbnUoKSB7XG5cdFx0bGV0IHBhcmVudCA9IHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXHRcdGlmICggIXBhcmVudCApIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0XHRsZXQgY2xhc3NlcyA9IHBhcmVudC5jbGFzc0xpc3Rcblx0XHRpZiAoICFjbGFzc2VzICkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHRcdHJldHVybiAoY2xhc3Nlcy5jb250YWlucygnaXRlbScpIHx8IGNsYXNzZXMuY29udGFpbnMoJ21lbnUnKSlcblx0fVxuXG5cblx0YmluZCgpIHtcblx0XHQvLyBEb24ndCBzdXBlciBmb3Igc3ViLW1lbnVzIGJlY2F1c2UgdGhleSBzaG91bGRuJ3QgZ2V0IHRoZSAndWknXG5cdFx0aWYgKCB0aGlzLmlzU3VibWVudSgpICkge1xuXHRcdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoICdtZW51JyApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdXBlci5iaW5kKCk7XG5cdFx0fVxuXHR9XG5cbn1cblxuXG4vKipcbiAqIHVpLW1lbnUtaXRlbVxuICovXG5AY3VzdG9tQXR0cmlidXRlKCAndWktbWVudS1pdGVtJyApXG5leHBvcnQgY2xhc3MgVUlNZW51SXRlbUF0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGVUb2dnbGUgYWN0aXZlID0gZmFsc2U7XG5cblx0YmluZCgpIHtcblx0XHQvLyBubyBzdXBlclxuXHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAnaXRlbScgKTtcblx0fVxuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
