System.register(['../constants', '../ui-attribute', 'aurelia-framework'], function (_export) {
	"use strict";

	var constants, UIAttribute, bindableToggle, bindableEnum, customAttribute, inject, child, bindable, UIButtonAttribute, UIButtonsAttribute;

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	return {
		setters: [function (_constants) {
			constants = _constants.constants;
		}, function (_uiAttribute) {
			UIAttribute = _uiAttribute.UIAttribute;
			bindableToggle = _uiAttribute.bindableToggle;
			bindableEnum = _uiAttribute.bindableEnum;
		}, function (_aureliaFramework) {
			customAttribute = _aureliaFramework.customAttribute;
			inject = _aureliaFramework.inject;
			child = _aureliaFramework.child;
			bindable = _aureliaFramework.bindable;
		}],
		execute: function () {
			UIButtonAttribute = (function (_UIAttribute) {
				var _instanceInitializers = {};

				_inherits(UIButtonAttribute, _UIAttribute);

				function UIButtonAttribute() {
					_classCallCheck(this, _UIButtonAttribute);

					_get(Object.getPrototypeOf(_UIButtonAttribute.prototype), 'constructor', this).apply(this, arguments);

					_defineDecoratedPropertyDescriptor(this, 'icon', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'color', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'iconElement', _instanceInitializers);
				}

				_createDecoratedClass(UIButtonAttribute, [{
					key: 'bind',
					value: function bind() {
						for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
							args[_key2] = arguments[_key2];
						}

						_get(Object.getPrototypeOf(_UIButtonAttribute.prototype), 'bind', this).apply(this, args);
						if (this.icon) {
							this.logger.debug('Adding \'icon\' to the list of classes.');
							this.element.classList.add('icon');
						}
					}
				}, {
					key: 'attached',
					value: function attached() {
						if (this.icon && !this.iconElement) {
							var _iconNode$classList;

							this.logger.debug('Creating a ' + this.icon + ' icon for ', this.element);
							var iconNode = document.createElement('i');
							iconNode.classList.add('ui', 'icon');
							(_iconNode$classList = iconNode.classList).add.apply(_iconNode$classList, _toConsumableArray(this.icon.split(' ')));
							this.element.insertBefore(iconNode, this.element.firstChild);
							this.iconElement = iconNode;
						}
					}
				}, {
					key: 'iconChanged',
					value: function iconChanged(newValue, oldValue) {
						if (this.iconElement) {
							this.logger.debug('Swapping icon of ' + this.iconElement + ' to ' + newValue + ' from ' + oldValue);
							if (oldValue) {
								var _iconElement$classList;

								(_iconElement$classList = this.iconElement.classList).remove.apply(_iconElement$classList, _toConsumableArray(oldValue.split(' ')));
							}
							if (newValue) {
								var _iconElement$classList2;

								(_iconElement$classList2 = this.iconElement.classList).add.apply(_iconElement$classList2, _toConsumableArray(newValue.split(' ')));
							}
						}
					}
				}, {
					key: 'icon',
					decorators: [bindable],
					initializer: null,
					enumerable: true
				}, {
					key: 'color',
					decorators: [bindableEnum.apply(undefined, _toConsumableArray(constants.VALID_COLORS))],
					initializer: null,
					enumerable: true
				}, {
					key: 'iconElement',
					decorators: [child('i.ui.icon')],
					initializer: null,
					enumerable: true
				}], null, _instanceInitializers);

				var _UIButtonAttribute = UIButtonAttribute;
				UIButtonAttribute = customAttribute(constants.attributePrefix + 'button')(UIButtonAttribute) || UIButtonAttribute;
				return UIButtonAttribute;
			})(UIAttribute);

			_export('UIButtonAttribute', UIButtonAttribute);

			UIButtonsAttribute = (function (_UIAttribute2) {
				_inherits(UIButtonsAttribute, _UIAttribute2);

				function UIButtonsAttribute() {
					_classCallCheck(this, _UIButtonsAttribute);

					_get(Object.getPrototypeOf(_UIButtonsAttribute.prototype), 'constructor', this).apply(this, arguments);
				}

				var _UIButtonsAttribute = UIButtonsAttribute;
				UIButtonsAttribute = customAttribute(constants.attributePrefix + 'buttons')(UIButtonsAttribute) || UIButtonsAttribute;
				return UIButtonsAttribute;
			})(UIAttribute);

			_export('UIButtonsAttribute', UIButtonsAttribute);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,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Y2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIEJ1dHRvbiAtIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vZWxlbWVudHMvYnV0dG9uLmh0bWxcbiAqL1xuXG5pbXBvcnQge2NvbnN0YW50c30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7VUlBdHRyaWJ1dGUsIGJpbmRhYmxlVG9nZ2xlLCBiaW5kYWJsZUVudW19IGZyb20gJy4uL3VpLWF0dHJpYnV0ZSc7XG5pbXBvcnQge2N1c3RvbUF0dHJpYnV0ZSwgaW5qZWN0LCBjaGlsZCwgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1idXR0b25gIClcbmV4cG9ydCBjbGFzcyBVSUJ1dHRvbkF0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGUgaWNvbjtcblx0QGJpbmRhYmxlRW51bSggLi4uY29uc3RhbnRzLlZBTElEX0NPTE9SUyApIGNvbG9yO1xuXG5cdEBjaGlsZCggJ2kudWkuaWNvbicgKSBpY29uRWxlbWVudDtcblxuXG5cdGJpbmQoIC4uLmFyZ3MgKSB7XG5cdFx0c3VwZXIuYmluZCggLi4uYXJncyApO1xuXHRcdGlmICggdGhpcy5pY29uICkge1xuXHRcdFx0dGhpcy5sb2dnZXIuZGVidWcoIGBBZGRpbmcgJ2ljb24nIHRvIHRoZSBsaXN0IG9mIGNsYXNzZXMuYCApO1xuXHRcdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcblx0XHR9XG5cdH1cblxuXG5cdGF0dGFjaGVkKCkge1xuXHRcdC8vIEluamVjdCB0aGUgaWNvbiBpZiBpdCdzIHNldCBidXQgbm90IGFscmVhZHkgdGhlcmVcblx0XHRpZiAoIHRoaXMuaWNvbiAmJiAhdGhpcy5pY29uRWxlbWVudCApIHtcblx0XHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBgQ3JlYXRpbmcgYSAke3RoaXMuaWNvbn0gaWNvbiBmb3IgYCwgdGhpcy5lbGVtZW50ICk7XG5cdFx0XHRsZXQgaWNvbk5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnaScgKTtcblx0XHRcdGljb25Ob2RlLmNsYXNzTGlzdC5hZGQoICd1aScsICdpY29uJyApO1xuXHRcdFx0aWNvbk5vZGUuY2xhc3NMaXN0LmFkZCggLi4udGhpcy5pY29uLnNwbGl0KCcgJykgKTtcblx0XHRcdHRoaXMuZWxlbWVudC5pbnNlcnRCZWZvcmUoIGljb25Ob2RlLCB0aGlzLmVsZW1lbnQuZmlyc3RDaGlsZCApO1xuXHRcdFx0dGhpcy5pY29uRWxlbWVudCA9IGljb25Ob2RlO1xuXHRcdH1cblx0fVxuXG5cblx0aWNvbkNoYW5nZWQoIG5ld1ZhbHVlLCBvbGRWYWx1ZSApIHtcblx0XHRpZiAoIHRoaXMuaWNvbkVsZW1lbnQgKSB7XG5cdFx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggYFN3YXBwaW5nIGljb24gb2YgJHt0aGlzLmljb25FbGVtZW50fSB0byAke25ld1ZhbHVlfSBmcm9tICR7b2xkVmFsdWV9YCApO1xuXHRcdFx0aWYgKCBvbGRWYWx1ZSApIHsgdGhpcy5pY29uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKC4uLm9sZFZhbHVlLnNwbGl0KCcgJykpOyB9XG5cdFx0XHRpZiAoIG5ld1ZhbHVlICkgeyB0aGlzLmljb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4ubmV3VmFsdWUuc3BsaXQoJyAnKSk7IH1cblx0XHR9XG5cdH1cblxufVxuXG5cbkBjdXN0b21BdHRyaWJ1dGUoIGAke2NvbnN0YW50cy5hdHRyaWJ1dGVQcmVmaXh9YnV0dG9uc2AgKVxuZXhwb3J0IGNsYXNzIFVJQnV0dG9uc0F0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
