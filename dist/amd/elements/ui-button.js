define(['exports', '../constants', '../ui-base', 'aurelia-framework'], function (exports, _constants, _uiBase, _aureliaFramework) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Button - http://semantic-ui.com/elements/button.html
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.SemanticUIButtonsAttribute = exports.SemanticUIButtonsElement = exports.SemanticUIButtonAttribute = exports.SemanticUIButtonElement = undefined;

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

	var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _dec3, _dec4, _dec5, _class4, _desc2, _value2, _class5, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _dec6, _class7, _dec7, _class8;

	let SemanticUIButtonElement = exports.SemanticUIButtonElement = (_dec = (0, _aureliaFramework.customElement)(`${ _constants.constants.elementPrefix }button`), _dec2 = (0, _uiBase.bindableEnum)(..._constants.constants.VALID_COLORS), _dec(_class = (_class2 = class SemanticUIButtonElement extends _uiBase.SemanticUIElement {
		constructor(...args) {
			var _temp;

			return _temp = super(...args), _initDefineProp(this, 'icon', _descriptor, this), _initDefineProp(this, 'color', _descriptor2, this), _initDefineProp(this, 'disabled', _descriptor3, this), _initDefineProp(this, 'primary', _descriptor4, this), _initDefineProp(this, 'secondary', _descriptor5, this), _initDefineProp(this, 'basic', _descriptor6, this), _temp;
		}

	}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'icon', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: null
	}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'color', [_dec2], {
		enumerable: true,
		initializer: null
	}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'disabled', [_uiBase.bindableToggle], {
		enumerable: true,
		initializer: null
	}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'primary', [_uiBase.bindableToggle], {
		enumerable: true,
		initializer: null
	}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'secondary', [_uiBase.bindableToggle], {
		enumerable: true,
		initializer: null
	}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'basic', [_uiBase.bindableToggle], {
		enumerable: true,
		initializer: null
	})), _class2)) || _class);
	let SemanticUIButtonAttribute = exports.SemanticUIButtonAttribute = (_dec3 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }button`), _dec4 = (0, _uiBase.bindableEnum)(..._constants.constants.VALID_COLORS), _dec5 = (0, _aureliaFramework.child)('i.ui.icon'), _dec3(_class4 = (_class5 = class SemanticUIButtonAttribute extends _uiBase.SemanticUIAttribute {
		constructor(...args) {
			var _temp2;

			return _temp2 = super(...args), _initDefineProp(this, 'icon', _descriptor7, this), _initDefineProp(this, 'color', _descriptor8, this), _initDefineProp(this, 'disabled', _descriptor9, this), _initDefineProp(this, 'iconElement', _descriptor10, this), _temp2;
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

	}, (_descriptor7 = _applyDecoratedDescriptor(_class5.prototype, 'icon', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: null
	}), _descriptor8 = _applyDecoratedDescriptor(_class5.prototype, 'color', [_dec4], {
		enumerable: true,
		initializer: null
	}), _descriptor9 = _applyDecoratedDescriptor(_class5.prototype, 'disabled', [_uiBase.bindableToggle], {
		enumerable: true,
		initializer: null
	}), _descriptor10 = _applyDecoratedDescriptor(_class5.prototype, 'iconElement', [_dec5], {
		enumerable: true,
		initializer: null
	})), _class5)) || _class4);
	let SemanticUIButtonsElement = exports.SemanticUIButtonsElement = (_dec6 = (0, _aureliaFramework.customElement)(`${ _constants.constants.elementPrefix }buttons`), _dec6(_class7 = class SemanticUIButtonsElement extends _uiBase.SemanticUIElement {}) || _class7);
	let SemanticUIButtonsAttribute = exports.SemanticUIButtonsAttribute = (_dec7 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }buttons`), _dec7(_class8 = class SemanticUIButtonsAttribute extends _uiBase.SemanticUIAttribute {}) || _class8);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBU2EsdUIsV0FBQSx1QixXQURaLHFDQUFnQixJQUFFLHFCQUFVLGFBQWMsU0FBMUMsQyxVQUlDLDBCQUFjLEdBQUcscUJBQVUsWUFBM0IsQywyQkFISyxNQUFNLHVCQUFOLG1DQUF3RDtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBYWxELHlCLFdBQUEseUIsWUFEWix1Q0FBa0IsSUFBRSxxQkFBVSxlQUFnQixTQUE5QyxDLFVBSUMsMEJBQWMsR0FBRyxxQkFBVSxZQUEzQixDLFVBR0EsNkJBQU8sV0FBUCxDLDZCQU5LLE1BQU0seUJBQU4scUNBQTREO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQVNsRSxPQUFNLEdBQUcsSUFBVCxFQUFnQjtBQUNmLFNBQU0sSUFBTixDQUFZLEdBQUcsSUFBZjtBQUNBLE9BQUssS0FBSyxJQUFWLEVBQWlCO0FBQ2hCLFNBQUssTUFBTCxDQUFZLEtBQVosQ0FBb0IsdUNBQXBCO0FBQ0EsU0FBSyxPQUFMLENBQWEsU0FBYixDQUF1QixHQUF2QixDQUEyQixNQUEzQjtBQUNBO0FBQ0Q7O0FBR0QsYUFBVztBQUNWO0FBQ0EsT0FBSyxLQUFLLElBQUwsSUFBYSxDQUFDLEtBQUssV0FBeEIsRUFBc0M7QUFDckMsU0FBSyxNQUFMLENBQVksS0FBWixDQUFvQixlQUFhLEtBQUssSUFBSyxhQUEzQyxFQUF3RCxLQUFLLE9BQTdEO0FBQ0EsUUFBSSxXQUFXLFNBQVMsYUFBVCxDQUF3QixHQUF4QixDQUFmO0FBQ0EsYUFBUyxTQUFULENBQW1CLEdBQW5CLENBQXdCLElBQXhCLEVBQThCLE1BQTlCO0FBQ0EsYUFBUyxTQUFULENBQW1CLEdBQW5CLENBQXdCLEdBQUcsS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixHQUFoQixDQUEzQjtBQUNBLFNBQUssT0FBTCxDQUFhLFlBQWIsQ0FBMkIsUUFBM0IsRUFBcUMsS0FBSyxPQUFMLENBQWEsVUFBbEQ7QUFDQSxTQUFLLFdBQUwsR0FBbUIsUUFBbkI7QUFDQTtBQUNEOztBQUdELGNBQWEsUUFBYixFQUF1QixRQUF2QixFQUFrQztBQUNqQyxPQUFLLEtBQUssV0FBVixFQUF3QjtBQUN2QixTQUFLLE1BQUwsQ0FBWSxLQUFaLENBQW9CLHFCQUFtQixLQUFLLFdBQVksU0FBTSxRQUFTLFdBQVEsUUFBUyxHQUF4RjtBQUNBLFFBQUssUUFBTCxFQUFnQjtBQUFFLFVBQUssV0FBTCxDQUFpQixTQUFqQixDQUEyQixNQUEzQixDQUFrQyxHQUFHLFNBQVMsS0FBVCxDQUFlLEdBQWYsQ0FBckM7QUFBNEQ7QUFDOUUsUUFBSyxRQUFMLEVBQWdCO0FBQUUsVUFBSyxXQUFMLENBQWlCLFNBQWpCLENBQTJCLEdBQTNCLENBQStCLEdBQUcsU0FBUyxLQUFULENBQWUsR0FBZixDQUFsQztBQUF5RDtBQUMzRTtBQUNEOztBQXJDaUUsRTs7Ozs7Ozs7Ozs7OztLQTJDdEQsd0IsV0FBQSx3QixZQURaLHFDQUFnQixJQUFFLHFCQUFVLGFBQWMsVUFBMUMsQyxrQkFDTSxNQUFNLHdCQUFOLG1DQUF5RCxFO0tBR25ELDBCLFdBQUEsMEIsWUFEWix1Q0FBa0IsSUFBRSxxQkFBVSxlQUFnQixVQUE5QyxDLGtCQUNNLE1BQU0sMEJBQU4scUNBQTZELEUiLCJmaWxlIjoiZWxlbWVudHMvdWktYnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBCdXR0b24gLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL2VsZW1lbnRzL2J1dHRvbi5odG1sXG4gKi9cblxuaW1wb3J0IHtjb25zdGFudHN9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge1NlbWFudGljVUlFbGVtZW50LCBTZW1hbnRpY1VJQXR0cmlidXRlLCBiaW5kYWJsZVRvZ2dsZSwgYmluZGFibGVFbnVtfSBmcm9tICcuLi91aS1iYXNlJztcbmltcG9ydCB7Y3VzdG9tQXR0cmlidXRlLCBjdXN0b21FbGVtZW50LCBpbmplY3QsIGNoaWxkLCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AY3VzdG9tRWxlbWVudCggYCR7Y29uc3RhbnRzLmVsZW1lbnRQcmVmaXh9YnV0dG9uYCApXG5leHBvcnQgY2xhc3MgU2VtYW50aWNVSUJ1dHRvbkVsZW1lbnQgZXh0ZW5kcyBTZW1hbnRpY1VJRWxlbWVudCB7XG5cblx0QGJpbmRhYmxlIGljb247XG5cdEBiaW5kYWJsZUVudW0oIC4uLmNvbnN0YW50cy5WQUxJRF9DT0xPUlMgKSBjb2xvcjtcblx0QGJpbmRhYmxlVG9nZ2xlIGRpc2FibGVkO1xuXHRAYmluZGFibGVUb2dnbGUgcHJpbWFyeTtcblx0QGJpbmRhYmxlVG9nZ2xlIHNlY29uZGFyeTtcblx0QGJpbmRhYmxlVG9nZ2xlIGJhc2ljO1xuXG59XG5cblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1idXR0b25gIClcbmV4cG9ydCBjbGFzcyBTZW1hbnRpY1VJQnV0dG9uQXR0cmlidXRlIGV4dGVuZHMgU2VtYW50aWNVSUF0dHJpYnV0ZSB7XG5cblx0QGJpbmRhYmxlIGljb247XG5cdEBiaW5kYWJsZUVudW0oIC4uLmNvbnN0YW50cy5WQUxJRF9DT0xPUlMgKSBjb2xvcjtcblx0QGJpbmRhYmxlVG9nZ2xlIGRpc2FibGVkO1xuXG5cdEBjaGlsZCggJ2kudWkuaWNvbicgKSBpY29uRWxlbWVudDtcblxuXG5cdGJpbmQoIC4uLmFyZ3MgKSB7XG5cdFx0c3VwZXIuYmluZCggLi4uYXJncyApO1xuXHRcdGlmICggdGhpcy5pY29uICkge1xuXHRcdFx0dGhpcy5sb2dnZXIuZGVidWcoIGBBZGRpbmcgJ2ljb24nIHRvIHRoZSBsaXN0IG9mIGNsYXNzZXMuYCApO1xuXHRcdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcblx0XHR9XG5cdH1cblxuXG5cdGF0dGFjaGVkKCkge1xuXHRcdC8vIEluamVjdCB0aGUgaWNvbiBpZiBpdCdzIHNldCBidXQgbm90IGFscmVhZHkgdGhlcmVcblx0XHRpZiAoIHRoaXMuaWNvbiAmJiAhdGhpcy5pY29uRWxlbWVudCApIHtcblx0XHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBgQ3JlYXRpbmcgYSAke3RoaXMuaWNvbn0gaWNvbiBmb3IgYCwgdGhpcy5lbGVtZW50ICk7XG5cdFx0XHRsZXQgaWNvbk5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnaScgKTtcblx0XHRcdGljb25Ob2RlLmNsYXNzTGlzdC5hZGQoICd1aScsICdpY29uJyApO1xuXHRcdFx0aWNvbk5vZGUuY2xhc3NMaXN0LmFkZCggLi4udGhpcy5pY29uLnNwbGl0KCcgJykgKTtcblx0XHRcdHRoaXMuZWxlbWVudC5pbnNlcnRCZWZvcmUoIGljb25Ob2RlLCB0aGlzLmVsZW1lbnQuZmlyc3RDaGlsZCApO1xuXHRcdFx0dGhpcy5pY29uRWxlbWVudCA9IGljb25Ob2RlO1xuXHRcdH1cblx0fVxuXG5cblx0aWNvbkNoYW5nZWQoIG5ld1ZhbHVlLCBvbGRWYWx1ZSApIHtcblx0XHRpZiAoIHRoaXMuaWNvbkVsZW1lbnQgKSB7XG5cdFx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggYFN3YXBwaW5nIGljb24gb2YgJHt0aGlzLmljb25FbGVtZW50fSB0byAke25ld1ZhbHVlfSBmcm9tICR7b2xkVmFsdWV9YCApO1xuXHRcdFx0aWYgKCBvbGRWYWx1ZSApIHsgdGhpcy5pY29uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKC4uLm9sZFZhbHVlLnNwbGl0KCcgJykpOyB9XG5cdFx0XHRpZiAoIG5ld1ZhbHVlICkgeyB0aGlzLmljb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4ubmV3VmFsdWUuc3BsaXQoJyAnKSk7IH1cblx0XHR9XG5cdH1cblxufVxuXG5cbkBjdXN0b21FbGVtZW50KCBgJHtjb25zdGFudHMuZWxlbWVudFByZWZpeH1idXR0b25zYCApXG5leHBvcnQgY2xhc3MgU2VtYW50aWNVSUJ1dHRvbnNFbGVtZW50IGV4dGVuZHMgU2VtYW50aWNVSUVsZW1lbnQge31cblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1idXR0b25zYCApXG5leHBvcnQgY2xhc3MgU2VtYW50aWNVSUJ1dHRvbnNBdHRyaWJ1dGUgZXh0ZW5kcyBTZW1hbnRpY1VJQXR0cmlidXRlIHtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
