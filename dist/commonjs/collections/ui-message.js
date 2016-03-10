
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

var _uiAttribute = require('../ui-attribute');

var _aureliaFramework = require('aurelia-framework');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL3VpLW1lc3NhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQU0yQyxpQkFBaUI7O2dDQUNSLG1CQUFtQjs7SUFHdkUsa0JBQWtCOzs7V0FBbEIsa0JBQWtCOztVQUFsQixrQkFBa0I7Ozs7Ozs7Ozs7dUJBQWxCLGtCQUFrQjs7U0FNMUIsZ0JBQVk7cUNBQVAsSUFBSTtBQUFKLFFBQUk7OztBQUNaLHdGQUFlLElBQUksRUFBRztBQUN0QixPQUFLLElBQUksQ0FBQyxJQUFJLEVBQUc7QUFDaEIsUUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLDJDQUEyQyxDQUFDO0FBQzdELFFBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQztHQUNEOzs7U0FHTyxvQkFBRztBQUNWLE9BQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFFLDJDQUEyQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUUsQ0FBQzs7QUFHbkYsT0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRzs7O0FBQ3JDLFFBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxpQkFBZ0IsSUFBSSxDQUFDLElBQUksaUJBQWMsSUFBSSxDQUFDLE9BQU8sQ0FBRSxDQUFDO0FBQ3ZFLFFBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUUsR0FBRyxDQUFFLENBQUM7QUFDN0MsWUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBRSxDQUFDO0FBQ3ZDLDJCQUFBLFFBQVEsQ0FBQyxTQUFTLEVBQUMsR0FBRyxNQUFBLHlDQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7QUFDbEQsUUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFFLENBQUM7QUFDL0QsUUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7SUFDNUI7R0FDRDs7O1NBR1UscUJBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRztBQUNqQyxPQUFLLElBQUksQ0FBQyxXQUFXLEVBQUc7QUFDdkIsUUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLHVCQUFzQixJQUFJLENBQUMsV0FBVyxZQUFPLFFBQVEsY0FBUyxRQUFRLENBQUksQ0FBQztBQUM1RixRQUFLLFFBQVEsRUFBRzs7O0FBQUUsK0JBQUEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUMsTUFBTSxNQUFBLDRDQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQztLQUFFO0FBQzlFLFFBQUssUUFBUSxFQUFHOzs7QUFBRSxnQ0FBQSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBQyxHQUFHLE1BQUEsNkNBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDO0tBQUU7SUFDM0U7R0FDRDs7Ozs7Ozs7ZUFqQ0EsNkJBQU8sV0FBVyxDQUFFOzs7OzsyQkFIVCxrQkFBa0I7QUFBbEIsbUJBQWtCLEdBRDlCLHVDQUFpQixZQUFZLENBQUUsQ0FDbkIsa0JBQWtCLEtBQWxCLGtCQUFrQjtRQUFsQixrQkFBa0IiLCJmaWxlIjoiY29sbGVjdGlvbnMvdWktbWVzc2FnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogTWVzc2FnZSAtIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vY29sbGVjdGlvbnMvbWVzc2FnZS5odG1sXG4gKi9cblxuaW1wb3J0IHtVSUF0dHJpYnV0ZSwgYmluZGFibGVUb2dnbGUsIGJpbmRhYmxlRW51bX0gZnJvbSAnLi4vdWktYXR0cmlidXRlJztcbmltcG9ydCB7aW5qZWN0LCBjaGlsZCwgY3VzdG9tQXR0cmlidXRlLCBjaGlsZHJlbiwgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUF0dHJpYnV0ZSggJ3VpLW1lc3NhZ2UnIClcbmV4cG9ydCBjbGFzcyBVSU1lc3NhZ2VBdHRyaWJ1dGUgZXh0ZW5kcyBVSUF0dHJpYnV0ZSB7XG5cblx0QGJpbmRhYmxlIGljb247XG5cdEBjaGlsZCggJ2kudWkuaWNvbicgKSBpY29uRWxlbWVudDtcblxuXG5cdGJpbmQoIC4uLmFyZ3MgKSB7XG5cdFx0c3VwZXIuYmluZCggLi4uYXJncyApO1xuXHRcdGlmICggdGhpcy5pY29uICkge1xuXHRcdFx0dGhpcy5sb2dnZXIuZGVidWcoIGBBZGRpbmcgJ2ljb24nIHRvIHRoZSBsaXN0IG9mIGNsYXNzZXMuYCApO1xuXHRcdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcblx0XHR9XG5cdH1cblxuXG5cdGF0dGFjaGVkKCkge1xuXHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBcIkF0dGFjaGluZyBhIHVpLW1lc3NhZ2UuIEljb24gZWxlbWVudCBpczogXCIsIHRoaXMuaWNvbkVsZW1lbnQgKTtcblxuXHRcdC8vIEluamVjdCB0aGUgaWNvbiBpZiBpdCdzIHNldCBidXQgbm90IGFscmVhZHkgdGhlcmVcblx0XHRpZiAoIHRoaXMuaWNvbiAmJiAhdGhpcy5pY29uRWxlbWVudCApIHtcblx0XHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBgQ3JlYXRpbmcgYSAke3RoaXMuaWNvbn0gaWNvbiBmb3IgYCwgdGhpcy5lbGVtZW50ICk7XG5cdFx0XHRsZXQgaWNvbk5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnaScgKTtcblx0XHRcdGljb25Ob2RlLmNsYXNzTGlzdC5hZGQoICd1aScsICdpY29uJyApO1xuXHRcdFx0aWNvbk5vZGUuY2xhc3NMaXN0LmFkZCggLi4udGhpcy5pY29uLnNwbGl0KCcgJykgKTtcblx0XHRcdHRoaXMuZWxlbWVudC5pbnNlcnRCZWZvcmUoIGljb25Ob2RlLCB0aGlzLmVsZW1lbnQuZmlyc3RDaGlsZCApO1xuXHRcdFx0dGhpcy5pY29uRWxlbWVudCA9IGljb25Ob2RlO1xuXHRcdH1cblx0fVxuXG5cblx0aWNvbkNoYW5nZWQoIG5ld1ZhbHVlLCBvbGRWYWx1ZSApIHtcblx0XHRpZiAoIHRoaXMuaWNvbkVsZW1lbnQgKSB7XG5cdFx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggYFN3YXBwaW5nIGljb24gb2YgJHt0aGlzLmljb25FbGVtZW50fSB0byAke25ld1ZhbHVlfSBmcm9tICR7b2xkVmFsdWV9YCApO1xuXHRcdFx0aWYgKCBvbGRWYWx1ZSApIHsgdGhpcy5pY29uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKC4uLm9sZFZhbHVlLnNwbGl0KCcgJykpOyB9XG5cdFx0XHRpZiAoIG5ld1ZhbHVlICkgeyB0aGlzLmljb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4ubmV3VmFsdWUuc3BsaXQoJyAnKSk7IH1cblx0XHR9XG5cdH1cblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
