define(['exports', '../constants', '../ui-attribute', 'aurelia-framework'], function (exports, _constants, _uiAttribute, _aureliaFramework) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Icon - http://semantic-ui.com/elements/icon.html#/definition
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.UIIconsAttribute = exports.UIIconAttribute = undefined;

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

	var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _dec4, _dec5, _class4, _desc2, _value2, _class5, _descriptor6;

	let UIIconAttribute = exports.UIIconAttribute = (_dec = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }icon`), _dec2 = (0, _uiAttribute.bindableEnum)(..._constants.constants.VALID_SIZES), _dec3 = (0, _uiAttribute.bindableEnum)(..._constants.constants.VALID_COLORS), _dec(_class = (_class2 = class UIIconAttribute extends _uiAttribute.UIAttribute {
		constructor(...args) {
			var _temp;

			return _temp = super(...args), _initDefineProp(this, 'name', _descriptor, this), _initDefineProp(this, 'size', _descriptor2, this), _initDefineProp(this, 'color', _descriptor3, this), _initDefineProp(this, 'disabled', _descriptor4, this), _initDefineProp(this, 'loading', _descriptor5, this), _temp;
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
	}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'disabled', [_uiAttribute.bindableToggle], {
		enumerable: true,
		initializer: null
	}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'loading', [_uiAttribute.bindableToggle], {
		enumerable: true,
		initializer: null
	})), _class2)) || _class);
	let UIIconsAttribute = exports.UIIconsAttribute = (_dec4 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }icons`), _dec5 = (0, _uiAttribute.bindableEnum)(..._constants.constants.VALID_SIZES), _dec4(_class4 = (_class5 = class UIIconsAttribute extends _uiAttribute.UIAttribute {
		constructor(...args) {
			var _temp2;

			return _temp2 = super(...args), _initDefineProp(this, 'size', _descriptor6, this), _temp2;
		}

	}, (_descriptor6 = _applyDecoratedDescriptor(_class5.prototype, 'size', [_dec5], {
		enumerable: true,
		initializer: null
	})), _class5)) || _class4);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWljb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FZYSxvREFEWix1Q0FBaUIsQ0FBQyxHQUFFLHFCQUFVLGVBQVYsRUFBMEIsSUFBN0IsQ0FBakIsV0FJQywrQkFBYyxHQUFHLHFCQUFVLFdBQVYsV0FDakIsK0JBQWMsR0FBRyxxQkFBVSxZQUFWLDRCQUpaLE1BQU0sZUFBTixrQ0FBMEM7Ozs7Ozs7QUFTaEQsU0FBTzs7QUFFTixRQUFLLE9BQUwsQ0FBYSxTQUFiLENBQXVCLEdBQXZCLENBQTRCLEdBQUcsS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixHQUFoQixDQUFILENBQTVCLENBRk07QUFHTixRQUFLLE9BQUwsQ0FBYSxTQUFiLENBQXVCLEdBQXZCLENBQTRCLE1BQTVCLEVBSE07R0FBUDs7QUFPQSxjQUFhLFFBQWIsRUFBdUIsUUFBdkIsRUFBa0M7QUFDakMsUUFBSyxNQUFMLENBQVksS0FBWixDQUFtQixDQUFDLGtCQUFELEdBQXFCLFFBQXJCLEVBQThCLElBQTlCLEdBQW9DLFFBQXBDLEVBQTZDLENBQWhFLEVBRGlDO0FBRWpDLFFBQUssT0FBTCxDQUFhLFNBQWIsQ0FBdUIsTUFBdkIsQ0FBK0IsR0FBRyxTQUFTLEtBQVQsQ0FBZSxHQUFmLENBQUgsQ0FBL0IsQ0FGaUM7QUFHakMsUUFBSyxPQUFMLENBQWEsU0FBYixDQUF1QixHQUF2QixDQUE0QixHQUFHLFNBQVMsS0FBVCxDQUFlLEdBQWYsQ0FBSCxDQUE1QixDQUhpQztHQUFsQzs7RUFoQk07OztVQUVXOzs7Ozs7Ozs7Ozs7Ozs7S0F3QkwsdURBRFosdUNBQWlCLENBQUMsR0FBRSxxQkFBVSxlQUFWLEVBQTBCLEtBQTdCLENBQWpCLFdBR0MsK0JBQWMsR0FBRyxxQkFBVSxXQUFWLDhCQUZaLE1BQU0sZ0JBQU4sa0NBQTJDOzs7Ozs7O0VBQTNDIiwiZmlsZSI6ImVsZW1lbnRzL3VpLWljb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIEljb24gLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL2VsZW1lbnRzL2ljb24uaHRtbCMvZGVmaW5pdGlvblxuICovXG5cbmltcG9ydCB7Y29uc3RhbnRzfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtVSUF0dHJpYnV0ZSwgYmluZGFibGVUb2dnbGUsIGJpbmRhYmxlRW51bX0gZnJvbSAnLi4vdWktYXR0cmlidXRlJztcbmltcG9ydCB7Y3VzdG9tQXR0cmlidXRlLCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5cbkBjdXN0b21BdHRyaWJ1dGUoIGAke2NvbnN0YW50cy5hdHRyaWJ1dGVQcmVmaXh9aWNvbmAgKVxuZXhwb3J0IGNsYXNzIFVJSWNvbkF0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGUgbmFtZSA9IFwiaGVscCBjaXJjbGVcIjtcblx0QGJpbmRhYmxlRW51bSggLi4uY29uc3RhbnRzLlZBTElEX1NJWkVTICkgc2l6ZTtcblx0QGJpbmRhYmxlRW51bSggLi4uY29uc3RhbnRzLlZBTElEX0NPTE9SUyApIGNvbG9yO1xuXHRAYmluZGFibGVUb2dnbGUgZGlzYWJsZWQ7XG5cdEBiaW5kYWJsZVRvZ2dsZSBsb2FkaW5nO1xuXG5cblx0YmluZCgpIHtcblx0XHQvLyBObyBzdXBlciwgYXMgdGhlIGNsYXNzTGlzdCBkb2Vzbid0IGdldCB0aGUgJ3VpJyBjbGFzcy5cblx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCggLi4udGhpcy5uYW1lLnNwbGl0KCcgJykgKTtcblx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ2ljb24nICk7XG5cdH1cblxuXG5cdG5hbWVDaGFuZ2VkKCBuZXdWYWx1ZSwgb2xkVmFsdWUgKSB7XG5cdFx0dGhpcy5sb2dnZXIuZGVidWcoIGBOYW1lIGNoYW5nZWQgZnJvbSAke29sZFZhbHVlfSB0byAke25ld1ZhbHVlfWAgKTtcblx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSggLi4ub2xkVmFsdWUuc3BsaXQoJyAnKSApO1xuXHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAuLi5uZXdWYWx1ZS5zcGxpdCgnICcpICk7XG5cdH1cblxufVxuXG5cbkBjdXN0b21BdHRyaWJ1dGUoIGAke2NvbnN0YW50cy5hdHRyaWJ1dGVQcmVmaXh9aWNvbnNgIClcbmV4cG9ydCBjbGFzcyBVSUljb25zQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG5cdEBiaW5kYWJsZUVudW0oIC4uLmNvbnN0YW50cy5WQUxJRF9TSVpFUyApIHNpemU7XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
