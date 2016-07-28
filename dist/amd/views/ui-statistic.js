define(['exports', '../constants', '../ui-attribute', 'aurelia-framework'], function (exports, _constants, _uiAttribute, _aureliaFramework) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Statistic - http://semantic-ui.com/views/statistic.html
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.UIStatisticsAttribute = exports.UIStatisticAttribute = undefined;

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

	var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _dec4, _dec5, _dec6, _class4, _desc2, _value2, _class5, _descriptor3, _descriptor4;

	let UIStatisticAttribute = exports.UIStatisticAttribute = (_dec = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }statistic`), _dec2 = (0, _uiAttribute.bindableEnum)(..._constants.constants.VALID_SIZES), _dec3 = (0, _uiAttribute.bindableEnum)(..._constants.constants.VALID_COLORS), _dec(_class = (_class2 = class UIStatisticAttribute extends _uiAttribute.UIAttribute {
		constructor(...args) {
			var _temp;

			return _temp = super(...args), _initDefineProp(this, 'size', _descriptor, this), _initDefineProp(this, 'color', _descriptor2, this), _temp;
		}

	}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'size', [_dec2], {
		enumerable: true,
		initializer: null
	}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'color', [_dec3], {
		enumerable: true,
		initializer: null
	})), _class2)) || _class);
	let UIStatisticsAttribute = exports.UIStatisticsAttribute = (_dec4 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }statistics`), _dec5 = (0, _uiAttribute.bindableEnum)(..._constants.constants.VALID_SIZES), _dec6 = (0, _uiAttribute.bindableEnum)(..._constants.constants.VALID_COLORS), _dec4(_class4 = (_class5 = class UIStatisticsAttribute extends _uiAttribute.UIAttribute {
		constructor(...args) {
			var _temp2;

			return _temp2 = super(...args), _initDefineProp(this, 'size', _descriptor3, this), _initDefineProp(this, 'color', _descriptor4, this), _temp2;
		}

	}, (_descriptor3 = _applyDecoratedDescriptor(_class5.prototype, 'size', [_dec5], {
		enumerable: true,
		initializer: null
	}), _descriptor4 = _applyDecoratedDescriptor(_class5.prototype, 'color', [_dec6], {
		enumerable: true,
		initializer: null
	})), _class5)) || _class4);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL3VpLXN0YXRpc3RpYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBU2Esb0IsV0FBQSxvQixXQURaLHVDQUFrQixJQUFFLHFCQUFVLGVBQWdCLFlBQTlDLEMsVUFFQywrQkFBYyxHQUFHLHFCQUFVLFdBQTNCLEMsVUFDQSwrQkFBYyxHQUFHLHFCQUFVLFlBQTNCLEMsMkJBRkssTUFBTSxvQkFBTixrQ0FBK0M7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUEsRTs7Ozs7OztLQU96QyxxQixXQUFBLHFCLFlBRFosdUNBQWtCLElBQUUscUJBQVUsZUFBZ0IsYUFBOUMsQyxVQUVDLCtCQUFjLEdBQUcscUJBQVUsV0FBM0IsQyxVQUNBLCtCQUFjLEdBQUcscUJBQVUsWUFBM0IsQyw2QkFGSyxNQUFNLHFCQUFOLGtDQUFnRDtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQSxFIiwiZmlsZSI6InZpZXdzL3VpLXN0YXRpc3RpYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogU3RhdGlzdGljIC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS92aWV3cy9zdGF0aXN0aWMuaHRtbFxuICovXG5cbmltcG9ydCB7Y29uc3RhbnRzfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtVSUF0dHJpYnV0ZSwgYmluZGFibGVFbnVtfSBmcm9tICcuLi91aS1hdHRyaWJ1dGUnO1xuaW1wb3J0IHtjdXN0b21BdHRyaWJ1dGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1zdGF0aXN0aWNgIClcbmV4cG9ydCBjbGFzcyBVSVN0YXRpc3RpY0F0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcblx0QGJpbmRhYmxlRW51bSggLi4uY29uc3RhbnRzLlZBTElEX1NJWkVTICkgc2l6ZTtcblx0QGJpbmRhYmxlRW51bSggLi4uY29uc3RhbnRzLlZBTElEX0NPTE9SUyApIGNvbG9yO1xufVxuXG5cbkBjdXN0b21BdHRyaWJ1dGUoIGAke2NvbnN0YW50cy5hdHRyaWJ1dGVQcmVmaXh9c3RhdGlzdGljc2AgKVxuZXhwb3J0IGNsYXNzIFVJU3RhdGlzdGljc0F0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcblx0QGJpbmRhYmxlRW51bSggLi4uY29uc3RhbnRzLlZBTElEX1NJWkVTICkgc2l6ZTtcblx0QGJpbmRhYmxlRW51bSggLi4uY29uc3RhbnRzLlZBTElEX0NPTE9SUyApIGNvbG9yO1xufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
