define(['exports', '../constants', '../ui-base', 'aurelia-framework'], function (exports, _constants, _uiBase, _aureliaFramework) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Form - http://semantic-ui.com/collections/form.html
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.SemanticUICheckboxAttribute = exports.SemanticUICheckboxElement = exports.SemanticUIFormAttribute = exports.SemanticUIFormElement = undefined;

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

	var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _dec3, _dec4, _class4, _desc2, _value2, _class5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _dec5, _class7, _dec6, _class8;

	let SemanticUIFormElement = exports.SemanticUIFormElement = (_dec = (0, _aureliaFramework.customElement)(`${ _constants.constants.elementPrefix }form`), _dec2 = (0, _aureliaFramework.children)('.field'), _dec(_class = (_class2 = class SemanticUIFormElement extends _uiBase.SemanticUIElement {
		constructor(...args) {
			var _temp;

			return _temp = super(...args), _initDefineProp(this, 'loading', _descriptor, this), _initDefineProp(this, 'error', _descriptor2, this), _initDefineProp(this, 'success', _descriptor3, this), _initDefineProp(this, 'warning', _descriptor4, this), _initDefineProp(this, 'fields', _descriptor5, this), _temp;
		}

	}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'loading', [_uiBase.bindableToggle], {
		enumerable: true,
		initializer: function () {
			return false;
		}
	}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'error', [_uiBase.bindableToggle], {
		enumerable: true,
		initializer: null
	}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'success', [_uiBase.bindableToggle], {
		enumerable: true,
		initializer: null
	}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'warning', [_uiBase.bindableToggle], {
		enumerable: true,
		initializer: null
	}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'fields', [_dec2], {
		enumerable: true,
		initializer: null
	})), _class2)) || _class);
	let SemanticUIFormAttribute = exports.SemanticUIFormAttribute = (_dec3 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }form`), _dec4 = (0, _aureliaFramework.children)('.field'), _dec3(_class4 = (_class5 = class SemanticUIFormAttribute extends _uiBase.SemanticUIAttribute {
		constructor(...args) {
			var _temp2;

			return _temp2 = super(...args), _initDefineProp(this, 'loading', _descriptor6, this), _initDefineProp(this, 'error', _descriptor7, this), _initDefineProp(this, 'success', _descriptor8, this), _initDefineProp(this, 'warning', _descriptor9, this), _initDefineProp(this, 'fields', _descriptor10, this), _temp2;
		}

	}, (_descriptor6 = _applyDecoratedDescriptor(_class5.prototype, 'loading', [_uiBase.bindableToggle], {
		enumerable: true,
		initializer: function () {
			return false;
		}
	}), _descriptor7 = _applyDecoratedDescriptor(_class5.prototype, 'error', [_uiBase.bindableToggle], {
		enumerable: true,
		initializer: null
	}), _descriptor8 = _applyDecoratedDescriptor(_class5.prototype, 'success', [_uiBase.bindableToggle], {
		enumerable: true,
		initializer: null
	}), _descriptor9 = _applyDecoratedDescriptor(_class5.prototype, 'warning', [_uiBase.bindableToggle], {
		enumerable: true,
		initializer: null
	}), _descriptor10 = _applyDecoratedDescriptor(_class5.prototype, 'fields', [_dec4], {
		enumerable: true,
		initializer: null
	})), _class5)) || _class4);
	let SemanticUICheckboxElement = exports.SemanticUICheckboxElement = (_dec5 = (0, _aureliaFramework.customElement)(`${ _constants.constants.elementPrefix }checkbox`), _dec5(_class7 = class SemanticUICheckboxElement extends _uiBase.SemanticUIElement {}) || _class7);
	let SemanticUICheckboxAttribute = exports.SemanticUICheckboxAttribute = (_dec6 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }checkbox`), _dec6(_class8 = class SemanticUICheckboxAttribute extends _uiBase.SemanticUIAttribute {

		attached() {
			this.logger.debug("Activating a ui-checkbox");
			$(this.element).checkbox();
		}

	}) || _class8);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL3VpLWZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQVNhLHFCLFdBQUEscUIsV0FEWixxQ0FBZ0IsSUFBRSxxQkFBVSxhQUFjLE9BQTFDLEMsVUFRQyxnQ0FBVSxRQUFWLEMsMkJBUEssTUFBTSxxQkFBTixtQ0FBc0Q7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUEsRTs7O1VBRWxDLEs7Ozs7Ozs7Ozs7Ozs7OztLQVVkLHVCLFdBQUEsdUIsWUFEWix1Q0FBa0IsSUFBRSxxQkFBVSxlQUFnQixPQUE5QyxDLFVBUUMsZ0NBQVUsUUFBVixDLDZCQVBLLE1BQU0sdUJBQU4scUNBQTBEO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBLEU7OztVQUV0QyxLOzs7Ozs7Ozs7Ozs7Ozs7S0FXZCx5QixXQUFBLHlCLFlBRFoscUNBQWdCLElBQUUscUJBQVUsYUFBYyxXQUExQyxDLGtCQUNNLE1BQU0seUJBQU4sbUNBQTBELEU7S0FHcEQsMkIsV0FBQSwyQixZQURaLHVDQUFrQixJQUFFLHFCQUFVLGVBQWdCLFdBQTlDLEMsa0JBQ00sTUFBTSwyQkFBTixxQ0FBOEQ7O0FBRXBFLGFBQVc7QUFDVixRQUFLLE1BQUwsQ0FBWSxLQUFaLENBQW1CLDBCQUFuQjtBQUNBLEtBQUcsS0FBSyxPQUFSLEVBQWtCLFFBQWxCO0FBQ0E7O0FBTG1FLEUiLCJmaWxlIjoiY29sbGVjdGlvbnMvdWktZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogRm9ybSAtIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vY29sbGVjdGlvbnMvZm9ybS5odG1sXG4gKi9cblxuaW1wb3J0IHtjb25zdGFudHN9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge1NlbWFudGljVUlFbGVtZW50LCBTZW1hbnRpY1VJQXR0cmlidXRlLCBiaW5kYWJsZVRvZ2dsZSwgYmluZGFibGVFbnVtfSBmcm9tICcuLi91aS1iYXNlJztcbmltcG9ydCB7Y3VzdG9tQXR0cmlidXRlLCBjdXN0b21FbGVtZW50LCBjaGlsZHJlbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AY3VzdG9tRWxlbWVudCggYCR7Y29uc3RhbnRzLmVsZW1lbnRQcmVmaXh9Zm9ybWAgKVxuZXhwb3J0IGNsYXNzIFNlbWFudGljVUlGb3JtRWxlbWVudCBleHRlbmRzIFNlbWFudGljVUlFbGVtZW50IHtcblxuXHRAYmluZGFibGVUb2dnbGUgbG9hZGluZyA9IGZhbHNlO1xuXHRAYmluZGFibGVUb2dnbGUgZXJyb3I7XG5cdEBiaW5kYWJsZVRvZ2dsZSBzdWNjZXNzO1xuXHRAYmluZGFibGVUb2dnbGUgd2FybmluZztcblxuXHRAY2hpbGRyZW4oICcuZmllbGQnICkgZmllbGRzO1xuXG59XG5cbkBjdXN0b21BdHRyaWJ1dGUoIGAke2NvbnN0YW50cy5hdHRyaWJ1dGVQcmVmaXh9Zm9ybWAgKVxuZXhwb3J0IGNsYXNzIFNlbWFudGljVUlGb3JtQXR0cmlidXRlIGV4dGVuZHMgU2VtYW50aWNVSUF0dHJpYnV0ZSB7XG5cblx0QGJpbmRhYmxlVG9nZ2xlIGxvYWRpbmcgPSBmYWxzZTtcblx0QGJpbmRhYmxlVG9nZ2xlIGVycm9yO1xuXHRAYmluZGFibGVUb2dnbGUgc3VjY2Vzcztcblx0QGJpbmRhYmxlVG9nZ2xlIHdhcm5pbmc7XG5cblx0QGNoaWxkcmVuKCAnLmZpZWxkJyApIGZpZWxkcztcblxufVxuXG5cbkBjdXN0b21FbGVtZW50KCBgJHtjb25zdGFudHMuZWxlbWVudFByZWZpeH1jaGVja2JveGAgKVxuZXhwb3J0IGNsYXNzIFNlbWFudGljVUlDaGVja2JveEVsZW1lbnQgZXh0ZW5kcyBTZW1hbnRpY1VJRWxlbWVudCB7fVxuXG5AY3VzdG9tQXR0cmlidXRlKCBgJHtjb25zdGFudHMuYXR0cmlidXRlUHJlZml4fWNoZWNrYm94YCApXG5leHBvcnQgY2xhc3MgU2VtYW50aWNVSUNoZWNrYm94QXR0cmlidXRlIGV4dGVuZHMgU2VtYW50aWNVSUF0dHJpYnV0ZSB7XG5cblx0YXR0YWNoZWQoKSB7XG5cdFx0dGhpcy5sb2dnZXIuZGVidWcoIFwiQWN0aXZhdGluZyBhIHVpLWNoZWNrYm94XCIgKTtcblx0XHQkKCB0aGlzLmVsZW1lbnQgKS5jaGVja2JveCgpO1xuXHR9XG5cbn1cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
