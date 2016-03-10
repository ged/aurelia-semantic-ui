define(['exports', '../constants', '../ui-attribute', 'aurelia-framework'], function (exports, _constants, _uiAttribute, _aureliaFramework) {
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

	var UIButtonAttribute = (function (_UIAttribute) {
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
			decorators: [_aureliaFramework.bindable],
			initializer: null,
			enumerable: true
		}, {
			key: 'color',
			decorators: [_uiAttribute.bindableEnum.apply(undefined, _toConsumableArray(_constants.constants.VALID_COLORS))],
			initializer: null,
			enumerable: true
		}, {
			key: 'iconElement',
			decorators: [(0, _aureliaFramework.child)('i.ui.icon')],
			initializer: null,
			enumerable: true
		}], null, _instanceInitializers);

		var _UIButtonAttribute = UIButtonAttribute;
		UIButtonAttribute = (0, _aureliaFramework.customAttribute)(_constants.constants.attributePrefix + 'button')(UIButtonAttribute) || UIButtonAttribute;
		return UIButtonAttribute;
	})(_uiAttribute.UIAttribute);

	exports.UIButtonAttribute = UIButtonAttribute;

	var UIButtonsAttribute = (function (_UIAttribute2) {
		_inherits(UIButtonsAttribute, _UIAttribute2);

		function UIButtonsAttribute() {
			_classCallCheck(this, _UIButtonsAttribute);

			_get(Object.getPrototypeOf(_UIButtonsAttribute.prototype), 'constructor', this).apply(this, arguments);
		}

		var _UIButtonsAttribute = UIButtonsAttribute;
		UIButtonsAttribute = (0, _aureliaFramework.customAttribute)(_constants.constants.attributePrefix + 'buttons')(UIButtonsAttribute) || UIButtonsAttribute;
		return UIButtonsAttribute;
	})(_uiAttribute.UIAttribute);

	exports.UIButtonsAttribute = UIButtonsAttribute;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsYUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FXQSxpQkFBaUI7OztZQUFqQixpQkFBaUI7O1dBQWpCLGlCQUFpQjs7Ozs7Ozs7Ozs7O3dCQUFqQixpQkFBaUI7O1VBUXpCLGdCQUFZO3NDQUFQLElBQUk7QUFBSixTQUFJOzs7QUFDWix3RkFBZSxJQUFJLEVBQUc7QUFDdEIsUUFBSyxJQUFJLENBQUMsSUFBSSxFQUFHO0FBQ2hCLFNBQUksQ0FBQyxNQUFNLENBQUMsS0FBSywyQ0FBMkMsQ0FBQztBQUM3RCxTQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDbkM7SUFDRDs7O1VBR08sb0JBQUc7QUFFVixRQUFLLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFHOzs7QUFDckMsU0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLGlCQUFnQixJQUFJLENBQUMsSUFBSSxpQkFBYyxJQUFJLENBQUMsT0FBTyxDQUFFLENBQUM7QUFDdkUsU0FBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBRSxHQUFHLENBQUUsQ0FBQztBQUM3QyxhQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBRSxJQUFJLEVBQUUsTUFBTSxDQUFFLENBQUM7QUFDdkMsNEJBQUEsUUFBUSxDQUFDLFNBQVMsRUFBQyxHQUFHLE1BQUEseUNBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztBQUNsRCxTQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUUsQ0FBQztBQUMvRCxTQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQztLQUM1QjtJQUNEOzs7VUFHVSxxQkFBRSxRQUFRLEVBQUUsUUFBUSxFQUFHO0FBQ2pDLFFBQUssSUFBSSxDQUFDLFdBQVcsRUFBRztBQUN2QixTQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssdUJBQXNCLElBQUksQ0FBQyxXQUFXLFlBQU8sUUFBUSxjQUFTLFFBQVEsQ0FBSSxDQUFDO0FBQzVGLFNBQUssUUFBUSxFQUFHOzs7QUFBRSxnQ0FBQSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBQyxNQUFNLE1BQUEsNENBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDO01BQUU7QUFDOUUsU0FBSyxRQUFRLEVBQUc7OztBQUFFLGlDQUFBLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFDLEdBQUcsTUFBQSw2Q0FBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUM7TUFBRTtLQUMzRTtJQUNEOzs7a0NBdkNzQyxRQUFROzs7OztnQkFNOUMsYUFQbUMsWUFBWSxxQ0FPOUIsV0FSWCxTQUFTLENBUVksWUFBWSxFQUFFOzs7OztnQkFFekMsc0JBUitCLEtBQUssRUFRN0IsV0FBVyxDQUFFOzs7OzsyQkFMVCxpQkFBaUI7QUFBakIsbUJBQWlCLEdBRDdCLHNCQUZPLGVBQWUsRUFFRixXQUpiLFNBQVMsQ0FJYyxlQUFlLFlBQVUsQ0FDM0MsaUJBQWlCLEtBQWpCLGlCQUFpQjtTQUFqQixpQkFBaUI7aUJBSnRCLFdBQVc7Ozs7S0E4Q04sa0JBQWtCO1lBQWxCLGtCQUFrQjs7V0FBbEIsa0JBQWtCOzs7Ozs7NEJBQWxCLGtCQUFrQjtBQUFsQixvQkFBa0IsR0FEOUIsc0JBNUNPLGVBQWUsRUE0Q0YsV0E5Q2IsU0FBUyxDQThDYyxlQUFlLGFBQVcsQ0FDNUMsa0JBQWtCLEtBQWxCLGtCQUFrQjtTQUFsQixrQkFBa0I7aUJBOUN2QixXQUFXIiwiZmlsZSI6ImVsZW1lbnRzL3VpLWJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQnV0dG9uIC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9lbGVtZW50cy9idXR0b24uaHRtbFxuICovXG5cbmltcG9ydCB7Y29uc3RhbnRzfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtVSUF0dHJpYnV0ZSwgYmluZGFibGVUb2dnbGUsIGJpbmRhYmxlRW51bX0gZnJvbSAnLi4vdWktYXR0cmlidXRlJztcbmltcG9ydCB7Y3VzdG9tQXR0cmlidXRlLCBpbmplY3QsIGNoaWxkLCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AY3VzdG9tQXR0cmlidXRlKCBgJHtjb25zdGFudHMuYXR0cmlidXRlUHJlZml4fWJ1dHRvbmAgKVxuZXhwb3J0IGNsYXNzIFVJQnV0dG9uQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG5cdEBiaW5kYWJsZSBpY29uO1xuXHRAYmluZGFibGVFbnVtKCAuLi5jb25zdGFudHMuVkFMSURfQ09MT1JTICkgY29sb3I7XG5cblx0QGNoaWxkKCAnaS51aS5pY29uJyApIGljb25FbGVtZW50O1xuXG5cblx0YmluZCggLi4uYXJncyApIHtcblx0XHRzdXBlci5iaW5kKCAuLi5hcmdzICk7XG5cdFx0aWYgKCB0aGlzLmljb24gKSB7XG5cdFx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggYEFkZGluZyAnaWNvbicgdG8gdGhlIGxpc3Qgb2YgY2xhc3Nlcy5gICk7XG5cdFx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuXHRcdH1cblx0fVxuXG5cblx0YXR0YWNoZWQoKSB7XG5cdFx0Ly8gSW5qZWN0IHRoZSBpY29uIGlmIGl0J3Mgc2V0IGJ1dCBub3QgYWxyZWFkeSB0aGVyZVxuXHRcdGlmICggdGhpcy5pY29uICYmICF0aGlzLmljb25FbGVtZW50ICkge1xuXHRcdFx0dGhpcy5sb2dnZXIuZGVidWcoIGBDcmVhdGluZyBhICR7dGhpcy5pY29ufSBpY29uIGZvciBgLCB0aGlzLmVsZW1lbnQgKTtcblx0XHRcdGxldCBpY29uTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdpJyApO1xuXHRcdFx0aWNvbk5vZGUuY2xhc3NMaXN0LmFkZCggJ3VpJywgJ2ljb24nICk7XG5cdFx0XHRpY29uTm9kZS5jbGFzc0xpc3QuYWRkKCAuLi50aGlzLmljb24uc3BsaXQoJyAnKSApO1xuXHRcdFx0dGhpcy5lbGVtZW50Lmluc2VydEJlZm9yZSggaWNvbk5vZGUsIHRoaXMuZWxlbWVudC5maXJzdENoaWxkICk7XG5cdFx0XHR0aGlzLmljb25FbGVtZW50ID0gaWNvbk5vZGU7XG5cdFx0fVxuXHR9XG5cblxuXHRpY29uQ2hhbmdlZCggbmV3VmFsdWUsIG9sZFZhbHVlICkge1xuXHRcdGlmICggdGhpcy5pY29uRWxlbWVudCApIHtcblx0XHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBgU3dhcHBpbmcgaWNvbiBvZiAke3RoaXMuaWNvbkVsZW1lbnR9IHRvICR7bmV3VmFsdWV9IGZyb20gJHtvbGRWYWx1ZX1gICk7XG5cdFx0XHRpZiAoIG9sZFZhbHVlICkgeyB0aGlzLmljb25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoLi4ub2xkVmFsdWUuc3BsaXQoJyAnKSk7IH1cblx0XHRcdGlmICggbmV3VmFsdWUgKSB7IHRoaXMuaWNvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5uZXdWYWx1ZS5zcGxpdCgnICcpKTsgfVxuXHRcdH1cblx0fVxuXG59XG5cblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1idXR0b25zYCApXG5leHBvcnQgY2xhc3MgVUlCdXR0b25zQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
