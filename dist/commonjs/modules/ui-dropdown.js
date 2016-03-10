
"use strict";

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _constants = require('../constants');

var _uiAttribute = require('../ui-attribute');

var _aureliaFramework = require('aurelia-framework');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdWktZHJvcGRvd24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozt5QkFNVyxjQUFjOzsyQkFDa0IsaUJBQWlCOztnQ0FDWixtQkFBbUI7O0lBR25FLG1CQUFtQjs7O1dBQW5CLG1CQUFtQjs7VUFBbkIsbUJBQW1COzs7Ozs7Ozs7Ozs7Ozt1QkFBbkIsbUJBQW1COztTQVEzQixnQkFBWTtxQ0FBUCxJQUFJO0FBQUosUUFBSTs7O0FBQ1oseUZBQWUsSUFBSSxFQUFHOztBQUV0QixPQUFLLElBQUksQ0FBQyxTQUFTLEVBQUc7QUFDckIsUUFBSSxLQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUMxQixRQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBRSxvQkFBb0IsRUFBRSxLQUFJLENBQUUsQ0FBQztBQUNoRCxRQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUUsV0FBVyxDQUFFLENBQUM7O0FBRTFDLFFBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEtBQUssUUFBUSxFQUFHO0FBQ3hDLFNBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFFLHNCQUFzQixDQUFFLENBQUM7O0FBSzVDLFNBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFFLG9CQUFvQixDQUFFLENBQUM7QUFDL0QsU0FBSyxDQUFDLEtBQUssRUFBRztBQUNiLFVBQUksQ0FBQyxNQUFNLENBQUMsS0FBSywwQkFBeUIsS0FBSSxxQkFBbUIsQ0FBQztBQUNsRSxXQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBRSxPQUFPLENBQUUsQ0FBQztBQUMxQyxXQUFLLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztBQUN0QixXQUFLLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQzs7QUFFbEIsVUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBRSxZQUFZLENBQUUsQ0FBQztBQUN2RCxhQUFPLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQztBQUNyQixXQUFLLENBQUMsZ0JBQWdCLENBQUUsT0FBTyxDQUFFLENBQUM7O0FBRWxDLFVBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBRSxDQUFDO01BQzVELE1BQU07QUFDTixVQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBRSxnQ0FBZ0MsRUFBRSxLQUFLLENBQUUsQ0FBQztNQUM3RDtLQUNEO0lBQ0Q7R0FDRDs7O1NBR1Usb0JBQUc7QUFDYixPQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBRSwwQkFBMEIsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFFLENBQUM7QUFDeEQsSUFBQyxDQUFFLElBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztHQUNoQzs7O2VBM0NILGdDQUFTLEVBQUUsa0JBQWtCLEVBQUUsOEJBQVksTUFBTSxFQUFFLENBQUM7Ozs7Ozs7VUFDM0IsS0FBSzs7Ozs7OztVQUNQLEtBQUs7Ozs7Ozs7VUFDRixLQUFLOzs7Ozs0QkFMcEIsbUJBQW1CO0FBQW5CLG9CQUFtQixHQUQvQix1Q0FBb0IscUJBQVUsZUFBZSxjQUFZLENBQzdDLG1CQUFtQixLQUFuQixtQkFBbUI7UUFBbkIsbUJBQW1CIiwiZmlsZSI6Im1vZHVsZXMvdWktZHJvcGRvd24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIERyb3Bkb3duIC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9tb2R1bGVzL2Ryb3Bkb3duLmh0bWxcbiAqL1xuXG5pbXBvcnQge2NvbnN0YW50c30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7VUlBdHRyaWJ1dGUsIGJpbmRhYmxlVG9nZ2xlLCBiaW5kYWJsZUVudW19IGZyb20gJy4uL3VpLWF0dHJpYnV0ZSc7XG5pbXBvcnQge2luamVjdCwgY3VzdG9tQXR0cmlidXRlLCBiaW5kYWJsZSwgYmluZGluZ01vZGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1kcm9wZG93bmAgKVxuZXhwb3J0IGNsYXNzIFVJRHJvcGRvd25BdHRyaWJ1dGUgZXh0ZW5kcyBVSUF0dHJpYnV0ZSB7XG5cblx0QGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgc2VsZWN0aW9uO1xuXHRAYmluZGFibGVUb2dnbGUgbG9hZGluZyA9IGZhbHNlO1xuXHRAYmluZGFibGVUb2dnbGUgZXJyb3IgPSBmYWxzZTtcblx0QGJpbmRhYmxlVG9nZ2xlIGRpc2FibGVkID0gZmFsc2U7XG5cblxuXHRiaW5kKCAuLi5hcmdzICkge1xuXHRcdHN1cGVyLmJpbmQoIC4uLmFyZ3MgKTtcblxuXHRcdGlmICggdGhpcy5zZWxlY3Rpb24gKSB7XG5cdFx0XHRsZXQgbmFtZSA9IHRoaXMuc2VsZWN0aW9uO1xuXHRcdFx0dGhpcy5sb2dnZXIuZGVidWcoIFwiU2VsZWN0aW9uIHNldCB0bzogXCIsIG5hbWUgKTtcblx0XHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAnc2VsZWN0aW9uJyApO1xuXG5cdFx0XHRpZiAoIHRoaXMuZWxlbWVudC50YWdOYW1lICE9PSAnc2VsZWN0JyApIHtcblx0XHRcdFx0dGhpcy5sb2dnZXIuZGVidWcoIFwiTm9uLXNlbGVjdCBkcm9wZG93bi5cIiApO1xuXG5cdFx0XHRcdC8vIFRPRE86IFRoaXMgZG9lc24ndCB3b3JrIHlldDsgaXQgaW5qZWN0cyB0aGUgaGlkZGVuIGZpZWxkLCBidXQgdGhlIGJpbmRpbmdcblx0XHRcdFx0Ly8gZG9lc24ndCB3b3JrLiBJdCBsaWtlbHkgbmVlZHMgdG8gYmUgaG9va2VkIHVwIG1hbnVhbGx5LCBidXQgSSBoYXZlIG5vXG5cdFx0XHRcdC8vIGNsdWUgaG93IHRvIGRvIHRoYXQgY3VycmVudGx5LlxuXHRcdFx0XHRsZXQgaW5wdXQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvciggJ2lucHV0W3R5cGU9aGlkZGVuXScgKTtcblx0XHRcdFx0aWYgKCAhaW5wdXQgKSB7XG5cdFx0XHRcdFx0dGhpcy5sb2dnZXIuZGVidWcoIGBObyBoaWRkZW4gaW5wdXQgZm9yICR7bmFtZX07IGNyZWF0aW5nIG9uZS5gICk7XG5cdFx0XHRcdFx0aW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnaW5wdXQnICk7XG5cdFx0XHRcdFx0aW5wdXQudHlwZSA9ICdoaWRkZW4nO1xuXHRcdFx0XHRcdGlucHV0Lm5hbWUgPSBuYW1lO1xuXG5cdFx0XHRcdFx0bGV0IGJpbmRpbmcgPSBkb2N1bWVudC5jcmVhdGVBdHRyaWJ1dGUoIFwidmFsdWUuYmluZFwiICk7XG5cdFx0XHRcdFx0YmluZGluZy52YWx1ZSA9IG5hbWU7XG5cdFx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlTm9kZSggYmluZGluZyApO1xuXG5cdFx0XHRcdFx0dGhpcy5lbGVtZW50Lmluc2VydEJlZm9yZSggaW5wdXQsIHRoaXMuZWxlbWVudC5maXJzdENoaWxkICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5sb2dnZXIuZGVidWcoIFwiQWxyZWFkeSBoYXMgYSBoaWRkZW4gZWxlbWVudDogXCIsIGlucHV0ICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXG4gICAgYXR0YWNoZWQoKSB7XG5cdFx0dGhpcy5sb2dnZXIuZGVidWcoIFwiQWN0aXZhdGluZyBkcm9wZG93biBmb3IgXCIsIHRoaXMuZWxlbWVudCApO1xuICAgICAgICAkKCB0aGlzLmVsZW1lbnQgKS5kcm9wZG93bigpO1xuICAgIH1cblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
