define(['exports', '../constants', '../ui-base', 'aurelia-framework'], function (exports, _constants, _uiBase, _aureliaFramework) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Input - http://semantic-ui.com/elements/input.html
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.SemanticUIInputAttribute = exports.SemanticUIInputElement = undefined;

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

	var _dec, _class, _dec2, _dec3, _class2, _desc, _value, _class3, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

	let SemanticUIInputElement = exports.SemanticUIInputElement = (_dec = (0, _aureliaFramework.customElement)(`${ _constants.constants.elementPrefix }input`), _dec(_class = class SemanticUIInputElement extends _uiBase.SemanticUIElement {}) || _class);
	let SemanticUIInputAttribute = exports.SemanticUIInputAttribute = (_dec2 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }input`), _dec3 = (0, _uiBase.bindableEnum)(..._constants.constants.VALID_SIZES), _dec2(_class2 = (_class3 = class SemanticUIInputAttribute extends _uiBase.SemanticUIAttribute {
		constructor(...args) {
			var _temp;

			return _temp = super(...args), _initDefineProp(this, 'focus', _descriptor, this), _initDefineProp(this, 'loading', _descriptor2, this), _initDefineProp(this, 'disabled', _descriptor3, this), _initDefineProp(this, 'error', _descriptor4, this), _initDefineProp(this, 'size', _descriptor5, this), _temp;
		}

	}, (_descriptor = _applyDecoratedDescriptor(_class3.prototype, 'focus', [_uiBase.bindableToggle], {
		enumerable: true,
		initializer: function () {
			return false;
		}
	}), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, 'loading', [_uiBase.bindableToggle], {
		enumerable: true,
		initializer: function () {
			return false;
		}
	}), _descriptor3 = _applyDecoratedDescriptor(_class3.prototype, 'disabled', [_uiBase.bindableToggle], {
		enumerable: true,
		initializer: function () {
			return false;
		}
	}), _descriptor4 = _applyDecoratedDescriptor(_class3.prototype, 'error', [_uiBase.bindableToggle], {
		enumerable: true,
		initializer: function () {
			return null;
		}
	}), _descriptor5 = _applyDecoratedDescriptor(_class3.prototype, 'size', [_dec3], {
		enumerable: true,
		initializer: null
	})), _class3)) || _class2);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWlucHV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FTYSxzQixXQUFBLHNCLFdBRFoscUNBQWdCLElBQUUscUJBQVUsYUFBYyxRQUExQyxDLGdCQUNNLE1BQU0sc0JBQU4sbUNBQXVELEU7S0FHakQsd0IsV0FBQSx3QixZQURaLHVDQUFrQixJQUFFLHFCQUFVLGVBQWdCLFFBQTlDLEMsVUFRQywwQkFBYyxHQUFHLHFCQUFVLFdBQTNCLEMsNkJBUEssTUFBTSx3QkFBTixxQ0FBMkQ7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUEsRTs7O1VBRXpDLEs7Ozs7O1VBQ0UsSzs7Ozs7VUFDQyxLOzs7OztVQUNILEkiLCJmaWxlIjoiZWxlbWVudHMvdWktaW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIElucHV0IC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9lbGVtZW50cy9pbnB1dC5odG1sXG4gKi9cblxuaW1wb3J0IHtjb25zdGFudHN9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge1NlbWFudGljVUlFbGVtZW50LCBTZW1hbnRpY1VJQXR0cmlidXRlLCBiaW5kYWJsZUVudW0sIGJpbmRhYmxlVG9nZ2xlfSBmcm9tICcuLi91aS1iYXNlJztcbmltcG9ydCB7Y3VzdG9tQXR0cmlidXRlLCBjdXN0b21FbGVtZW50fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBjdXN0b21FbGVtZW50KCBgJHtjb25zdGFudHMuZWxlbWVudFByZWZpeH1pbnB1dGAgKVxuZXhwb3J0IGNsYXNzIFNlbWFudGljVUlJbnB1dEVsZW1lbnQgZXh0ZW5kcyBTZW1hbnRpY1VJRWxlbWVudCB7fVxuXG5AY3VzdG9tQXR0cmlidXRlKCBgJHtjb25zdGFudHMuYXR0cmlidXRlUHJlZml4fWlucHV0YCApXG5leHBvcnQgY2xhc3MgU2VtYW50aWNVSUlucHV0QXR0cmlidXRlIGV4dGVuZHMgU2VtYW50aWNVSUF0dHJpYnV0ZSB7XG5cblx0QGJpbmRhYmxlVG9nZ2xlIGZvY3VzID0gZmFsc2U7XG5cdEBiaW5kYWJsZVRvZ2dsZSBsb2FkaW5nID0gZmFsc2U7XG5cdEBiaW5kYWJsZVRvZ2dsZSBkaXNhYmxlZCA9IGZhbHNlO1xuXHRAYmluZGFibGVUb2dnbGUgZXJyb3IgPSBudWxsO1xuXG5cdEBiaW5kYWJsZUVudW0oIC4uLmNvbnN0YW50cy5WQUxJRF9TSVpFUyApIHNpemU7XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
