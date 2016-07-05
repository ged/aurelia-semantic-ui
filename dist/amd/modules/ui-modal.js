define(['exports', '../constants', 'aurelia-framework', '../ui-base'], function (exports, _constants, _aureliaFramework, _uiBase) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Modal - http://semantic-ui.com/modules/modal.html
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.SemanticUIModalAttribute = exports.SemanticUIModalElement = undefined;

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

	var _dec, _class, _dec2, _class2, _desc, _value, _class3, _descriptor;

	let SemanticUIModalElement = exports.SemanticUIModalElement = (_dec = (0, _aureliaFramework.customElement)(`${ _constants.constants.elementPrefix }modal`), _dec(_class = class SemanticUIModalElement extends _uiBase.SemanticUIElement {}) || _class);
	let SemanticUIModalAttribute = exports.SemanticUIModalAttribute = (_dec2 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }modal`), _dec2(_class2 = (_class3 = class SemanticUIModalAttribute extends _uiBase.SemanticUIAttribute {
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

		refresh() {
			$(this.element).modal('refresh');
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

	}, (_descriptor = _applyDecoratedDescriptor(_class3.prototype, 'shown', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: function () {
			return false;
		}
	})), _class3)) || _class2);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdWktbW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQVNhLHNCLFdBQUEsc0IsV0FEWixxQ0FBZ0IsSUFBRSxxQkFBVSxhQUFjLFFBQTFDLEMsZ0JBQ00sTUFBTSxzQkFBTixtQ0FBdUQsRTtLQUdqRCx3QixXQUFBLHdCLFlBRFosdUNBQWtCLElBQUUscUJBQVUsZUFBZ0IsUUFBOUMsQyw2QkFDTSxNQUFNLHdCQUFOLHFDQUEyRDtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFLakUsYUFBVztBQUNWLEtBQUcsS0FBSyxPQUFSLEVBQWtCLEtBQWxCO0FBQ0E7O0FBR0QsZUFBYyxRQUFkLEVBQXdCLFFBQXhCLEVBQW1DO0FBQ2xDLFFBQUssTUFBTCxDQUFZLEtBQVosQ0FBbUIsOEJBQW5CLEVBQW1ELFFBQW5EO0FBQ0EsT0FBSyxRQUFMLEVBQWdCO0FBQ2YsU0FBSyxJQUFMO0FBQ0EsSUFGRCxNQUVPO0FBQ04sU0FBSyxJQUFMO0FBQ0E7QUFDRDs7QUFHRCxTQUFPO0FBQ04sS0FBRyxLQUFLLE9BQVIsRUFBa0IsS0FBbEIsQ0FBeUIsTUFBekI7QUFDQTs7QUFHRCxTQUFPO0FBQ04sS0FBRyxLQUFLLE9BQVIsRUFBa0IsS0FBbEIsQ0FBeUIsTUFBekI7QUFDQTs7QUFHRCxZQUFVO0FBQ1QsS0FBRyxLQUFLLE9BQVIsRUFBa0IsS0FBbEIsQ0FBeUIsU0FBekI7QUFDQTs7QUFHRCxTQUFRLFFBQVIsRUFBbUI7QUFDbEIsS0FBRyxLQUFLLE9BQVIsRUFBa0IsS0FBbEIsQ0FBd0IsRUFBRSxRQUFRLFFBQVYsRUFBeEI7QUFDQTtBQUNELFlBQVcsUUFBWCxFQUFzQjtBQUNyQixLQUFHLEtBQUssT0FBUixFQUFrQixLQUFsQixDQUF3QixFQUFFLFdBQVcsUUFBYixFQUF4QjtBQUNBO0FBQ0QsU0FBUSxRQUFSLEVBQW1CO0FBQ2xCLEtBQUcsS0FBSyxPQUFSLEVBQWtCLEtBQWxCLENBQXdCLEVBQUUsUUFBUSxRQUFWLEVBQXhCO0FBQ0E7QUFDRCxXQUFVLFFBQVYsRUFBcUI7QUFDcEIsS0FBRyxLQUFLLE9BQVIsRUFBa0IsS0FBbEIsQ0FBd0IsRUFBRSxVQUFVLFFBQVosRUFBeEI7QUFDQTtBQUNELFlBQVcsUUFBWCxFQUFzQjtBQUNyQixLQUFHLEtBQUssT0FBUixFQUFrQixLQUFsQixDQUF3QixFQUFFLFdBQVcsUUFBYixFQUF4QjtBQUNBO0FBQ0QsU0FBUSxRQUFSLEVBQW1CO0FBQ2xCLEtBQUcsS0FBSyxPQUFSLEVBQWtCLEtBQWxCLENBQXdCLEVBQUUsUUFBUSxRQUFWLEVBQXhCO0FBQ0E7O0FBcERnRSxFOzs7VUFFL0MsSyIsImZpbGUiOiJtb2R1bGVzL3VpLW1vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBNb2RhbCAtIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vbW9kdWxlcy9tb2RhbC5odG1sXG4gKi9cblxuaW1wb3J0IHtjb25zdGFudHN9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge2JpbmRhYmxlLCBjdXN0b21BdHRyaWJ1dGUsIGN1c3RvbUVsZW1lbnR9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7U2VtYW50aWNVSUVsZW1lbnQsIFNlbWFudGljVUlBdHRyaWJ1dGV9IGZyb20gJy4uL3VpLWJhc2UnO1xuXG5AY3VzdG9tRWxlbWVudCggYCR7Y29uc3RhbnRzLmVsZW1lbnRQcmVmaXh9bW9kYWxgIClcbmV4cG9ydCBjbGFzcyBTZW1hbnRpY1VJTW9kYWxFbGVtZW50IGV4dGVuZHMgU2VtYW50aWNVSUVsZW1lbnQge31cblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1tb2RhbGAgKVxuZXhwb3J0IGNsYXNzIFNlbWFudGljVUlNb2RhbEF0dHJpYnV0ZSBleHRlbmRzIFNlbWFudGljVUlBdHRyaWJ1dGUge1xuXG5cdEBiaW5kYWJsZSBzaG93biA9IGZhbHNlO1xuXG5cblx0YXR0YWNoZWQoKSB7XG5cdFx0JCggdGhpcy5lbGVtZW50ICkubW9kYWwoKTtcblx0fVxuXG5cblx0c2hvd25DaGFuZ2VkKCBuZXdWYWx1ZSwgb2xkVmFsdWUgKSB7XG5cdFx0dGhpcy5sb2dnZXIuZGVidWcoIFwiU2hvd24gYXR0cmlidXRlIGNoYW5nZWQgdG86IFwiLCBuZXdWYWx1ZSApO1xuXHRcdGlmICggbmV3VmFsdWUgKSB7XG5cdFx0XHR0aGlzLnNob3coKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5oaWRlKCk7XG5cdFx0fVxuXHR9XG5cblxuXHRzaG93KCkge1xuXHRcdCQoIHRoaXMuZWxlbWVudCApLm1vZGFsKCAnc2hvdycgKTtcblx0fVxuXG5cblx0aGlkZSgpIHtcblx0XHQkKCB0aGlzLmVsZW1lbnQgKS5tb2RhbCggJ2hpZGUnICk7XG5cdH1cblxuXG5cdHJlZnJlc2goKSB7XG5cdFx0JCggdGhpcy5lbGVtZW50ICkubW9kYWwoICdyZWZyZXNoJyApO1xuXHR9XG5cblxuXHRvblNob3coIGNhbGxiYWNrICkge1xuXHRcdCQoIHRoaXMuZWxlbWVudCApLm1vZGFsKHsgb25TaG93OiBjYWxsYmFjayB9KTtcblx0fVxuXHRvblZpc2libGUoIGNhbGxiYWNrICkge1xuXHRcdCQoIHRoaXMuZWxlbWVudCApLm1vZGFsKHsgb25WaXNpYmxlOiBjYWxsYmFjayB9KTtcblx0fVxuXHRvbkhpZGUoIGNhbGxiYWNrICkge1xuXHRcdCQoIHRoaXMuZWxlbWVudCApLm1vZGFsKHsgb25IaWRlOiBjYWxsYmFjayB9KTtcblx0fVxuXHRvbkhpZGRlbiggY2FsbGJhY2sgKSB7XG5cdFx0JCggdGhpcy5lbGVtZW50ICkubW9kYWwoeyBvbkhpZGRlbjogY2FsbGJhY2sgfSk7XG5cdH1cblx0b25BcHByb3ZlKCBjYWxsYmFjayApIHtcblx0XHQkKCB0aGlzLmVsZW1lbnQgKS5tb2RhbCh7IG9uQXBwcm92ZTogY2FsbGJhY2sgfSk7XG5cdH1cblx0b25EZW55KCBjYWxsYmFjayApIHtcblx0XHQkKCB0aGlzLmVsZW1lbnQgKS5tb2RhbCh7IG9uRGVueTogY2FsbGJhY2sgfSk7XG5cdH1cblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
