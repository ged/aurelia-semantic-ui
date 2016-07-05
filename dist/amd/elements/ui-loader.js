define(['exports', '../constants', '../ui-base', 'aurelia-framework'], function (exports, _constants, _uiBase, _aureliaFramework) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Loader - http://semantic-ui.com/elements/loader.html
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.SemanticUILoaderAttribute = exports.SemanticUILoaderElement = undefined;

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

	var _dec, _class, _dec2, _class2, _desc, _value, _class3, _descriptor;

	let SemanticUILoaderElement = exports.SemanticUILoaderElement = (_dec = (0, _aureliaFramework.customElement)(`${ _constants.constants.elementPrefix }loader`), _dec(_class = class SemanticUILoaderElement extends _uiBase.SemanticUIElement {}) || _class);
	let SemanticUILoaderAttribute = exports.SemanticUILoaderAttribute = (_dec2 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }loader`), _dec2(_class2 = (_class3 = class SemanticUILoaderAttribute extends _uiBase.SemanticUIAttribute {
		constructor(...args) {
			var _temp;

			return _temp = super(...args), _initDefineProp(this, 'active', _descriptor, this), _temp;
		}

		bind(...args) {
			super.bind(...args);

			if (this.active) {
				this.logger.debug("Loader is starting out active.");
				this.element.classList.add('active');
			};
		}

		activeChanged(newValue) {
			if (newValue) {
				this.logger.debug("Activating loader.");
				this.element.classList.remove('disabled');
				this.element.classList.add('active');
			} else {
				this.logger.debug("Deactivating loader.");
				this.element.classList.remove('active');
				this.element.classList.add('disabled');
			}
		}

	}, (_descriptor = _applyDecoratedDescriptor(_class3.prototype, 'active', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: function () {
			return false;
		}
	})), _class3)) || _class2);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWxvYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBU2EsdUIsV0FBQSx1QixXQURaLHFDQUFnQixJQUFFLHFCQUFVLGFBQWMsU0FBMUMsQyxnQkFDTSxNQUFNLHVCQUFOLG1DQUF3RCxFO0tBR2xELHlCLFdBQUEseUIsWUFEWix1Q0FBa0IsSUFBRSxxQkFBVSxlQUFnQixTQUE5QyxDLDZCQUNNLE1BQU0seUJBQU4scUNBQTREO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUtsRSxPQUFNLEdBQUcsSUFBVCxFQUFnQjtBQUNmLFNBQU0sSUFBTixDQUFZLEdBQUcsSUFBZjs7QUFFQSxPQUFLLEtBQUssTUFBVixFQUFtQjtBQUNsQixTQUFLLE1BQUwsQ0FBWSxLQUFaLENBQW1CLGdDQUFuQjtBQUNBLFNBQUssT0FBTCxDQUFhLFNBQWIsQ0FBdUIsR0FBdkIsQ0FBMkIsUUFBM0I7QUFDQTtBQUNEOztBQUdELGdCQUFlLFFBQWYsRUFBMEI7QUFDekIsT0FBSyxRQUFMLEVBQWdCO0FBQ2YsU0FBSyxNQUFMLENBQVksS0FBWixDQUFtQixvQkFBbkI7QUFDQSxTQUFLLE9BQUwsQ0FBYSxTQUFiLENBQXVCLE1BQXZCLENBQStCLFVBQS9CO0FBQ0EsU0FBSyxPQUFMLENBQWEsU0FBYixDQUF1QixHQUF2QixDQUE0QixRQUE1QjtBQUNBLElBSkQsTUFJTztBQUNOLFNBQUssTUFBTCxDQUFZLEtBQVosQ0FBbUIsc0JBQW5CO0FBQ0EsU0FBSyxPQUFMLENBQWEsU0FBYixDQUF1QixNQUF2QixDQUErQixRQUEvQjtBQUNBLFNBQUssT0FBTCxDQUFhLFNBQWIsQ0FBdUIsR0FBdkIsQ0FBNEIsVUFBNUI7QUFDQTtBQUNEOztBQXpCaUUsRTs7O1VBRS9DLEsiLCJmaWxlIjoiZWxlbWVudHMvdWktbG9hZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBMb2FkZXIgLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL2VsZW1lbnRzL2xvYWRlci5odG1sXG4gKi9cblxuaW1wb3J0IHtjb25zdGFudHN9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge1NlbWFudGljVUlFbGVtZW50LCBTZW1hbnRpY1VJQXR0cmlidXRlfSBmcm9tICcuLi91aS1iYXNlJztcbmltcG9ydCB7Y3VzdG9tQXR0cmlidXRlLCBjdXN0b21FbGVtZW50LCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AY3VzdG9tRWxlbWVudCggYCR7Y29uc3RhbnRzLmVsZW1lbnRQcmVmaXh9bG9hZGVyYCApXG5leHBvcnQgY2xhc3MgU2VtYW50aWNVSUxvYWRlckVsZW1lbnQgZXh0ZW5kcyBTZW1hbnRpY1VJRWxlbWVudCB7fVxuXG5AY3VzdG9tQXR0cmlidXRlKCBgJHtjb25zdGFudHMuYXR0cmlidXRlUHJlZml4fWxvYWRlcmAgKVxuZXhwb3J0IGNsYXNzIFNlbWFudGljVUlMb2FkZXJBdHRyaWJ1dGUgZXh0ZW5kcyBTZW1hbnRpY1VJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGUgYWN0aXZlID0gZmFsc2U7XG5cblxuXHRiaW5kKCAuLi5hcmdzICkge1xuXHRcdHN1cGVyLmJpbmQoIC4uLmFyZ3MgKTtcblxuXHRcdGlmICggdGhpcy5hY3RpdmUgKSB7XG5cdFx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggXCJMb2FkZXIgaXMgc3RhcnRpbmcgb3V0IGFjdGl2ZS5cIiApO1xuXHRcdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG5cdFx0fTtcblx0fVxuXG5cblx0YWN0aXZlQ2hhbmdlZCggbmV3VmFsdWUgKSB7XG5cdFx0aWYgKCBuZXdWYWx1ZSApIHtcblx0XHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBcIkFjdGl2YXRpbmcgbG9hZGVyLlwiICk7XG5cdFx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSggJ2Rpc2FibGVkJyApO1xuXHRcdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoICdhY3RpdmUnICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBcIkRlYWN0aXZhdGluZyBsb2FkZXIuXCIgKTtcblx0XHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCAnYWN0aXZlJyApO1xuXHRcdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoICdkaXNhYmxlZCcgKTtcblx0XHR9XG5cdH1cblxufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
