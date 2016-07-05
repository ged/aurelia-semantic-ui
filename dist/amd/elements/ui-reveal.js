define(['exports', '../constants', '../ui-base', 'aurelia-framework'], function (exports, _constants, _uiBase, _aureliaFramework) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Content Reveal - http://semantic-ui.com/elements/reveal.html
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.SemanticUIRevealHiddenAttribute = exports.SemanticUIRevealVisibleAttribute = exports.SemanticUIRevealAttribute = exports.SemanticUIRevealElement = undefined;

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

	var _dec, _class, _dec2, _class2, _desc, _value, _class3, _descriptor, _dec3, _class5, _dec4, _class6;

	let SemanticUIRevealElement = exports.SemanticUIRevealElement = (_dec = (0, _aureliaFramework.customElement)(`${ _constants.constants.elementPrefix }reveal`), _dec(_class = class SemanticUIRevealElement extends _uiBase.SemanticUIElement {}) || _class);
	let SemanticUIRevealAttribute = exports.SemanticUIRevealAttribute = (_dec2 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }reveal`), _dec2(_class2 = (_class3 = class SemanticUIRevealAttribute extends _uiBase.SemanticUIAttribute {
		constructor(...args) {
			var _temp;

			return _temp = super(...args), _initDefineProp(this, 'active', _descriptor, this), _temp;
		}

	}, (_descriptor = _applyDecoratedDescriptor(_class3.prototype, 'active', [_uiBase.bindableToggle], {
		enumerable: true,
		initializer: null
	})), _class3)) || _class2);
	let SemanticUIRevealVisibleAttribute = exports.SemanticUIRevealVisibleAttribute = (_dec3 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }reveal-visible`), _dec3(_class5 = class SemanticUIRevealVisibleAttribute extends _uiBase.SemanticUIAttribute {

		bind() {
			// No super
			this.element.classList.add('visible', 'content');
		}

	}) || _class5);
	let SemanticUIRevealHiddenAttribute = exports.SemanticUIRevealHiddenAttribute = (_dec4 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }reveal-hidden`), _dec4(_class6 = class SemanticUIRevealHiddenAttribute extends _uiBase.SemanticUIAttribute {

		bind() {
			// No super
			this.element.classList.add('hidden', 'content');
		}

	}) || _class6);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLXJldmVhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBU2EsdUIsV0FBQSx1QixXQURaLHFDQUFnQixJQUFFLHFCQUFVLGFBQWMsU0FBMUMsQyxnQkFDTSxNQUFNLHVCQUFOLG1DQUF3RCxFO0tBR2xELHlCLFdBQUEseUIsWUFEWix1Q0FBa0IsSUFBRSxxQkFBVSxlQUFnQixTQUE5QyxDLDZCQUNNLE1BQU0seUJBQU4scUNBQTREO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBLEU7Ozs7S0FRdEQsZ0MsV0FBQSxnQyxZQURaLHVDQUFrQixJQUFFLHFCQUFVLGVBQWdCLGlCQUE5QyxDLGtCQUNNLE1BQU0sZ0NBQU4scUNBQW1FOztBQUV6RSxTQUFPO0FBQ047QUFDQSxRQUFLLE9BQUwsQ0FBYSxTQUFiLENBQXVCLEdBQXZCLENBQTRCLFNBQTVCLEVBQXVDLFNBQXZDO0FBQ0E7O0FBTHdFLEU7S0FVN0QsK0IsV0FBQSwrQixZQURaLHVDQUFrQixJQUFFLHFCQUFVLGVBQWdCLGdCQUE5QyxDLGtCQUNNLE1BQU0sK0JBQU4scUNBQWtFOztBQUV4RSxTQUFPO0FBQ047QUFDQSxRQUFLLE9BQUwsQ0FBYSxTQUFiLENBQXVCLEdBQXZCLENBQTRCLFFBQTVCLEVBQXNDLFNBQXRDO0FBQ0E7O0FBTHVFLEUiLCJmaWxlIjoiZWxlbWVudHMvdWktcmV2ZWFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDb250ZW50IFJldmVhbCAtIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vZWxlbWVudHMvcmV2ZWFsLmh0bWxcbiAqL1xuXG5pbXBvcnQge2NvbnN0YW50c30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7U2VtYW50aWNVSUVsZW1lbnQsIFNlbWFudGljVUlBdHRyaWJ1dGUsIGJpbmRhYmxlVG9nZ2xlfSBmcm9tICcuLi91aS1iYXNlJztcbmltcG9ydCB7Y3VzdG9tQXR0cmlidXRlLCBjdXN0b21FbGVtZW50LCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AY3VzdG9tRWxlbWVudCggYCR7Y29uc3RhbnRzLmVsZW1lbnRQcmVmaXh9cmV2ZWFsYCApXG5leHBvcnQgY2xhc3MgU2VtYW50aWNVSVJldmVhbEVsZW1lbnQgZXh0ZW5kcyBTZW1hbnRpY1VJRWxlbWVudCB7fVxuXG5AY3VzdG9tQXR0cmlidXRlKCBgJHtjb25zdGFudHMuYXR0cmlidXRlUHJlZml4fXJldmVhbGAgKVxuZXhwb3J0IGNsYXNzIFNlbWFudGljVUlSZXZlYWxBdHRyaWJ1dGUgZXh0ZW5kcyBTZW1hbnRpY1VJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGVUb2dnbGUgYWN0aXZlO1xuXG59XG5cblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1yZXZlYWwtdmlzaWJsZWAgKVxuZXhwb3J0IGNsYXNzIFNlbWFudGljVUlSZXZlYWxWaXNpYmxlQXR0cmlidXRlIGV4dGVuZHMgU2VtYW50aWNVSUF0dHJpYnV0ZSB7XG5cblx0YmluZCgpIHtcblx0XHQvLyBObyBzdXBlclxuXHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAndmlzaWJsZScsICdjb250ZW50JyApO1xuXHR9XG5cbn1cblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1yZXZlYWwtaGlkZGVuYCApXG5leHBvcnQgY2xhc3MgU2VtYW50aWNVSVJldmVhbEhpZGRlbkF0dHJpYnV0ZSBleHRlbmRzIFNlbWFudGljVUlBdHRyaWJ1dGUge1xuXG5cdGJpbmQoKSB7XG5cdFx0Ly8gTm8gc3VwZXJcblx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ2hpZGRlbicsICdjb250ZW50JyApO1xuXHR9XG5cbn1cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
