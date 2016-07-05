define(['exports', '../constants', '../ui-base', 'aurelia-framework'], function (exports, _constants, _uiBase, _aureliaFramework) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Message - http://semantic-ui.com/collections/message.html
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.SemanticUIMessageAttribute = exports.SemanticUIMessageElement = undefined;

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

	var _dec, _class, _dec2, _dec3, _class2, _desc, _value, _class3, _descriptor, _descriptor2;

	let SemanticUIMessageElement = exports.SemanticUIMessageElement = (_dec = (0, _aureliaFramework.customElement)(`${ _constants.constants.elementPrefix }message`), _dec(_class = class SemanticUIMessageElement extends _uiBase.SemanticUIElement {}) || _class);
	let SemanticUIMessageAttribute = exports.SemanticUIMessageAttribute = (_dec2 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }message`), _dec3 = (0, _aureliaFramework.child)('i.ui.icon'), _dec2(_class2 = (_class3 = class SemanticUIMessageAttribute extends _uiBase.SemanticUIAttribute {
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

	}, (_descriptor = _applyDecoratedDescriptor(_class3.prototype, 'icon', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: null
	}), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, 'iconElement', [_dec3], {
		enumerable: true,
		initializer: null
	})), _class3)) || _class2);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL3VpLW1lc3NhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQVNhLHdCLFdBQUEsd0IsV0FEWixxQ0FBZ0IsSUFBRSxxQkFBVSxhQUFjLFVBQTFDLEMsZ0JBQ00sTUFBTSx3QkFBTixtQ0FBeUQsRTtLQUduRCwwQixXQUFBLDBCLFlBRFosdUNBQWtCLElBQUUscUJBQVUsZUFBZ0IsVUFBOUMsQyxVQUlDLDZCQUFPLFdBQVAsQyw2QkFISyxNQUFNLDBCQUFOLHFDQUE2RDtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFNbkUsT0FBTSxHQUFHLElBQVQsRUFBZ0I7QUFDZixTQUFNLElBQU4sQ0FBWSxHQUFHLElBQWY7QUFDQSxPQUFLLEtBQUssSUFBVixFQUFpQjtBQUNoQixTQUFLLE1BQUwsQ0FBWSxLQUFaLENBQW9CLHVDQUFwQjtBQUNBLFNBQUssT0FBTCxDQUFhLFNBQWIsQ0FBdUIsR0FBdkIsQ0FBMkIsTUFBM0I7QUFDQTtBQUNEOztBQUdELGFBQVc7QUFDVixRQUFLLE1BQUwsQ0FBWSxLQUFaLENBQW1CLDJDQUFuQixFQUFnRSxLQUFLLFdBQXJFOztBQUVBO0FBQ0EsT0FBSyxLQUFLLElBQUwsSUFBYSxDQUFDLEtBQUssV0FBeEIsRUFBc0M7QUFDckMsU0FBSyxNQUFMLENBQVksS0FBWixDQUFvQixlQUFhLEtBQUssSUFBSyxhQUEzQyxFQUF3RCxLQUFLLE9BQTdEO0FBQ0EsUUFBSSxXQUFXLFNBQVMsYUFBVCxDQUF3QixHQUF4QixDQUFmO0FBQ0EsYUFBUyxTQUFULENBQW1CLEdBQW5CLENBQXdCLElBQXhCLEVBQThCLE1BQTlCO0FBQ0EsYUFBUyxTQUFULENBQW1CLEdBQW5CLENBQXdCLEdBQUcsS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixHQUFoQixDQUEzQjtBQUNBLFNBQUssT0FBTCxDQUFhLFlBQWIsQ0FBMkIsUUFBM0IsRUFBcUMsS0FBSyxPQUFMLENBQWEsVUFBbEQ7QUFDQSxTQUFLLFdBQUwsR0FBbUIsUUFBbkI7QUFDQTtBQUNEOztBQUdELGNBQWEsUUFBYixFQUF1QixRQUF2QixFQUFrQztBQUNqQyxPQUFLLEtBQUssV0FBVixFQUF3QjtBQUN2QixTQUFLLE1BQUwsQ0FBWSxLQUFaLENBQW9CLHFCQUFtQixLQUFLLFdBQVksU0FBTSxRQUFTLFdBQVEsUUFBUyxHQUF4RjtBQUNBLFFBQUssUUFBTCxFQUFnQjtBQUFFLFVBQUssV0FBTCxDQUFpQixTQUFqQixDQUEyQixNQUEzQixDQUFrQyxHQUFHLFNBQVMsS0FBVCxDQUFlLEdBQWYsQ0FBckM7QUFBNEQ7QUFDOUUsUUFBSyxRQUFMLEVBQWdCO0FBQUUsVUFBSyxXQUFMLENBQWlCLFNBQWpCLENBQTJCLEdBQTNCLENBQStCLEdBQUcsU0FBUyxLQUFULENBQWUsR0FBZixDQUFsQztBQUF5RDtBQUMzRTtBQUNEOztBQXBDa0UsRSIsImZpbGUiOiJjb2xsZWN0aW9ucy91aS1tZXNzYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBNZXNzYWdlIC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9jb2xsZWN0aW9ucy9tZXNzYWdlLmh0bWxcbiAqL1xuXG5pbXBvcnQge2NvbnN0YW50c30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7U2VtYW50aWNVSUVsZW1lbnQsIFNlbWFudGljVUlBdHRyaWJ1dGUsIGJpbmRhYmxlVG9nZ2xlLCBiaW5kYWJsZUVudW19IGZyb20gJy4uL3VpLWJhc2UnO1xuaW1wb3J0IHtpbmplY3QsIGNoaWxkLCBjdXN0b21BdHRyaWJ1dGUsIGN1c3RvbUVsZW1lbnQsIGNoaWxkcmVuLCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AY3VzdG9tRWxlbWVudCggYCR7Y29uc3RhbnRzLmVsZW1lbnRQcmVmaXh9bWVzc2FnZWAgKVxuZXhwb3J0IGNsYXNzIFNlbWFudGljVUlNZXNzYWdlRWxlbWVudCBleHRlbmRzIFNlbWFudGljVUlFbGVtZW50IHt9XG5cbkBjdXN0b21BdHRyaWJ1dGUoIGAke2NvbnN0YW50cy5hdHRyaWJ1dGVQcmVmaXh9bWVzc2FnZWAgKVxuZXhwb3J0IGNsYXNzIFNlbWFudGljVUlNZXNzYWdlQXR0cmlidXRlIGV4dGVuZHMgU2VtYW50aWNVSUF0dHJpYnV0ZSB7XG5cblx0QGJpbmRhYmxlIGljb247XG5cdEBjaGlsZCggJ2kudWkuaWNvbicgKSBpY29uRWxlbWVudDtcblxuXG5cdGJpbmQoIC4uLmFyZ3MgKSB7XG5cdFx0c3VwZXIuYmluZCggLi4uYXJncyApO1xuXHRcdGlmICggdGhpcy5pY29uICkge1xuXHRcdFx0dGhpcy5sb2dnZXIuZGVidWcoIGBBZGRpbmcgJ2ljb24nIHRvIHRoZSBsaXN0IG9mIGNsYXNzZXMuYCApO1xuXHRcdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcblx0XHR9XG5cdH1cblxuXG5cdGF0dGFjaGVkKCkge1xuXHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBcIkF0dGFjaGluZyBhIHVpLW1lc3NhZ2UuIEljb24gZWxlbWVudCBpczogXCIsIHRoaXMuaWNvbkVsZW1lbnQgKTtcblxuXHRcdC8vIEluamVjdCB0aGUgaWNvbiBpZiBpdCdzIHNldCBidXQgbm90IGFscmVhZHkgdGhlcmVcblx0XHRpZiAoIHRoaXMuaWNvbiAmJiAhdGhpcy5pY29uRWxlbWVudCApIHtcblx0XHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBgQ3JlYXRpbmcgYSAke3RoaXMuaWNvbn0gaWNvbiBmb3IgYCwgdGhpcy5lbGVtZW50ICk7XG5cdFx0XHRsZXQgaWNvbk5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnaScgKTtcblx0XHRcdGljb25Ob2RlLmNsYXNzTGlzdC5hZGQoICd1aScsICdpY29uJyApO1xuXHRcdFx0aWNvbk5vZGUuY2xhc3NMaXN0LmFkZCggLi4udGhpcy5pY29uLnNwbGl0KCcgJykgKTtcblx0XHRcdHRoaXMuZWxlbWVudC5pbnNlcnRCZWZvcmUoIGljb25Ob2RlLCB0aGlzLmVsZW1lbnQuZmlyc3RDaGlsZCApO1xuXHRcdFx0dGhpcy5pY29uRWxlbWVudCA9IGljb25Ob2RlO1xuXHRcdH1cblx0fVxuXG5cblx0aWNvbkNoYW5nZWQoIG5ld1ZhbHVlLCBvbGRWYWx1ZSApIHtcblx0XHRpZiAoIHRoaXMuaWNvbkVsZW1lbnQgKSB7XG5cdFx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggYFN3YXBwaW5nIGljb24gb2YgJHt0aGlzLmljb25FbGVtZW50fSB0byAke25ld1ZhbHVlfSBmcm9tICR7b2xkVmFsdWV9YCApO1xuXHRcdFx0aWYgKCBvbGRWYWx1ZSApIHsgdGhpcy5pY29uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKC4uLm9sZFZhbHVlLnNwbGl0KCcgJykpOyB9XG5cdFx0XHRpZiAoIG5ld1ZhbHVlICkgeyB0aGlzLmljb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4ubmV3VmFsdWUuc3BsaXQoJyAnKSk7IH1cblx0XHR9XG5cdH1cblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
