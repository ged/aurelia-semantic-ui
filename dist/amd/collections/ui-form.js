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

	var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _dec4, _class4;

	let UIFormAttribute = exports.UIFormAttribute = (_dec = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }form`), _dec2 = (0, _uiAttribute.bindableEnum)('error', 'success', 'warning'), _dec3 = (0, _aureliaFramework.children)('.field'), _dec(_class = (_class2 = class UIFormAttribute extends _uiAttribute.UIAttribute {
		constructor(...args) {
			var _temp;

			return _temp = super(...args), _initDefineProp(this, 'loading', _descriptor, this), _initDefineProp(this, 'state', _descriptor2, this), _initDefineProp(this, 'fields', _descriptor3, this), _temp;
		}

	}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'loading', [_uiAttribute.bindableToggle], {
		enumerable: true,
		initializer: function () {
			return false;
		}
	}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'state', [_dec2], {
		enumerable: true,
		initializer: null
	}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'fields', [_dec3], {
		enumerable: true,
		initializer: null
	})), _class2)) || _class);
	let UICheckboxAttribute = exports.UICheckboxAttribute = (_dec4 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }checkbox`), _dec4(_class4 = class UICheckboxAttribute extends _uiAttribute.UIAttribute {

		attached() {
			this.logger.debug("Activating a ui-checkbox");
			$(this.element).checkbox();
		}

	}) || _class4);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL3VpLWZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FXYSxvREFEWix1Q0FBaUIsQ0FBQyxHQUFFLHFCQUFVLGVBQVYsRUFBMEIsSUFBN0IsQ0FBakIsV0FJQywrQkFBYSxPQUFiLEVBQXNCLFNBQXRCLEVBQWlDLFNBQWpDLFdBQ0EsZ0NBQVUsUUFBViw0QkFKSyxNQUFNLGVBQU4sa0NBQTBDOzs7Ozs7O0VBQTFDOzs7VUFFb0I7Ozs7Ozs7OztLQVFkLDZEQURaLHVDQUFpQixDQUFDLEdBQUUscUJBQVUsZUFBVixFQUEwQixRQUE3QixDQUFqQixtQkFDTSxNQUFNLG1CQUFOLGtDQUE4Qzs7QUFFcEQsYUFBVztBQUNWLFFBQUssTUFBTCxDQUFZLEtBQVosQ0FBbUIsMEJBQW5CLEVBRFU7QUFFVixLQUFHLEtBQUssT0FBTCxDQUFILENBQWtCLFFBQWxCLEdBRlU7R0FBWDs7RUFGTSIsImZpbGUiOiJjb2xsZWN0aW9ucy91aS1mb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBGb3JtIC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9jb2xsZWN0aW9ucy9mb3JtLmh0bWxcbiAqL1xuXG5pbXBvcnQge2NvbnN0YW50c30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7VUlBdHRyaWJ1dGUsIGJpbmRhYmxlVG9nZ2xlLCBiaW5kYWJsZUVudW19IGZyb20gJy4uL3VpLWF0dHJpYnV0ZSc7XG5pbXBvcnQge2luamVjdCwgY3VzdG9tQXR0cmlidXRlLCBjaGlsZHJlbiwgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1mb3JtYCApXG5leHBvcnQgY2xhc3MgVUlGb3JtQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG5cdEBiaW5kYWJsZVRvZ2dsZSBsb2FkaW5nID0gZmFsc2U7XG5cdEBiaW5kYWJsZUVudW0oJ2Vycm9yJywgJ3N1Y2Nlc3MnLCAnd2FybmluZycpIHN0YXRlO1xuXHRAY2hpbGRyZW4oICcuZmllbGQnICkgZmllbGRzO1xuXG59XG5cblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1jaGVja2JveGAgKVxuZXhwb3J0IGNsYXNzIFVJQ2hlY2tib3hBdHRyaWJ1dGUgZXh0ZW5kcyBVSUF0dHJpYnV0ZSB7XG5cblx0YXR0YWNoZWQoKSB7XG5cdFx0dGhpcy5sb2dnZXIuZGVidWcoIFwiQWN0aXZhdGluZyBhIHVpLWNoZWNrYm94XCIgKTtcblx0XHQkKCB0aGlzLmVsZW1lbnQgKS5jaGVja2JveCgpO1xuXHR9XG5cbn1cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
