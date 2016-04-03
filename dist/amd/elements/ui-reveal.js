define(['exports', '../constants', '../ui-attribute', 'aurelia-framework'], function (exports, _constants, _uiAttribute, _aureliaFramework) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Content Reveal - http://semantic-ui.com/elements/reveal.html
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.UIRevealHiddenAttribute = exports.UIRevealVisibleAttribute = exports.UIRevealAttribute = undefined;

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

	var _dec, _class, _desc, _value, _class2, _descriptor, _dec2, _class4, _dec3, _class5;

	let UIRevealAttribute = exports.UIRevealAttribute = (_dec = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }reveal`), _dec(_class = (_class2 = class UIRevealAttribute extends _uiAttribute.UIAttribute {
		constructor(...args) {
			var _temp;

			return _temp = super(...args), _initDefineProp(this, 'active', _descriptor, this), _temp;
		}

	}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'active', [_uiAttribute.bindableToggle], {
		enumerable: true,
		initializer: null
	})), _class2)) || _class);
	let UIRevealVisibleAttribute = exports.UIRevealVisibleAttribute = (_dec2 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }reveal-visible`), _dec2(_class4 = class UIRevealVisibleAttribute extends _uiAttribute.UIAttribute {

		bind() {
			// No super
			this.element.classList.add('visible', 'content');
		}

	}) || _class4);
	let UIRevealHiddenAttribute = exports.UIRevealHiddenAttribute = (_dec3 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }reveal-hidden`), _dec3(_class5 = class UIRevealHiddenAttribute extends _uiAttribute.UIAttribute {

		bind() {
			// No super
			this.element.classList.add('hidden', 'content');
		}

	}) || _class5);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLXJldmVhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQVdhLHdEQURaLHVDQUFpQixDQUFDLEdBQUUscUJBQVUsZUFBVixFQUEwQixNQUE3QixDQUFqQiw0QkFDTSxNQUFNLGlCQUFOLGtDQUE0Qzs7Ozs7OztFQUE1Qzs7OztLQVFNLHVFQURaLHVDQUFpQixDQUFDLEdBQUUscUJBQVUsZUFBVixFQUEwQixjQUE3QixDQUFqQixtQkFDTSxNQUFNLHdCQUFOLGtDQUFtRDs7QUFFekQsU0FBTzs7QUFFTixRQUFLLE9BQUwsQ0FBYSxTQUFiLENBQXVCLEdBQXZCLENBQTRCLFNBQTVCLEVBQXVDLFNBQXZDLEVBRk07R0FBUDs7RUFGTTtLQVVNLHFFQURaLHVDQUFpQixDQUFDLEdBQUUscUJBQVUsZUFBVixFQUEwQixhQUE3QixDQUFqQixtQkFDTSxNQUFNLHVCQUFOLGtDQUFrRDs7QUFFeEQsU0FBTzs7QUFFTixRQUFLLE9BQUwsQ0FBYSxTQUFiLENBQXVCLEdBQXZCLENBQTRCLFFBQTVCLEVBQXNDLFNBQXRDLEVBRk07R0FBUDs7RUFGTSIsImZpbGUiOiJlbGVtZW50cy91aS1yZXZlYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENvbnRlbnQgUmV2ZWFsIC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9lbGVtZW50cy9yZXZlYWwuaHRtbFxuICovXG5cbmltcG9ydCB7Y29uc3RhbnRzfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtVSUF0dHJpYnV0ZSwgYmluZGFibGVUb2dnbGV9IGZyb20gJy4uL3VpLWF0dHJpYnV0ZSc7XG5pbXBvcnQge2N1c3RvbUF0dHJpYnV0ZSwgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1yZXZlYWxgIClcbmV4cG9ydCBjbGFzcyBVSVJldmVhbEF0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGVUb2dnbGUgYWN0aXZlO1xuXG59XG5cblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1yZXZlYWwtdmlzaWJsZWAgKVxuZXhwb3J0IGNsYXNzIFVJUmV2ZWFsVmlzaWJsZUF0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcblxuXHRiaW5kKCkge1xuXHRcdC8vIE5vIHN1cGVyXG5cdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoICd2aXNpYmxlJywgJ2NvbnRlbnQnICk7XG5cdH1cblxufVxuXG5AY3VzdG9tQXR0cmlidXRlKCBgJHtjb25zdGFudHMuYXR0cmlidXRlUHJlZml4fXJldmVhbC1oaWRkZW5gIClcbmV4cG9ydCBjbGFzcyBVSVJldmVhbEhpZGRlbkF0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcblxuXHRiaW5kKCkge1xuXHRcdC8vIE5vIHN1cGVyXG5cdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoICdoaWRkZW4nLCAnY29udGVudCcgKTtcblx0fVxuXG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
