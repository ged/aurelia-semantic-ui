define(['exports', '../constants', 'aurelia-framework', '../ui-attribute'], function (exports, _constants, _aureliaFramework, _uiAttribute) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Modal - http://semantic-ui.com/modules/modal.html
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.UIModalAttribute = undefined;

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

	var _dec, _class, _desc, _value, _class2, _descriptor;

	let UIModalAttribute = exports.UIModalAttribute = (_dec = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }modal`), _dec(_class = (_class2 = class UIModalAttribute extends _uiAttribute.UIAttribute {
		constructor(...args) {
			var _temp;

			return _temp = super(...args), _initDefineProp(this, 'shown', _descriptor, this), _temp;
		}

		attached() {
			$(this.element).modal();
		}

		shownChanged(newValue, oldValue) {
			this.logger.debug("Shown attribute changed to: ", newValue);
			if (newValue) {
				this.show();
			} else {
				this.hide();
			}
		}

		show() {
			$(this.element).modal('show');
		}

		hide() {
			$(this.element).modal('hide');
		}

		onShow(callback) {
			$(this.element).modal({ onShow: callback });
		}
		onVisible(callback) {
			$(this.element).modal({ onVisible: callback });
		}
		onHide(callback) {
			$(this.element).modal({ onHide: callback });
		}
		onHidden(callback) {
			$(this.element).modal({ onHidden: callback });
		}
		onApprove(callback) {
			$(this.element).modal({ onApprove: callback });
		}
		onDeny(callback) {
			$(this.element).modal({ onDeny: callback });
		}

	}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'shown', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: function () {
			return false;
		}
	})), _class2)) || _class);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdWktbW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FXYSxnQixXQUFBLGdCLFdBRFosdUNBQWtCLElBQUUscUJBQVUsZUFBZ0IsUUFBOUMsQywyQkFDTSxNQUFNLGdCQUFOLGtDQUEyQztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFLakQsYUFBVztBQUNWLEtBQUcsS0FBSyxPQUFSLEVBQWtCLEtBQWxCO0FBQ0E7O0FBR0QsZUFBYyxRQUFkLEVBQXdCLFFBQXhCLEVBQW1DO0FBQ2xDLFFBQUssTUFBTCxDQUFZLEtBQVosQ0FBbUIsOEJBQW5CLEVBQW1ELFFBQW5EO0FBQ0EsT0FBSyxRQUFMLEVBQWdCO0FBQ2YsU0FBSyxJQUFMO0FBQ0EsSUFGRCxNQUVPO0FBQ04sU0FBSyxJQUFMO0FBQ0E7QUFDRDs7QUFHRCxTQUFPO0FBQ04sS0FBRyxLQUFLLE9BQVIsRUFBa0IsS0FBbEIsQ0FBeUIsTUFBekI7QUFDQTs7QUFHRCxTQUFPO0FBQ04sS0FBRyxLQUFLLE9BQVIsRUFBa0IsS0FBbEIsQ0FBeUIsTUFBekI7QUFDQTs7QUFHRCxTQUFRLFFBQVIsRUFBbUI7QUFDbEIsS0FBRyxLQUFLLE9BQVIsRUFBa0IsS0FBbEIsQ0FBd0IsRUFBRSxRQUFRLFFBQVYsRUFBeEI7QUFDQTtBQUNELFlBQVcsUUFBWCxFQUFzQjtBQUNyQixLQUFHLEtBQUssT0FBUixFQUFrQixLQUFsQixDQUF3QixFQUFFLFdBQVcsUUFBYixFQUF4QjtBQUNBO0FBQ0QsU0FBUSxRQUFSLEVBQW1CO0FBQ2xCLEtBQUcsS0FBSyxPQUFSLEVBQWtCLEtBQWxCLENBQXdCLEVBQUUsUUFBUSxRQUFWLEVBQXhCO0FBQ0E7QUFDRCxXQUFVLFFBQVYsRUFBcUI7QUFDcEIsS0FBRyxLQUFLLE9BQVIsRUFBa0IsS0FBbEIsQ0FBd0IsRUFBRSxVQUFVLFFBQVosRUFBeEI7QUFDQTtBQUNELFlBQVcsUUFBWCxFQUFzQjtBQUNyQixLQUFHLEtBQUssT0FBUixFQUFrQixLQUFsQixDQUF3QixFQUFFLFdBQVcsUUFBYixFQUF4QjtBQUNBO0FBQ0QsU0FBUSxRQUFSLEVBQW1CO0FBQ2xCLEtBQUcsS0FBSyxPQUFSLEVBQWtCLEtBQWxCLENBQXdCLEVBQUUsUUFBUSxRQUFWLEVBQXhCO0FBQ0E7O0FBL0NnRCxFOzs7VUFFL0IsSyIsImZpbGUiOiJtb2R1bGVzL3VpLW1vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBNb2RhbCAtIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vbW9kdWxlcy9tb2RhbC5odG1sXG4gKi9cblxuaW1wb3J0IHtjb25zdGFudHN9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge2JpbmRhYmxlLCBjdXN0b21BdHRyaWJ1dGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7VUlBdHRyaWJ1dGV9IGZyb20gJy4uL3VpLWF0dHJpYnV0ZSc7XG5cbkBjdXN0b21BdHRyaWJ1dGUoIGAke2NvbnN0YW50cy5hdHRyaWJ1dGVQcmVmaXh9bW9kYWxgIClcbmV4cG9ydCBjbGFzcyBVSU1vZGFsQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG5cdEBiaW5kYWJsZSBzaG93biA9IGZhbHNlO1xuXG5cblx0YXR0YWNoZWQoKSB7XG5cdFx0JCggdGhpcy5lbGVtZW50ICkubW9kYWwoKTtcblx0fVxuXG5cblx0c2hvd25DaGFuZ2VkKCBuZXdWYWx1ZSwgb2xkVmFsdWUgKSB7XG5cdFx0dGhpcy5sb2dnZXIuZGVidWcoIFwiU2hvd24gYXR0cmlidXRlIGNoYW5nZWQgdG86IFwiLCBuZXdWYWx1ZSApO1xuXHRcdGlmICggbmV3VmFsdWUgKSB7XG5cdFx0XHR0aGlzLnNob3coKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5oaWRlKCk7XG5cdFx0fVxuXHR9XG5cblxuXHRzaG93KCkge1xuXHRcdCQoIHRoaXMuZWxlbWVudCApLm1vZGFsKCAnc2hvdycgKTtcblx0fVxuXG5cblx0aGlkZSgpIHtcblx0XHQkKCB0aGlzLmVsZW1lbnQgKS5tb2RhbCggJ2hpZGUnICk7XG5cdH1cblxuXG5cdG9uU2hvdyggY2FsbGJhY2sgKSB7XG5cdFx0JCggdGhpcy5lbGVtZW50ICkubW9kYWwoeyBvblNob3c6IGNhbGxiYWNrIH0pO1xuXHR9XG5cdG9uVmlzaWJsZSggY2FsbGJhY2sgKSB7XG5cdFx0JCggdGhpcy5lbGVtZW50ICkubW9kYWwoeyBvblZpc2libGU6IGNhbGxiYWNrIH0pO1xuXHR9XG5cdG9uSGlkZSggY2FsbGJhY2sgKSB7XG5cdFx0JCggdGhpcy5lbGVtZW50ICkubW9kYWwoeyBvbkhpZGU6IGNhbGxiYWNrIH0pO1xuXHR9XG5cdG9uSGlkZGVuKCBjYWxsYmFjayApIHtcblx0XHQkKCB0aGlzLmVsZW1lbnQgKS5tb2RhbCh7IG9uSGlkZGVuOiBjYWxsYmFjayB9KTtcblx0fVxuXHRvbkFwcHJvdmUoIGNhbGxiYWNrICkge1xuXHRcdCQoIHRoaXMuZWxlbWVudCApLm1vZGFsKHsgb25BcHByb3ZlOiBjYWxsYmFjayB9KTtcblx0fVxuXHRvbkRlbnkoIGNhbGxiYWNrICkge1xuXHRcdCQoIHRoaXMuZWxlbWVudCApLm1vZGFsKHsgb25EZW55OiBjYWxsYmFjayB9KTtcblx0fVxuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
