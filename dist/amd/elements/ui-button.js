define(['exports', '../constants', '../ui-attribute', 'aurelia-framework'], function (exports, _constants, _uiAttribute, _aureliaFramework) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Button - http://semantic-ui.com/elements/button.html
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.UIButtonsAttribute = exports.UIButtonAttribute = undefined;

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

	var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _dec4, _class4;

	let UIButtonAttribute = exports.UIButtonAttribute = (_dec = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }button`), _dec2 = (0, _uiAttribute.bindableEnum)(..._constants.constants.VALID_COLORS), _dec3 = (0, _aureliaFramework.child)('i.ui.icon'), _dec(_class = (_class2 = class UIButtonAttribute extends _uiAttribute.UIAttribute {
		constructor(...args) {
			var _temp;

			return _temp = super(...args), _initDefineProp(this, 'icon', _descriptor, this), _initDefineProp(this, 'color', _descriptor2, this), _initDefineProp(this, 'disabled', _descriptor3, this), _initDefineProp(this, 'iconElement', _descriptor4, this), _temp;
		}

		bind(...args) {
			super.bind(...args);
			if (this.icon) {
				this.logger.debug(`Adding 'icon' to the list of classes.`);
				this.element.classList.add('icon');
			}
		}

		attached() {
			// Inject the icon if it's set but not already there
			if (this.icon && !this.iconElement) {
				this.logger.debug(`Creating a ${ this.icon } icon for `, this.element);
				let iconNode = document.createElement('i');
				iconNode.classList.add('ui', 'icon');
				iconNode.classList.add(...this.icon.split(' '));
				this.element.insertBefore(iconNode, this.element.firstChild);
				this.iconElement = iconNode;
			}
		}

		iconChanged(newValue, oldValue) {
			if (this.iconElement) {
				this.logger.debug(`Swapping icon of ${ this.iconElement } to ${ newValue } from ${ oldValue }`);
				if (oldValue) {
					this.iconElement.classList.remove(...oldValue.split(' '));
				}
				if (newValue) {
					this.iconElement.classList.add(...newValue.split(' '));
				}
			}
		}

	}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'icon', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: null
	}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'color', [_dec2], {
		enumerable: true,
		initializer: null
	}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'disabled', [_uiAttribute.bindableToggle], {
		enumerable: true,
		initializer: null
	}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'iconElement', [_dec3], {
		enumerable: true,
		initializer: null
	})), _class2)) || _class);
	let UIButtonsAttribute = exports.UIButtonsAttribute = (_dec4 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }buttons`), _dec4(_class4 = class UIButtonsAttribute extends _uiAttribute.UIAttribute {}) || _class4);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQVdhLHdEQURaLHVDQUFpQixDQUFDLEdBQUUscUJBQVUsZUFBVixFQUEwQixNQUE3QixDQUFqQixXQUlDLCtCQUFjLEdBQUcscUJBQVUsWUFBVixXQUdqQiw2QkFBTyxXQUFQLDRCQU5LLE1BQU0saUJBQU4sa0NBQTRDOzs7Ozs7O0FBU2xELE9BQU0sR0FBRyxJQUFILEVBQVU7QUFDZixTQUFNLElBQU4sQ0FBWSxHQUFHLElBQUgsQ0FBWixDQURlO0FBRWYsT0FBSyxLQUFLLElBQUwsRUFBWTtBQUNoQixTQUFLLE1BQUwsQ0FBWSxLQUFaLENBQW1CLENBQUMscUNBQUQsQ0FBbkIsRUFEZ0I7QUFFaEIsU0FBSyxPQUFMLENBQWEsU0FBYixDQUF1QixHQUF2QixDQUEyQixNQUEzQixFQUZnQjtJQUFqQjtHQUZEOztBQVNBLGFBQVc7O0FBRVYsT0FBSyxLQUFLLElBQUwsSUFBYSxDQUFDLEtBQUssV0FBTCxFQUFtQjtBQUNyQyxTQUFLLE1BQUwsQ0FBWSxLQUFaLENBQW1CLENBQUMsV0FBRCxHQUFjLEtBQUssSUFBTCxFQUFVLFVBQXhCLENBQW5CLEVBQXdELEtBQUssT0FBTCxDQUF4RCxDQURxQztBQUVyQyxRQUFJLFdBQVcsU0FBUyxhQUFULENBQXdCLEdBQXhCLENBQVgsQ0FGaUM7QUFHckMsYUFBUyxTQUFULENBQW1CLEdBQW5CLENBQXdCLElBQXhCLEVBQThCLE1BQTlCLEVBSHFDO0FBSXJDLGFBQVMsU0FBVCxDQUFtQixHQUFuQixDQUF3QixHQUFHLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsR0FBaEIsQ0FBSCxDQUF4QixDQUpxQztBQUtyQyxTQUFLLE9BQUwsQ0FBYSxZQUFiLENBQTJCLFFBQTNCLEVBQXFDLEtBQUssT0FBTCxDQUFhLFVBQWIsQ0FBckMsQ0FMcUM7QUFNckMsU0FBSyxXQUFMLEdBQW1CLFFBQW5CLENBTnFDO0lBQXRDO0dBRkQ7O0FBYUEsY0FBYSxRQUFiLEVBQXVCLFFBQXZCLEVBQWtDO0FBQ2pDLE9BQUssS0FBSyxXQUFMLEVBQW1CO0FBQ3ZCLFNBQUssTUFBTCxDQUFZLEtBQVosQ0FBbUIsQ0FBQyxpQkFBRCxHQUFvQixLQUFLLFdBQUwsRUFBaUIsSUFBckMsR0FBMkMsUUFBM0MsRUFBb0QsTUFBcEQsR0FBNEQsUUFBNUQsRUFBcUUsQ0FBeEYsRUFEdUI7QUFFdkIsUUFBSyxRQUFMLEVBQWdCO0FBQUUsVUFBSyxXQUFMLENBQWlCLFNBQWpCLENBQTJCLE1BQTNCLENBQWtDLEdBQUcsU0FBUyxLQUFULENBQWUsR0FBZixDQUFILENBQWxDLENBQUY7S0FBaEI7QUFDQSxRQUFLLFFBQUwsRUFBZ0I7QUFBRSxVQUFLLFdBQUwsQ0FBaUIsU0FBakIsQ0FBMkIsR0FBM0IsQ0FBK0IsR0FBRyxTQUFTLEtBQVQsQ0FBZSxHQUFmLENBQUgsQ0FBL0IsQ0FBRjtLQUFoQjtJQUhEO0dBREQ7O0VBL0JNOzs7Ozs7Ozs7Ozs7O0tBMkNNLDJEQURaLHVDQUFpQixDQUFDLEdBQUUscUJBQVUsZUFBVixFQUEwQixPQUE3QixDQUFqQixtQkFDTSxNQUFNLGtCQUFOLGtDQUE2QyxFQUE3QyIsImZpbGUiOiJlbGVtZW50cy91aS1idXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIEJ1dHRvbiAtIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vZWxlbWVudHMvYnV0dG9uLmh0bWxcbiAqL1xuXG5pbXBvcnQge2NvbnN0YW50c30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7VUlBdHRyaWJ1dGUsIGJpbmRhYmxlVG9nZ2xlLCBiaW5kYWJsZUVudW19IGZyb20gJy4uL3VpLWF0dHJpYnV0ZSc7XG5pbXBvcnQge2N1c3RvbUF0dHJpYnV0ZSwgaW5qZWN0LCBjaGlsZCwgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1idXR0b25gIClcbmV4cG9ydCBjbGFzcyBVSUJ1dHRvbkF0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGUgaWNvbjtcblx0QGJpbmRhYmxlRW51bSggLi4uY29uc3RhbnRzLlZBTElEX0NPTE9SUyApIGNvbG9yO1xuXHRAYmluZGFibGVUb2dnbGUgZGlzYWJsZWQ7XG5cblx0QGNoaWxkKCAnaS51aS5pY29uJyApIGljb25FbGVtZW50O1xuXG5cblx0YmluZCggLi4uYXJncyApIHtcblx0XHRzdXBlci5iaW5kKCAuLi5hcmdzICk7XG5cdFx0aWYgKCB0aGlzLmljb24gKSB7XG5cdFx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggYEFkZGluZyAnaWNvbicgdG8gdGhlIGxpc3Qgb2YgY2xhc3Nlcy5gICk7XG5cdFx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuXHRcdH1cblx0fVxuXG5cblx0YXR0YWNoZWQoKSB7XG5cdFx0Ly8gSW5qZWN0IHRoZSBpY29uIGlmIGl0J3Mgc2V0IGJ1dCBub3QgYWxyZWFkeSB0aGVyZVxuXHRcdGlmICggdGhpcy5pY29uICYmICF0aGlzLmljb25FbGVtZW50ICkge1xuXHRcdFx0dGhpcy5sb2dnZXIuZGVidWcoIGBDcmVhdGluZyBhICR7dGhpcy5pY29ufSBpY29uIGZvciBgLCB0aGlzLmVsZW1lbnQgKTtcblx0XHRcdGxldCBpY29uTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdpJyApO1xuXHRcdFx0aWNvbk5vZGUuY2xhc3NMaXN0LmFkZCggJ3VpJywgJ2ljb24nICk7XG5cdFx0XHRpY29uTm9kZS5jbGFzc0xpc3QuYWRkKCAuLi50aGlzLmljb24uc3BsaXQoJyAnKSApO1xuXHRcdFx0dGhpcy5lbGVtZW50Lmluc2VydEJlZm9yZSggaWNvbk5vZGUsIHRoaXMuZWxlbWVudC5maXJzdENoaWxkICk7XG5cdFx0XHR0aGlzLmljb25FbGVtZW50ID0gaWNvbk5vZGU7XG5cdFx0fVxuXHR9XG5cblxuXHRpY29uQ2hhbmdlZCggbmV3VmFsdWUsIG9sZFZhbHVlICkge1xuXHRcdGlmICggdGhpcy5pY29uRWxlbWVudCApIHtcblx0XHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBgU3dhcHBpbmcgaWNvbiBvZiAke3RoaXMuaWNvbkVsZW1lbnR9IHRvICR7bmV3VmFsdWV9IGZyb20gJHtvbGRWYWx1ZX1gICk7XG5cdFx0XHRpZiAoIG9sZFZhbHVlICkgeyB0aGlzLmljb25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoLi4ub2xkVmFsdWUuc3BsaXQoJyAnKSk7IH1cblx0XHRcdGlmICggbmV3VmFsdWUgKSB7IHRoaXMuaWNvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5uZXdWYWx1ZS5zcGxpdCgnICcpKTsgfVxuXHRcdH1cblx0fVxuXG59XG5cblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1idXR0b25zYCApXG5leHBvcnQgY2xhc3MgVUlCdXR0b25zQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
