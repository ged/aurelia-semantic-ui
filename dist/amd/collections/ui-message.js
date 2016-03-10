define(['exports', '../ui-attribute', 'aurelia-framework'], function (exports, _uiAttribute, _aureliaFramework) {
	"use strict";

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var UIMessageAttribute = (function (_UIAttribute) {
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
			decorators: [_aureliaFramework.bindable],
			initializer: null,
			enumerable: true
		}, {
			key: 'iconElement',
			decorators: [(0, _aureliaFramework.child)('i.ui.icon')],
			initializer: null,
			enumerable: true
		}], null, _instanceInitializers);

		var _UIMessageAttribute = UIMessageAttribute;
		UIMessageAttribute = (0, _aureliaFramework.customAttribute)('ui-message')(UIMessageAttribute) || UIMessageAttribute;
		return UIMessageAttribute;
	})(_uiAttribute.UIAttribute);

	exports.UIMessageAttribute = UIMessageAttribute;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL3VpLW1lc3NhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGFBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBVUEsa0JBQWtCOzs7WUFBbEIsa0JBQWtCOztXQUFsQixrQkFBa0I7Ozs7Ozs7Ozs7d0JBQWxCLGtCQUFrQjs7VUFNMUIsZ0JBQVk7c0NBQVAsSUFBSTtBQUFKLFNBQUk7OztBQUNaLHlGQUFlLElBQUksRUFBRztBQUN0QixRQUFLLElBQUksQ0FBQyxJQUFJLEVBQUc7QUFDaEIsU0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLDJDQUEyQyxDQUFDO0FBQzdELFNBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNuQztJQUNEOzs7VUFHTyxvQkFBRztBQUNWLFFBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFFLDJDQUEyQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUUsQ0FBQzs7QUFHbkYsUUFBSyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRzs7O0FBQ3JDLFNBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxpQkFBZ0IsSUFBSSxDQUFDLElBQUksaUJBQWMsSUFBSSxDQUFDLE9BQU8sQ0FBRSxDQUFDO0FBQ3ZFLFNBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUUsR0FBRyxDQUFFLENBQUM7QUFDN0MsYUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBRSxDQUFDO0FBQ3ZDLDRCQUFBLFFBQVEsQ0FBQyxTQUFTLEVBQUMsR0FBRyxNQUFBLHlDQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7QUFDbEQsU0FBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFFLENBQUM7QUFDL0QsU0FBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7S0FDNUI7SUFDRDs7O1VBR1UscUJBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRztBQUNqQyxRQUFLLElBQUksQ0FBQyxXQUFXLEVBQUc7QUFDdkIsU0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLHVCQUFzQixJQUFJLENBQUMsV0FBVyxZQUFPLFFBQVEsY0FBUyxRQUFRLENBQUksQ0FBQztBQUM1RixTQUFLLFFBQVEsRUFBRzs7O0FBQUUsZ0NBQUEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUMsTUFBTSxNQUFBLDRDQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQztNQUFFO0FBQzlFLFNBQUssUUFBUSxFQUFHOzs7QUFBRSxpQ0FBQSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBQyxHQUFHLE1BQUEsNkNBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDO01BQUU7S0FDM0U7SUFDRDs7O2tDQXZDZ0QsUUFBUTs7Ozs7Z0JBTXhELHNCQU5jLEtBQUssRUFNWixXQUFXLENBQUU7Ozs7OzRCQUhULGtCQUFrQjtBQUFsQixvQkFBa0IsR0FEOUIsc0JBRnNCLGVBQWUsRUFFcEIsWUFBWSxDQUFFLENBQ25CLGtCQUFrQixLQUFsQixrQkFBa0I7U0FBbEIsa0JBQWtCO2lCQUp2QixXQUFXIiwiZmlsZSI6ImNvbGxlY3Rpb25zL3VpLW1lc3NhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIE1lc3NhZ2UgLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL2NvbGxlY3Rpb25zL21lc3NhZ2UuaHRtbFxuICovXG5cbmltcG9ydCB7VUlBdHRyaWJ1dGUsIGJpbmRhYmxlVG9nZ2xlLCBiaW5kYWJsZUVudW19IGZyb20gJy4uL3VpLWF0dHJpYnV0ZSc7XG5pbXBvcnQge2luamVjdCwgY2hpbGQsIGN1c3RvbUF0dHJpYnV0ZSwgY2hpbGRyZW4sIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBjdXN0b21BdHRyaWJ1dGUoICd1aS1tZXNzYWdlJyApXG5leHBvcnQgY2xhc3MgVUlNZXNzYWdlQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG5cdEBiaW5kYWJsZSBpY29uO1xuXHRAY2hpbGQoICdpLnVpLmljb24nICkgaWNvbkVsZW1lbnQ7XG5cblxuXHRiaW5kKCAuLi5hcmdzICkge1xuXHRcdHN1cGVyLmJpbmQoIC4uLmFyZ3MgKTtcblx0XHRpZiAoIHRoaXMuaWNvbiApIHtcblx0XHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBgQWRkaW5nICdpY29uJyB0byB0aGUgbGlzdCBvZiBjbGFzc2VzLmAgKTtcblx0XHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XG5cdFx0fVxuXHR9XG5cblxuXHRhdHRhY2hlZCgpIHtcblx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggXCJBdHRhY2hpbmcgYSB1aS1tZXNzYWdlLiBJY29uIGVsZW1lbnQgaXM6IFwiLCB0aGlzLmljb25FbGVtZW50ICk7XG5cblx0XHQvLyBJbmplY3QgdGhlIGljb24gaWYgaXQncyBzZXQgYnV0IG5vdCBhbHJlYWR5IHRoZXJlXG5cdFx0aWYgKCB0aGlzLmljb24gJiYgIXRoaXMuaWNvbkVsZW1lbnQgKSB7XG5cdFx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggYENyZWF0aW5nIGEgJHt0aGlzLmljb259IGljb24gZm9yIGAsIHRoaXMuZWxlbWVudCApO1xuXHRcdFx0bGV0IGljb25Ob2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2knICk7XG5cdFx0XHRpY29uTm9kZS5jbGFzc0xpc3QuYWRkKCAndWknLCAnaWNvbicgKTtcblx0XHRcdGljb25Ob2RlLmNsYXNzTGlzdC5hZGQoIC4uLnRoaXMuaWNvbi5zcGxpdCgnICcpICk7XG5cdFx0XHR0aGlzLmVsZW1lbnQuaW5zZXJ0QmVmb3JlKCBpY29uTm9kZSwgdGhpcy5lbGVtZW50LmZpcnN0Q2hpbGQgKTtcblx0XHRcdHRoaXMuaWNvbkVsZW1lbnQgPSBpY29uTm9kZTtcblx0XHR9XG5cdH1cblxuXG5cdGljb25DaGFuZ2VkKCBuZXdWYWx1ZSwgb2xkVmFsdWUgKSB7XG5cdFx0aWYgKCB0aGlzLmljb25FbGVtZW50ICkge1xuXHRcdFx0dGhpcy5sb2dnZXIuZGVidWcoIGBTd2FwcGluZyBpY29uIG9mICR7dGhpcy5pY29uRWxlbWVudH0gdG8gJHtuZXdWYWx1ZX0gZnJvbSAke29sZFZhbHVlfWAgKTtcblx0XHRcdGlmICggb2xkVmFsdWUgKSB7IHRoaXMuaWNvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSguLi5vbGRWYWx1ZS5zcGxpdCgnICcpKTsgfVxuXHRcdFx0aWYgKCBuZXdWYWx1ZSApIHsgdGhpcy5pY29uRWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLm5ld1ZhbHVlLnNwbGl0KCcgJykpOyB9XG5cdFx0fVxuXHR9XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
