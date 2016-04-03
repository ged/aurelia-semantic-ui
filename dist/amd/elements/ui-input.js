define(['exports', '../constants', '../ui-attribute', 'aurelia-framework'], function (exports, _constants, _uiAttribute, _aureliaFramework) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Input - http://semantic-ui.com/elements/input.html
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.UIInputAttribute = undefined;

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

	var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

	let UIInputAttribute = exports.UIInputAttribute = (_dec = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }input`), _dec2 = (0, _uiAttribute.bindableEnum)(..._constants.constants.VALID_SIZES), _dec(_class = (_class2 = class UIInputAttribute extends _uiAttribute.UIAttribute {
		constructor(...args) {
			var _temp;

			return _temp = super(...args), _initDefineProp(this, 'focus', _descriptor, this), _initDefineProp(this, 'loading', _descriptor2, this), _initDefineProp(this, 'disabled', _descriptor3, this), _initDefineProp(this, 'error', _descriptor4, this), _initDefineProp(this, 'size', _descriptor5, this), _temp;
		}

	}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'focus', [_uiAttribute.bindableToggle], {
		enumerable: true,
		initializer: function () {
			return false;
		}
	}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'loading', [_uiAttribute.bindableToggle], {
		enumerable: true,
		initializer: function () {
			return false;
		}
	}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'disabled', [_uiAttribute.bindableToggle], {
		enumerable: true,
		initializer: function () {
			return false;
		}
	}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'error', [_uiAttribute.bindableToggle], {
		enumerable: true,
		initializer: function () {
			return null;
		}
	}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'size', [_dec2], {
		enumerable: true,
		initializer: null
	})), _class2)) || _class);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWlucHV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBV2Esc0RBRFosdUNBQWlCLENBQUMsR0FBRSxxQkFBVSxlQUFWLEVBQTBCLEtBQTdCLENBQWpCLFdBUUMsK0JBQWMsR0FBRyxxQkFBVSxXQUFWLDRCQVBaLE1BQU0sZ0JBQU4sa0NBQTJDOzs7Ozs7O0VBQTNDOzs7VUFFa0I7Ozs7O1VBQ0U7Ozs7O1VBQ0M7Ozs7O1VBQ0giLCJmaWxlIjoiZWxlbWVudHMvdWktaW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIElucHV0IC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9lbGVtZW50cy9pbnB1dC5odG1sXG4gKi9cblxuaW1wb3J0IHtjb25zdGFudHN9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge1VJQXR0cmlidXRlLCBiaW5kYWJsZUVudW0sIGJpbmRhYmxlVG9nZ2xlfSBmcm9tICcuLi91aS1hdHRyaWJ1dGUnO1xuaW1wb3J0IHtjdXN0b21BdHRyaWJ1dGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1pbnB1dGAgKVxuZXhwb3J0IGNsYXNzIFVJSW5wdXRBdHRyaWJ1dGUgZXh0ZW5kcyBVSUF0dHJpYnV0ZSB7XG5cblx0QGJpbmRhYmxlVG9nZ2xlIGZvY3VzID0gZmFsc2U7XG5cdEBiaW5kYWJsZVRvZ2dsZSBsb2FkaW5nID0gZmFsc2U7XG5cdEBiaW5kYWJsZVRvZ2dsZSBkaXNhYmxlZCA9IGZhbHNlO1xuXHRAYmluZGFibGVUb2dnbGUgZXJyb3IgPSBudWxsO1xuXG5cdEBiaW5kYWJsZUVudW0oIC4uLmNvbnN0YW50cy5WQUxJRF9TSVpFUyApIHNpemU7XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
