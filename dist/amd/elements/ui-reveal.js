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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLXJldmVhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQVdhLGlCLFdBQUEsaUIsV0FEWix1Q0FBa0IsSUFBRSxxQkFBVSxlQUFnQixTQUE5QyxDLDJCQUNNLE1BQU0saUJBQU4sa0NBQTRDO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBLEU7Ozs7S0FRdEMsd0IsV0FBQSx3QixZQURaLHVDQUFrQixJQUFFLHFCQUFVLGVBQWdCLGlCQUE5QyxDLGtCQUNNLE1BQU0sd0JBQU4sa0NBQW1EOztBQUV6RCxTQUFPOztBQUVOLFFBQUssT0FBTCxDQUFhLFNBQWIsQ0FBdUIsR0FBdkIsQ0FBNEIsU0FBNUIsRUFBdUMsU0FBdkM7QUFDQTs7QUFMd0QsRTtLQVU3Qyx1QixXQUFBLHVCLFlBRFosdUNBQWtCLElBQUUscUJBQVUsZUFBZ0IsZ0JBQTlDLEMsa0JBQ00sTUFBTSx1QkFBTixrQ0FBa0Q7O0FBRXhELFNBQU87O0FBRU4sUUFBSyxPQUFMLENBQWEsU0FBYixDQUF1QixHQUF2QixDQUE0QixRQUE1QixFQUFzQyxTQUF0QztBQUNBOztBQUx1RCxFIiwiZmlsZSI6ImVsZW1lbnRzL3VpLXJldmVhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ29udGVudCBSZXZlYWwgLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL2VsZW1lbnRzL3JldmVhbC5odG1sXG4gKi9cblxuaW1wb3J0IHtjb25zdGFudHN9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge1VJQXR0cmlidXRlLCBiaW5kYWJsZVRvZ2dsZX0gZnJvbSAnLi4vdWktYXR0cmlidXRlJztcbmltcG9ydCB7Y3VzdG9tQXR0cmlidXRlLCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AY3VzdG9tQXR0cmlidXRlKCBgJHtjb25zdGFudHMuYXR0cmlidXRlUHJlZml4fXJldmVhbGAgKVxuZXhwb3J0IGNsYXNzIFVJUmV2ZWFsQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG5cdEBiaW5kYWJsZVRvZ2dsZSBhY3RpdmU7XG5cbn1cblxuXG5AY3VzdG9tQXR0cmlidXRlKCBgJHtjb25zdGFudHMuYXR0cmlidXRlUHJlZml4fXJldmVhbC12aXNpYmxlYCApXG5leHBvcnQgY2xhc3MgVUlSZXZlYWxWaXNpYmxlQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG5cdGJpbmQoKSB7XG5cdFx0Ly8gTm8gc3VwZXJcblx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ3Zpc2libGUnLCAnY29udGVudCcgKTtcblx0fVxuXG59XG5cbkBjdXN0b21BdHRyaWJ1dGUoIGAke2NvbnN0YW50cy5hdHRyaWJ1dGVQcmVmaXh9cmV2ZWFsLWhpZGRlbmAgKVxuZXhwb3J0IGNsYXNzIFVJUmV2ZWFsSGlkZGVuQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG5cdGJpbmQoKSB7XG5cdFx0Ly8gTm8gc3VwZXJcblx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ2hpZGRlbicsICdjb250ZW50JyApO1xuXHR9XG5cbn1cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
