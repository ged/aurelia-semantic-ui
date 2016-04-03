define(['exports', '../constants', '../ui-attribute', 'aurelia-framework'], function (exports, _constants, _uiAttribute, _aureliaFramework) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Label - http://semantic-ui.com/elements/label.html
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.UILabelsAttribute = exports.UILabelAttribute = undefined;

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

	let UILabelAttribute = exports.UILabelAttribute = (_dec = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }label`), _dec2 = (0, _uiAttribute.bindableEnum)(..._constants.constants.VALID_COLORS), _dec3 = (0, _uiAttribute.bindableEnum)(..._constants.constants.VALID_SIZES), _dec(_class = (_class2 = class UILabelAttribute extends _uiAttribute.UIAttribute {
		constructor(...args) {
			var _temp;

			return _temp = super(...args), _initDefineProp(this, 'color', _descriptor, this), _initDefineProp(this, 'size', _descriptor2, this), _temp;
		}

	}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'color', [_dec2], {
		enumerable: true,
		initializer: null
	}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'size', [_dec3], {
		enumerable: true,
		initializer: null
	})), _class2)) || _class);
	let UILabelsAttribute = exports.UILabelsAttribute = (_dec4 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }labels`), _dec5 = (0, _uiAttribute.bindableEnum)(..._constants.constants.VALID_COLORS), _dec6 = (0, _uiAttribute.bindableEnum)(..._constants.constants.VALID_SIZES), _dec4(_class4 = (_class5 = class UILabelsAttribute extends _uiAttribute.UIAttribute {
		constructor(...args) {
			var _temp2;

			return _temp2 = super(...args), _initDefineProp(this, 'color', _descriptor3, this), _initDefineProp(this, 'size', _descriptor4, this), _temp2;
		}

	}, (_descriptor3 = _applyDecoratedDescriptor(_class5.prototype, 'color', [_dec5], {
		enumerable: true,
		initializer: null
	}), _descriptor4 = _applyDecoratedDescriptor(_class5.prototype, 'size', [_dec6], {
		enumerable: true,
		initializer: null
	})), _class5)) || _class4);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWxhYmVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBV2Esc0RBRFosdUNBQWlCLENBQUMsR0FBRSxxQkFBVSxlQUFWLEVBQTBCLEtBQTdCLENBQWpCLFdBR0MsK0JBQWMsR0FBRyxxQkFBVSxZQUFWLFdBQ2pCLCtCQUFjLEdBQUcscUJBQVUsV0FBViw0QkFIWixNQUFNLGdCQUFOLGtDQUEyQzs7Ozs7OztFQUEzQzs7Ozs7OztLQVNNLHlEQURaLHVDQUFpQixDQUFDLEdBQUUscUJBQVUsZUFBVixFQUEwQixNQUE3QixDQUFqQixXQUdDLCtCQUFjLEdBQUcscUJBQVUsWUFBVixXQUNqQiwrQkFBYyxHQUFHLHFCQUFVLFdBQVYsOEJBSFosTUFBTSxpQkFBTixrQ0FBNEM7Ozs7Ozs7RUFBNUMiLCJmaWxlIjoiZWxlbWVudHMvdWktbGFiZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIExhYmVsIC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9lbGVtZW50cy9sYWJlbC5odG1sXG4gKi9cblxuaW1wb3J0IHtjb25zdGFudHN9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge1VJQXR0cmlidXRlLCBiaW5kYWJsZUVudW0sIGJpbmRhYmxlVG9nZ2xlfSBmcm9tICcuLi91aS1hdHRyaWJ1dGUnO1xuaW1wb3J0IHtjdXN0b21BdHRyaWJ1dGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1sYWJlbGAgKVxuZXhwb3J0IGNsYXNzIFVJTGFiZWxBdHRyaWJ1dGUgZXh0ZW5kcyBVSUF0dHJpYnV0ZSB7XG5cblx0QGJpbmRhYmxlRW51bSggLi4uY29uc3RhbnRzLlZBTElEX0NPTE9SUyApIGNvbG9yO1xuXHRAYmluZGFibGVFbnVtKCAuLi5jb25zdGFudHMuVkFMSURfU0laRVMgKSBzaXplO1xuXG59XG5cblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1sYWJlbHNgIClcbmV4cG9ydCBjbGFzcyBVSUxhYmVsc0F0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGVFbnVtKCAuLi5jb25zdGFudHMuVkFMSURfQ09MT1JTICkgY29sb3I7XG5cdEBiaW5kYWJsZUVudW0oIC4uLmNvbnN0YW50cy5WQUxJRF9TSVpFUyApIHNpemU7XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
