define(['exports', '../constants', '../ui-base', 'aurelia-framework'], function (exports, _constants, _uiBase, _aureliaFramework) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Statistic - http://semantic-ui.com/views/statistic.html
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.SemanticUIStatisticsAttribute = exports.SemanticUIStatisticsElement = exports.SemanticUIStatisticAttribute = exports.SemanticUIStatisticElement = undefined;

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

	let SemanticUIStatisticElement = exports.SemanticUIStatisticElement = (_dec = (0, _aureliaFramework.customElement)(`${ _constants.constants.elementPrefix }statistic`), _dec(_class = class SemanticUIStatisticElement extends _uiBase.SemanticUIElement {}) || _class);
	let SemanticUIStatisticAttribute = exports.SemanticUIStatisticAttribute = (_dec2 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }statistic`), _dec3 = (0, _uiBase.bindableEnum)(..._constants.constants.VALID_SIZES), _dec4 = (0, _uiBase.bindableEnum)(..._constants.constants.VALID_COLORS), _dec2(_class2 = (_class3 = class SemanticUIStatisticAttribute extends _uiBase.SemanticUIAttribute {
		constructor(...args) {
			var _temp;

			return _temp = super(...args), _initDefineProp(this, 'size', _descriptor, this), _initDefineProp(this, 'color', _descriptor2, this), _temp;
		}

	}, (_descriptor = _applyDecoratedDescriptor(_class3.prototype, 'size', [_dec3], {
		enumerable: true,
		initializer: null
	}), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, 'color', [_dec4], {
		enumerable: true,
		initializer: null
	})), _class3)) || _class2);
	let SemanticUIStatisticsElement = exports.SemanticUIStatisticsElement = (_dec5 = (0, _aureliaFramework.customElement)(`${ _constants.constants.elementPrefix }statistics`), _dec5(_class5 = class SemanticUIStatisticsElement extends _uiBase.SemanticUIElement {}) || _class5);
	let SemanticUIStatisticsAttribute = exports.SemanticUIStatisticsAttribute = (_dec6 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }statistics`), _dec7 = (0, _uiBase.bindableEnum)(..._constants.constants.VALID_SIZES), _dec8 = (0, _uiBase.bindableEnum)(..._constants.constants.VALID_COLORS), _dec6(_class6 = (_class7 = class SemanticUIStatisticsAttribute extends _uiBase.SemanticUIAttribute {
		constructor(...args) {
			var _temp2;

			return _temp2 = super(...args), _initDefineProp(this, 'size', _descriptor3, this), _initDefineProp(this, 'color', _descriptor4, this), _temp2;
		}

	}, (_descriptor3 = _applyDecoratedDescriptor(_class7.prototype, 'size', [_dec7], {
		enumerable: true,
		initializer: null
	}), _descriptor4 = _applyDecoratedDescriptor(_class7.prototype, 'color', [_dec8], {
		enumerable: true,
		initializer: null
	})), _class7)) || _class6);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL3VpLXN0YXRpc3RpYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBU2EsMEIsV0FBQSwwQixXQURaLHFDQUFnQixJQUFFLHFCQUFVLGFBQWMsWUFBMUMsQyxnQkFDTSxNQUFNLDBCQUFOLG1DQUEyRCxFO0tBR3JELDRCLFdBQUEsNEIsWUFEWix1Q0FBa0IsSUFBRSxxQkFBVSxlQUFnQixZQUE5QyxDLFVBRUMsMEJBQWMsR0FBRyxxQkFBVSxXQUEzQixDLFVBQ0EsMEJBQWMsR0FBRyxxQkFBVSxZQUEzQixDLDZCQUZLLE1BQU0sNEJBQU4scUNBQStEO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBLEU7Ozs7Ozs7S0FPekQsMkIsV0FBQSwyQixZQURaLHFDQUFnQixJQUFFLHFCQUFVLGFBQWMsYUFBMUMsQyxrQkFDTSxNQUFNLDJCQUFOLG1DQUE0RCxFO0tBR3RELDZCLFdBQUEsNkIsWUFEWix1Q0FBa0IsSUFBRSxxQkFBVSxlQUFnQixhQUE5QyxDLFVBRUMsMEJBQWMsR0FBRyxxQkFBVSxXQUEzQixDLFVBQ0EsMEJBQWMsR0FBRyxxQkFBVSxZQUEzQixDLDZCQUZLLE1BQU0sNkJBQU4scUNBQWdFO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBLEUiLCJmaWxlIjoidmlld3MvdWktc3RhdGlzdGljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBTdGF0aXN0aWMgLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL3ZpZXdzL3N0YXRpc3RpYy5odG1sXG4gKi9cblxuaW1wb3J0IHtjb25zdGFudHN9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge1NlbWFudGljVUlFbGVtZW50LCBTZW1hbnRpY1VJQXR0cmlidXRlLCBiaW5kYWJsZUVudW19IGZyb20gJy4uL3VpLWJhc2UnO1xuaW1wb3J0IHtjdXN0b21BdHRyaWJ1dGUsIGN1c3RvbUVsZW1lbnR9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUVsZW1lbnQoIGAke2NvbnN0YW50cy5lbGVtZW50UHJlZml4fXN0YXRpc3RpY2AgKVxuZXhwb3J0IGNsYXNzIFNlbWFudGljVUlTdGF0aXN0aWNFbGVtZW50IGV4dGVuZHMgU2VtYW50aWNVSUVsZW1lbnQge31cblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1zdGF0aXN0aWNgIClcbmV4cG9ydCBjbGFzcyBTZW1hbnRpY1VJU3RhdGlzdGljQXR0cmlidXRlIGV4dGVuZHMgU2VtYW50aWNVSUF0dHJpYnV0ZSB7XG5cdEBiaW5kYWJsZUVudW0oIC4uLmNvbnN0YW50cy5WQUxJRF9TSVpFUyApIHNpemU7XG5cdEBiaW5kYWJsZUVudW0oIC4uLmNvbnN0YW50cy5WQUxJRF9DT0xPUlMgKSBjb2xvcjtcbn1cblxuXG5AY3VzdG9tRWxlbWVudCggYCR7Y29uc3RhbnRzLmVsZW1lbnRQcmVmaXh9c3RhdGlzdGljc2AgKVxuZXhwb3J0IGNsYXNzIFNlbWFudGljVUlTdGF0aXN0aWNzRWxlbWVudCBleHRlbmRzIFNlbWFudGljVUlFbGVtZW50IHt9XG5cbkBjdXN0b21BdHRyaWJ1dGUoIGAke2NvbnN0YW50cy5hdHRyaWJ1dGVQcmVmaXh9c3RhdGlzdGljc2AgKVxuZXhwb3J0IGNsYXNzIFNlbWFudGljVUlTdGF0aXN0aWNzQXR0cmlidXRlIGV4dGVuZHMgU2VtYW50aWNVSUF0dHJpYnV0ZSB7XG5cdEBiaW5kYWJsZUVudW0oIC4uLmNvbnN0YW50cy5WQUxJRF9TSVpFUyApIHNpemU7XG5cdEBiaW5kYWJsZUVudW0oIC4uLmNvbnN0YW50cy5WQUxJRF9DT0xPUlMgKSBjb2xvcjtcbn1cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
