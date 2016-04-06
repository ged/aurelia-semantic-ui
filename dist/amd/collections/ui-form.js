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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL3VpLWZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FXYSxvREFEWix1Q0FBaUIsQ0FBQyxHQUFFLHFCQUFVLGVBQVYsRUFBMEIsSUFBN0IsQ0FBakIsV0FRQyxnQ0FBVSxRQUFWLDRCQVBLLE1BQU0sZUFBTixrQ0FBMEM7Ozs7Ozs7RUFBMUM7OztVQUVvQjs7Ozs7Ozs7Ozs7Ozs7O0tBV2QsNkRBRFosdUNBQWlCLENBQUMsR0FBRSxxQkFBVSxlQUFWLEVBQTBCLFFBQTdCLENBQWpCLG1CQUNNLE1BQU0sbUJBQU4sa0NBQThDOztBQUVwRCxhQUFXO0FBQ1YsUUFBSyxNQUFMLENBQVksS0FBWixDQUFtQiwwQkFBbkIsRUFEVTtBQUVWLEtBQUcsS0FBSyxPQUFMLENBQUgsQ0FBa0IsUUFBbEIsR0FGVTtHQUFYOztFQUZNIiwiZmlsZSI6ImNvbGxlY3Rpb25zL3VpLWZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIEZvcm0gLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL2NvbGxlY3Rpb25zL2Zvcm0uaHRtbFxuICovXG5cbmltcG9ydCB7Y29uc3RhbnRzfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtVSUF0dHJpYnV0ZSwgYmluZGFibGVUb2dnbGUsIGJpbmRhYmxlRW51bX0gZnJvbSAnLi4vdWktYXR0cmlidXRlJztcbmltcG9ydCB7aW5qZWN0LCBjdXN0b21BdHRyaWJ1dGUsIGNoaWxkcmVuLCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AY3VzdG9tQXR0cmlidXRlKCBgJHtjb25zdGFudHMuYXR0cmlidXRlUHJlZml4fWZvcm1gIClcbmV4cG9ydCBjbGFzcyBVSUZvcm1BdHRyaWJ1dGUgZXh0ZW5kcyBVSUF0dHJpYnV0ZSB7XG5cblx0QGJpbmRhYmxlVG9nZ2xlIGxvYWRpbmcgPSBmYWxzZTtcblx0QGJpbmRhYmxlVG9nZ2xlIGVycm9yO1xuXHRAYmluZGFibGVUb2dnbGUgc3VjY2Vzcztcblx0QGJpbmRhYmxlVG9nZ2xlIHdhcm5pbmc7XG5cblx0QGNoaWxkcmVuKCAnLmZpZWxkJyApIGZpZWxkcztcblxufVxuXG5cbkBjdXN0b21BdHRyaWJ1dGUoIGAke2NvbnN0YW50cy5hdHRyaWJ1dGVQcmVmaXh9Y2hlY2tib3hgIClcbmV4cG9ydCBjbGFzcyBVSUNoZWNrYm94QXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG5cdGF0dGFjaGVkKCkge1xuXHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBcIkFjdGl2YXRpbmcgYSB1aS1jaGVja2JveFwiICk7XG5cdFx0JCggdGhpcy5lbGVtZW50ICkuY2hlY2tib3goKTtcblx0fVxuXG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
