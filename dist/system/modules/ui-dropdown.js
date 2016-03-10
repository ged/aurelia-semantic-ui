System.register(['../constants', '../ui-attribute', 'aurelia-framework'], function (_export) {
	"use strict";

	var constants, UIAttribute, bindableToggle, bindableEnum, inject, customAttribute, bindable, bindingMode, UIDropdownAttribute;

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

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
			inject = _aureliaFramework.inject;
			customAttribute = _aureliaFramework.customAttribute;
			bindable = _aureliaFramework.bindable;
			bindingMode = _aureliaFramework.bindingMode;
		}],
		execute: function () {
			UIDropdownAttribute = (function (_UIAttribute) {
				var _instanceInitializers = {};

				_inherits(UIDropdownAttribute, _UIAttribute);

				function UIDropdownAttribute() {
					_classCallCheck(this, _UIDropdownAttribute);

					_get(Object.getPrototypeOf(_UIDropdownAttribute.prototype), 'constructor', this).apply(this, arguments);

					_defineDecoratedPropertyDescriptor(this, 'selection', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'loading', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'error', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'disabled', _instanceInitializers);
				}

				_createDecoratedClass(UIDropdownAttribute, [{
					key: 'bind',
					value: function bind() {
						for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
							args[_key2] = arguments[_key2];
						}

						_get(Object.getPrototypeOf(_UIDropdownAttribute.prototype), 'bind', this).apply(this, args);

						if (this.selection) {
							var _name = this.selection;
							this.logger.debug("Selection set to: ", _name);
							this.element.classList.add('selection');

							if (this.element.tagName !== 'select') {
								this.logger.debug("Non-select dropdown.");

								var input = this.element.querySelector('input[type=hidden]');
								if (!input) {
									this.logger.debug('No hidden input for ' + _name + '; creating one.');
									input = document.createElement('input');
									input.type = 'hidden';
									input.name = _name;

									var binding = document.createAttribute("value.bind");
									binding.value = _name;
									input.setAttributeNode(binding);

									this.element.insertBefore(input, this.element.firstChild);
								} else {
									this.logger.debug("Already has a hidden element: ", input);
								}
							}
						}
					}
				}, {
					key: 'attached',
					value: function attached() {
						this.logger.debug("Activating dropdown for ", this.element);
						$(this.element).dropdown();
					}
				}, {
					key: 'selection',
					decorators: [bindable({ defaultBindingMode: bindingMode.twoWay })],
					initializer: null,
					enumerable: true
				}, {
					key: 'loading',
					decorators: [bindableToggle],
					initializer: function initializer() {
						return false;
					},
					enumerable: true
				}, {
					key: 'error',
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
				}], null, _instanceInitializers);

				var _UIDropdownAttribute = UIDropdownAttribute;
				UIDropdownAttribute = customAttribute(constants.attributePrefix + 'dropdown')(UIDropdownAttribute) || UIDropdownAttribute;
				return UIDropdownAttribute;
			})(UIAttribute);

			_export('UIDropdownAttribute', UIDropdownAttribute);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdWktZHJvcGRvd24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGFBQVksQ0FBQzs7MkdBV0EsbUJBQW1COzs7Ozs7Ozs7Ozs7OzswQkFMeEIsU0FBUzs7OEJBQ1QsV0FBVztpQ0FBRSxjQUFjOytCQUFFLFlBQVk7OzhCQUN6QyxNQUFNO3VDQUFFLGVBQWU7Z0NBQUUsUUFBUTttQ0FBRSxXQUFXOzs7QUFHekMsc0JBQW1COzs7Y0FBbkIsbUJBQW1COzthQUFuQixtQkFBbUI7Ozs7Ozs7Ozs7Ozs7OzBCQUFuQixtQkFBbUI7O1lBUTNCLGdCQUFZO3dDQUFQLElBQUk7QUFBSixXQUFJOzs7QUFDWiw0RkFBZSxJQUFJLEVBQUc7O0FBRXRCLFVBQUssSUFBSSxDQUFDLFNBQVMsRUFBRztBQUNyQixXQUFJLEtBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0FBQzFCLFdBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFFLG9CQUFvQixFQUFFLEtBQUksQ0FBRSxDQUFDO0FBQ2hELFdBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBRSxXQUFXLENBQUUsQ0FBQzs7QUFFMUMsV0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sS0FBSyxRQUFRLEVBQUc7QUFDeEMsWUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUUsc0JBQXNCLENBQUUsQ0FBQzs7QUFLNUMsWUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUUsb0JBQW9CLENBQUUsQ0FBQztBQUMvRCxZQUFLLENBQUMsS0FBSyxFQUFHO0FBQ2IsYUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLDBCQUF5QixLQUFJLHFCQUFtQixDQUFDO0FBQ2xFLGNBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFFLE9BQU8sQ0FBRSxDQUFDO0FBQzFDLGNBQUssQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO0FBQ3RCLGNBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDOztBQUVsQixhQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFFLFlBQVksQ0FBRSxDQUFDO0FBQ3ZELGdCQUFPLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQztBQUNyQixjQUFLLENBQUMsZ0JBQWdCLENBQUUsT0FBTyxDQUFFLENBQUM7O0FBRWxDLGFBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBRSxDQUFDO1NBQzVELE1BQU07QUFDTixhQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBRSxnQ0FBZ0MsRUFBRSxLQUFLLENBQUUsQ0FBQztTQUM3RDtRQUNEO09BQ0Q7TUFDRDs7O1lBR1Usb0JBQUc7QUFDYixVQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBRSwwQkFBMEIsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFFLENBQUM7QUFDeEQsT0FBQyxDQUFFLElBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztNQUNoQzs7O2tCQTNDSCxRQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7Ozs7O2tCQUNwRCxjQUFjOzthQUFXLEtBQUs7Ozs7O2tCQUM5QixjQUFjOzthQUFTLEtBQUs7Ozs7O2tCQUM1QixjQUFjOzthQUFZLEtBQUs7Ozs7OytCQUxwQixtQkFBbUI7QUFBbkIsdUJBQW1CLEdBRC9CLGVBQWUsQ0FBSyxTQUFTLENBQUMsZUFBZSxjQUFZLENBQzdDLG1CQUFtQixLQUFuQixtQkFBbUI7V0FBbkIsbUJBQW1CO01BQVMsV0FBVyIsImZpbGUiOiJtb2R1bGVzL3VpLWRyb3Bkb3duLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBEcm9wZG93biAtIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vbW9kdWxlcy9kcm9wZG93bi5odG1sXG4gKi9cblxuaW1wb3J0IHtjb25zdGFudHN9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge1VJQXR0cmlidXRlLCBiaW5kYWJsZVRvZ2dsZSwgYmluZGFibGVFbnVtfSBmcm9tICcuLi91aS1hdHRyaWJ1dGUnO1xuaW1wb3J0IHtpbmplY3QsIGN1c3RvbUF0dHJpYnV0ZSwgYmluZGFibGUsIGJpbmRpbmdNb2RlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBjdXN0b21BdHRyaWJ1dGUoIGAke2NvbnN0YW50cy5hdHRyaWJ1dGVQcmVmaXh9ZHJvcGRvd25gIClcbmV4cG9ydCBjbGFzcyBVSURyb3Bkb3duQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG5cdEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHNlbGVjdGlvbjtcblx0QGJpbmRhYmxlVG9nZ2xlIGxvYWRpbmcgPSBmYWxzZTtcblx0QGJpbmRhYmxlVG9nZ2xlIGVycm9yID0gZmFsc2U7XG5cdEBiaW5kYWJsZVRvZ2dsZSBkaXNhYmxlZCA9IGZhbHNlO1xuXG5cblx0YmluZCggLi4uYXJncyApIHtcblx0XHRzdXBlci5iaW5kKCAuLi5hcmdzICk7XG5cblx0XHRpZiAoIHRoaXMuc2VsZWN0aW9uICkge1xuXHRcdFx0bGV0IG5hbWUgPSB0aGlzLnNlbGVjdGlvbjtcblx0XHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBcIlNlbGVjdGlvbiBzZXQgdG86IFwiLCBuYW1lICk7XG5cdFx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ3NlbGVjdGlvbicgKTtcblxuXHRcdFx0aWYgKCB0aGlzLmVsZW1lbnQudGFnTmFtZSAhPT0gJ3NlbGVjdCcgKSB7XG5cdFx0XHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBcIk5vbi1zZWxlY3QgZHJvcGRvd24uXCIgKTtcblxuXHRcdFx0XHQvLyBUT0RPOiBUaGlzIGRvZXNuJ3Qgd29yayB5ZXQ7IGl0IGluamVjdHMgdGhlIGhpZGRlbiBmaWVsZCwgYnV0IHRoZSBiaW5kaW5nXG5cdFx0XHRcdC8vIGRvZXNuJ3Qgd29yay4gSXQgbGlrZWx5IG5lZWRzIHRvIGJlIGhvb2tlZCB1cCBtYW51YWxseSwgYnV0IEkgaGF2ZSBub1xuXHRcdFx0XHQvLyBjbHVlIGhvdyB0byBkbyB0aGF0IGN1cnJlbnRseS5cblx0XHRcdFx0bGV0IGlucHV0ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoICdpbnB1dFt0eXBlPWhpZGRlbl0nICk7XG5cdFx0XHRcdGlmICggIWlucHV0ICkge1xuXHRcdFx0XHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBgTm8gaGlkZGVuIGlucHV0IGZvciAke25hbWV9OyBjcmVhdGluZyBvbmUuYCApO1xuXHRcdFx0XHRcdGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2lucHV0JyApO1xuXHRcdFx0XHRcdGlucHV0LnR5cGUgPSAnaGlkZGVuJztcblx0XHRcdFx0XHRpbnB1dC5uYW1lID0gbmFtZTtcblxuXHRcdFx0XHRcdGxldCBiaW5kaW5nID0gZG9jdW1lbnQuY3JlYXRlQXR0cmlidXRlKCBcInZhbHVlLmJpbmRcIiApO1xuXHRcdFx0XHRcdGJpbmRpbmcudmFsdWUgPSBuYW1lO1xuXHRcdFx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZU5vZGUoIGJpbmRpbmcgKTtcblxuXHRcdFx0XHRcdHRoaXMuZWxlbWVudC5pbnNlcnRCZWZvcmUoIGlucHV0LCB0aGlzLmVsZW1lbnQuZmlyc3RDaGlsZCApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBcIkFscmVhZHkgaGFzIGEgaGlkZGVuIGVsZW1lbnQ6IFwiLCBpbnB1dCApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblxuICAgIGF0dGFjaGVkKCkge1xuXHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBcIkFjdGl2YXRpbmcgZHJvcGRvd24gZm9yIFwiLCB0aGlzLmVsZW1lbnQgKTtcbiAgICAgICAgJCggdGhpcy5lbGVtZW50ICkuZHJvcGRvd24oKTtcbiAgICB9XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
