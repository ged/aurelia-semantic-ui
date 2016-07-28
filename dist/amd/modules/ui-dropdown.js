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

	var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

	let UIDropdownAttribute = exports.UIDropdownAttribute = (_dec = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }dropdown`), _dec2 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec(_class = (_class2 = class UIDropdownAttribute extends _uiAttribute.UIAttribute {
		constructor(...args) {
			var _temp;

			return _temp = super(...args), _initDefineProp(this, 'selection', _descriptor, this), _initDefineProp(this, 'loading', _descriptor2, this), _initDefineProp(this, 'error', _descriptor3, this), _initDefineProp(this, 'disabled', _descriptor4, this), _initDefineProp(this, 'options', _descriptor5, this), _temp;
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
			this.logger.debug("Activating dropdown for ", this.element, " with options: ", this.options);
			$(this.element).dropdown(this.options);
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
	}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'options', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: function () {
			return {};
		}
	})), _class2)) || _class);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdWktZHJvcGRvd24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQVNhLG1CLFdBQUEsbUIsV0FEWix1Q0FBa0IsSUFBRSxxQkFBVSxlQUFnQixXQUE5QyxDLFVBR0MsZ0NBQVMsRUFBRSxvQkFBb0IsOEJBQVksTUFBbEMsRUFBVCxDLDJCQUZLLE1BQU0sbUJBQU4sa0NBQThDO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQVVwRCxPQUFNLEdBQUcsSUFBVCxFQUFnQjtBQUNmLFNBQU0sSUFBTixDQUFZLEdBQUcsSUFBZjs7QUFFQSxPQUFLLEtBQUssU0FBVixFQUFzQjtBQUNyQixRQUFJLE9BQU8sS0FBSyxTQUFoQjtBQUNBLFNBQUssTUFBTCxDQUFZLEtBQVosQ0FBbUIsb0JBQW5CLEVBQXlDLElBQXpDO0FBQ0EsU0FBSyxPQUFMLENBQWEsU0FBYixDQUF1QixHQUF2QixDQUE0QixXQUE1Qjs7QUFFQSxRQUFLLEtBQUssT0FBTCxDQUFhLE9BQWIsS0FBeUIsUUFBOUIsRUFBeUM7QUFDeEMsVUFBSyxNQUFMLENBQVksS0FBWixDQUFtQixzQkFBbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBSSxRQUFRLEtBQUssT0FBTCxDQUFhLGFBQWIsQ0FBNEIsb0JBQTVCLENBQVo7QUFDQSxTQUFLLENBQUMsS0FBTixFQUFjO0FBQ2IsV0FBSyxNQUFMLENBQVksS0FBWixDQUFvQix3QkFBc0IsSUFBSyxrQkFBL0M7QUFDQSxjQUFRLFNBQVMsYUFBVCxDQUF3QixPQUF4QixDQUFSO0FBQ0EsWUFBTSxJQUFOLEdBQWEsUUFBYjtBQUNBLFlBQU0sSUFBTixHQUFhLElBQWI7O0FBRUEsVUFBSSxVQUFVLFNBQVMsZUFBVCxDQUEwQixZQUExQixDQUFkO0FBQ0EsY0FBUSxLQUFSLEdBQWdCLElBQWhCO0FBQ0EsWUFBTSxnQkFBTixDQUF3QixPQUF4Qjs7QUFFQSxXQUFLLE9BQUwsQ0FBYSxZQUFiLENBQTJCLEtBQTNCLEVBQWtDLEtBQUssT0FBTCxDQUFhLFVBQS9DO0FBQ0EsTUFYRCxNQVdPO0FBQ04sV0FBSyxNQUFMLENBQVksS0FBWixDQUFtQixnQ0FBbkIsRUFBcUQsS0FBckQ7QUFDQTtBQUNEO0FBQ0Q7QUFDRDs7QUFHRSxhQUFXO0FBQ2IsUUFBSyxNQUFMLENBQVksS0FBWixDQUFtQiwwQkFBbkIsRUFBK0MsS0FBSyxPQUFwRCxFQUE2RCxpQkFBN0QsRUFBZ0YsS0FBSyxPQUFyRjtBQUNNLEtBQUcsS0FBSyxPQUFSLEVBQWtCLFFBQWxCLENBQTRCLEtBQUssT0FBakM7QUFDSDs7QUEvQ2dELEU7Ozs7OztVQUcxQixLOzs7OztVQUNGLEs7Ozs7O1VBQ0csSzs7Ozs7VUFFUCxFIiwiZmlsZSI6Im1vZHVsZXMvdWktZHJvcGRvd24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIERyb3Bkb3duIC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9tb2R1bGVzL2Ryb3Bkb3duLmh0bWxcbiAqL1xuXG5pbXBvcnQge2NvbnN0YW50c30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7VUlBdHRyaWJ1dGUsIGJpbmRhYmxlVG9nZ2xlLCBiaW5kYWJsZUVudW19IGZyb20gJy4uL3VpLWF0dHJpYnV0ZSc7XG5pbXBvcnQge2luamVjdCwgY3VzdG9tQXR0cmlidXRlLCBiaW5kYWJsZSwgYmluZGluZ01vZGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1kcm9wZG93bmAgKVxuZXhwb3J0IGNsYXNzIFVJRHJvcGRvd25BdHRyaWJ1dGUgZXh0ZW5kcyBVSUF0dHJpYnV0ZSB7XG5cblx0QGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgc2VsZWN0aW9uO1xuXHRAYmluZGFibGVUb2dnbGUgbG9hZGluZyA9IGZhbHNlO1xuXHRAYmluZGFibGVUb2dnbGUgZXJyb3IgPSBmYWxzZTtcblx0QGJpbmRhYmxlVG9nZ2xlIGRpc2FibGVkID0gZmFsc2U7XG5cblx0QGJpbmRhYmxlIG9wdGlvbnMgPSB7fTtcblxuXG5cdGJpbmQoIC4uLmFyZ3MgKSB7XG5cdFx0c3VwZXIuYmluZCggLi4uYXJncyApO1xuXG5cdFx0aWYgKCB0aGlzLnNlbGVjdGlvbiApIHtcblx0XHRcdGxldCBuYW1lID0gdGhpcy5zZWxlY3Rpb247XG5cdFx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggXCJTZWxlY3Rpb24gc2V0IHRvOiBcIiwgbmFtZSApO1xuXHRcdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoICdzZWxlY3Rpb24nICk7XG5cblx0XHRcdGlmICggdGhpcy5lbGVtZW50LnRhZ05hbWUgIT09ICdzZWxlY3QnICkge1xuXHRcdFx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggXCJOb24tc2VsZWN0IGRyb3Bkb3duLlwiICk7XG5cblx0XHRcdFx0Ly8gVE9ETzogVGhpcyBkb2Vzbid0IHdvcmsgeWV0OyBpdCBpbmplY3RzIHRoZSBoaWRkZW4gZmllbGQsIGJ1dCB0aGUgYmluZGluZ1xuXHRcdFx0XHQvLyBkb2Vzbid0IHdvcmsuIEl0IGxpa2VseSBuZWVkcyB0byBiZSBob29rZWQgdXAgbWFudWFsbHksIGJ1dCBJIGhhdmUgbm9cblx0XHRcdFx0Ly8gY2x1ZSBob3cgdG8gZG8gdGhhdCBjdXJyZW50bHkuXG5cdFx0XHRcdGxldCBpbnB1dCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCAnaW5wdXRbdHlwZT1oaWRkZW5dJyApO1xuXHRcdFx0XHRpZiAoICFpbnB1dCApIHtcblx0XHRcdFx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggYE5vIGhpZGRlbiBpbnB1dCBmb3IgJHtuYW1lfTsgY3JlYXRpbmcgb25lLmAgKTtcblx0XHRcdFx0XHRpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdpbnB1dCcgKTtcblx0XHRcdFx0XHRpbnB1dC50eXBlID0gJ2hpZGRlbic7XG5cdFx0XHRcdFx0aW5wdXQubmFtZSA9IG5hbWU7XG5cblx0XHRcdFx0XHRsZXQgYmluZGluZyA9IGRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZSggXCJ2YWx1ZS5iaW5kXCIgKTtcblx0XHRcdFx0XHRiaW5kaW5nLnZhbHVlID0gbmFtZTtcblx0XHRcdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGVOb2RlKCBiaW5kaW5nICk7XG5cblx0XHRcdFx0XHR0aGlzLmVsZW1lbnQuaW5zZXJ0QmVmb3JlKCBpbnB1dCwgdGhpcy5lbGVtZW50LmZpcnN0Q2hpbGQgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggXCJBbHJlYWR5IGhhcyBhIGhpZGRlbiBlbGVtZW50OiBcIiwgaW5wdXQgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cbiAgICBhdHRhY2hlZCgpIHtcblx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggXCJBY3RpdmF0aW5nIGRyb3Bkb3duIGZvciBcIiwgdGhpcy5lbGVtZW50LCBcIiB3aXRoIG9wdGlvbnM6IFwiLCB0aGlzLm9wdGlvbnMgKTtcbiAgICAgICAgJCggdGhpcy5lbGVtZW50ICkuZHJvcGRvd24oIHRoaXMub3B0aW9ucyApO1xuICAgIH1cblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
