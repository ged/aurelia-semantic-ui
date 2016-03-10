System.register(['aurelia-framework'], function (_export) {
	"use strict";

	var LogManager, customElement, computedFrom, inject, bindable, ElementCardElement;

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

	return {
		setters: [function (_aureliaFramework) {
			LogManager = _aureliaFramework.LogManager;
			customElement = _aureliaFramework.customElement;
			computedFrom = _aureliaFramework.computedFrom;
			inject = _aureliaFramework.inject;
			bindable = _aureliaFramework.bindable;
		}],
		execute: function () {
			ElementCardElement = (function () {
				var _instanceInitializers = {};
				var _instanceInitializers = {};

				_createDecoratedClass(ElementCardElement, [{
					key: 'parentSection',
					decorators: [bindable],
					initializer: null,
					enumerable: true
				}], null, _instanceInitializers);

				function ElementCardElement(element) {
					_classCallCheck(this, _ElementCardElement);

					_defineDecoratedPropertyDescriptor(this, 'parentSection', _instanceInitializers);

					this.element = element;
					this.logger = LogManager.getLogger('element-card');
					this.status = null;
				}

				_createDecoratedClass(ElementCardElement, [{
					key: 'bind',
					value: function bind(context) {
						this.parentSection = context;
						this.status = context.status;
					}
				}, {
					key: 'defaultUrl',
					get: function get() {
						return 'http://semantic-ui.com/' + this.parentSection.category + 's/' + this.parentSection.name + '.html';
					}
				}, {
					key: 'supportedTypes',
					get: function get() {
						if (!this.parentSection.types) {
							return [];
						}
						return this.parentSection.types.split(/\s*,\s*/);
					}
				}, {
					key: 'supportedVariations',
					get: function get() {
						if (!this.parentSection.variations) {
							return [];
						}
						return this.parentSection.variations.split(/\s*,\s*/);
					}
				}, {
					key: 'statusIcon',
					decorators: [computedFrom('status')],
					get: function get() {
						switch (this.status) {
							case 'incomplete':
								return 'warning sign';
								break;
							default:
								return 'help';
						}
					}
				}], null, _instanceInitializers);

				var _ElementCardElement = ElementCardElement;
				ElementCardElement = inject(Element)(ElementCardElement) || ElementCardElement;
				ElementCardElement = customElement('element-card')(ElementCardElement) || ElementCardElement;
				return ElementCardElement;
			})();

			_export('ElementCardElement', ElementCardElement);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZWxlbWVudC1jYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxhQUFZLENBQUM7O2dFQU1BLGtCQUFrQjs7Ozs7Ozs7OztrQ0FKdkIsVUFBVTtxQ0FBRSxhQUFhO29DQUFFLFlBQVk7OEJBQUUsTUFBTTtnQ0FBRSxRQUFROzs7QUFJcEQscUJBQWtCOzs7OzBCQUFsQixrQkFBa0I7O2tCQUU3QixRQUFROzs7OztBQUVFLGFBSkMsa0JBQWtCLENBSWpCLE9BQU8sRUFBRzs7Ozs7QUFDdEIsU0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsU0FBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFFLGNBQWMsQ0FBRSxDQUFDO0FBQ3JELFNBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0tBQ25COzswQkFSVyxrQkFBa0I7O1lBVzFCLGNBQUUsT0FBTyxFQUFHO0FBQ2YsVUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7QUFDN0IsVUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO01BQzdCOzs7VUFFYSxlQUFHO0FBQ2hCLHlDQUFpQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsVUFBSyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksV0FBUTtNQUNoRzs7O1VBRWlCLGVBQUc7QUFDcEIsVUFBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFHO0FBQUUsY0FBTyxFQUFFLENBQUE7T0FBRTtBQUM5QyxhQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBRSxTQUFTLENBQUUsQ0FBQztNQUNuRDs7O1VBRXNCLGVBQUc7QUFDekIsVUFBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFHO0FBQUUsY0FBTyxFQUFFLENBQUE7T0FBRTtBQUNuRCxhQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBRSxTQUFTLENBQUUsQ0FBQztNQUN4RDs7O2tCQUVBLFlBQVksQ0FBRSxRQUFRLENBQUU7VUFDWCxlQUFHO0FBQ2hCLGNBQVEsSUFBSSxDQUFDLE1BQU07QUFDbEIsWUFBSyxZQUFZO0FBQ2hCLGVBQU8sY0FBYyxDQUFDO0FBQ3RCLGNBQU07QUFBQSxBQUNQO0FBQ0MsZUFBTyxNQUFNLENBQUM7QUFBQSxPQUNmO01BQ0Q7Ozs4QkF2Q1csa0JBQWtCO0FBQWxCLHNCQUFrQixHQUQ5QixNQUFNLENBQUUsT0FBTyxDQUFFLENBQ0wsa0JBQWtCLEtBQWxCLGtCQUFrQjtBQUFsQixzQkFBa0IsR0FGOUIsYUFBYSxDQUFFLGNBQWMsQ0FBRSxDQUVuQixrQkFBa0IsS0FBbEIsa0JBQWtCO1dBQWxCLGtCQUFrQiIsImZpbGUiOiJjb21wb25lbnRzL2VsZW1lbnQtY2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7TG9nTWFuYWdlciwgY3VzdG9tRWxlbWVudCwgY29tcHV0ZWRGcm9tLCBpbmplY3QsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBjdXN0b21FbGVtZW50KCAnZWxlbWVudC1jYXJkJyApXG5AaW5qZWN0KCBFbGVtZW50IClcbmV4cG9ydCBjbGFzcyBFbGVtZW50Q2FyZEVsZW1lbnQge1xuXG5cdEBiaW5kYWJsZSBwYXJlbnRTZWN0aW9uO1xuXG5cdGNvbnN0cnVjdG9yKCBlbGVtZW50ICkge1xuXHRcdHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG5cdFx0dGhpcy5sb2dnZXIgPSBMb2dNYW5hZ2VyLmdldExvZ2dlciggJ2VsZW1lbnQtY2FyZCcgKTtcblx0XHR0aGlzLnN0YXR1cyA9IG51bGw7XG5cdH1cblxuXG5cdGJpbmQoIGNvbnRleHQgKSB7XG5cdFx0dGhpcy5wYXJlbnRTZWN0aW9uID0gY29udGV4dDtcblx0XHR0aGlzLnN0YXR1cyA9IGNvbnRleHQuc3RhdHVzO1xuXHR9XG5cblx0Z2V0IGRlZmF1bHRVcmwoKSB7XG5cdFx0cmV0dXJuIGBodHRwOi8vc2VtYW50aWMtdWkuY29tLyR7dGhpcy5wYXJlbnRTZWN0aW9uLmNhdGVnb3J5fXMvJHt0aGlzLnBhcmVudFNlY3Rpb24ubmFtZX0uaHRtbGA7XG5cdH1cblxuXHRnZXQgc3VwcG9ydGVkVHlwZXMoKSB7XG5cdFx0aWYgKCAhdGhpcy5wYXJlbnRTZWN0aW9uLnR5cGVzICkgeyByZXR1cm4gW10gfVxuXHRcdHJldHVybiB0aGlzLnBhcmVudFNlY3Rpb24udHlwZXMuc3BsaXQoIC9cXHMqLFxccyovICk7XG5cdH1cblxuXHRnZXQgc3VwcG9ydGVkVmFyaWF0aW9ucygpIHtcblx0XHRpZiAoICF0aGlzLnBhcmVudFNlY3Rpb24udmFyaWF0aW9ucyApIHsgcmV0dXJuIFtdIH1cblx0XHRyZXR1cm4gdGhpcy5wYXJlbnRTZWN0aW9uLnZhcmlhdGlvbnMuc3BsaXQoIC9cXHMqLFxccyovICk7XG5cdH1cblxuXHRAY29tcHV0ZWRGcm9tKCAnc3RhdHVzJyApXG5cdGdldCBzdGF0dXNJY29uKCkge1xuXHRcdHN3aXRjaCggdGhpcy5zdGF0dXMgKSB7XG5cdFx0XHRjYXNlICdpbmNvbXBsZXRlJzpcblx0XHRcdFx0cmV0dXJuICd3YXJuaW5nIHNpZ24nO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiAnaGVscCc7XG5cdFx0fVxuXHR9XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
