define(['exports', '../constants', '../ui-attribute', 'aurelia-framework'], function (exports, _constants, _uiAttribute, _aureliaFramework) {
	"use strict";

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWxvYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsYUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0tBV0EsaUJBQWlCOzs7WUFBakIsaUJBQWlCOztXQUFqQixpQkFBaUI7Ozs7Ozs7O3dCQUFqQixpQkFBaUI7O1VBS3pCLGdCQUFZO3NDQUFQLElBQUk7QUFBSixTQUFJOzs7QUFDWix3RkFBZSxJQUFJLEVBQUc7O0FBRXRCLFFBQUssSUFBSSxDQUFDLE1BQU0sRUFBRztBQUNsQixTQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBRSxnQ0FBZ0MsQ0FBRSxDQUFDO0FBQ3RELFNBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtLQUNwQyxDQUFDO0lBQ0Y7OztVQUdZLHVCQUFFLFFBQVEsRUFBRztBQUN6QixRQUFLLFFBQVEsRUFBRztBQUNmLFNBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFFLG9CQUFvQixDQUFFLENBQUM7QUFDMUMsU0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFFLFVBQVUsQ0FBRSxDQUFDO0FBQzVDLFNBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBRSxRQUFRLENBQUUsQ0FBQztLQUN2QyxNQUFNO0FBQ04sU0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUUsc0JBQXNCLENBQUUsQ0FBQztBQUM1QyxTQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUUsUUFBUSxDQUFFLENBQUM7QUFDMUMsU0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFFLFVBQVUsQ0FBRSxDQUFDO0tBQ3pDO0lBQ0Q7OztrQ0E1QnVCLFFBQVE7O1dBS2IsS0FBSzs7Ozs7MkJBRlosaUJBQWlCO0FBQWpCLG1CQUFpQixHQUQ3QixzQkFGTyxlQUFlLEVBRUYsV0FKYixTQUFTLENBSWMsZUFBZSxZQUFVLENBQzNDLGlCQUFpQixLQUFqQixpQkFBaUI7U0FBakIsaUJBQWlCO2lCQUp0QixXQUFXIiwiZmlsZSI6ImVsZW1lbnRzL3VpLWxvYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogTG9hZGVyIC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9lbGVtZW50cy9sb2FkZXIuaHRtbFxuICovXG5cbmltcG9ydCB7Y29uc3RhbnRzfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtVSUF0dHJpYnV0ZX0gZnJvbSAnLi4vdWktYXR0cmlidXRlJztcbmltcG9ydCB7Y3VzdG9tQXR0cmlidXRlLCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AY3VzdG9tQXR0cmlidXRlKCBgJHtjb25zdGFudHMuYXR0cmlidXRlUHJlZml4fWxvYWRlcmAgKVxuZXhwb3J0IGNsYXNzIFVJTG9hZGVyQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG5cdEBiaW5kYWJsZSBhY3RpdmUgPSBmYWxzZTtcblxuXG5cdGJpbmQoIC4uLmFyZ3MgKSB7XG5cdFx0c3VwZXIuYmluZCggLi4uYXJncyApO1xuXG5cdFx0aWYgKCB0aGlzLmFjdGl2ZSApIHtcblx0XHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBcIkxvYWRlciBpcyBzdGFydGluZyBvdXQgYWN0aXZlLlwiICk7XG5cdFx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcblx0XHR9O1xuXHR9XG5cblxuXHRhY3RpdmVDaGFuZ2VkKCBuZXdWYWx1ZSApIHtcblx0XHRpZiAoIG5ld1ZhbHVlICkge1xuXHRcdFx0dGhpcy5sb2dnZXIuZGVidWcoIFwiQWN0aXZhdGluZyBsb2FkZXIuXCIgKTtcblx0XHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCAnZGlzYWJsZWQnICk7XG5cdFx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ2FjdGl2ZScgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5sb2dnZXIuZGVidWcoIFwiRGVhY3RpdmF0aW5nIGxvYWRlci5cIiApO1xuXHRcdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoICdhY3RpdmUnICk7XG5cdFx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ2Rpc2FibGVkJyApO1xuXHRcdH1cblx0fVxuXG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
