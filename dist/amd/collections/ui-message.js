define(['exports', '../constants', '../ui-attribute', 'aurelia-framework'], function (exports, _constants, _uiAttribute, _aureliaFramework) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Message - http://semantic-ui.com/collections/message.html
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.UIMessageAttribute = undefined;

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

	var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2;

	let UIMessageAttribute = exports.UIMessageAttribute = (_dec = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }message`), _dec2 = (0, _aureliaFramework.child)('i.ui.icon'), _dec(_class = (_class2 = class UIMessageAttribute extends _uiAttribute.UIAttribute {
		constructor(...args) {
			var _temp;

			return _temp = super(...args), _initDefineProp(this, 'icon', _descriptor, this), _initDefineProp(this, 'iconElement', _descriptor2, this), _temp;
		}

		bind(...args) {
			super.bind(...args);
			if (this.icon) {
				this.logger.debug(`Adding 'icon' to the list of classes.`);
				this.element.classList.add('icon');
			}
		}

		attached() {
			this.logger.debug("Attaching a ui-message. Icon element is: ", this.iconElement);

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
	}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'iconElement', [_dec2], {
		enumerable: true,
		initializer: null
	})), _class2)) || _class);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL3VpLW1lc3NhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FXYSwwREFEWix1Q0FBaUIsQ0FBQyxHQUFFLHFCQUFVLGVBQVYsRUFBMEIsT0FBN0IsQ0FBakIsV0FJQyw2QkFBTyxXQUFQLDRCQUhLLE1BQU0sa0JBQU4sa0NBQTZDOzs7Ozs7O0FBTW5ELE9BQU0sR0FBRyxJQUFILEVBQVU7QUFDZixTQUFNLElBQU4sQ0FBWSxHQUFHLElBQUgsQ0FBWixDQURlO0FBRWYsT0FBSyxLQUFLLElBQUwsRUFBWTtBQUNoQixTQUFLLE1BQUwsQ0FBWSxLQUFaLENBQW1CLENBQUMscUNBQUQsQ0FBbkIsRUFEZ0I7QUFFaEIsU0FBSyxPQUFMLENBQWEsU0FBYixDQUF1QixHQUF2QixDQUEyQixNQUEzQixFQUZnQjtJQUFqQjtHQUZEOztBQVNBLGFBQVc7QUFDVixRQUFLLE1BQUwsQ0FBWSxLQUFaLENBQW1CLDJDQUFuQixFQUFnRSxLQUFLLFdBQUwsQ0FBaEU7OztBQURVLE9BSUwsS0FBSyxJQUFMLElBQWEsQ0FBQyxLQUFLLFdBQUwsRUFBbUI7QUFDckMsU0FBSyxNQUFMLENBQVksS0FBWixDQUFtQixDQUFDLFdBQUQsR0FBYyxLQUFLLElBQUwsRUFBVSxVQUF4QixDQUFuQixFQUF3RCxLQUFLLE9BQUwsQ0FBeEQsQ0FEcUM7QUFFckMsUUFBSSxXQUFXLFNBQVMsYUFBVCxDQUF3QixHQUF4QixDQUFYLENBRmlDO0FBR3JDLGFBQVMsU0FBVCxDQUFtQixHQUFuQixDQUF3QixJQUF4QixFQUE4QixNQUE5QixFQUhxQztBQUlyQyxhQUFTLFNBQVQsQ0FBbUIsR0FBbkIsQ0FBd0IsR0FBRyxLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLEdBQWhCLENBQUgsQ0FBeEIsQ0FKcUM7QUFLckMsU0FBSyxPQUFMLENBQWEsWUFBYixDQUEyQixRQUEzQixFQUFxQyxLQUFLLE9BQUwsQ0FBYSxVQUFiLENBQXJDLENBTHFDO0FBTXJDLFNBQUssV0FBTCxHQUFtQixRQUFuQixDQU5xQztJQUF0QztHQUpEOztBQWVBLGNBQWEsUUFBYixFQUF1QixRQUF2QixFQUFrQztBQUNqQyxPQUFLLEtBQUssV0FBTCxFQUFtQjtBQUN2QixTQUFLLE1BQUwsQ0FBWSxLQUFaLENBQW1CLENBQUMsaUJBQUQsR0FBb0IsS0FBSyxXQUFMLEVBQWlCLElBQXJDLEdBQTJDLFFBQTNDLEVBQW9ELE1BQXBELEdBQTRELFFBQTVELEVBQXFFLENBQXhGLEVBRHVCO0FBRXZCLFFBQUssUUFBTCxFQUFnQjtBQUFFLFVBQUssV0FBTCxDQUFpQixTQUFqQixDQUEyQixNQUEzQixDQUFrQyxHQUFHLFNBQVMsS0FBVCxDQUFlLEdBQWYsQ0FBSCxDQUFsQyxDQUFGO0tBQWhCO0FBQ0EsUUFBSyxRQUFMLEVBQWdCO0FBQUUsVUFBSyxXQUFMLENBQWlCLFNBQWpCLENBQTJCLEdBQTNCLENBQStCLEdBQUcsU0FBUyxLQUFULENBQWUsR0FBZixDQUFILENBQS9CLENBQUY7S0FBaEI7SUFIRDtHQUREOztFQTlCTSIsImZpbGUiOiJjb2xsZWN0aW9ucy91aS1tZXNzYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBNZXNzYWdlIC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9jb2xsZWN0aW9ucy9tZXNzYWdlLmh0bWxcbiAqL1xuXG5pbXBvcnQge2NvbnN0YW50c30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7VUlBdHRyaWJ1dGUsIGJpbmRhYmxlVG9nZ2xlLCBiaW5kYWJsZUVudW19IGZyb20gJy4uL3VpLWF0dHJpYnV0ZSc7XG5pbXBvcnQge2luamVjdCwgY2hpbGQsIGN1c3RvbUF0dHJpYnV0ZSwgY2hpbGRyZW4sIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBjdXN0b21BdHRyaWJ1dGUoIGAke2NvbnN0YW50cy5hdHRyaWJ1dGVQcmVmaXh9bWVzc2FnZWAgKVxuZXhwb3J0IGNsYXNzIFVJTWVzc2FnZUF0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGUgaWNvbjtcblx0QGNoaWxkKCAnaS51aS5pY29uJyApIGljb25FbGVtZW50O1xuXG5cblx0YmluZCggLi4uYXJncyApIHtcblx0XHRzdXBlci5iaW5kKCAuLi5hcmdzICk7XG5cdFx0aWYgKCB0aGlzLmljb24gKSB7XG5cdFx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggYEFkZGluZyAnaWNvbicgdG8gdGhlIGxpc3Qgb2YgY2xhc3Nlcy5gICk7XG5cdFx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuXHRcdH1cblx0fVxuXG5cblx0YXR0YWNoZWQoKSB7XG5cdFx0dGhpcy5sb2dnZXIuZGVidWcoIFwiQXR0YWNoaW5nIGEgdWktbWVzc2FnZS4gSWNvbiBlbGVtZW50IGlzOiBcIiwgdGhpcy5pY29uRWxlbWVudCApO1xuXG5cdFx0Ly8gSW5qZWN0IHRoZSBpY29uIGlmIGl0J3Mgc2V0IGJ1dCBub3QgYWxyZWFkeSB0aGVyZVxuXHRcdGlmICggdGhpcy5pY29uICYmICF0aGlzLmljb25FbGVtZW50ICkge1xuXHRcdFx0dGhpcy5sb2dnZXIuZGVidWcoIGBDcmVhdGluZyBhICR7dGhpcy5pY29ufSBpY29uIGZvciBgLCB0aGlzLmVsZW1lbnQgKTtcblx0XHRcdGxldCBpY29uTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdpJyApO1xuXHRcdFx0aWNvbk5vZGUuY2xhc3NMaXN0LmFkZCggJ3VpJywgJ2ljb24nICk7XG5cdFx0XHRpY29uTm9kZS5jbGFzc0xpc3QuYWRkKCAuLi50aGlzLmljb24uc3BsaXQoJyAnKSApO1xuXHRcdFx0dGhpcy5lbGVtZW50Lmluc2VydEJlZm9yZSggaWNvbk5vZGUsIHRoaXMuZWxlbWVudC5maXJzdENoaWxkICk7XG5cdFx0XHR0aGlzLmljb25FbGVtZW50ID0gaWNvbk5vZGU7XG5cdFx0fVxuXHR9XG5cblxuXHRpY29uQ2hhbmdlZCggbmV3VmFsdWUsIG9sZFZhbHVlICkge1xuXHRcdGlmICggdGhpcy5pY29uRWxlbWVudCApIHtcblx0XHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBgU3dhcHBpbmcgaWNvbiBvZiAke3RoaXMuaWNvbkVsZW1lbnR9IHRvICR7bmV3VmFsdWV9IGZyb20gJHtvbGRWYWx1ZX1gICk7XG5cdFx0XHRpZiAoIG9sZFZhbHVlICkgeyB0aGlzLmljb25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoLi4ub2xkVmFsdWUuc3BsaXQoJyAnKSk7IH1cblx0XHRcdGlmICggbmV3VmFsdWUgKSB7IHRoaXMuaWNvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5uZXdWYWx1ZS5zcGxpdCgnICcpKTsgfVxuXHRcdH1cblx0fVxuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
