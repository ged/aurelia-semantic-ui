System.register(['../ui-attribute', 'aurelia-framework'], function (_export) {
	"use strict";

	var UIAttribute, bindableToggle, bindableEnum, inject, child, customAttribute, children, bindable, UIMessageAttribute;

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	return {
		setters: [function (_uiAttribute) {
			UIAttribute = _uiAttribute.UIAttribute;
			bindableToggle = _uiAttribute.bindableToggle;
			bindableEnum = _uiAttribute.bindableEnum;
		}, function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
			child = _aureliaFramework.child;
			customAttribute = _aureliaFramework.customAttribute;
			children = _aureliaFramework.children;
			bindable = _aureliaFramework.bindable;
		}],
		execute: function () {
			UIMessageAttribute = (function (_UIAttribute) {
				var _instanceInitializers = {};

				_inherits(UIMessageAttribute, _UIAttribute);

				function UIMessageAttribute() {
					_classCallCheck(this, _UIMessageAttribute);

					_get(Object.getPrototypeOf(_UIMessageAttribute.prototype), 'constructor', this).apply(this, arguments);

					_defineDecoratedPropertyDescriptor(this, 'icon', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'iconElement', _instanceInitializers);
				}

				_createDecoratedClass(UIMessageAttribute, [{
					key: 'bind',
					value: function bind() {
						for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
							args[_key2] = arguments[_key2];
						}

						_get(Object.getPrototypeOf(_UIMessageAttribute.prototype), 'bind', this).apply(this, args);
						if (this.icon) {
							this.logger.debug('Adding \'icon\' to the list of classes.');
							this.element.classList.add('icon');
						}
					}
				}, {
					key: 'attached',
					value: function attached() {
						this.logger.debug("Attaching a ui-message. Icon element is: ", this.iconElement);

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
					key: 'iconElement',
					decorators: [child('i.ui.icon')],
					initializer: null,
					enumerable: true
				}], null, _instanceInitializers);

				var _UIMessageAttribute = UIMessageAttribute;
				UIMessageAttribute = customAttribute('ui-message')(UIMessageAttribute) || UIMessageAttribute;
				return UIMessageAttribute;
			})(UIAttribute);

			_export('UIMessageAttribute', UIMessageAttribute);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL3VpLW1lc3NhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGFBQVksQ0FBQzs7b0dBVUEsa0JBQWtCOzs7Ozs7Ozs7Ozs7Ozs7OzhCQUp2QixXQUFXO2lDQUFFLGNBQWM7K0JBQUUsWUFBWTs7OEJBQ3pDLE1BQU07NkJBQUUsS0FBSzt1Q0FBRSxlQUFlO2dDQUFFLFFBQVE7Z0NBQUUsUUFBUTs7O0FBRzdDLHFCQUFrQjs7O2NBQWxCLGtCQUFrQjs7YUFBbEIsa0JBQWtCOzs7Ozs7Ozs7OzBCQUFsQixrQkFBa0I7O1lBTTFCLGdCQUFZO3dDQUFQLElBQUk7QUFBSixXQUFJOzs7QUFDWiwyRkFBZSxJQUFJLEVBQUc7QUFDdEIsVUFBSyxJQUFJLENBQUMsSUFBSSxFQUFHO0FBQ2hCLFdBQUksQ0FBQyxNQUFNLENBQUMsS0FBSywyQ0FBMkMsQ0FBQztBQUM3RCxXQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7T0FDbkM7TUFDRDs7O1lBR08sb0JBQUc7QUFDVixVQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBRSwyQ0FBMkMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFFLENBQUM7O0FBR25GLFVBQUssSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUc7OztBQUNyQyxXQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssaUJBQWdCLElBQUksQ0FBQyxJQUFJLGlCQUFjLElBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQztBQUN2RSxXQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFFLEdBQUcsQ0FBRSxDQUFDO0FBQzdDLGVBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFFLElBQUksRUFBRSxNQUFNLENBQUUsQ0FBQztBQUN2Qyw4QkFBQSxRQUFRLENBQUMsU0FBUyxFQUFDLEdBQUcsTUFBQSx5Q0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO0FBQ2xELFdBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBRSxDQUFDO0FBQy9ELFdBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO09BQzVCO01BQ0Q7OztZQUdVLHFCQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUc7QUFDakMsVUFBSyxJQUFJLENBQUMsV0FBVyxFQUFHO0FBQ3ZCLFdBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyx1QkFBc0IsSUFBSSxDQUFDLFdBQVcsWUFBTyxRQUFRLGNBQVMsUUFBUSxDQUFJLENBQUM7QUFDNUYsV0FBSyxRQUFRLEVBQUc7OztBQUFFLGtDQUFBLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFDLE1BQU0sTUFBQSw0Q0FBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUM7UUFBRTtBQUM5RSxXQUFLLFFBQVEsRUFBRzs7O0FBQUUsbUNBQUEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUMsR0FBRyxNQUFBLDZDQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQztRQUFFO09BQzNFO01BQ0Q7OztrQkFsQ0EsUUFBUTs7Ozs7a0JBQ1IsS0FBSyxDQUFFLFdBQVcsQ0FBRTs7Ozs7OEJBSFQsa0JBQWtCO0FBQWxCLHNCQUFrQixHQUQ5QixlQUFlLENBQUUsWUFBWSxDQUFFLENBQ25CLGtCQUFrQixLQUFsQixrQkFBa0I7V0FBbEIsa0JBQWtCO01BQVMsV0FBVyIsImZpbGUiOiJjb2xsZWN0aW9ucy91aS1tZXNzYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBNZXNzYWdlIC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9jb2xsZWN0aW9ucy9tZXNzYWdlLmh0bWxcbiAqL1xuXG5pbXBvcnQge1VJQXR0cmlidXRlLCBiaW5kYWJsZVRvZ2dsZSwgYmluZGFibGVFbnVtfSBmcm9tICcuLi91aS1hdHRyaWJ1dGUnO1xuaW1wb3J0IHtpbmplY3QsIGNoaWxkLCBjdXN0b21BdHRyaWJ1dGUsIGNoaWxkcmVuLCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AY3VzdG9tQXR0cmlidXRlKCAndWktbWVzc2FnZScgKVxuZXhwb3J0IGNsYXNzIFVJTWVzc2FnZUF0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGUgaWNvbjtcblx0QGNoaWxkKCAnaS51aS5pY29uJyApIGljb25FbGVtZW50O1xuXG5cblx0YmluZCggLi4uYXJncyApIHtcblx0XHRzdXBlci5iaW5kKCAuLi5hcmdzICk7XG5cdFx0aWYgKCB0aGlzLmljb24gKSB7XG5cdFx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggYEFkZGluZyAnaWNvbicgdG8gdGhlIGxpc3Qgb2YgY2xhc3Nlcy5gICk7XG5cdFx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuXHRcdH1cblx0fVxuXG5cblx0YXR0YWNoZWQoKSB7XG5cdFx0dGhpcy5sb2dnZXIuZGVidWcoIFwiQXR0YWNoaW5nIGEgdWktbWVzc2FnZS4gSWNvbiBlbGVtZW50IGlzOiBcIiwgdGhpcy5pY29uRWxlbWVudCApO1xuXG5cdFx0Ly8gSW5qZWN0IHRoZSBpY29uIGlmIGl0J3Mgc2V0IGJ1dCBub3QgYWxyZWFkeSB0aGVyZVxuXHRcdGlmICggdGhpcy5pY29uICYmICF0aGlzLmljb25FbGVtZW50ICkge1xuXHRcdFx0dGhpcy5sb2dnZXIuZGVidWcoIGBDcmVhdGluZyBhICR7dGhpcy5pY29ufSBpY29uIGZvciBgLCB0aGlzLmVsZW1lbnQgKTtcblx0XHRcdGxldCBpY29uTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdpJyApO1xuXHRcdFx0aWNvbk5vZGUuY2xhc3NMaXN0LmFkZCggJ3VpJywgJ2ljb24nICk7XG5cdFx0XHRpY29uTm9kZS5jbGFzc0xpc3QuYWRkKCAuLi50aGlzLmljb24uc3BsaXQoJyAnKSApO1xuXHRcdFx0dGhpcy5lbGVtZW50Lmluc2VydEJlZm9yZSggaWNvbk5vZGUsIHRoaXMuZWxlbWVudC5maXJzdENoaWxkICk7XG5cdFx0XHR0aGlzLmljb25FbGVtZW50ID0gaWNvbk5vZGU7XG5cdFx0fVxuXHR9XG5cblxuXHRpY29uQ2hhbmdlZCggbmV3VmFsdWUsIG9sZFZhbHVlICkge1xuXHRcdGlmICggdGhpcy5pY29uRWxlbWVudCApIHtcblx0XHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBgU3dhcHBpbmcgaWNvbiBvZiAke3RoaXMuaWNvbkVsZW1lbnR9IHRvICR7bmV3VmFsdWV9IGZyb20gJHtvbGRWYWx1ZX1gICk7XG5cdFx0XHRpZiAoIG9sZFZhbHVlICkgeyB0aGlzLmljb25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoLi4ub2xkVmFsdWUuc3BsaXQoJyAnKSk7IH1cblx0XHRcdGlmICggbmV3VmFsdWUgKSB7IHRoaXMuaWNvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5uZXdWYWx1ZS5zcGxpdCgnICcpKTsgfVxuXHRcdH1cblx0fVxuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
