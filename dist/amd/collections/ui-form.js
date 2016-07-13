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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL3VpLWZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FXYSxlLFdBQUEsZSxXQURaLHVDQUFrQixJQUFFLHFCQUFVLGVBQWdCLE9BQTlDLEMsVUFRQyxnQ0FBVSxRQUFWLEMsMkJBUEssTUFBTSxlQUFOLGtDQUEwQztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQSxFOzs7VUFFdEIsSzs7Ozs7Ozs7Ozs7Ozs7O0tBV2QsbUIsV0FBQSxtQixZQURaLHVDQUFrQixJQUFFLHFCQUFVLGVBQWdCLFdBQTlDLEMsa0JBQ00sTUFBTSxtQkFBTixrQ0FBOEM7O0FBRXBELGFBQVc7QUFDVixRQUFLLE1BQUwsQ0FBWSxLQUFaLENBQW1CLDBCQUFuQjtBQUNBLEtBQUcsS0FBSyxPQUFSLEVBQWtCLFFBQWxCO0FBQ0E7O0FBTG1ELEUiLCJmaWxlIjoiY29sbGVjdGlvbnMvdWktZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogRm9ybSAtIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vY29sbGVjdGlvbnMvZm9ybS5odG1sXG4gKi9cblxuaW1wb3J0IHtjb25zdGFudHN9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge1VJQXR0cmlidXRlLCBiaW5kYWJsZVRvZ2dsZSwgYmluZGFibGVFbnVtfSBmcm9tICcuLi91aS1hdHRyaWJ1dGUnO1xuaW1wb3J0IHtpbmplY3QsIGN1c3RvbUF0dHJpYnV0ZSwgY2hpbGRyZW4sIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBjdXN0b21BdHRyaWJ1dGUoIGAke2NvbnN0YW50cy5hdHRyaWJ1dGVQcmVmaXh9Zm9ybWAgKVxuZXhwb3J0IGNsYXNzIFVJRm9ybUF0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGVUb2dnbGUgbG9hZGluZyA9IGZhbHNlO1xuXHRAYmluZGFibGVUb2dnbGUgZXJyb3I7XG5cdEBiaW5kYWJsZVRvZ2dsZSBzdWNjZXNzO1xuXHRAYmluZGFibGVUb2dnbGUgd2FybmluZztcblxuXHRAY2hpbGRyZW4oICcuZmllbGQnICkgZmllbGRzO1xuXG59XG5cblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1jaGVja2JveGAgKVxuZXhwb3J0IGNsYXNzIFVJQ2hlY2tib3hBdHRyaWJ1dGUgZXh0ZW5kcyBVSUF0dHJpYnV0ZSB7XG5cblx0YXR0YWNoZWQoKSB7XG5cdFx0dGhpcy5sb2dnZXIuZGVidWcoIFwiQWN0aXZhdGluZyBhIHVpLWNoZWNrYm94XCIgKTtcblx0XHQkKCB0aGlzLmVsZW1lbnQgKS5jaGVja2JveCgpO1xuXHR9XG5cbn1cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
