define(['exports', '../constants', '../ui-attribute', 'aurelia-framework'], function (exports, _constants, _uiAttribute, _aureliaFramework) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Dropdown - http://semantic-ui.com/modules/dropdown.html
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.UIDropdownAttribute = undefined;

	function _initDefineProp(target, property, descriptor, context) {
		if (!descriptor) return;
		Object.defineProperty(target, property, {
			enumerable: descriptor.enumerable,
			configurable: descriptor.configurable,
			writable: descriptor.writable,
			value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
		});
	}

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
		var desc = {};
		Object['ke' + 'ys'](descriptor).forEach(function (key) {
			desc[key] = descriptor[key];
		});
		desc.enumerable = !!desc.enumerable;
		desc.configurable = !!desc.configurable;

		if ('value' in desc || desc.initializer) {
			desc.writable = true;
		}

		desc = decorators.slice().reverse().reduce(function (desc, decorator) {
			return decorator(target, property, desc) || desc;
		}, desc);

		if (context && desc.initializer !== void 0) {
			desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
			desc.initializer = undefined;
		}

		if (desc.initializer === void 0) {
			Object['define' + 'Property'](target, property, desc);
			desc = null;
		}

		return desc;
	}

	function _initializerWarningHelper(descriptor, context) {
		throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
	}

	var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

	let UIDropdownAttribute = exports.UIDropdownAttribute = (_dec = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }dropdown`), _dec2 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec(_class = (_class2 = class UIDropdownAttribute extends _uiAttribute.UIAttribute {
		constructor(...args) {
			var _temp;

			return _temp = super(...args), _initDefineProp(this, 'selection', _descriptor, this), _initDefineProp(this, 'loading', _descriptor2, this), _initDefineProp(this, 'error', _descriptor3, this), _initDefineProp(this, 'disabled', _descriptor4, this), _temp;
		}

		bind(...args) {
			super.bind(...args);

			if (this.selection) {
				let name = this.selection;
				this.logger.debug("Selection set to: ", name);
				this.element.classList.add('selection');

				if (this.element.tagName !== 'select') {
					this.logger.debug("Non-select dropdown.");

					// TODO: This doesn't work yet; it injects the hidden field, but the binding
					// doesn't work. It likely needs to be hooked up manually, but I have no
					// clue how to do that currently.
					let input = this.element.querySelector('input[type=hidden]');
					if (!input) {
						this.logger.debug(`No hidden input for ${ name }; creating one.`);
						input = document.createElement('input');
						input.type = 'hidden';
						input.name = name;

						let binding = document.createAttribute("value.bind");
						binding.value = name;
						input.setAttributeNode(binding);

						this.element.insertBefore(input, this.element.firstChild);
					} else {
						this.logger.debug("Already has a hidden element: ", input);
					}
				}
			}
		}

		attached() {
			this.logger.debug("Activating dropdown for ", this.element);
			$(this.element).dropdown();
		}

	}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'selection', [_dec2], {
		enumerable: true,
		initializer: null
	}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'loading', [_uiAttribute.bindableToggle], {
		enumerable: true,
		initializer: function () {
			return false;
		}
	}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'error', [_uiAttribute.bindableToggle], {
		enumerable: true,
		initializer: function () {
			return false;
		}
	}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'disabled', [_uiAttribute.bindableToggle], {
		enumerable: true,
		initializer: function () {
			return false;
		}
	})), _class2)) || _class);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdWktZHJvcGRvd24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FXYSw0REFEWix1Q0FBaUIsQ0FBQyxHQUFFLHFCQUFVLGVBQVYsRUFBMEIsUUFBN0IsQ0FBakIsV0FHQyxnQ0FBUyxFQUFFLG9CQUFvQiw4QkFBWSxNQUFaLEVBQS9CLDRCQUZLLE1BQU0sbUJBQU4sa0NBQThDOzs7Ozs7O0FBUXBELE9BQU0sR0FBRyxJQUFILEVBQVU7QUFDZixTQUFNLElBQU4sQ0FBWSxHQUFHLElBQUgsQ0FBWixDQURlOztBQUdmLE9BQUssS0FBSyxTQUFMLEVBQWlCO0FBQ3JCLFFBQUksT0FBTyxLQUFLLFNBQUwsQ0FEVTtBQUVyQixTQUFLLE1BQUwsQ0FBWSxLQUFaLENBQW1CLG9CQUFuQixFQUF5QyxJQUF6QyxFQUZxQjtBQUdyQixTQUFLLE9BQUwsQ0FBYSxTQUFiLENBQXVCLEdBQXZCLENBQTRCLFdBQTVCLEVBSHFCOztBQUtyQixRQUFLLEtBQUssT0FBTCxDQUFhLE9BQWIsS0FBeUIsUUFBekIsRUFBb0M7QUFDeEMsVUFBSyxNQUFMLENBQVksS0FBWixDQUFtQixzQkFBbkI7Ozs7O0FBRHdDLFNBTXBDLFFBQVEsS0FBSyxPQUFMLENBQWEsYUFBYixDQUE0QixvQkFBNUIsQ0FBUixDQU5vQztBQU94QyxTQUFLLENBQUMsS0FBRCxFQUFTO0FBQ2IsV0FBSyxNQUFMLENBQVksS0FBWixDQUFtQixDQUFDLG9CQUFELEdBQXVCLElBQXZCLEVBQTRCLGVBQTVCLENBQW5CLEVBRGE7QUFFYixjQUFRLFNBQVMsYUFBVCxDQUF3QixPQUF4QixDQUFSLENBRmE7QUFHYixZQUFNLElBQU4sR0FBYSxRQUFiLENBSGE7QUFJYixZQUFNLElBQU4sR0FBYSxJQUFiLENBSmE7O0FBTWIsVUFBSSxVQUFVLFNBQVMsZUFBVCxDQUEwQixZQUExQixDQUFWLENBTlM7QUFPYixjQUFRLEtBQVIsR0FBZ0IsSUFBaEIsQ0FQYTtBQVFiLFlBQU0sZ0JBQU4sQ0FBd0IsT0FBeEIsRUFSYTs7QUFVYixXQUFLLE9BQUwsQ0FBYSxZQUFiLENBQTJCLEtBQTNCLEVBQWtDLEtBQUssT0FBTCxDQUFhLFVBQWIsQ0FBbEMsQ0FWYTtNQUFkLE1BV087QUFDTixXQUFLLE1BQUwsQ0FBWSxLQUFaLENBQW1CLGdDQUFuQixFQUFxRCxLQUFyRCxFQURNO01BWFA7S0FQRDtJQUxEO0dBSEQ7O0FBa0NHLGFBQVc7QUFDYixRQUFLLE1BQUwsQ0FBWSxLQUFaLENBQW1CLDBCQUFuQixFQUErQyxLQUFLLE9BQUwsQ0FBL0MsQ0FEYTtBQUVQLEtBQUcsS0FBSyxPQUFMLENBQUgsQ0FBa0IsUUFBbEIsR0FGTztHQUFYOztFQTFDRzs7Ozs7O1VBR29COzs7OztVQUNGOzs7OztVQUNHIiwiZmlsZSI6Im1vZHVsZXMvdWktZHJvcGRvd24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIERyb3Bkb3duIC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9tb2R1bGVzL2Ryb3Bkb3duLmh0bWxcbiAqL1xuXG5pbXBvcnQge2NvbnN0YW50c30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7VUlBdHRyaWJ1dGUsIGJpbmRhYmxlVG9nZ2xlLCBiaW5kYWJsZUVudW19IGZyb20gJy4uL3VpLWF0dHJpYnV0ZSc7XG5pbXBvcnQge2luamVjdCwgY3VzdG9tQXR0cmlidXRlLCBiaW5kYWJsZSwgYmluZGluZ01vZGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1kcm9wZG93bmAgKVxuZXhwb3J0IGNsYXNzIFVJRHJvcGRvd25BdHRyaWJ1dGUgZXh0ZW5kcyBVSUF0dHJpYnV0ZSB7XG5cblx0QGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgc2VsZWN0aW9uO1xuXHRAYmluZGFibGVUb2dnbGUgbG9hZGluZyA9IGZhbHNlO1xuXHRAYmluZGFibGVUb2dnbGUgZXJyb3IgPSBmYWxzZTtcblx0QGJpbmRhYmxlVG9nZ2xlIGRpc2FibGVkID0gZmFsc2U7XG5cblxuXHRiaW5kKCAuLi5hcmdzICkge1xuXHRcdHN1cGVyLmJpbmQoIC4uLmFyZ3MgKTtcblxuXHRcdGlmICggdGhpcy5zZWxlY3Rpb24gKSB7XG5cdFx0XHRsZXQgbmFtZSA9IHRoaXMuc2VsZWN0aW9uO1xuXHRcdFx0dGhpcy5sb2dnZXIuZGVidWcoIFwiU2VsZWN0aW9uIHNldCB0bzogXCIsIG5hbWUgKTtcblx0XHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAnc2VsZWN0aW9uJyApO1xuXG5cdFx0XHRpZiAoIHRoaXMuZWxlbWVudC50YWdOYW1lICE9PSAnc2VsZWN0JyApIHtcblx0XHRcdFx0dGhpcy5sb2dnZXIuZGVidWcoIFwiTm9uLXNlbGVjdCBkcm9wZG93bi5cIiApO1xuXG5cdFx0XHRcdC8vIFRPRE86IFRoaXMgZG9lc24ndCB3b3JrIHlldDsgaXQgaW5qZWN0cyB0aGUgaGlkZGVuIGZpZWxkLCBidXQgdGhlIGJpbmRpbmdcblx0XHRcdFx0Ly8gZG9lc24ndCB3b3JrLiBJdCBsaWtlbHkgbmVlZHMgdG8gYmUgaG9va2VkIHVwIG1hbnVhbGx5LCBidXQgSSBoYXZlIG5vXG5cdFx0XHRcdC8vIGNsdWUgaG93IHRvIGRvIHRoYXQgY3VycmVudGx5LlxuXHRcdFx0XHRsZXQgaW5wdXQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvciggJ2lucHV0W3R5cGU9aGlkZGVuXScgKTtcblx0XHRcdFx0aWYgKCAhaW5wdXQgKSB7XG5cdFx0XHRcdFx0dGhpcy5sb2dnZXIuZGVidWcoIGBObyBoaWRkZW4gaW5wdXQgZm9yICR7bmFtZX07IGNyZWF0aW5nIG9uZS5gICk7XG5cdFx0XHRcdFx0aW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnaW5wdXQnICk7XG5cdFx0XHRcdFx0aW5wdXQudHlwZSA9ICdoaWRkZW4nO1xuXHRcdFx0XHRcdGlucHV0Lm5hbWUgPSBuYW1lO1xuXG5cdFx0XHRcdFx0bGV0IGJpbmRpbmcgPSBkb2N1bWVudC5jcmVhdGVBdHRyaWJ1dGUoIFwidmFsdWUuYmluZFwiICk7XG5cdFx0XHRcdFx0YmluZGluZy52YWx1ZSA9IG5hbWU7XG5cdFx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlTm9kZSggYmluZGluZyApO1xuXG5cdFx0XHRcdFx0dGhpcy5lbGVtZW50Lmluc2VydEJlZm9yZSggaW5wdXQsIHRoaXMuZWxlbWVudC5maXJzdENoaWxkICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5sb2dnZXIuZGVidWcoIFwiQWxyZWFkeSBoYXMgYSBoaWRkZW4gZWxlbWVudDogXCIsIGlucHV0ICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXG4gICAgYXR0YWNoZWQoKSB7XG5cdFx0dGhpcy5sb2dnZXIuZGVidWcoIFwiQWN0aXZhdGluZyBkcm9wZG93biBmb3IgXCIsIHRoaXMuZWxlbWVudCApO1xuICAgICAgICAkKCB0aGlzLmVsZW1lbnQgKS5kcm9wZG93bigpO1xuICAgIH1cblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
