System.register(['../constants', 'aurelia-framework', '../ui-attribute'], function (_export) {
	"use strict";

	var constants, customAttribute, bindable, UIAttribute, UISidebarAttribute;

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	return {
		setters: [function (_constants) {
			constants = _constants.constants;
		}, function (_aureliaFramework) {
			customAttribute = _aureliaFramework.customAttribute;
			bindable = _aureliaFramework.bindable;
		}, function (_uiAttribute) {
			UIAttribute = _uiAttribute.UIAttribute;
		}],
		execute: function () {
			UISidebarAttribute = (function (_UIAttribute) {
				var _instanceInitializers = {};

				_inherits(UISidebarAttribute, _UIAttribute);

				function UISidebarAttribute() {
					_classCallCheck(this, _UISidebarAttribute);

					_get(Object.getPrototypeOf(_UISidebarAttribute.prototype), 'constructor', this).apply(this, arguments);

					_defineDecoratedPropertyDescriptor(this, 'context', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'events', _instanceInitializers);
				}

				_createDecoratedClass(UISidebarAttribute, [{
					key: 'attached',
					value: function attached() {
						this.logger.debug("Sidebar attached: ", this.element);
						if (this.context) {
							var contextEl = $(this.element).parent(this.context).first();
							$(this.element).sidebar({ context: contextEl });
						}

						if (this.events) {
							var contextEl = $(this.element).parent(this.events).first();
							$(this.element).sidebar('attach events', contextEl);
						}
					}
				}, {
					key: 'toggle',
					value: function toggle() {
						$(this.element).sidebar('toggle');
					}
				}, {
					key: 'context',
					decorators: [bindable],
					initializer: null,
					enumerable: true
				}, {
					key: 'events',
					decorators: [bindable],
					initializer: null,
					enumerable: true
				}], null, _instanceInitializers);

				var _UISidebarAttribute = UISidebarAttribute;
				UISidebarAttribute = customAttribute('ui-sidebar')(UISidebarAttribute) || UISidebarAttribute;
				return UISidebarAttribute;
			})(UIAttribute);

			_export('UISidebarAttribute', UISidebarAttribute);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdWktc2lkZWJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsYUFBWSxDQUFDOzt3REFZQSxrQkFBa0I7Ozs7Ozs7Ozs7Ozs7OzBCQU52QixTQUFTOzt1Q0FDVCxlQUFlO2dDQUFFLFFBQVE7OzhCQUN6QixXQUFXOzs7QUFJTixxQkFBa0I7OztjQUFsQixrQkFBa0I7O2FBQWxCLGtCQUFrQjs7Ozs7Ozs7OzswQkFBbEIsa0JBQWtCOztZQU10QixvQkFBRztBQUNWLFVBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFFLG9CQUFvQixFQUFFLElBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQztBQUN4RCxVQUFLLElBQUksQ0FBQyxPQUFPLEVBQUc7QUFDbkIsV0FBSSxTQUFTLEdBQUcsQ0FBQyxDQUFFLElBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQyxNQUFNLENBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2pFLFFBQUMsQ0FBRSxJQUFJLENBQUMsT0FBTyxDQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7T0FDbEQ7O0FBRUQsVUFBSyxJQUFJLENBQUMsTUFBTSxFQUFHO0FBQ2xCLFdBQUksU0FBUyxHQUFHLENBQUMsQ0FBRSxJQUFJLENBQUMsT0FBTyxDQUFFLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNoRSxRQUFDLENBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBRSxDQUFDLE9BQU8sQ0FBRSxlQUFlLEVBQUUsU0FBUyxDQUFFLENBQUM7T0FDeEQ7TUFDRDs7O1lBR0ssa0JBQUc7QUFDUixPQUFDLENBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBRSxDQUFDLE9BQU8sQ0FBRSxRQUFRLENBQUUsQ0FBQztNQUN0Qzs7O2tCQXBCQSxRQUFROzs7OztrQkFDUixRQUFROzs7Ozs4QkFIRyxrQkFBa0I7QUFBbEIsc0JBQWtCLEdBRDlCLGVBQWUsQ0FBRSxZQUFZLENBQUUsQ0FDbkIsa0JBQWtCLEtBQWxCLGtCQUFrQjtXQUFsQixrQkFBa0I7TUFBUyxXQUFXIiwiZmlsZSI6Im1vZHVsZXMvdWktc2lkZWJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogU2lkZWJhciAtIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vbW9kdWxlcy9zaWRlYmFyLmh0bWxcbiAqL1xuXG5pbXBvcnQge2NvbnN0YW50c30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7Y3VzdG9tQXR0cmlidXRlLCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtVSUF0dHJpYnV0ZX0gZnJvbSAnLi4vdWktYXR0cmlidXRlJztcblxuXG5AY3VzdG9tQXR0cmlidXRlKCAndWktc2lkZWJhcicgKVxuZXhwb3J0IGNsYXNzIFVJU2lkZWJhckF0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGUgY29udGV4dDtcblx0QGJpbmRhYmxlIGV2ZW50cztcblxuXG5cdGF0dGFjaGVkKCkge1xuXHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBcIlNpZGViYXIgYXR0YWNoZWQ6IFwiLCB0aGlzLmVsZW1lbnQgKTtcblx0XHRpZiAoIHRoaXMuY29udGV4dCApIHtcblx0XHRcdGxldCBjb250ZXh0RWwgPSAkKCB0aGlzLmVsZW1lbnQgKS5wYXJlbnQoIHRoaXMuY29udGV4dCApLmZpcnN0KCk7XG5cdFx0XHQkKCB0aGlzLmVsZW1lbnQgKS5zaWRlYmFyKHsgY29udGV4dDogY29udGV4dEVsIH0pO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5ldmVudHMgKSB7XG5cdFx0XHRsZXQgY29udGV4dEVsID0gJCggdGhpcy5lbGVtZW50ICkucGFyZW50KCB0aGlzLmV2ZW50cyApLmZpcnN0KCk7XG5cdFx0XHQkKCB0aGlzLmVsZW1lbnQgKS5zaWRlYmFyKCAnYXR0YWNoIGV2ZW50cycsIGNvbnRleHRFbCApO1xuXHRcdH1cblx0fVxuXG5cblx0dG9nZ2xlKCkge1xuXHRcdCQoIHRoaXMuZWxlbWVudCApLnNpZGViYXIoICd0b2dnbGUnICk7XG5cdH1cblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
