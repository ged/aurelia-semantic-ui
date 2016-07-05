define(['exports', '../constants', '../ui-base', 'aurelia-framework'], function (exports, _constants, _uiBase, _aureliaFramework) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Label - http://semantic-ui.com/elements/label.html
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.SemanticUILabelsAttribute = exports.SemanticUILabelsElement = exports.SemanticUILabelAttribute = exports.SemanticUILabelElement = undefined;

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

	var _dec, _class, _dec2, _dec3, _dec4, _class2, _desc, _value, _class3, _descriptor, _descriptor2, _dec5, _class5, _dec6, _dec7, _dec8, _class6, _desc2, _value2, _class7, _descriptor3, _descriptor4;

	let SemanticUILabelElement = exports.SemanticUILabelElement = (_dec = (0, _aureliaFramework.customElement)(`${ _constants.constants.elementPrefix }label`), _dec(_class = class SemanticUILabelElement extends _uiBase.SemanticUIElement {}) || _class);
	let SemanticUILabelAttribute = exports.SemanticUILabelAttribute = (_dec2 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }label`), _dec3 = (0, _uiBase.bindableEnum)(..._constants.constants.VALID_COLORS), _dec4 = (0, _uiBase.bindableEnum)(..._constants.constants.VALID_SIZES), _dec2(_class2 = (_class3 = class SemanticUILabelAttribute extends _uiBase.SemanticUIAttribute {
		constructor(...args) {
			var _temp;

			return _temp = super(...args), _initDefineProp(this, 'color', _descriptor, this), _initDefineProp(this, 'size', _descriptor2, this), _temp;
		}

	}, (_descriptor = _applyDecoratedDescriptor(_class3.prototype, 'color', [_dec3], {
		enumerable: true,
		initializer: null
	}), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, 'size', [_dec4], {
		enumerable: true,
		initializer: null
	})), _class3)) || _class2);
	let SemanticUILabelsElement = exports.SemanticUILabelsElement = (_dec5 = (0, _aureliaFramework.customElement)(`${ _constants.constants.elementPrefix }labels`), _dec5(_class5 = class SemanticUILabelsElement extends _uiBase.SemanticUIElement {}) || _class5);
	let SemanticUILabelsAttribute = exports.SemanticUILabelsAttribute = (_dec6 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }labels`), _dec7 = (0, _uiBase.bindableEnum)(..._constants.constants.VALID_COLORS), _dec8 = (0, _uiBase.bindableEnum)(..._constants.constants.VALID_SIZES), _dec6(_class6 = (_class7 = class SemanticUILabelsAttribute extends _uiBase.SemanticUIAttribute {
		constructor(...args) {
			var _temp2;

			return _temp2 = super(...args), _initDefineProp(this, 'color', _descriptor3, this), _initDefineProp(this, 'size', _descriptor4, this), _temp2;
		}

	}, (_descriptor3 = _applyDecoratedDescriptor(_class7.prototype, 'color', [_dec7], {
		enumerable: true,
		initializer: null
	}), _descriptor4 = _applyDecoratedDescriptor(_class7.prototype, 'size', [_dec8], {
		enumerable: true,
		initializer: null
	})), _class7)) || _class6);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWxhYmVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FTYSxzQixXQUFBLHNCLFdBRFoscUNBQWdCLElBQUUscUJBQVUsYUFBYyxRQUExQyxDLGdCQUNNLE1BQU0sc0JBQU4sbUNBQXVELEU7S0FHakQsd0IsV0FBQSx3QixZQURaLHVDQUFrQixJQUFFLHFCQUFVLGVBQWdCLFFBQTlDLEMsVUFHQywwQkFBYyxHQUFHLHFCQUFVLFlBQTNCLEMsVUFDQSwwQkFBYyxHQUFHLHFCQUFVLFdBQTNCLEMsNkJBSEssTUFBTSx3QkFBTixxQ0FBMkQ7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUEsRTs7Ozs7OztLQVNyRCx1QixXQUFBLHVCLFlBRFoscUNBQWdCLElBQUUscUJBQVUsYUFBYyxTQUExQyxDLGtCQUNNLE1BQU0sdUJBQU4sbUNBQXdELEU7S0FHbEQseUIsV0FBQSx5QixZQURaLHVDQUFrQixJQUFFLHFCQUFVLGVBQWdCLFNBQTlDLEMsVUFHQywwQkFBYyxHQUFHLHFCQUFVLFlBQTNCLEMsVUFDQSwwQkFBYyxHQUFHLHFCQUFVLFdBQTNCLEMsNkJBSEssTUFBTSx5QkFBTixxQ0FBNEQ7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUEsRSIsImZpbGUiOiJlbGVtZW50cy91aS1sYWJlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogTGFiZWwgLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL2VsZW1lbnRzL2xhYmVsLmh0bWxcbiAqL1xuXG5pbXBvcnQge2NvbnN0YW50c30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7U2VtYW50aWNVSUVsZW1lbnQsIFNlbWFudGljVUlBdHRyaWJ1dGUsIGJpbmRhYmxlRW51bSwgYmluZGFibGVUb2dnbGV9IGZyb20gJy4uL3VpLWJhc2UnO1xuaW1wb3J0IHtjdXN0b21BdHRyaWJ1dGUsIGN1c3RvbUVsZW1lbnR9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUVsZW1lbnQoIGAke2NvbnN0YW50cy5lbGVtZW50UHJlZml4fWxhYmVsYCApXG5leHBvcnQgY2xhc3MgU2VtYW50aWNVSUxhYmVsRWxlbWVudCBleHRlbmRzIFNlbWFudGljVUlFbGVtZW50IHt9XG5cbkBjdXN0b21BdHRyaWJ1dGUoIGAke2NvbnN0YW50cy5hdHRyaWJ1dGVQcmVmaXh9bGFiZWxgIClcbmV4cG9ydCBjbGFzcyBTZW1hbnRpY1VJTGFiZWxBdHRyaWJ1dGUgZXh0ZW5kcyBTZW1hbnRpY1VJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGVFbnVtKCAuLi5jb25zdGFudHMuVkFMSURfQ09MT1JTICkgY29sb3I7XG5cdEBiaW5kYWJsZUVudW0oIC4uLmNvbnN0YW50cy5WQUxJRF9TSVpFUyApIHNpemU7XG5cbn1cblxuXG5AY3VzdG9tRWxlbWVudCggYCR7Y29uc3RhbnRzLmVsZW1lbnRQcmVmaXh9bGFiZWxzYCApXG5leHBvcnQgY2xhc3MgU2VtYW50aWNVSUxhYmVsc0VsZW1lbnQgZXh0ZW5kcyBTZW1hbnRpY1VJRWxlbWVudCB7fVxuXG5AY3VzdG9tQXR0cmlidXRlKCBgJHtjb25zdGFudHMuYXR0cmlidXRlUHJlZml4fWxhYmVsc2AgKVxuZXhwb3J0IGNsYXNzIFNlbWFudGljVUlMYWJlbHNBdHRyaWJ1dGUgZXh0ZW5kcyBTZW1hbnRpY1VJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGVFbnVtKCAuLi5jb25zdGFudHMuVkFMSURfQ09MT1JTICkgY29sb3I7XG5cdEBiaW5kYWJsZUVudW0oIC4uLmNvbnN0YW50cy5WQUxJRF9TSVpFUyApIHNpemU7XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
