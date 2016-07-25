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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdWktcHJvZ3Jlc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FXYSxtQixXQUFBLG1CLFdBRFosdUNBQWtCLElBQUUscUJBQVUsZUFBZ0IsV0FBOUMsQywyQkFDTSxNQUFNLG1CQUFOLGtDQUE4QztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFXcEQsYUFBVztBQUNWLEtBQUcsS0FBSyxPQUFSLEVBQWtCLFFBQWxCO0FBQ0E7O0FBR0QsZUFBYyxRQUFkLEVBQXdCLFFBQXhCLEVBQW1DO0FBQ2xDLFFBQUssTUFBTCxDQUFZLEtBQVosQ0FBb0IscUJBQW1CLFFBQVMsR0FBaEQ7QUFDQSxLQUFHLEtBQUssT0FBUixFQUFrQixRQUFsQixDQUE0QixXQUE1QixFQUF5QyxRQUF6QztBQUNBOztBQUdELGtCQUFpQixRQUFqQixFQUEyQixRQUEzQixFQUFzQztBQUNyQyxRQUFLLE1BQUwsQ0FBWSxLQUFaLENBQW9CLHdCQUFzQixRQUFTLEdBQW5EO0FBQ0EsS0FBRyxLQUFLLE9BQVIsRUFBa0IsUUFBbEIsQ0FBNEIsY0FBNUIsRUFBNEMsUUFBNUM7QUFDQTs7QUFHRCxpQkFBZ0IsUUFBaEIsRUFBMEIsUUFBMUIsRUFBcUM7QUFDcEMsUUFBSyxNQUFMLENBQVksS0FBWixDQUFvQix1QkFBcUIsUUFBUyxHQUFsRDtBQUNBLEtBQUcsS0FBSyxPQUFSLEVBQWtCLFFBQWxCLENBQTRCLGFBQTVCLEVBQTJDLFFBQTNDO0FBQ0E7O0FBR0QsZ0JBQWUsUUFBZixFQUF5QixRQUF6QixFQUFvQztBQUNuQyxRQUFLLE1BQUwsQ0FBWSxLQUFaLENBQW9CLHNCQUFvQixRQUFTLEdBQWpEO0FBQ0EsS0FBRyxLQUFLLE9BQVIsRUFBa0IsUUFBbEIsQ0FBNEIsWUFBNUIsRUFBMEMsUUFBMUM7QUFDQTs7QUFHRCxlQUFjLFFBQWQsRUFBd0IsUUFBeEIsRUFBbUM7QUFDbEMsUUFBSyxNQUFMLENBQVksS0FBWixDQUFvQixxQkFBbUIsUUFBUyxHQUFoRDtBQUNBLEtBQUcsS0FBSyxPQUFSLEVBQWtCLFFBQWxCLENBQTRCLFdBQTVCLEVBQXlDLFFBQXpDO0FBQ0E7O0FBR0Qsa0JBQWlCLFFBQWpCLEVBQTJCLFFBQTNCLEVBQXNDO0FBQ3JDLFFBQUssTUFBTCxDQUFZLEtBQVosQ0FBb0IseUJBQXVCLFFBQVMsR0FBcEQ7QUFDQSxLQUFHLEtBQUssT0FBUixFQUFrQixRQUFsQixDQUE0QixlQUE1QixFQUE2QyxRQUE3QztBQUNBOztBQWpEbUQsRSIsImZpbGUiOiJtb2R1bGVzL3VpLXByb2dyZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBQcm9ncmVzcyAtIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vbW9kdWxlcy9wcm9ncmVzcy5odG1sXG4gKi9cblxuaW1wb3J0IHtjb25zdGFudHN9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge2JpbmRhYmxlLCBjdXN0b21BdHRyaWJ1dGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7VUlBdHRyaWJ1dGV9IGZyb20gJy4uL3VpLWF0dHJpYnV0ZSc7XG5cbkBjdXN0b21BdHRyaWJ1dGUoIGAke2NvbnN0YW50cy5hdHRyaWJ1dGVQcmVmaXh9cHJvZ3Jlc3NgIClcbmV4cG9ydCBjbGFzcyBVSVByb2dyZXNzQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG5cdEBiaW5kYWJsZSB0b3RhbDtcblx0QGJpbmRhYmxlIHByb2dyZXNzO1xuXHRAYmluZGFibGUgcGVyY2VudDtcblx0QGJpbmRhYmxlIGFjdGl2ZTtcblxuXHRAYmluZGFibGUgbGFiZWw7XG5cdEBiaW5kYWJsZSBiYXJMYWJlbDtcblxuXG5cdGF0dGFjaGVkKCkge1xuXHRcdCQoIHRoaXMuZWxlbWVudCApLnByb2dyZXNzKCk7XG5cdH1cblxuXG5cdHRvdGFsQ2hhbmdlZCggbmV3VmFsdWUsIG9sZFZhbHVlICkge1xuXHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBgU2V0dGluZyB0b3RhbCB0byAke25ld1ZhbHVlfWAgKTtcblx0XHQkKCB0aGlzLmVsZW1lbnQgKS5wcm9ncmVzcyggJ3NldCB0b3RhbCcsIG5ld1ZhbHVlICk7XG5cdH1cblxuXG5cdHByb2dyZXNzQ2hhbmdlZCggbmV3VmFsdWUsIG9sZFZhbHVlICkge1xuXHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBgU2V0dGluZyBwcm9ncmVzcyB0byAke25ld1ZhbHVlfWAgKTtcblx0XHQkKCB0aGlzLmVsZW1lbnQgKS5wcm9ncmVzcyggJ3NldCBwcm9ncmVzcycsIG5ld1ZhbHVlICk7XG5cdH1cblxuXG5cdHBlcmNlbnRDaGFuZ2VkKCBuZXdWYWx1ZSwgb2xkVmFsdWUgKSB7XG5cdFx0dGhpcy5sb2dnZXIuZGVidWcoIGBTZXR0aW5nIHBlcmNlbnQgdG8gJHtuZXdWYWx1ZX1gICk7XG5cdFx0JCggdGhpcy5lbGVtZW50ICkucHJvZ3Jlc3MoICdzZXQgcGVyY2VudCcsIG5ld1ZhbHVlICk7XG5cdH1cblxuXG5cdGFjdGl2ZUNoYW5nZWQoIG5ld1ZhbHVlLCBvbGRWYWx1ZSApIHtcblx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggYFNldHRpbmcgYWN0aXZlIHRvICR7bmV3VmFsdWV9YCApO1xuXHRcdCQoIHRoaXMuZWxlbWVudCApLnByb2dyZXNzKCAnc2V0IGFjdGl2ZScsIG5ld1ZhbHVlICk7XG5cdH1cblxuXG5cdGxhYmVsQ2hhbmdlZCggbmV3VmFsdWUsIG9sZFZhbHVlICkge1xuXHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBgU2V0dGluZyBsYWJlbCB0byAke25ld1ZhbHVlfWAgKTtcblx0XHQkKCB0aGlzLmVsZW1lbnQgKS5wcm9ncmVzcyggJ3NldCBsYWJlbCcsIG5ld1ZhbHVlICk7XG5cdH1cblxuXG5cdGJhckxhYmVsQ2hhbmdlZCggbmV3VmFsdWUsIG9sZFZhbHVlICkge1xuXHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBgU2V0dGluZyBiYXIgbGFiZWwgdG8gJHtuZXdWYWx1ZX1gICk7XG5cdFx0JCggdGhpcy5lbGVtZW50ICkucHJvZ3Jlc3MoICdzZXQgYmFyIGxhYmVsJywgbmV3VmFsdWUgKTtcblx0fVxuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
