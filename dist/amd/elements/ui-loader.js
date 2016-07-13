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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWxvYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQVdhLGlCLFdBQUEsaUIsV0FEWix1Q0FBa0IsSUFBRSxxQkFBVSxlQUFnQixTQUE5QyxDLDJCQUNNLE1BQU0saUJBQU4sa0NBQTRDO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUtsRCxPQUFNLEdBQUcsSUFBVCxFQUFnQjtBQUNmLFNBQU0sSUFBTixDQUFZLEdBQUcsSUFBZjs7QUFFQSxPQUFLLEtBQUssTUFBVixFQUFtQjtBQUNsQixTQUFLLE1BQUwsQ0FBWSxLQUFaLENBQW1CLGdDQUFuQjtBQUNBLFNBQUssT0FBTCxDQUFhLFNBQWIsQ0FBdUIsR0FBdkIsQ0FBMkIsUUFBM0I7QUFDQTtBQUNEOztBQUdELGdCQUFlLFFBQWYsRUFBMEI7QUFDekIsT0FBSyxRQUFMLEVBQWdCO0FBQ2YsU0FBSyxNQUFMLENBQVksS0FBWixDQUFtQixvQkFBbkI7QUFDQSxTQUFLLE9BQUwsQ0FBYSxTQUFiLENBQXVCLE1BQXZCLENBQStCLFVBQS9CO0FBQ0EsU0FBSyxPQUFMLENBQWEsU0FBYixDQUF1QixHQUF2QixDQUE0QixRQUE1QjtBQUNBLElBSkQsTUFJTztBQUNOLFNBQUssTUFBTCxDQUFZLEtBQVosQ0FBbUIsc0JBQW5CO0FBQ0EsU0FBSyxPQUFMLENBQWEsU0FBYixDQUF1QixNQUF2QixDQUErQixRQUEvQjtBQUNBLFNBQUssT0FBTCxDQUFhLFNBQWIsQ0FBdUIsR0FBdkIsQ0FBNEIsVUFBNUI7QUFDQTtBQUNEOztBQXpCaUQsRTs7O1VBRS9CLEsiLCJmaWxlIjoiZWxlbWVudHMvdWktbG9hZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBMb2FkZXIgLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL2VsZW1lbnRzL2xvYWRlci5odG1sXG4gKi9cblxuaW1wb3J0IHtjb25zdGFudHN9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge1VJQXR0cmlidXRlfSBmcm9tICcuLi91aS1hdHRyaWJ1dGUnO1xuaW1wb3J0IHtjdXN0b21BdHRyaWJ1dGUsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBjdXN0b21BdHRyaWJ1dGUoIGAke2NvbnN0YW50cy5hdHRyaWJ1dGVQcmVmaXh9bG9hZGVyYCApXG5leHBvcnQgY2xhc3MgVUlMb2FkZXJBdHRyaWJ1dGUgZXh0ZW5kcyBVSUF0dHJpYnV0ZSB7XG5cblx0QGJpbmRhYmxlIGFjdGl2ZSA9IGZhbHNlO1xuXG5cblx0YmluZCggLi4uYXJncyApIHtcblx0XHRzdXBlci5iaW5kKCAuLi5hcmdzICk7XG5cblx0XHRpZiAoIHRoaXMuYWN0aXZlICkge1xuXHRcdFx0dGhpcy5sb2dnZXIuZGVidWcoIFwiTG9hZGVyIGlzIHN0YXJ0aW5nIG91dCBhY3RpdmUuXCIgKTtcblx0XHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuXHRcdH07XG5cdH1cblxuXG5cdGFjdGl2ZUNoYW5nZWQoIG5ld1ZhbHVlICkge1xuXHRcdGlmICggbmV3VmFsdWUgKSB7XG5cdFx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggXCJBY3RpdmF0aW5nIGxvYWRlci5cIiApO1xuXHRcdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoICdkaXNhYmxlZCcgKTtcblx0XHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAnYWN0aXZlJyApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggXCJEZWFjdGl2YXRpbmcgbG9hZGVyLlwiICk7XG5cdFx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSggJ2FjdGl2ZScgKTtcblx0XHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAnZGlzYWJsZWQnICk7XG5cdFx0fVxuXHR9XG5cbn1cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
