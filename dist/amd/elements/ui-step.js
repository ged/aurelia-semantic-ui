define(['exports', '../constants', '../ui-attribute', 'aurelia-framework'], function (exports, _constants, _uiAttribute, _aureliaFramework) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Step - http://semantic-ui.com/elements/step.html
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.UIStepsAttribute = exports.UIStepAttribute = undefined;

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

	var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _dec3, _class4;

	let UIStepAttribute = exports.UIStepAttribute = (_dec = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }step`), _dec2 = (0, _uiAttribute.bindableEnum)(..._constants.constants.VALID_COLORS), _dec(_class = (_class2 = class UIStepAttribute extends _uiAttribute.UIAttribute {
		constructor(...args) {
			var _temp;

			return _temp = super(...args), _initDefineProp(this, 'active', _descriptor, this), _initDefineProp(this, 'disabled', _descriptor2, this), _initDefineProp(this, 'completed', _descriptor3, this), _initDefineProp(this, 'color', _descriptor4, this), _temp;
		}

		bind(...args) {
			// No super
			this.element.classList.add('step');
		}

	}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'active', [_uiAttribute.bindableToggle], {
		enumerable: true,
		initializer: function () {
			return false;
		}
	}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'disabled', [_uiAttribute.bindableToggle], {
		enumerable: true,
		initializer: function () {
			return false;
		}
	}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'completed', [_uiAttribute.bindableToggle], {
		enumerable: true,
		initializer: function () {
			return false;
		}
	}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'color', [_dec2], {
		enumerable: true,
		initializer: null
	})), _class2)) || _class);
	let UIStepsAttribute = exports.UIStepsAttribute = (_dec3 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }steps`), _dec3(_class4 = class UIStepsAttribute extends _uiAttribute.UIAttribute {}) || _class4);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLXN0ZXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FXYSxvREFEWix1Q0FBaUIsQ0FBQyxHQUFFLHFCQUFVLGVBQVYsRUFBMEIsSUFBN0IsQ0FBakIsV0FNQywrQkFBYyxHQUFHLHFCQUFVLFlBQVYsNEJBTFosTUFBTSxlQUFOLGtDQUEwQzs7Ozs7OztBQVFoRCxPQUFNLEdBQUcsSUFBSCxFQUFVOztBQUVmLFFBQUssT0FBTCxDQUFhLFNBQWIsQ0FBdUIsR0FBdkIsQ0FBNEIsTUFBNUIsRUFGZTtHQUFoQjs7RUFSTTs7O1VBRW1COzs7OztVQUNFOzs7OztVQUNDOzs7Ozs7S0FhaEIsdURBRFosdUNBQWlCLENBQUMsR0FBRSxxQkFBVSxlQUFWLEVBQTBCLEtBQTdCLENBQWpCLG1CQUNNLE1BQU0sZ0JBQU4sa0NBQTJDLEVBQTNDIiwiZmlsZSI6ImVsZW1lbnRzL3VpLXN0ZXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIFN0ZXAgLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL2VsZW1lbnRzL3N0ZXAuaHRtbFxuICovXG5cbmltcG9ydCB7Y29uc3RhbnRzfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtVSUF0dHJpYnV0ZSwgYmluZGFibGVUb2dnbGUsIGJpbmRhYmxlRW51bX0gZnJvbSAnLi4vdWktYXR0cmlidXRlJztcbmltcG9ydCB7Y3VzdG9tQXR0cmlidXRlLCBjb21wdXRlZEZyb20sIGJpbmRhYmxlLCBpbmplY3QsIExvZ01hbmFnZXJ9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1zdGVwYCApXG5leHBvcnQgY2xhc3MgVUlTdGVwQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG5cdEBiaW5kYWJsZVRvZ2dsZSBhY3RpdmUgPSBmYWxzZTtcblx0QGJpbmRhYmxlVG9nZ2xlIGRpc2FibGVkID0gZmFsc2U7XG5cdEBiaW5kYWJsZVRvZ2dsZSBjb21wbGV0ZWQgPSBmYWxzZTtcblx0QGJpbmRhYmxlRW51bSggLi4uY29uc3RhbnRzLlZBTElEX0NPTE9SUyApIGNvbG9yO1xuXG5cblx0YmluZCggLi4uYXJncyApIHtcblx0XHQvLyBObyBzdXBlclxuXHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAnc3RlcCcgKTtcblx0fVxuXG59XG5cblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1zdGVwc2AgKVxuZXhwb3J0IGNsYXNzIFVJU3RlcHNBdHRyaWJ1dGUgZXh0ZW5kcyBVSUF0dHJpYnV0ZSB7XG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
