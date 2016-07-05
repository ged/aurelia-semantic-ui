define(['exports', '../constants', '../ui-base', 'aurelia-framework'], function (exports, _constants, _uiBase, _aureliaFramework) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Image - http://semantic-ui.com/elements/image.html
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.SemanticUIImagesAttribute = exports.SemanticUIImagesElement = exports.SemanticUIImageAttribute = exports.SemanticUIImageElement = undefined;

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

	var _dec, _class, _dec2, _dec3, _class2, _desc, _value, _class3, _descriptor, _descriptor2, _descriptor3, _dec4, _class5, _dec5, _dec6, _class6, _desc2, _value2, _class7, _descriptor4;

	let SemanticUIImageElement = exports.SemanticUIImageElement = (_dec = (0, _aureliaFramework.customElement)(`${ _constants.constants.elementPrefix }image`), _dec(_class = class SemanticUIImageElement extends _uiBase.SemanticUIElement {}) || _class);
	let SemanticUIImageAttribute = exports.SemanticUIImageAttribute = (_dec2 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }image`), _dec3 = (0, _uiBase.bindableEnum)(..._constants.constants.VALID_SIZES), _dec2(_class2 = (_class3 = class SemanticUIImageAttribute extends _uiBase.SemanticUIAttribute {
		constructor(...args) {
			var _temp;

			return _temp = super(...args), _initDefineProp(this, 'size', _descriptor, this), _initDefineProp(this, 'hidden', _descriptor2, this), _initDefineProp(this, 'disabled', _descriptor3, this), _temp;
		}

	}, (_descriptor = _applyDecoratedDescriptor(_class3.prototype, 'size', [_dec3], {
		enumerable: true,
		initializer: null
	}), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, 'hidden', [_uiBase.bindableToggle], {
		enumerable: true,
		initializer: function () {
			return false;
		}
	}), _descriptor3 = _applyDecoratedDescriptor(_class3.prototype, 'disabled', [_uiBase.bindableToggle], {
		enumerable: true,
		initializer: function () {
			return false;
		}
	})), _class3)) || _class2);
	let SemanticUIImagesElement = exports.SemanticUIImagesElement = (_dec4 = (0, _aureliaFramework.customElement)(`${ _constants.constants.elementPrefix }images`), _dec4(_class5 = class SemanticUIImagesElement extends _uiBase.SemanticUIElement {}) || _class5);
	let SemanticUIImagesAttribute = exports.SemanticUIImagesAttribute = (_dec5 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }images`), _dec6 = (0, _uiBase.bindableEnum)(..._constants.constants.VALID_SIZES), _dec5(_class6 = (_class7 = class SemanticUIImagesAttribute extends _uiBase.SemanticUIAttribute {
		constructor(...args) {
			var _temp2;

			return _temp2 = super(...args), _initDefineProp(this, 'size', _descriptor4, this), _temp2;
		}

	}, (_descriptor4 = _applyDecoratedDescriptor(_class7.prototype, 'size', [_dec6], {
		enumerable: true,
		initializer: null
	})), _class7)) || _class6);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWltYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FTYSxzQixXQUFBLHNCLFdBRFoscUNBQWdCLElBQUUscUJBQVUsYUFBYyxRQUExQyxDLGdCQUNNLE1BQU0sc0JBQU4sbUNBQXVELEU7S0FHakQsd0IsV0FBQSx3QixZQURaLHVDQUFrQixJQUFFLHFCQUFVLGVBQWdCLFFBQTlDLEMsVUFHQywwQkFBYyxHQUFHLHFCQUFVLFdBQTNCLEMsNkJBRkssTUFBTSx3QkFBTixxQ0FBMkQ7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUEsRTs7Ozs7O1VBR3hDLEs7Ozs7O1VBQ0UsSzs7O0tBTWYsdUIsV0FBQSx1QixZQURaLHFDQUFnQixJQUFFLHFCQUFVLGFBQWMsU0FBMUMsQyxrQkFDTSxNQUFNLHVCQUFOLG1DQUF3RCxFO0tBR2xELHlCLFdBQUEseUIsWUFEWix1Q0FBa0IsSUFBRSxxQkFBVSxlQUFnQixTQUE5QyxDLFVBR0MsMEJBQWMsR0FBRyxxQkFBVSxXQUEzQixDLDZCQUZLLE1BQU0seUJBQU4scUNBQTREO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBLEUiLCJmaWxlIjoiZWxlbWVudHMvdWktaW1hZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIEltYWdlIC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9lbGVtZW50cy9pbWFnZS5odG1sXG4gKi9cblxuaW1wb3J0IHtjb25zdGFudHN9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge1NlbWFudGljVUlFbGVtZW50LCBTZW1hbnRpY1VJQXR0cmlidXRlLCBiaW5kYWJsZUVudW0sIGJpbmRhYmxlVG9nZ2xlfSBmcm9tICcuLi91aS1iYXNlJztcbmltcG9ydCB7Y3VzdG9tQXR0cmlidXRlLCBjdXN0b21FbGVtZW50fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBjdXN0b21FbGVtZW50KCBgJHtjb25zdGFudHMuZWxlbWVudFByZWZpeH1pbWFnZWAgKVxuZXhwb3J0IGNsYXNzIFNlbWFudGljVUlJbWFnZUVsZW1lbnQgZXh0ZW5kcyBTZW1hbnRpY1VJRWxlbWVudCB7fVxuXG5AY3VzdG9tQXR0cmlidXRlKCBgJHtjb25zdGFudHMuYXR0cmlidXRlUHJlZml4fWltYWdlYCApXG5leHBvcnQgY2xhc3MgU2VtYW50aWNVSUltYWdlQXR0cmlidXRlIGV4dGVuZHMgU2VtYW50aWNVSUF0dHJpYnV0ZSB7XG5cblx0QGJpbmRhYmxlRW51bSggLi4uY29uc3RhbnRzLlZBTElEX1NJWkVTICkgc2l6ZTtcblx0QGJpbmRhYmxlVG9nZ2xlIGhpZGRlbiA9IGZhbHNlO1xuXHRAYmluZGFibGVUb2dnbGUgZGlzYWJsZWQgPSBmYWxzZTtcblxufVxuXG5cbkBjdXN0b21FbGVtZW50KCBgJHtjb25zdGFudHMuZWxlbWVudFByZWZpeH1pbWFnZXNgIClcbmV4cG9ydCBjbGFzcyBTZW1hbnRpY1VJSW1hZ2VzRWxlbWVudCBleHRlbmRzIFNlbWFudGljVUlFbGVtZW50IHt9XG5cbkBjdXN0b21BdHRyaWJ1dGUoIGAke2NvbnN0YW50cy5hdHRyaWJ1dGVQcmVmaXh9aW1hZ2VzYCApXG5leHBvcnQgY2xhc3MgU2VtYW50aWNVSUltYWdlc0F0dHJpYnV0ZSBleHRlbmRzIFNlbWFudGljVUlBdHRyaWJ1dGUge1xuXG5cdEBiaW5kYWJsZUVudW0oIC4uLmNvbnN0YW50cy5WQUxJRF9TSVpFUyApIHNpemU7XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
