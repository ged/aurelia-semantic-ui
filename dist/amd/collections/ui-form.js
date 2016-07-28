define(['exports', '../constants', '../ui-attribute', 'aurelia-framework'], function (exports, _constants, _uiAttribute, _aureliaFramework) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Form - http://semantic-ui.com/collections/form.html
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.UICheckboxAttribute = exports.UIFormAttribute = undefined;

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

	var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _dec3, _class4;

	let UIFormAttribute = exports.UIFormAttribute = (_dec = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }form`), _dec2 = (0, _aureliaFramework.children)('.field'), _dec(_class = (_class2 = class UIFormAttribute extends _uiAttribute.UIAttribute {
		constructor(...args) {
			var _temp;

			return _temp = super(...args), _initDefineProp(this, 'loading', _descriptor, this), _initDefineProp(this, 'error', _descriptor2, this), _initDefineProp(this, 'success', _descriptor3, this), _initDefineProp(this, 'warning', _descriptor4, this), _initDefineProp(this, 'fields', _descriptor5, this), _temp;
		}

	}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'loading', [_uiAttribute.bindableToggle], {
		enumerable: true,
		initializer: function () {
			return false;
		}
	}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'error', [_uiAttribute.bindableToggle], {
		enumerable: true,
		initializer: null
	}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'success', [_uiAttribute.bindableToggle], {
		enumerable: true,
		initializer: null
	}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'warning', [_uiAttribute.bindableToggle], {
		enumerable: true,
		initializer: null
	}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'fields', [_dec2], {
		enumerable: true,
		initializer: null
	})), _class2)) || _class);
	let UICheckboxAttribute = exports.UICheckboxAttribute = (_dec3 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }checkbox`), _dec3(_class4 = class UICheckboxAttribute extends _uiAttribute.UIAttribute {

		attached() {
			this.logger.debug("Activating a ui-checkbox");
			$(this.element).checkbox();
		}

	}) || _class4);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL3VpLWZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQVNhLGUsV0FBQSxlLFdBRFosdUNBQWtCLElBQUUscUJBQVUsZUFBZ0IsT0FBOUMsQyxVQVFDLGdDQUFVLFFBQVYsQywyQkFQSyxNQUFNLGVBQU4sa0NBQTBDO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBLEU7OztVQUV0QixLOzs7Ozs7Ozs7Ozs7Ozs7S0FXZCxtQixXQUFBLG1CLFlBRFosdUNBQWtCLElBQUUscUJBQVUsZUFBZ0IsV0FBOUMsQyxrQkFDTSxNQUFNLG1CQUFOLGtDQUE4Qzs7QUFFcEQsYUFBVztBQUNWLFFBQUssTUFBTCxDQUFZLEtBQVosQ0FBbUIsMEJBQW5CO0FBQ0EsS0FBRyxLQUFLLE9BQVIsRUFBa0IsUUFBbEI7QUFDQTs7QUFMbUQsRSIsImZpbGUiOiJjb2xsZWN0aW9ucy91aS1mb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBGb3JtIC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9jb2xsZWN0aW9ucy9mb3JtLmh0bWxcbiAqL1xuXG5pbXBvcnQge2NvbnN0YW50c30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7VUlBdHRyaWJ1dGUsIGJpbmRhYmxlVG9nZ2xlLCBiaW5kYWJsZUVudW19IGZyb20gJy4uL3VpLWF0dHJpYnV0ZSc7XG5pbXBvcnQge2luamVjdCwgY3VzdG9tQXR0cmlidXRlLCBjaGlsZHJlbiwgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1mb3JtYCApXG5leHBvcnQgY2xhc3MgVUlGb3JtQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG5cdEBiaW5kYWJsZVRvZ2dsZSBsb2FkaW5nID0gZmFsc2U7XG5cdEBiaW5kYWJsZVRvZ2dsZSBlcnJvcjtcblx0QGJpbmRhYmxlVG9nZ2xlIHN1Y2Nlc3M7XG5cdEBiaW5kYWJsZVRvZ2dsZSB3YXJuaW5nO1xuXG5cdEBjaGlsZHJlbiggJy5maWVsZCcgKSBmaWVsZHM7XG5cbn1cblxuXG5AY3VzdG9tQXR0cmlidXRlKCBgJHtjb25zdGFudHMuYXR0cmlidXRlUHJlZml4fWNoZWNrYm94YCApXG5leHBvcnQgY2xhc3MgVUlDaGVja2JveEF0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcblxuXHRhdHRhY2hlZCgpIHtcblx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggXCJBY3RpdmF0aW5nIGEgdWktY2hlY2tib3hcIiApO1xuXHRcdCQoIHRoaXMuZWxlbWVudCApLmNoZWNrYm94KCk7XG5cdH1cblxufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
