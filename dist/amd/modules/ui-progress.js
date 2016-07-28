define(['exports', '../constants', 'aurelia-framework', '../ui-attribute'], function (exports, _constants, _aureliaFramework, _uiAttribute) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Progress - http://semantic-ui.com/modules/progress.html
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.UIProgressAttribute = undefined;

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

	var _dec, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

	let UIProgressAttribute = exports.UIProgressAttribute = (_dec = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }progress`), _dec(_class = (_class2 = class UIProgressAttribute extends _uiAttribute.UIAttribute {
		constructor(...args) {
			var _temp;

			return _temp = super(...args), _initDefineProp(this, 'total', _descriptor, this), _initDefineProp(this, 'progress', _descriptor2, this), _initDefineProp(this, 'percent', _descriptor3, this), _initDefineProp(this, 'active', _descriptor4, this), _initDefineProp(this, 'label', _descriptor5, this), _initDefineProp(this, 'barLabel', _descriptor6, this), _temp;
		}

		attached() {
			$(this.element).progress();
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
			$(this.element).progress('set active', newValue);
		}

		labelChanged(newValue, oldValue) {
			this.logger.debug(`Setting label to ${ newValue }`);
			$(this.element).progress('set label', newValue);
		}

		barLabelChanged(newValue, oldValue) {
			this.logger.debug(`Setting bar label to ${ newValue }`);
			$(this.element).progress('set bar label', newValue);
		}

	}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'total', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: null
	}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'progress', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: null
	}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'percent', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: null
	}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'active', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: null
	}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'label', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: null
	}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'barLabel', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: null
	})), _class2)) || _class);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdWktcHJvZ3Jlc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQVNhLG1CLFdBQUEsbUIsV0FEWix1Q0FBa0IsSUFBRSxxQkFBVSxlQUFnQixXQUE5QyxDLDJCQUNNLE1BQU0sbUJBQU4sa0NBQThDO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQVdwRCxhQUFXO0FBQ1YsS0FBRyxLQUFLLE9BQVIsRUFBa0IsUUFBbEI7QUFDQTs7QUFHRCxlQUFjLFFBQWQsRUFBd0IsUUFBeEIsRUFBbUM7QUFDbEMsUUFBSyxNQUFMLENBQVksS0FBWixDQUFvQixxQkFBbUIsUUFBUyxHQUFoRDtBQUNBLEtBQUcsS0FBSyxPQUFSLEVBQWtCLFFBQWxCLENBQTRCLFdBQTVCLEVBQXlDLFFBQXpDO0FBQ0E7O0FBR0Qsa0JBQWlCLFFBQWpCLEVBQTJCLFFBQTNCLEVBQXNDO0FBQ3JDLFFBQUssTUFBTCxDQUFZLEtBQVosQ0FBb0Isd0JBQXNCLFFBQVMsR0FBbkQ7QUFDQSxLQUFHLEtBQUssT0FBUixFQUFrQixRQUFsQixDQUE0QixjQUE1QixFQUE0QyxRQUE1QztBQUNBOztBQUdELGlCQUFnQixRQUFoQixFQUEwQixRQUExQixFQUFxQztBQUNwQyxRQUFLLE1BQUwsQ0FBWSxLQUFaLENBQW9CLHVCQUFxQixRQUFTLEdBQWxEO0FBQ0EsS0FBRyxLQUFLLE9BQVIsRUFBa0IsUUFBbEIsQ0FBNEIsYUFBNUIsRUFBMkMsUUFBM0M7QUFDQTs7QUFHRCxnQkFBZSxRQUFmLEVBQXlCLFFBQXpCLEVBQW9DO0FBQ25DLFFBQUssTUFBTCxDQUFZLEtBQVosQ0FBb0Isc0JBQW9CLFFBQVMsR0FBakQ7QUFDQSxLQUFHLEtBQUssT0FBUixFQUFrQixRQUFsQixDQUE0QixZQUE1QixFQUEwQyxRQUExQztBQUNBOztBQUdELGVBQWMsUUFBZCxFQUF3QixRQUF4QixFQUFtQztBQUNsQyxRQUFLLE1BQUwsQ0FBWSxLQUFaLENBQW9CLHFCQUFtQixRQUFTLEdBQWhEO0FBQ0EsS0FBRyxLQUFLLE9BQVIsRUFBa0IsUUFBbEIsQ0FBNEIsV0FBNUIsRUFBeUMsUUFBekM7QUFDQTs7QUFHRCxrQkFBaUIsUUFBakIsRUFBMkIsUUFBM0IsRUFBc0M7QUFDckMsUUFBSyxNQUFMLENBQVksS0FBWixDQUFvQix5QkFBdUIsUUFBUyxHQUFwRDtBQUNBLEtBQUcsS0FBSyxPQUFSLEVBQWtCLFFBQWxCLENBQTRCLGVBQTVCLEVBQTZDLFFBQTdDO0FBQ0E7O0FBakRtRCxFIiwiZmlsZSI6Im1vZHVsZXMvdWktcHJvZ3Jlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIFByb2dyZXNzIC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9tb2R1bGVzL3Byb2dyZXNzLmh0bWxcbiAqL1xuXG5pbXBvcnQge2NvbnN0YW50c30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7YmluZGFibGUsIGN1c3RvbUF0dHJpYnV0ZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtVSUF0dHJpYnV0ZX0gZnJvbSAnLi4vdWktYXR0cmlidXRlJztcblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1wcm9ncmVzc2AgKVxuZXhwb3J0IGNsYXNzIFVJUHJvZ3Jlc3NBdHRyaWJ1dGUgZXh0ZW5kcyBVSUF0dHJpYnV0ZSB7XG5cblx0QGJpbmRhYmxlIHRvdGFsO1xuXHRAYmluZGFibGUgcHJvZ3Jlc3M7XG5cdEBiaW5kYWJsZSBwZXJjZW50O1xuXHRAYmluZGFibGUgYWN0aXZlO1xuXG5cdEBiaW5kYWJsZSBsYWJlbDtcblx0QGJpbmRhYmxlIGJhckxhYmVsO1xuXG5cblx0YXR0YWNoZWQoKSB7XG5cdFx0JCggdGhpcy5lbGVtZW50ICkucHJvZ3Jlc3MoKTtcblx0fVxuXG5cblx0dG90YWxDaGFuZ2VkKCBuZXdWYWx1ZSwgb2xkVmFsdWUgKSB7XG5cdFx0dGhpcy5sb2dnZXIuZGVidWcoIGBTZXR0aW5nIHRvdGFsIHRvICR7bmV3VmFsdWV9YCApO1xuXHRcdCQoIHRoaXMuZWxlbWVudCApLnByb2dyZXNzKCAnc2V0IHRvdGFsJywgbmV3VmFsdWUgKTtcblx0fVxuXG5cblx0cHJvZ3Jlc3NDaGFuZ2VkKCBuZXdWYWx1ZSwgb2xkVmFsdWUgKSB7XG5cdFx0dGhpcy5sb2dnZXIuZGVidWcoIGBTZXR0aW5nIHByb2dyZXNzIHRvICR7bmV3VmFsdWV9YCApO1xuXHRcdCQoIHRoaXMuZWxlbWVudCApLnByb2dyZXNzKCAnc2V0IHByb2dyZXNzJywgbmV3VmFsdWUgKTtcblx0fVxuXG5cblx0cGVyY2VudENoYW5nZWQoIG5ld1ZhbHVlLCBvbGRWYWx1ZSApIHtcblx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggYFNldHRpbmcgcGVyY2VudCB0byAke25ld1ZhbHVlfWAgKTtcblx0XHQkKCB0aGlzLmVsZW1lbnQgKS5wcm9ncmVzcyggJ3NldCBwZXJjZW50JywgbmV3VmFsdWUgKTtcblx0fVxuXG5cblx0YWN0aXZlQ2hhbmdlZCggbmV3VmFsdWUsIG9sZFZhbHVlICkge1xuXHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBgU2V0dGluZyBhY3RpdmUgdG8gJHtuZXdWYWx1ZX1gICk7XG5cdFx0JCggdGhpcy5lbGVtZW50ICkucHJvZ3Jlc3MoICdzZXQgYWN0aXZlJywgbmV3VmFsdWUgKTtcblx0fVxuXG5cblx0bGFiZWxDaGFuZ2VkKCBuZXdWYWx1ZSwgb2xkVmFsdWUgKSB7XG5cdFx0dGhpcy5sb2dnZXIuZGVidWcoIGBTZXR0aW5nIGxhYmVsIHRvICR7bmV3VmFsdWV9YCApO1xuXHRcdCQoIHRoaXMuZWxlbWVudCApLnByb2dyZXNzKCAnc2V0IGxhYmVsJywgbmV3VmFsdWUgKTtcblx0fVxuXG5cblx0YmFyTGFiZWxDaGFuZ2VkKCBuZXdWYWx1ZSwgb2xkVmFsdWUgKSB7XG5cdFx0dGhpcy5sb2dnZXIuZGVidWcoIGBTZXR0aW5nIGJhciBsYWJlbCB0byAke25ld1ZhbHVlfWAgKTtcblx0XHQkKCB0aGlzLmVsZW1lbnQgKS5wcm9ncmVzcyggJ3NldCBiYXIgbGFiZWwnLCBuZXdWYWx1ZSApO1xuXHR9XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
