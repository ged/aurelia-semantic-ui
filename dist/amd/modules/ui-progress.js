define(['exports', '../constants', 'aurelia-framework', '../ui-base'], function (exports, _constants, _aureliaFramework, _uiBase) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Progress - http://semantic-ui.com/modules/progress.html
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.SemanticUIProgressAttribute = exports.SemanticUIProgressElement = undefined;

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

	var _dec, _class, _dec2, _class2, _desc, _value, _class3, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

	let SemanticUIProgressElement = exports.SemanticUIProgressElement = (_dec = (0, _aureliaFramework.customElement)(`${ _constants.constants.elementPrefix }progress`), _dec(_class = class SemanticUIProgressElement extends _uiBase.SemanticUIElement {}) || _class);
	let SemanticUIProgressAttribute = exports.SemanticUIProgressAttribute = (_dec2 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }progress`), _dec2(_class2 = (_class3 = class SemanticUIProgressAttribute extends _uiBase.SemanticUIAttribute {
		constructor(...args) {
			var _temp;

			return _temp = super(...args), _initDefineProp(this, 'total', _descriptor, this), _initDefineProp(this, 'progress', _descriptor2, this), _initDefineProp(this, 'percent', _descriptor3, this), _initDefineProp(this, 'active', _descriptor4, this), _initDefineProp(this, 'label', _descriptor5, this), _initDefineProp(this, 'barLabel', _descriptor6, this), _initDefineProp(this, 'options', _descriptor7, this), _temp;
		}

		attached() {
			$(this.element).progress(this.options);
		}

		totalChanged(newValue, oldValue) {
			this.logger.debug(`Setting total to ${ newValue }`);
			$(this.element).progress('set total', newValue);
		}

		progressChanged(newValue, oldValue) {
			this.logger.debug(`Setting progress to ${ newValue }`);
			$(this.element).progress('set progress', newValue);
		}

		percentChanged(newValue, oldValue) {
			this.logger.debug(`Setting percent to ${ newValue }`);
			$(this.element).progress('set percent', newValue);
		}

		activeChanged(newValue, oldValue) {
			this.logger.debug(`Setting active to ${ newValue }`);
			if (newValue) {
				$(this.element).progress('set active');
			} else {
				$(this.element).progress('remove active');
			}
		}

		labelChanged(newValue, oldValue) {
			this.logger.debug(`Setting label to ${ newValue }`);
			$(this.element).progress('set label', newValue);
		}

		barLabelChanged(newValue, oldValue) {
			this.logger.debug(`Setting bar label to ${ newValue }`);
			$(this.element).progress('set bar label', newValue);
		}

	}, (_descriptor = _applyDecoratedDescriptor(_class3.prototype, 'total', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: null
	}), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, 'progress', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: null
	}), _descriptor3 = _applyDecoratedDescriptor(_class3.prototype, 'percent', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: null
	}), _descriptor4 = _applyDecoratedDescriptor(_class3.prototype, 'active', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: null
	}), _descriptor5 = _applyDecoratedDescriptor(_class3.prototype, 'label', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: null
	}), _descriptor6 = _applyDecoratedDescriptor(_class3.prototype, 'barLabel', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: null
	}), _descriptor7 = _applyDecoratedDescriptor(_class3.prototype, 'options', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: function () {
			return {};
		}
	})), _class3)) || _class2);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdWktcHJvZ3Jlc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQVNhLHlCLFdBQUEseUIsV0FEWixxQ0FBZ0IsSUFBRSxxQkFBVSxhQUFjLFdBQTFDLEMsZ0JBQ00sTUFBTSx5QkFBTixtQ0FBMEQsRTtLQUdwRCwyQixXQUFBLDJCLFlBRFosdUNBQWtCLElBQUUscUJBQVUsZUFBZ0IsV0FBOUMsQyw2QkFDTSxNQUFNLDJCQUFOLHFDQUE4RDtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFXcEUsYUFBVztBQUNWLEtBQUcsS0FBSyxPQUFSLEVBQWtCLFFBQWxCLENBQTRCLEtBQUssT0FBakM7QUFDQTs7QUFHRCxlQUFjLFFBQWQsRUFBd0IsUUFBeEIsRUFBbUM7QUFDbEMsUUFBSyxNQUFMLENBQVksS0FBWixDQUFvQixxQkFBbUIsUUFBUyxHQUFoRDtBQUNBLEtBQUcsS0FBSyxPQUFSLEVBQWtCLFFBQWxCLENBQTRCLFdBQTVCLEVBQXlDLFFBQXpDO0FBQ0E7O0FBR0Qsa0JBQWlCLFFBQWpCLEVBQTJCLFFBQTNCLEVBQXNDO0FBQ3JDLFFBQUssTUFBTCxDQUFZLEtBQVosQ0FBb0Isd0JBQXNCLFFBQVMsR0FBbkQ7QUFDQSxLQUFHLEtBQUssT0FBUixFQUFrQixRQUFsQixDQUE0QixjQUE1QixFQUE0QyxRQUE1QztBQUNBOztBQUdELGlCQUFnQixRQUFoQixFQUEwQixRQUExQixFQUFxQztBQUNwQyxRQUFLLE1BQUwsQ0FBWSxLQUFaLENBQW9CLHVCQUFxQixRQUFTLEdBQWxEO0FBQ0EsS0FBRyxLQUFLLE9BQVIsRUFBa0IsUUFBbEIsQ0FBNEIsYUFBNUIsRUFBMkMsUUFBM0M7QUFDQTs7QUFHRCxnQkFBZSxRQUFmLEVBQXlCLFFBQXpCLEVBQW9DO0FBQ25DLFFBQUssTUFBTCxDQUFZLEtBQVosQ0FBb0Isc0JBQW9CLFFBQVMsR0FBakQ7QUFDQSxPQUFLLFFBQUwsRUFBZ0I7QUFDZixNQUFHLEtBQUssT0FBUixFQUFrQixRQUFsQixDQUE0QixZQUE1QjtBQUNBLElBRkQsTUFFTztBQUNOLE1BQUcsS0FBSyxPQUFSLEVBQWtCLFFBQWxCLENBQTRCLGVBQTVCO0FBQ0E7QUFDRDs7QUFHRCxlQUFjLFFBQWQsRUFBd0IsUUFBeEIsRUFBbUM7QUFDbEMsUUFBSyxNQUFMLENBQVksS0FBWixDQUFvQixxQkFBbUIsUUFBUyxHQUFoRDtBQUNBLEtBQUcsS0FBSyxPQUFSLEVBQWtCLFFBQWxCLENBQTRCLFdBQTVCLEVBQXlDLFFBQXpDO0FBQ0E7O0FBR0Qsa0JBQWlCLFFBQWpCLEVBQTJCLFFBQTNCLEVBQXNDO0FBQ3JDLFFBQUssTUFBTCxDQUFZLEtBQVosQ0FBb0IseUJBQXVCLFFBQVMsR0FBcEQ7QUFDQSxLQUFHLEtBQUssT0FBUixFQUFrQixRQUFsQixDQUE0QixlQUE1QixFQUE2QyxRQUE3QztBQUNBOztBQXJEbUUsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBU2hELEUiLCJmaWxlIjoibW9kdWxlcy91aS1wcm9ncmVzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogUHJvZ3Jlc3MgLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL21vZHVsZXMvcHJvZ3Jlc3MuaHRtbFxuICovXG5cbmltcG9ydCB7Y29uc3RhbnRzfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtiaW5kYWJsZSwgY3VzdG9tQXR0cmlidXRlLCBjdXN0b21FbGVtZW50fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge1NlbWFudGljVUlFbGVtZW50LCBTZW1hbnRpY1VJQXR0cmlidXRlfSBmcm9tICcuLi91aS1iYXNlJztcblxuQGN1c3RvbUVsZW1lbnQoIGAke2NvbnN0YW50cy5lbGVtZW50UHJlZml4fXByb2dyZXNzYCApXG5leHBvcnQgY2xhc3MgU2VtYW50aWNVSVByb2dyZXNzRWxlbWVudCBleHRlbmRzIFNlbWFudGljVUlFbGVtZW50IHt9XG5cbkBjdXN0b21BdHRyaWJ1dGUoIGAke2NvbnN0YW50cy5hdHRyaWJ1dGVQcmVmaXh9cHJvZ3Jlc3NgIClcbmV4cG9ydCBjbGFzcyBTZW1hbnRpY1VJUHJvZ3Jlc3NBdHRyaWJ1dGUgZXh0ZW5kcyBTZW1hbnRpY1VJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGUgdG90YWw7XG5cdEBiaW5kYWJsZSBwcm9ncmVzcztcblx0QGJpbmRhYmxlIHBlcmNlbnQ7XG5cdEBiaW5kYWJsZSBhY3RpdmU7XG5cblx0QGJpbmRhYmxlIGxhYmVsO1xuXHRAYmluZGFibGUgYmFyTGFiZWw7XG5cdEBiaW5kYWJsZSBvcHRpb25zID0ge307XG5cblx0YXR0YWNoZWQoKSB7XG5cdFx0JCggdGhpcy5lbGVtZW50ICkucHJvZ3Jlc3MoIHRoaXMub3B0aW9ucyApO1xuXHR9XG5cblxuXHR0b3RhbENoYW5nZWQoIG5ld1ZhbHVlLCBvbGRWYWx1ZSApIHtcblx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggYFNldHRpbmcgdG90YWwgdG8gJHtuZXdWYWx1ZX1gICk7XG5cdFx0JCggdGhpcy5lbGVtZW50ICkucHJvZ3Jlc3MoICdzZXQgdG90YWwnLCBuZXdWYWx1ZSApO1xuXHR9XG5cblxuXHRwcm9ncmVzc0NoYW5nZWQoIG5ld1ZhbHVlLCBvbGRWYWx1ZSApIHtcblx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggYFNldHRpbmcgcHJvZ3Jlc3MgdG8gJHtuZXdWYWx1ZX1gICk7XG5cdFx0JCggdGhpcy5lbGVtZW50ICkucHJvZ3Jlc3MoICdzZXQgcHJvZ3Jlc3MnLCBuZXdWYWx1ZSApO1xuXHR9XG5cblxuXHRwZXJjZW50Q2hhbmdlZCggbmV3VmFsdWUsIG9sZFZhbHVlICkge1xuXHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBgU2V0dGluZyBwZXJjZW50IHRvICR7bmV3VmFsdWV9YCApO1xuXHRcdCQoIHRoaXMuZWxlbWVudCApLnByb2dyZXNzKCAnc2V0IHBlcmNlbnQnLCBuZXdWYWx1ZSApO1xuXHR9XG5cblxuXHRhY3RpdmVDaGFuZ2VkKCBuZXdWYWx1ZSwgb2xkVmFsdWUgKSB7XG5cdFx0dGhpcy5sb2dnZXIuZGVidWcoIGBTZXR0aW5nIGFjdGl2ZSB0byAke25ld1ZhbHVlfWAgKTtcblx0XHRpZiAoIG5ld1ZhbHVlICkge1xuXHRcdFx0JCggdGhpcy5lbGVtZW50ICkucHJvZ3Jlc3MoICdzZXQgYWN0aXZlJyApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKCB0aGlzLmVsZW1lbnQgKS5wcm9ncmVzcyggJ3JlbW92ZSBhY3RpdmUnICk7XG5cdFx0fVxuXHR9XG5cblxuXHRsYWJlbENoYW5nZWQoIG5ld1ZhbHVlLCBvbGRWYWx1ZSApIHtcblx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggYFNldHRpbmcgbGFiZWwgdG8gJHtuZXdWYWx1ZX1gICk7XG5cdFx0JCggdGhpcy5lbGVtZW50ICkucHJvZ3Jlc3MoICdzZXQgbGFiZWwnLCBuZXdWYWx1ZSApO1xuXHR9XG5cblxuXHRiYXJMYWJlbENoYW5nZWQoIG5ld1ZhbHVlLCBvbGRWYWx1ZSApIHtcblx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggYFNldHRpbmcgYmFyIGxhYmVsIHRvICR7bmV3VmFsdWV9YCApO1xuXHRcdCQoIHRoaXMuZWxlbWVudCApLnByb2dyZXNzKCAnc2V0IGJhciBsYWJlbCcsIG5ld1ZhbHVlICk7XG5cdH1cblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
