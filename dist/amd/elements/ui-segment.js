define(['exports', '../constants', '../ui-base', 'aurelia-framework'], function (exports, _constants, _uiBase, _aureliaFramework) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Segment - http://semantic-ui.com/elements/segment.html
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.SemanticUISegmentsAttribute = exports.SemanticUISegmentsElement = exports.SemanticUISegmentAttribute = exports.SemanticUISegmentElement = undefined;

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

	var _dec, _class, _dec2, _dec3, _class2, _desc, _value, _class3, _descriptor, _descriptor2, _descriptor3, _dec4, _class5, _dec5, _class6;

	let SemanticUISegmentElement = exports.SemanticUISegmentElement = (_dec = (0, _aureliaFramework.customElement)(`${ _constants.constants.elementPrefix }segment`), _dec(_class = class SemanticUISegmentElement extends _uiBase.SemanticUIElement {}) || _class);
	let SemanticUISegmentAttribute = exports.SemanticUISegmentAttribute = (_dec2 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }segment`), _dec3 = (0, _uiBase.bindableEnum)(..._constants.constants.VALID_COLORS), _dec2(_class2 = (_class3 = class SemanticUISegmentAttribute extends _uiBase.SemanticUIAttribute {
		constructor(...args) {
			var _temp;

			return _temp = super(...args), _initDefineProp(this, 'loading', _descriptor, this), _initDefineProp(this, 'disabled', _descriptor2, this), _initDefineProp(this, 'color', _descriptor3, this), _temp;
		}

	}, (_descriptor = _applyDecoratedDescriptor(_class3.prototype, 'loading', [_uiBase.bindableToggle], {
		enumerable: true,
		initializer: function () {
			return false;
		}
	}), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, 'disabled', [_uiBase.bindableToggle], {
		enumerable: true,
		initializer: function () {
			return false;
		}
	}), _descriptor3 = _applyDecoratedDescriptor(_class3.prototype, 'color', [_dec3], {
		enumerable: true,
		initializer: null
	})), _class3)) || _class2);
	let SemanticUISegmentsElement = exports.SemanticUISegmentsElement = (_dec4 = (0, _aureliaFramework.customElement)(`${ _constants.constants.elementPrefix }segments`), _dec4(_class5 = class SemanticUISegmentsElement extends _uiBase.SemanticUIElement {}) || _class5);
	let SemanticUISegmentsAttribute = exports.SemanticUISegmentsAttribute = (_dec5 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }segments`), _dec5(_class6 = class SemanticUISegmentsAttribute extends _uiBase.SemanticUIAttribute {}) || _class6);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLXNlZ21lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQVNhLHdCLFdBQUEsd0IsV0FEWixxQ0FBZ0IsSUFBRSxxQkFBVSxhQUFjLFVBQTFDLEMsZ0JBQ00sTUFBTSx3QkFBTixtQ0FBeUQsRTtLQUduRCwwQixXQUFBLDBCLFlBRFosdUNBQWtCLElBQUUscUJBQVUsZUFBZ0IsVUFBOUMsQyxVQUtDLDBCQUFjLEdBQUcscUJBQVUsWUFBM0IsQyw2QkFKSyxNQUFNLDBCQUFOLHFDQUE2RDtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQSxFOzs7VUFFekMsSzs7Ozs7VUFDQyxLOzs7Ozs7S0FPZix5QixXQUFBLHlCLFlBRFoscUNBQWdCLElBQUUscUJBQVUsYUFBYyxXQUExQyxDLGtCQUNNLE1BQU0seUJBQU4sbUNBQTBELEU7S0FHcEQsMkIsV0FBQSwyQixZQURaLHVDQUFrQixJQUFFLHFCQUFVLGVBQWdCLFdBQTlDLEMsa0JBQ00sTUFBTSwyQkFBTixxQ0FBOEQsRSIsImZpbGUiOiJlbGVtZW50cy91aS1zZWdtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBTZWdtZW50IC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9lbGVtZW50cy9zZWdtZW50Lmh0bWxcbiAqL1xuXG5pbXBvcnQge2NvbnN0YW50c30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7U2VtYW50aWNVSUVsZW1lbnQsIFNlbWFudGljVUlBdHRyaWJ1dGUsIGJpbmRhYmxlVG9nZ2xlLCBiaW5kYWJsZUVudW19IGZyb20gJy4uL3VpLWJhc2UnO1xuaW1wb3J0IHtjdXN0b21BdHRyaWJ1dGUsIGN1c3RvbUVsZW1lbnR9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUVsZW1lbnQoIGAke2NvbnN0YW50cy5lbGVtZW50UHJlZml4fXNlZ21lbnRgIClcbmV4cG9ydCBjbGFzcyBTZW1hbnRpY1VJU2VnbWVudEVsZW1lbnQgZXh0ZW5kcyBTZW1hbnRpY1VJRWxlbWVudCB7fVxuXG5AY3VzdG9tQXR0cmlidXRlKCBgJHtjb25zdGFudHMuYXR0cmlidXRlUHJlZml4fXNlZ21lbnRgIClcbmV4cG9ydCBjbGFzcyBTZW1hbnRpY1VJU2VnbWVudEF0dHJpYnV0ZSBleHRlbmRzIFNlbWFudGljVUlBdHRyaWJ1dGUge1xuXG5cdEBiaW5kYWJsZVRvZ2dsZSBsb2FkaW5nID0gZmFsc2U7XG5cdEBiaW5kYWJsZVRvZ2dsZSBkaXNhYmxlZCA9IGZhbHNlO1xuXHRAYmluZGFibGVFbnVtKCAuLi5jb25zdGFudHMuVkFMSURfQ09MT1JTICkgY29sb3I7XG5cbn1cblxuXG5AY3VzdG9tRWxlbWVudCggYCR7Y29uc3RhbnRzLmVsZW1lbnRQcmVmaXh9c2VnbWVudHNgIClcbmV4cG9ydCBjbGFzcyBTZW1hbnRpY1VJU2VnbWVudHNFbGVtZW50IGV4dGVuZHMgU2VtYW50aWNVSUVsZW1lbnQge31cblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1zZWdtZW50c2AgKVxuZXhwb3J0IGNsYXNzIFNlbWFudGljVUlTZWdtZW50c0F0dHJpYnV0ZSBleHRlbmRzIFNlbWFudGljVUlBdHRyaWJ1dGUge1xufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
