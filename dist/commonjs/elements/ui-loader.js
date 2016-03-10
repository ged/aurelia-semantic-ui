
"use strict";

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _constants = require('../constants');

var _uiAttribute = require('../ui-attribute');

var _aureliaFramework = require('aurelia-framework');

var UILoaderAttribute = (function (_UIAttribute) {
	var _instanceInitializers = {};

	_inherits(UILoaderAttribute, _UIAttribute);

	function UILoaderAttribute() {
		_classCallCheck(this, _UILoaderAttribute);

		_get(Object.getPrototypeOf(_UILoaderAttribute.prototype), 'constructor', this).apply(this, arguments);

		_defineDecoratedPropertyDescriptor(this, 'active', _instanceInitializers);
	}

	_createDecoratedClass(UILoaderAttribute, [{
		key: 'bind',
		value: function bind() {
			for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
				args[_key2] = arguments[_key2];
			}

			_get(Object.getPrototypeOf(_UILoaderAttribute.prototype), 'bind', this).apply(this, args);

			if (this.active) {
				this.logger.debug("Loader is starting out active.");
				this.element.classList.add('active');
			};
		}
	}, {
		key: 'activeChanged',
		value: function activeChanged(newValue) {
			if (newValue) {
				this.logger.debug("Activating loader.");
				this.element.classList.remove('disabled');
				this.element.classList.add('active');
			} else {
				this.logger.debug("Deactivating loader.");
				this.element.classList.remove('active');
				this.element.classList.add('disabled');
			}
		}
	}, {
		key: 'active',
		decorators: [_aureliaFramework.bindable],
		initializer: function initializer() {
			return false;
		},
		enumerable: true
	}], null, _instanceInitializers);

	var _UILoaderAttribute = UILoaderAttribute;
	UILoaderAttribute = (0, _aureliaFramework.customAttribute)(_constants.constants.attributePrefix + 'loader')(UILoaderAttribute) || UILoaderAttribute;
	return UILoaderAttribute;
})(_uiAttribute.UIAttribute);

exports.UILoaderAttribute = UILoaderAttribute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWxvYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O3lCQU1XLGNBQWM7OzJCQUNaLGlCQUFpQjs7Z0NBQ0gsbUJBQW1COztJQUc5QyxpQkFBaUI7OztXQUFqQixpQkFBaUI7O1VBQWpCLGlCQUFpQjs7Ozs7Ozs7dUJBQWpCLGlCQUFpQjs7U0FLekIsZ0JBQVk7cUNBQVAsSUFBSTtBQUFKLFFBQUk7OztBQUNaLHVGQUFlLElBQUksRUFBRzs7QUFFdEIsT0FBSyxJQUFJLENBQUMsTUFBTSxFQUFHO0FBQ2xCLFFBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFFLGdDQUFnQyxDQUFFLENBQUM7QUFDdEQsUUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ3BDLENBQUM7R0FDRjs7O1NBR1ksdUJBQUUsUUFBUSxFQUFHO0FBQ3pCLE9BQUssUUFBUSxFQUFHO0FBQ2YsUUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUUsb0JBQW9CLENBQUUsQ0FBQztBQUMxQyxRQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUUsVUFBVSxDQUFFLENBQUM7QUFDNUMsUUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFFLFFBQVEsQ0FBRSxDQUFDO0lBQ3ZDLE1BQU07QUFDTixRQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBRSxzQkFBc0IsQ0FBRSxDQUFDO0FBQzVDLFFBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBRSxRQUFRLENBQUUsQ0FBQztBQUMxQyxRQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUUsVUFBVSxDQUFFLENBQUM7SUFDekM7R0FDRDs7Ozs7VUF2QmtCLEtBQUs7Ozs7OzBCQUZaLGlCQUFpQjtBQUFqQixrQkFBaUIsR0FEN0IsdUNBQW9CLHFCQUFVLGVBQWUsWUFBVSxDQUMzQyxpQkFBaUIsS0FBakIsaUJBQWlCO1FBQWpCLGlCQUFpQiIsImZpbGUiOiJlbGVtZW50cy91aS1sb2FkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIExvYWRlciAtIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vZWxlbWVudHMvbG9hZGVyLmh0bWxcbiAqL1xuXG5pbXBvcnQge2NvbnN0YW50c30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7VUlBdHRyaWJ1dGV9IGZyb20gJy4uL3VpLWF0dHJpYnV0ZSc7XG5pbXBvcnQge2N1c3RvbUF0dHJpYnV0ZSwgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1sb2FkZXJgIClcbmV4cG9ydCBjbGFzcyBVSUxvYWRlckF0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGUgYWN0aXZlID0gZmFsc2U7XG5cblxuXHRiaW5kKCAuLi5hcmdzICkge1xuXHRcdHN1cGVyLmJpbmQoIC4uLmFyZ3MgKTtcblxuXHRcdGlmICggdGhpcy5hY3RpdmUgKSB7XG5cdFx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggXCJMb2FkZXIgaXMgc3RhcnRpbmcgb3V0IGFjdGl2ZS5cIiApO1xuXHRcdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG5cdFx0fTtcblx0fVxuXG5cblx0YWN0aXZlQ2hhbmdlZCggbmV3VmFsdWUgKSB7XG5cdFx0aWYgKCBuZXdWYWx1ZSApIHtcblx0XHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBcIkFjdGl2YXRpbmcgbG9hZGVyLlwiICk7XG5cdFx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSggJ2Rpc2FibGVkJyApO1xuXHRcdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoICdhY3RpdmUnICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBcIkRlYWN0aXZhdGluZyBsb2FkZXIuXCIgKTtcblx0XHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCAnYWN0aXZlJyApO1xuXHRcdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoICdkaXNhYmxlZCcgKTtcblx0XHR9XG5cdH1cblxufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
