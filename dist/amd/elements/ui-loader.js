define(['exports', '../constants', '../ui-attribute', 'aurelia-framework'], function (exports, _constants, _uiAttribute, _aureliaFramework) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Loader - http://semantic-ui.com/elements/loader.html
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.UILoaderAttribute = undefined;

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

	var _dec, _class, _desc, _value, _class2, _descriptor;

	let UILoaderAttribute = exports.UILoaderAttribute = (_dec = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }loader`), _dec(_class = (_class2 = class UILoaderAttribute extends _uiAttribute.UIAttribute {
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

	}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'active', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: function () {
			return false;
		}
	})), _class2)) || _class);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWxvYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBU2EsaUIsV0FBQSxpQixXQURaLHVDQUFrQixJQUFFLHFCQUFVLGVBQWdCLFNBQTlDLEMsMkJBQ00sTUFBTSxpQkFBTixrQ0FBNEM7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBS2xELE9BQU0sR0FBRyxJQUFULEVBQWdCO0FBQ2YsU0FBTSxJQUFOLENBQVksR0FBRyxJQUFmOztBQUVBLE9BQUssS0FBSyxNQUFWLEVBQW1CO0FBQ2xCLFNBQUssTUFBTCxDQUFZLEtBQVosQ0FBbUIsZ0NBQW5CO0FBQ0EsU0FBSyxPQUFMLENBQWEsU0FBYixDQUF1QixHQUF2QixDQUEyQixRQUEzQjtBQUNBO0FBQ0Q7O0FBR0QsZ0JBQWUsUUFBZixFQUEwQjtBQUN6QixPQUFLLFFBQUwsRUFBZ0I7QUFDZixTQUFLLE1BQUwsQ0FBWSxLQUFaLENBQW1CLG9CQUFuQjtBQUNBLFNBQUssT0FBTCxDQUFhLFNBQWIsQ0FBdUIsTUFBdkIsQ0FBK0IsVUFBL0I7QUFDQSxTQUFLLE9BQUwsQ0FBYSxTQUFiLENBQXVCLEdBQXZCLENBQTRCLFFBQTVCO0FBQ0EsSUFKRCxNQUlPO0FBQ04sU0FBSyxNQUFMLENBQVksS0FBWixDQUFtQixzQkFBbkI7QUFDQSxTQUFLLE9BQUwsQ0FBYSxTQUFiLENBQXVCLE1BQXZCLENBQStCLFFBQS9CO0FBQ0EsU0FBSyxPQUFMLENBQWEsU0FBYixDQUF1QixHQUF2QixDQUE0QixVQUE1QjtBQUNBO0FBQ0Q7O0FBekJpRCxFOzs7VUFFL0IsSyIsImZpbGUiOiJlbGVtZW50cy91aS1sb2FkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIExvYWRlciAtIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vZWxlbWVudHMvbG9hZGVyLmh0bWxcbiAqL1xuXG5pbXBvcnQge2NvbnN0YW50c30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7VUlBdHRyaWJ1dGV9IGZyb20gJy4uL3VpLWF0dHJpYnV0ZSc7XG5pbXBvcnQge2N1c3RvbUF0dHJpYnV0ZSwgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1sb2FkZXJgIClcbmV4cG9ydCBjbGFzcyBVSUxvYWRlckF0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGUgYWN0aXZlID0gZmFsc2U7XG5cblxuXHRiaW5kKCAuLi5hcmdzICkge1xuXHRcdHN1cGVyLmJpbmQoIC4uLmFyZ3MgKTtcblxuXHRcdGlmICggdGhpcy5hY3RpdmUgKSB7XG5cdFx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggXCJMb2FkZXIgaXMgc3RhcnRpbmcgb3V0IGFjdGl2ZS5cIiApO1xuXHRcdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG5cdFx0fTtcblx0fVxuXG5cblx0YWN0aXZlQ2hhbmdlZCggbmV3VmFsdWUgKSB7XG5cdFx0aWYgKCBuZXdWYWx1ZSApIHtcblx0XHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBcIkFjdGl2YXRpbmcgbG9hZGVyLlwiICk7XG5cdFx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSggJ2Rpc2FibGVkJyApO1xuXHRcdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoICdhY3RpdmUnICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBcIkRlYWN0aXZhdGluZyBsb2FkZXIuXCIgKTtcblx0XHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCAnYWN0aXZlJyApO1xuXHRcdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoICdkaXNhYmxlZCcgKTtcblx0XHR9XG5cdH1cblxufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
