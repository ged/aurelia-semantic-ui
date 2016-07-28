define(['exports', '../constants', '../ui-attribute', 'aurelia-framework'], function (exports, _constants, _uiAttribute, _aureliaFramework) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Dimmer - http://semantic-ui.com/modules/dimmer.html
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.UIDimmerAttribute = undefined;

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

	var _dec, _class, _desc, _value, _class2, _descriptor, _descriptor2;

	let UIDimmerAttribute = exports.UIDimmerAttribute = (_dec = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }dimmer`), _dec(_class = (_class2 = class UIDimmerAttribute extends _uiAttribute.UIAttribute {
		constructor(...args) {
			var _temp;

			return _temp = super(...args), _initDefineProp(this, 'active', _descriptor, this), _initDefineProp(this, 'options', _descriptor2, this), _temp;
		}

		bind(...args) {
			super.bind(...args);

			if (this.active) {
				this.logger.debug("Dimmer is starting out active.");
				this.element.classList.add('active');
			};
		}

		attached() {
			this.logger.debug("Setting up dimmer for ", this.element, " with options: ", this.options);
			$(this.element).dimmer(this.options);
		}

		show() {
			$(this.element).dimmer('show');
		}

		hide() {
			$(this.element).dimmer('hide');
		}

	}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'active', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: function () {
			return false;
		}
	}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'options', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: function () {
			return {};
		}
	})), _class2)) || _class);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdWktZGltbWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FTYSxpQixXQUFBLGlCLFdBRFosdUNBQWtCLElBQUUscUJBQVUsZUFBZ0IsU0FBOUMsQywyQkFDTSxNQUFNLGlCQUFOLGtDQUE0QztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFNbEQsT0FBTSxHQUFHLElBQVQsRUFBZ0I7QUFDZixTQUFNLElBQU4sQ0FBWSxHQUFHLElBQWY7O0FBRUEsT0FBSyxLQUFLLE1BQVYsRUFBbUI7QUFDbEIsU0FBSyxNQUFMLENBQVksS0FBWixDQUFtQixnQ0FBbkI7QUFDQSxTQUFLLE9BQUwsQ0FBYSxTQUFiLENBQXVCLEdBQXZCLENBQTRCLFFBQTVCO0FBQ0E7QUFDRDs7QUFHRSxhQUFXO0FBQ2IsUUFBSyxNQUFMLENBQVksS0FBWixDQUFtQix3QkFBbkIsRUFBNkMsS0FBSyxPQUFsRCxFQUEyRCxpQkFBM0QsRUFBOEUsS0FBSyxPQUFuRjtBQUNNLEtBQUcsS0FBSyxPQUFSLEVBQWtCLE1BQWxCLENBQTBCLEtBQUssT0FBL0I7QUFDSDs7QUFHSixTQUFPO0FBQ04sS0FBRyxLQUFLLE9BQVIsRUFBa0IsTUFBbEIsQ0FBMEIsTUFBMUI7QUFDQTs7QUFHRCxTQUFPO0FBQ04sS0FBRyxLQUFLLE9BQVIsRUFBa0IsTUFBbEIsQ0FBMEIsTUFBMUI7QUFDQTs7QUE3QmlELEU7OztVQUUvQixLOzs7OztVQUNDLEUiLCJmaWxlIjoibW9kdWxlcy91aS1kaW1tZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIERpbW1lciAtIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vbW9kdWxlcy9kaW1tZXIuaHRtbFxuICovXG5cbmltcG9ydCB7Y29uc3RhbnRzfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtVSUF0dHJpYnV0ZSwgYmluZGFibGVUb2dnbGUsIGJpbmRhYmxlRW51bX0gZnJvbSAnLi4vdWktYXR0cmlidXRlJztcbmltcG9ydCB7Y3VzdG9tQXR0cmlidXRlLCBiaW5kYWJsZSwgYmluZGluZ01vZGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1kaW1tZXJgIClcbmV4cG9ydCBjbGFzcyBVSURpbW1lckF0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGUgYWN0aXZlID0gZmFsc2U7XG5cdEBiaW5kYWJsZSBvcHRpb25zID0ge307XG5cblxuXHRiaW5kKCAuLi5hcmdzICkge1xuXHRcdHN1cGVyLmJpbmQoIC4uLmFyZ3MgKTtcblxuXHRcdGlmICggdGhpcy5hY3RpdmUgKSB7XG5cdFx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggXCJEaW1tZXIgaXMgc3RhcnRpbmcgb3V0IGFjdGl2ZS5cIiApO1xuXHRcdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoICdhY3RpdmUnICk7XG5cdFx0fTtcblx0fVxuXG5cbiAgICBhdHRhY2hlZCgpIHtcblx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggXCJTZXR0aW5nIHVwIGRpbW1lciBmb3IgXCIsIHRoaXMuZWxlbWVudCwgXCIgd2l0aCBvcHRpb25zOiBcIiwgdGhpcy5vcHRpb25zICk7XG4gICAgICAgICQoIHRoaXMuZWxlbWVudCApLmRpbW1lciggdGhpcy5vcHRpb25zICk7XG4gICAgfVxuXG5cblx0c2hvdygpIHtcblx0XHQkKCB0aGlzLmVsZW1lbnQgKS5kaW1tZXIoICdzaG93JyApO1xuXHR9XG5cblxuXHRoaWRlKCkge1xuXHRcdCQoIHRoaXMuZWxlbWVudCApLmRpbW1lciggJ2hpZGUnICk7XG5cdH1cblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
