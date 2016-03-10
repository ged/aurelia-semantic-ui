define(['exports', '../constants', '../ui-attribute', 'aurelia-framework'], function (exports, _constants, _uiAttribute, _aureliaFramework) {
	"use strict";

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var UIDropdownAttribute = (function (_UIAttribute) {
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
			decorators: [(0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay })],
			initializer: null,
			enumerable: true
		}, {
			key: 'loading',
			decorators: [_uiAttribute.bindableToggle],
			initializer: function initializer() {
				return false;
			},
			enumerable: true
		}, {
			key: 'error',
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
		}], null, _instanceInitializers);

		var _UIDropdownAttribute = UIDropdownAttribute;
		UIDropdownAttribute = (0, _aureliaFramework.customAttribute)(_constants.constants.attributePrefix + 'dropdown')(UIDropdownAttribute) || UIDropdownAttribute;
		return UIDropdownAttribute;
	})(_uiAttribute.UIAttribute);

	exports.UIDropdownAttribute = UIDropdownAttribute;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdWktZHJvcGRvd24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGFBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztLQVdBLG1CQUFtQjs7O1lBQW5CLG1CQUFtQjs7V0FBbkIsbUJBQW1COzs7Ozs7Ozs7Ozs7Ozt3QkFBbkIsbUJBQW1COztVQVEzQixnQkFBWTtzQ0FBUCxJQUFJO0FBQUosU0FBSTs7O0FBQ1osMEZBQWUsSUFBSSxFQUFHOztBQUV0QixRQUFLLElBQUksQ0FBQyxTQUFTLEVBQUc7QUFDckIsU0FBSSxLQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUMxQixTQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBRSxvQkFBb0IsRUFBRSxLQUFJLENBQUUsQ0FBQztBQUNoRCxTQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUUsV0FBVyxDQUFFLENBQUM7O0FBRTFDLFNBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEtBQUssUUFBUSxFQUFHO0FBQ3hDLFVBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFFLHNCQUFzQixDQUFFLENBQUM7O0FBSzVDLFVBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFFLG9CQUFvQixDQUFFLENBQUM7QUFDL0QsVUFBSyxDQUFDLEtBQUssRUFBRztBQUNiLFdBQUksQ0FBQyxNQUFNLENBQUMsS0FBSywwQkFBeUIsS0FBSSxxQkFBbUIsQ0FBQztBQUNsRSxZQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBRSxPQUFPLENBQUUsQ0FBQztBQUMxQyxZQUFLLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztBQUN0QixZQUFLLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQzs7QUFFbEIsV0FBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBRSxZQUFZLENBQUUsQ0FBQztBQUN2RCxjQUFPLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQztBQUNyQixZQUFLLENBQUMsZ0JBQWdCLENBQUUsT0FBTyxDQUFFLENBQUM7O0FBRWxDLFdBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBRSxDQUFDO09BQzVELE1BQU07QUFDTixXQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBRSxnQ0FBZ0MsRUFBRSxLQUFLLENBQUUsQ0FBQztPQUM3RDtNQUNEO0tBQ0Q7SUFDRDs7O1VBR1Usb0JBQUc7QUFDYixRQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBRSwwQkFBMEIsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFFLENBQUM7QUFDeEQsS0FBQyxDQUFFLElBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNoQzs7O2dCQTNDSCxzQkFMK0IsUUFBUSxFQUs5QixFQUFFLGtCQUFrQixFQUFFLGtCQUxVLFdBQVcsQ0FLVCxNQUFNLEVBQUUsQ0FBQzs7Ozs7NkJBTmpDLGNBQWM7O1dBT1IsS0FBSzs7Ozs7NkJBUFgsY0FBYzs7V0FRVixLQUFLOzs7Ozs2QkFSVCxjQUFjOztXQVNQLEtBQUs7Ozs7OzZCQUxwQixtQkFBbUI7QUFBbkIscUJBQW1CLEdBRC9CLHNCQUZlLGVBQWUsRUFFVixXQUpiLFNBQVMsQ0FJYyxlQUFlLGNBQVksQ0FDN0MsbUJBQW1CLEtBQW5CLG1CQUFtQjtTQUFuQixtQkFBbUI7aUJBSnhCLFdBQVciLCJmaWxlIjoibW9kdWxlcy91aS1kcm9wZG93bi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogRHJvcGRvd24gLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL21vZHVsZXMvZHJvcGRvd24uaHRtbFxuICovXG5cbmltcG9ydCB7Y29uc3RhbnRzfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtVSUF0dHJpYnV0ZSwgYmluZGFibGVUb2dnbGUsIGJpbmRhYmxlRW51bX0gZnJvbSAnLi4vdWktYXR0cmlidXRlJztcbmltcG9ydCB7aW5qZWN0LCBjdXN0b21BdHRyaWJ1dGUsIGJpbmRhYmxlLCBiaW5kaW5nTW9kZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AY3VzdG9tQXR0cmlidXRlKCBgJHtjb25zdGFudHMuYXR0cmlidXRlUHJlZml4fWRyb3Bkb3duYCApXG5leHBvcnQgY2xhc3MgVUlEcm9wZG93bkF0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBzZWxlY3Rpb247XG5cdEBiaW5kYWJsZVRvZ2dsZSBsb2FkaW5nID0gZmFsc2U7XG5cdEBiaW5kYWJsZVRvZ2dsZSBlcnJvciA9IGZhbHNlO1xuXHRAYmluZGFibGVUb2dnbGUgZGlzYWJsZWQgPSBmYWxzZTtcblxuXG5cdGJpbmQoIC4uLmFyZ3MgKSB7XG5cdFx0c3VwZXIuYmluZCggLi4uYXJncyApO1xuXG5cdFx0aWYgKCB0aGlzLnNlbGVjdGlvbiApIHtcblx0XHRcdGxldCBuYW1lID0gdGhpcy5zZWxlY3Rpb247XG5cdFx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggXCJTZWxlY3Rpb24gc2V0IHRvOiBcIiwgbmFtZSApO1xuXHRcdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoICdzZWxlY3Rpb24nICk7XG5cblx0XHRcdGlmICggdGhpcy5lbGVtZW50LnRhZ05hbWUgIT09ICdzZWxlY3QnICkge1xuXHRcdFx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggXCJOb24tc2VsZWN0IGRyb3Bkb3duLlwiICk7XG5cblx0XHRcdFx0Ly8gVE9ETzogVGhpcyBkb2Vzbid0IHdvcmsgeWV0OyBpdCBpbmplY3RzIHRoZSBoaWRkZW4gZmllbGQsIGJ1dCB0aGUgYmluZGluZ1xuXHRcdFx0XHQvLyBkb2Vzbid0IHdvcmsuIEl0IGxpa2VseSBuZWVkcyB0byBiZSBob29rZWQgdXAgbWFudWFsbHksIGJ1dCBJIGhhdmUgbm9cblx0XHRcdFx0Ly8gY2x1ZSBob3cgdG8gZG8gdGhhdCBjdXJyZW50bHkuXG5cdFx0XHRcdGxldCBpbnB1dCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCAnaW5wdXRbdHlwZT1oaWRkZW5dJyApO1xuXHRcdFx0XHRpZiAoICFpbnB1dCApIHtcblx0XHRcdFx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggYE5vIGhpZGRlbiBpbnB1dCBmb3IgJHtuYW1lfTsgY3JlYXRpbmcgb25lLmAgKTtcblx0XHRcdFx0XHRpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdpbnB1dCcgKTtcblx0XHRcdFx0XHRpbnB1dC50eXBlID0gJ2hpZGRlbic7XG5cdFx0XHRcdFx0aW5wdXQubmFtZSA9IG5hbWU7XG5cblx0XHRcdFx0XHRsZXQgYmluZGluZyA9IGRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZSggXCJ2YWx1ZS5iaW5kXCIgKTtcblx0XHRcdFx0XHRiaW5kaW5nLnZhbHVlID0gbmFtZTtcblx0XHRcdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGVOb2RlKCBiaW5kaW5nICk7XG5cblx0XHRcdFx0XHR0aGlzLmVsZW1lbnQuaW5zZXJ0QmVmb3JlKCBpbnB1dCwgdGhpcy5lbGVtZW50LmZpcnN0Q2hpbGQgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggXCJBbHJlYWR5IGhhcyBhIGhpZGRlbiBlbGVtZW50OiBcIiwgaW5wdXQgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cbiAgICBhdHRhY2hlZCgpIHtcblx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggXCJBY3RpdmF0aW5nIGRyb3Bkb3duIGZvciBcIiwgdGhpcy5lbGVtZW50ICk7XG4gICAgICAgICQoIHRoaXMuZWxlbWVudCApLmRyb3Bkb3duKCk7XG4gICAgfVxuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
