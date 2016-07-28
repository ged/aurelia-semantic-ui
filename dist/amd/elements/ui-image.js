define(['exports', '../constants', '../ui-attribute', 'aurelia-framework'], function (exports, _constants, _uiAttribute, _aureliaFramework) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Image - http://semantic-ui.com/elements/image.html
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.UIImagesAttribute = exports.UIImageAttribute = undefined;

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

	var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _dec3, _dec4, _class4, _desc2, _value2, _class5, _descriptor4;

	let UIImageAttribute = exports.UIImageAttribute = (_dec = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }image`), _dec2 = (0, _uiAttribute.bindableEnum)(..._constants.constants.VALID_SIZES), _dec(_class = (_class2 = class UIImageAttribute extends _uiAttribute.UIAttribute {
		constructor(...args) {
			var _temp;

			return _temp = super(...args), _initDefineProp(this, 'size', _descriptor, this), _initDefineProp(this, 'hidden', _descriptor2, this), _initDefineProp(this, 'disabled', _descriptor3, this), _temp;
		}

	}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'size', [_dec2], {
		enumerable: true,
		initializer: null
	}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'hidden', [_uiAttribute.bindableToggle], {
		enumerable: true,
		initializer: function () {
			return false;
		}
	}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'disabled', [_uiAttribute.bindableToggle], {
		enumerable: true,
		initializer: function () {
			return false;
		}
	})), _class2)) || _class);
	let UIImagesAttribute = exports.UIImagesAttribute = (_dec3 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }images`), _dec4 = (0, _uiAttribute.bindableEnum)(..._constants.constants.VALID_SIZES), _dec3(_class4 = (_class5 = class UIImagesAttribute extends _uiAttribute.UIAttribute {
		constructor(...args) {
			var _temp2;

			return _temp2 = super(...args), _initDefineProp(this, 'size', _descriptor4, this), _temp2;
		}

	}, (_descriptor4 = _applyDecoratedDescriptor(_class5.prototype, 'size', [_dec4], {
		enumerable: true,
		initializer: null
	})), _class5)) || _class4);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWltYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FTYSxnQixXQUFBLGdCLFdBRFosdUNBQWtCLElBQUUscUJBQVUsZUFBZ0IsUUFBOUMsQyxVQUdDLCtCQUFjLEdBQUcscUJBQVUsV0FBM0IsQywyQkFGSyxNQUFNLGdCQUFOLGtDQUEyQztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQSxFOzs7Ozs7VUFHeEIsSzs7Ozs7VUFDRSxLOzs7S0FNZixpQixXQUFBLGlCLFlBRFosdUNBQWtCLElBQUUscUJBQVUsZUFBZ0IsU0FBOUMsQyxVQUdDLCtCQUFjLEdBQUcscUJBQVUsV0FBM0IsQyw2QkFGSyxNQUFNLGlCQUFOLGtDQUE0QztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQSxFIiwiZmlsZSI6ImVsZW1lbnRzL3VpLWltYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBJbWFnZSAtIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vZWxlbWVudHMvaW1hZ2UuaHRtbFxuICovXG5cbmltcG9ydCB7Y29uc3RhbnRzfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtVSUF0dHJpYnV0ZSwgYmluZGFibGVFbnVtLCBiaW5kYWJsZVRvZ2dsZX0gZnJvbSAnLi4vdWktYXR0cmlidXRlJztcbmltcG9ydCB7Y3VzdG9tQXR0cmlidXRlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBjdXN0b21BdHRyaWJ1dGUoIGAke2NvbnN0YW50cy5hdHRyaWJ1dGVQcmVmaXh9aW1hZ2VgIClcbmV4cG9ydCBjbGFzcyBVSUltYWdlQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG5cdEBiaW5kYWJsZUVudW0oIC4uLmNvbnN0YW50cy5WQUxJRF9TSVpFUyApIHNpemU7XG5cdEBiaW5kYWJsZVRvZ2dsZSBoaWRkZW4gPSBmYWxzZTtcblx0QGJpbmRhYmxlVG9nZ2xlIGRpc2FibGVkID0gZmFsc2U7XG5cbn1cblxuXG5AY3VzdG9tQXR0cmlidXRlKCBgJHtjb25zdGFudHMuYXR0cmlidXRlUHJlZml4fWltYWdlc2AgKVxuZXhwb3J0IGNsYXNzIFVJSW1hZ2VzQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG5cdEBiaW5kYWJsZUVudW0oIC4uLmNvbnN0YW50cy5WQUxJRF9TSVpFUyApIHNpemU7XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
