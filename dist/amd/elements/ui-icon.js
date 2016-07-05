define(['exports', '../constants', '../ui-base', 'aurelia-framework'], function (exports, _constants, _uiBase, _aureliaFramework) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Icon - http://semantic-ui.com/elements/icon.html#/definition
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.SemanticUIIconsAttribute = exports.SemanticUIIconsElement = exports.SemanticUIIconAttribute = exports.SemanticUIIconElement = undefined;

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

	var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _dec4, _dec5, _dec6, _class4, _desc2, _value2, _class5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _dec7, _dec8, _class7, _desc3, _value3, _class8, _descriptor11, _dec9, _dec10, _class10, _desc4, _value4, _class11, _descriptor12;

	let SemanticUIIconElement = exports.SemanticUIIconElement = (_dec = (0, _aureliaFramework.customElement)(`${ _constants.constants.elementPrefix }icon`), _dec2 = (0, _uiBase.bindableEnum)(..._constants.constants.VALID_SIZES), _dec3 = (0, _uiBase.bindableEnum)(..._constants.constants.VALID_COLORS), _dec(_class = (_class2 = class SemanticUIIconElement extends _uiBase.SemanticUIElement {
		constructor(...args) {
			var _temp;

			return _temp = super(...args), _initDefineProp(this, 'name', _descriptor, this), _initDefineProp(this, 'size', _descriptor2, this), _initDefineProp(this, 'color', _descriptor3, this), _initDefineProp(this, 'disabled', _descriptor4, this), _initDefineProp(this, 'loading', _descriptor5, this), _temp;
		}

	}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'name', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: function () {
			return "help circle";
		}
	}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'size', [_dec2], {
		enumerable: true,
		initializer: null
	}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'color', [_dec3], {
		enumerable: true,
		initializer: null
	}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'disabled', [_uiBase.bindableToggle], {
		enumerable: true,
		initializer: null
	}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'loading', [_uiBase.bindableToggle], {
		enumerable: true,
		initializer: null
	})), _class2)) || _class);
	let SemanticUIIconAttribute = exports.SemanticUIIconAttribute = (_dec4 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }icon`), _dec5 = (0, _uiBase.bindableEnum)(..._constants.constants.VALID_SIZES), _dec6 = (0, _uiBase.bindableEnum)(..._constants.constants.VALID_COLORS), _dec4(_class4 = (_class5 = class SemanticUIIconAttribute extends _uiBase.SemanticUIAttribute {
		constructor(...args) {
			var _temp2;

			return _temp2 = super(...args), _initDefineProp(this, 'name', _descriptor6, this), _initDefineProp(this, 'size', _descriptor7, this), _initDefineProp(this, 'color', _descriptor8, this), _initDefineProp(this, 'disabled', _descriptor9, this), _initDefineProp(this, 'loading', _descriptor10, this), _temp2;
		}

		bind() {
			// No super, as the classList doesn't get the 'ui' class.
			this.element.classList.add(...this.name.split(' '));
			this.element.classList.add('icon');
		}

		nameChanged(newValue, oldValue) {
			this.logger.debug(`Name changed from ${ oldValue } to ${ newValue }`);
			this.element.classList.remove(...oldValue.split(' '));
			this.element.classList.add(...newValue.split(' '));
		}

	}, (_descriptor6 = _applyDecoratedDescriptor(_class5.prototype, 'name', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: function () {
			return "help circle";
		}
	}), _descriptor7 = _applyDecoratedDescriptor(_class5.prototype, 'size', [_dec5], {
		enumerable: true,
		initializer: null
	}), _descriptor8 = _applyDecoratedDescriptor(_class5.prototype, 'color', [_dec6], {
		enumerable: true,
		initializer: null
	}), _descriptor9 = _applyDecoratedDescriptor(_class5.prototype, 'disabled', [_uiBase.bindableToggle], {
		enumerable: true,
		initializer: null
	}), _descriptor10 = _applyDecoratedDescriptor(_class5.prototype, 'loading', [_uiBase.bindableToggle], {
		enumerable: true,
		initializer: null
	})), _class5)) || _class4);
	let SemanticUIIconsElement = exports.SemanticUIIconsElement = (_dec7 = (0, _aureliaFramework.customElement)(`${ _constants.constants.elementPrefix }icons`), _dec8 = (0, _uiBase.bindableEnum)(..._constants.constants.VALID_SIZES), _dec7(_class7 = (_class8 = class SemanticUIIconsElement extends _uiBase.SemanticUIElement {
		constructor(...args) {
			var _temp3;

			return _temp3 = super(...args), _initDefineProp(this, 'size', _descriptor11, this), _temp3;
		}

	}, (_descriptor11 = _applyDecoratedDescriptor(_class8.prototype, 'size', [_dec8], {
		enumerable: true,
		initializer: null
	})), _class8)) || _class7);
	let SemanticUIIconsAttribute = exports.SemanticUIIconsAttribute = (_dec9 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }icons`), _dec10 = (0, _uiBase.bindableEnum)(..._constants.constants.VALID_SIZES), _dec9(_class10 = (_class11 = class SemanticUIIconsAttribute extends _uiBase.SemanticUIAttribute {
		constructor(...args) {
			var _temp4;

			return _temp4 = super(...args), _initDefineProp(this, 'size', _descriptor12, this), _temp4;
		}

	}, (_descriptor12 = _applyDecoratedDescriptor(_class11.prototype, 'size', [_dec10], {
		enumerable: true,
		initializer: null
	})), _class11)) || _class10);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWljb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQVVhLHFCLFdBQUEscUIsV0FEWixxQ0FBZ0IsSUFBRSxxQkFBVSxhQUFjLE9BQTFDLEMsVUFJQywwQkFBYyxHQUFHLHFCQUFVLFdBQTNCLEMsVUFDQSwwQkFBYyxHQUFHLHFCQUFVLFlBQTNCLEMsMkJBSkssTUFBTSxxQkFBTixtQ0FBc0Q7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUEsRTs7O1VBRTNDLGE7Ozs7Ozs7Ozs7Ozs7OztLQVVMLHVCLFdBQUEsdUIsWUFEWix1Q0FBa0IsSUFBRSxxQkFBVSxlQUFnQixPQUE5QyxDLFVBSUMsMEJBQWMsR0FBRyxxQkFBVSxXQUEzQixDLFVBQ0EsMEJBQWMsR0FBRyxxQkFBVSxZQUEzQixDLDZCQUpLLE1BQU0sdUJBQU4scUNBQTBEO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQVNoRSxTQUFPO0FBQ047QUFDQSxRQUFLLE9BQUwsQ0FBYSxTQUFiLENBQXVCLEdBQXZCLENBQTRCLEdBQUcsS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixHQUFoQixDQUEvQjtBQUNBLFFBQUssT0FBTCxDQUFhLFNBQWIsQ0FBdUIsR0FBdkIsQ0FBNEIsTUFBNUI7QUFDQTs7QUFHRCxjQUFhLFFBQWIsRUFBdUIsUUFBdkIsRUFBa0M7QUFDakMsUUFBSyxNQUFMLENBQVksS0FBWixDQUFvQixzQkFBb0IsUUFBUyxTQUFNLFFBQVMsR0FBaEU7QUFDQSxRQUFLLE9BQUwsQ0FBYSxTQUFiLENBQXVCLE1BQXZCLENBQStCLEdBQUcsU0FBUyxLQUFULENBQWUsR0FBZixDQUFsQztBQUNBLFFBQUssT0FBTCxDQUFhLFNBQWIsQ0FBdUIsR0FBdkIsQ0FBNEIsR0FBRyxTQUFTLEtBQVQsQ0FBZSxHQUFmLENBQS9CO0FBQ0E7O0FBcEIrRCxFOzs7VUFFL0MsYTs7Ozs7Ozs7Ozs7Ozs7O0tBd0JMLHNCLFdBQUEsc0IsWUFEWixxQ0FBZ0IsSUFBRSxxQkFBVSxhQUFjLFFBQTFDLEMsVUFFQywwQkFBYyxHQUFHLHFCQUFVLFdBQTNCLEMsNkJBREssTUFBTSxzQkFBTixtQ0FBdUQ7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUEsRTs7OztLQU9qRCx3QixXQUFBLHdCLFlBRFosdUNBQWtCLElBQUUscUJBQVUsZUFBZ0IsUUFBOUMsQyxXQUVDLDBCQUFjLEdBQUcscUJBQVUsV0FBM0IsQywrQkFESyxNQUFNLHdCQUFOLHFDQUEyRDtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQSxFIiwiZmlsZSI6ImVsZW1lbnRzL3VpLWljb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIEljb24gLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL2VsZW1lbnRzL2ljb24uaHRtbCMvZGVmaW5pdGlvblxuICovXG5cbmltcG9ydCB7Y29uc3RhbnRzfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtTZW1hbnRpY1VJRWxlbWVudCwgU2VtYW50aWNVSUF0dHJpYnV0ZSwgYmluZGFibGVUb2dnbGUsIGJpbmRhYmxlRW51bX0gZnJvbSAnLi4vdWktYmFzZSc7XG5pbXBvcnQge2N1c3RvbUVsZW1lbnQsIGN1c3RvbUF0dHJpYnV0ZSwgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuXG5AY3VzdG9tRWxlbWVudCggYCR7Y29uc3RhbnRzLmVsZW1lbnRQcmVmaXh9aWNvbmAgKVxuZXhwb3J0IGNsYXNzIFNlbWFudGljVUlJY29uRWxlbWVudCBleHRlbmRzIFNlbWFudGljVUlFbGVtZW50IHtcblxuXHRAYmluZGFibGUgbmFtZSA9IFwiaGVscCBjaXJjbGVcIjtcblx0QGJpbmRhYmxlRW51bSggLi4uY29uc3RhbnRzLlZBTElEX1NJWkVTICkgc2l6ZTtcblx0QGJpbmRhYmxlRW51bSggLi4uY29uc3RhbnRzLlZBTElEX0NPTE9SUyApIGNvbG9yO1xuXHRAYmluZGFibGVUb2dnbGUgZGlzYWJsZWQ7XG5cdEBiaW5kYWJsZVRvZ2dsZSBsb2FkaW5nO1xuXG59XG5cblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1pY29uYCApXG5leHBvcnQgY2xhc3MgU2VtYW50aWNVSUljb25BdHRyaWJ1dGUgZXh0ZW5kcyBTZW1hbnRpY1VJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGUgbmFtZSA9IFwiaGVscCBjaXJjbGVcIjtcblx0QGJpbmRhYmxlRW51bSggLi4uY29uc3RhbnRzLlZBTElEX1NJWkVTICkgc2l6ZTtcblx0QGJpbmRhYmxlRW51bSggLi4uY29uc3RhbnRzLlZBTElEX0NPTE9SUyApIGNvbG9yO1xuXHRAYmluZGFibGVUb2dnbGUgZGlzYWJsZWQ7XG5cdEBiaW5kYWJsZVRvZ2dsZSBsb2FkaW5nO1xuXG5cblx0YmluZCgpIHtcblx0XHQvLyBObyBzdXBlciwgYXMgdGhlIGNsYXNzTGlzdCBkb2Vzbid0IGdldCB0aGUgJ3VpJyBjbGFzcy5cblx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCggLi4udGhpcy5uYW1lLnNwbGl0KCcgJykgKTtcblx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ2ljb24nICk7XG5cdH1cblxuXG5cdG5hbWVDaGFuZ2VkKCBuZXdWYWx1ZSwgb2xkVmFsdWUgKSB7XG5cdFx0dGhpcy5sb2dnZXIuZGVidWcoIGBOYW1lIGNoYW5nZWQgZnJvbSAke29sZFZhbHVlfSB0byAke25ld1ZhbHVlfWAgKTtcblx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSggLi4ub2xkVmFsdWUuc3BsaXQoJyAnKSApO1xuXHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAuLi5uZXdWYWx1ZS5zcGxpdCgnICcpICk7XG5cdH1cblxufVxuXG5cbkBjdXN0b21FbGVtZW50KCBgJHtjb25zdGFudHMuZWxlbWVudFByZWZpeH1pY29uc2AgKVxuZXhwb3J0IGNsYXNzIFNlbWFudGljVUlJY29uc0VsZW1lbnQgZXh0ZW5kcyBTZW1hbnRpY1VJRWxlbWVudCB7XG5cdEBiaW5kYWJsZUVudW0oIC4uLmNvbnN0YW50cy5WQUxJRF9TSVpFUyApIHNpemU7XG59XG5cblxuXG5AY3VzdG9tQXR0cmlidXRlKCBgJHtjb25zdGFudHMuYXR0cmlidXRlUHJlZml4fWljb25zYCApXG5leHBvcnQgY2xhc3MgU2VtYW50aWNVSUljb25zQXR0cmlidXRlIGV4dGVuZHMgU2VtYW50aWNVSUF0dHJpYnV0ZSB7XG5cdEBiaW5kYWJsZUVudW0oIC4uLmNvbnN0YW50cy5WQUxJRF9TSVpFUyApIHNpemU7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
