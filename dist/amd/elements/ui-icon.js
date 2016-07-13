define(['exports', '../constants', '../ui-attribute', 'aurelia-framework'], function (exports, _constants, _uiAttribute, _aureliaFramework) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Icon - http://semantic-ui.com/elements/icon.html#/definition
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.UIIconsAttribute = exports.UIIconAttribute = undefined;

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

	var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _dec4, _dec5, _class4, _desc2, _value2, _class5, _descriptor6;

	let UIIconAttribute = exports.UIIconAttribute = (_dec = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }icon`), _dec2 = (0, _uiAttribute.bindableEnum)(..._constants.constants.VALID_SIZES), _dec3 = (0, _uiAttribute.bindableEnum)(..._constants.constants.VALID_COLORS), _dec(_class = (_class2 = class UIIconAttribute extends _uiAttribute.UIAttribute {
		constructor(...args) {
			var _temp;

			return _temp = super(...args), _initDefineProp(this, 'name', _descriptor, this), _initDefineProp(this, 'size', _descriptor2, this), _initDefineProp(this, 'color', _descriptor3, this), _initDefineProp(this, 'disabled', _descriptor4, this), _initDefineProp(this, 'loading', _descriptor5, this), _temp;
		}

		bind() {
			// No super, as the classList doesn't get the 'ui' class.
			this.element.classList.add(...this.name.split(' '));
			this.element.classList.add('icon');
		}

		nameChanged(newValue, oldValue) {
			this.logger.debug(`Name changed from ${ oldValue } to ${ newValue }`);
			this.element.classList.remove(...oldValue.split(' '));
			this.element.classList.add(...newValue.split(' '));
		}

	}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'name', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: function () {
			return "help circle";
		}
	}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'size', [_dec2], {
		enumerable: true,
		initializer: null
	}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'color', [_dec3], {
		enumerable: true,
		initializer: null
	}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'disabled', [_uiAttribute.bindableToggle], {
		enumerable: true,
		initializer: null
	}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'loading', [_uiAttribute.bindableToggle], {
		enumerable: true,
		initializer: null
	})), _class2)) || _class);
	let UIIconsAttribute = exports.UIIconsAttribute = (_dec4 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }icons`), _dec5 = (0, _uiAttribute.bindableEnum)(..._constants.constants.VALID_SIZES), _dec4(_class4 = (_class5 = class UIIconsAttribute extends _uiAttribute.UIAttribute {
		constructor(...args) {
			var _temp2;

			return _temp2 = super(...args), _initDefineProp(this, 'size', _descriptor6, this), _temp2;
		}

	}, (_descriptor6 = _applyDecoratedDescriptor(_class5.prototype, 'size', [_dec5], {
		enumerable: true,
		initializer: null
	})), _class5)) || _class4);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWljb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FZYSxlLFdBQUEsZSxXQURaLHVDQUFrQixJQUFFLHFCQUFVLGVBQWdCLE9BQTlDLEMsVUFJQywrQkFBYyxHQUFHLHFCQUFVLFdBQTNCLEMsVUFDQSwrQkFBYyxHQUFHLHFCQUFVLFlBQTNCLEMsMkJBSkssTUFBTSxlQUFOLGtDQUEwQztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFTaEQsU0FBTzs7QUFFTixRQUFLLE9BQUwsQ0FBYSxTQUFiLENBQXVCLEdBQXZCLENBQTRCLEdBQUcsS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixHQUFoQixDQUEvQjtBQUNBLFFBQUssT0FBTCxDQUFhLFNBQWIsQ0FBdUIsR0FBdkIsQ0FBNEIsTUFBNUI7QUFDQTs7QUFHRCxjQUFhLFFBQWIsRUFBdUIsUUFBdkIsRUFBa0M7QUFDakMsUUFBSyxNQUFMLENBQVksS0FBWixDQUFvQixzQkFBb0IsUUFBUyxTQUFNLFFBQVMsR0FBaEU7QUFDQSxRQUFLLE9BQUwsQ0FBYSxTQUFiLENBQXVCLE1BQXZCLENBQStCLEdBQUcsU0FBUyxLQUFULENBQWUsR0FBZixDQUFsQztBQUNBLFFBQUssT0FBTCxDQUFhLFNBQWIsQ0FBdUIsR0FBdkIsQ0FBNEIsR0FBRyxTQUFTLEtBQVQsQ0FBZSxHQUFmLENBQS9CO0FBQ0E7O0FBcEIrQyxFOzs7VUFFL0IsYTs7Ozs7Ozs7Ozs7Ozs7O0tBd0JMLGdCLFdBQUEsZ0IsWUFEWix1Q0FBa0IsSUFBRSxxQkFBVSxlQUFnQixRQUE5QyxDLFVBR0MsK0JBQWMsR0FBRyxxQkFBVSxXQUEzQixDLDZCQUZLLE1BQU0sZ0JBQU4sa0NBQTJDO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBLEUiLCJmaWxlIjoiZWxlbWVudHMvdWktaWNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogSWNvbiAtIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vZWxlbWVudHMvaWNvbi5odG1sIy9kZWZpbml0aW9uXG4gKi9cblxuaW1wb3J0IHtjb25zdGFudHN9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge1VJQXR0cmlidXRlLCBiaW5kYWJsZVRvZ2dsZSwgYmluZGFibGVFbnVtfSBmcm9tICcuLi91aS1hdHRyaWJ1dGUnO1xuaW1wb3J0IHtjdXN0b21BdHRyaWJ1dGUsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1pY29uYCApXG5leHBvcnQgY2xhc3MgVUlJY29uQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG5cdEBiaW5kYWJsZSBuYW1lID0gXCJoZWxwIGNpcmNsZVwiO1xuXHRAYmluZGFibGVFbnVtKCAuLi5jb25zdGFudHMuVkFMSURfU0laRVMgKSBzaXplO1xuXHRAYmluZGFibGVFbnVtKCAuLi5jb25zdGFudHMuVkFMSURfQ09MT1JTICkgY29sb3I7XG5cdEBiaW5kYWJsZVRvZ2dsZSBkaXNhYmxlZDtcblx0QGJpbmRhYmxlVG9nZ2xlIGxvYWRpbmc7XG5cblxuXHRiaW5kKCkge1xuXHRcdC8vIE5vIHN1cGVyLCBhcyB0aGUgY2xhc3NMaXN0IGRvZXNuJ3QgZ2V0IHRoZSAndWknIGNsYXNzLlxuXHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAuLi50aGlzLm5hbWUuc3BsaXQoJyAnKSApO1xuXHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAnaWNvbicgKTtcblx0fVxuXG5cblx0bmFtZUNoYW5nZWQoIG5ld1ZhbHVlLCBvbGRWYWx1ZSApIHtcblx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggYE5hbWUgY2hhbmdlZCBmcm9tICR7b2xkVmFsdWV9IHRvICR7bmV3VmFsdWV9YCApO1xuXHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCAuLi5vbGRWYWx1ZS5zcGxpdCgnICcpICk7XG5cdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoIC4uLm5ld1ZhbHVlLnNwbGl0KCcgJykgKTtcblx0fVxuXG59XG5cblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1pY29uc2AgKVxuZXhwb3J0IGNsYXNzIFVJSWNvbnNBdHRyaWJ1dGUgZXh0ZW5kcyBVSUF0dHJpYnV0ZSB7XG5cblx0QGJpbmRhYmxlRW51bSggLi4uY29uc3RhbnRzLlZBTElEX1NJWkVTICkgc2l6ZTtcblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
