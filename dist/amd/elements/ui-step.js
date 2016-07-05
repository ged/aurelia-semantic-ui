define(['exports', '../constants', '../ui-base', 'aurelia-framework'], function (exports, _constants, _uiBase, _aureliaFramework) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Step - http://semantic-ui.com/elements/step.html
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.SemanticUIStepsAttribute = exports.SemanticUIStepsElement = exports.SemanticUIStepAttribute = exports.SemanticUIStepElement = undefined;

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

	var _dec, _class, _dec2, _dec3, _class2, _desc, _value, _class3, _descriptor, _descriptor2, _descriptor3, _descriptor4, _dec4, _class5, _dec5, _class6;

	let SemanticUIStepElement = exports.SemanticUIStepElement = (_dec = (0, _aureliaFramework.customElement)(`${ _constants.constants.elementPrefix }step`), _dec(_class = class SemanticUIStepElement extends _uiBase.SemanticUIElement {}) || _class);
	let SemanticUIStepAttribute = exports.SemanticUIStepAttribute = (_dec2 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }step`), _dec3 = (0, _uiBase.bindableEnum)(..._constants.constants.VALID_COLORS), _dec2(_class2 = (_class3 = class SemanticUIStepAttribute extends _uiBase.SemanticUIAttribute {
		constructor(...args) {
			var _temp;

			return _temp = super(...args), _initDefineProp(this, 'active', _descriptor, this), _initDefineProp(this, 'disabled', _descriptor2, this), _initDefineProp(this, 'completed', _descriptor3, this), _initDefineProp(this, 'color', _descriptor4, this), _temp;
		}

		bind(...args) {
			// No super
			this.element.classList.add('step');
		}

	}, (_descriptor = _applyDecoratedDescriptor(_class3.prototype, 'active', [_uiBase.bindableToggle], {
		enumerable: true,
		initializer: function () {
			return false;
		}
	}), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, 'disabled', [_uiBase.bindableToggle], {
		enumerable: true,
		initializer: function () {
			return false;
		}
	}), _descriptor3 = _applyDecoratedDescriptor(_class3.prototype, 'completed', [_uiBase.bindableToggle], {
		enumerable: true,
		initializer: function () {
			return false;
		}
	}), _descriptor4 = _applyDecoratedDescriptor(_class3.prototype, 'color', [_dec3], {
		enumerable: true,
		initializer: null
	})), _class3)) || _class2);
	let SemanticUIStepsElement = exports.SemanticUIStepsElement = (_dec4 = (0, _aureliaFramework.customElement)(`${ _constants.constants.elementPrefix }steps`), _dec4(_class5 = class SemanticUIStepsElement extends _uiBase.SemanticUIElement {}) || _class5);
	let SemanticUIStepsAttribute = exports.SemanticUIStepsAttribute = (_dec5 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }steps`), _dec5(_class6 = class SemanticUIStepsAttribute extends _uiBase.SemanticUIAttribute {}) || _class6);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLXN0ZXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQVNhLHFCLFdBQUEscUIsV0FEWixxQ0FBZ0IsSUFBRSxxQkFBVSxhQUFjLE9BQTFDLEMsZ0JBQ00sTUFBTSxxQkFBTixtQ0FBc0QsRTtLQUdoRCx1QixXQUFBLHVCLFlBRFosdUNBQWtCLElBQUUscUJBQVUsZUFBZ0IsT0FBOUMsQyxVQU1DLDBCQUFjLEdBQUcscUJBQVUsWUFBM0IsQyw2QkFMSyxNQUFNLHVCQUFOLHFDQUEwRDtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFRaEUsT0FBTSxHQUFHLElBQVQsRUFBZ0I7QUFDZjtBQUNBLFFBQUssT0FBTCxDQUFhLFNBQWIsQ0FBdUIsR0FBdkIsQ0FBNEIsTUFBNUI7QUFDQTs7QUFYK0QsRTs7O1VBRXZDLEs7Ozs7O1VBQ0UsSzs7Ozs7VUFDQyxLOzs7Ozs7S0FhaEIsc0IsV0FBQSxzQixZQURaLHFDQUFnQixJQUFFLHFCQUFVLGFBQWMsUUFBMUMsQyxrQkFDTSxNQUFNLHNCQUFOLG1DQUF1RCxFO0tBR2pELHdCLFdBQUEsd0IsWUFEWix1Q0FBa0IsSUFBRSxxQkFBVSxlQUFnQixRQUE5QyxDLGtCQUNNLE1BQU0sd0JBQU4scUNBQTJELEUiLCJmaWxlIjoiZWxlbWVudHMvdWktc3RlcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogU3RlcCAtIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vZWxlbWVudHMvc3RlcC5odG1sXG4gKi9cblxuaW1wb3J0IHtjb25zdGFudHN9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge1NlbWFudGljVUlFbGVtZW50LCBTZW1hbnRpY1VJQXR0cmlidXRlLCBiaW5kYWJsZVRvZ2dsZSwgYmluZGFibGVFbnVtfSBmcm9tICcuLi91aS1iYXNlJztcbmltcG9ydCB7Y3VzdG9tQXR0cmlidXRlLCBjdXN0b21FbGVtZW50fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBjdXN0b21FbGVtZW50KCBgJHtjb25zdGFudHMuZWxlbWVudFByZWZpeH1zdGVwYCApXG5leHBvcnQgY2xhc3MgU2VtYW50aWNVSVN0ZXBFbGVtZW50IGV4dGVuZHMgU2VtYW50aWNVSUVsZW1lbnQge31cblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1zdGVwYCApXG5leHBvcnQgY2xhc3MgU2VtYW50aWNVSVN0ZXBBdHRyaWJ1dGUgZXh0ZW5kcyBTZW1hbnRpY1VJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGVUb2dnbGUgYWN0aXZlID0gZmFsc2U7XG5cdEBiaW5kYWJsZVRvZ2dsZSBkaXNhYmxlZCA9IGZhbHNlO1xuXHRAYmluZGFibGVUb2dnbGUgY29tcGxldGVkID0gZmFsc2U7XG5cdEBiaW5kYWJsZUVudW0oIC4uLmNvbnN0YW50cy5WQUxJRF9DT0xPUlMgKSBjb2xvcjtcblxuXG5cdGJpbmQoIC4uLmFyZ3MgKSB7XG5cdFx0Ly8gTm8gc3VwZXJcblx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ3N0ZXAnICk7XG5cdH1cblxufVxuXG5cbkBjdXN0b21FbGVtZW50KCBgJHtjb25zdGFudHMuZWxlbWVudFByZWZpeH1zdGVwc2AgKVxuZXhwb3J0IGNsYXNzIFNlbWFudGljVUlTdGVwc0VsZW1lbnQgZXh0ZW5kcyBTZW1hbnRpY1VJRWxlbWVudCB7fVxuXG5AY3VzdG9tQXR0cmlidXRlKCBgJHtjb25zdGFudHMuYXR0cmlidXRlUHJlZml4fXN0ZXBzYCApXG5leHBvcnQgY2xhc3MgU2VtYW50aWNVSVN0ZXBzQXR0cmlidXRlIGV4dGVuZHMgU2VtYW50aWNVSUF0dHJpYnV0ZSB7XG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
