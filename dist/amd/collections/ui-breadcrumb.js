define(['exports', '../constants', '../ui-attribute', 'aurelia-framework'], function (exports, _constants, _uiAttribute, _aureliaFramework) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Breadcrumb - http://semantic-ui.com/collections/breadcrumb.html
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.UIBreadcrumbDividerAttribute = exports.UIBreadcrumbSectionAttribute = exports.UIBreadcrumbAttribute = undefined;

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

	var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _dec4, _class4, _desc2, _value2, _class5, _descriptor4, _dec5, _class7;

	let UIBreadcrumbAttribute = exports.UIBreadcrumbAttribute = (_dec = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }breadcrumb`), _dec2 = (0, _uiAttribute.bindableEnum)('small', 'large', 'huge'), _dec3 = (0, _aureliaFramework.children)('[ui-breadcrumb-section]'), _dec(_class = (_class2 = class UIBreadcrumbAttribute extends _uiAttribute.UIAttribute {
		constructor(...args) {
			var _temp;

			return _temp = super(...args), _initDefineProp(this, 'divider', _descriptor, this), _initDefineProp(this, 'size', _descriptor2, this), _initDefineProp(this, 'sections', _descriptor3, this), _temp;
		}

		bind() {
			super.bind();

			if (this.divider) {
				let dividerNode = null;

				// Icon divider (<i>)
				if (this.divider.match(/\bicon\b/)) {
					this.logger.debug(`Icon divider (${ this.divider })`);
					dividerNode = document.createElement('i');
					dividerNode.classList.add(...this.divider.split(/\s+/));
					dividerNode.classList.add('divider');
				}

				// Text divider (<span>)
				else {
						this.logger.debug(`Text divider (${ this.divider })`);
						let content = document.createTextNode(this.divider);
						dividerNode = document.createElement('span');
						dividerNode.classList.add('divider');
						dividerNode.appendChild(content);
					}

				for (let i in this.sections) {
					if (i > 0) {
						let section = this.sections[i];
						this.element.insertBefore(dividerNode.cloneNode(true), section);
					}
				}
			}
		}

	}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'divider', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: null
	}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'size', [_dec2], {
		enumerable: true,
		initializer: null
	}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'sections', [_dec3], {
		enumerable: true,
		initializer: null
	})), _class2)) || _class);
	let UIBreadcrumbSectionAttribute = exports.UIBreadcrumbSectionAttribute = (_dec4 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }breadcrumb-section`), _dec4(_class4 = (_class5 = class UIBreadcrumbSectionAttribute extends _uiAttribute.UIAttribute {
		constructor(...args) {
			var _temp2;

			return _temp2 = super(...args), _initDefineProp(this, 'active', _descriptor4, this), _temp2;
		}

		bind() {
			// No super
			this.element.classList.add('section');
		}

	}, (_descriptor4 = _applyDecoratedDescriptor(_class5.prototype, 'active', [_uiAttribute.bindableToggle], {
		enumerable: true,
		initializer: function () {
			return false;
		}
	})), _class5)) || _class4);
	let UIBreadcrumbDividerAttribute = exports.UIBreadcrumbDividerAttribute = (_dec5 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }breadcrumb-divider`), _dec5(_class7 = class UIBreadcrumbDividerAttribute extends _uiAttribute.UIAttribute {

		bind() {
			// No super
			if (this.element.classList) {
				this.element.classList.add('divider');
			}
		}

	}) || _class7);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL3VpLWJyZWFkY3J1bWIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQVNhLHFCLFdBQUEscUIsV0FEWix1Q0FBa0IsSUFBRSxxQkFBVSxlQUFnQixhQUE5QyxDLFVBSUMsK0JBQWEsT0FBYixFQUFzQixPQUF0QixFQUErQixNQUEvQixDLFVBQ0EsZ0NBQVUseUJBQVYsQywyQkFKSyxNQUFNLHFCQUFOLGtDQUFnRDtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFPdEQsU0FBTztBQUNOLFNBQU0sSUFBTjs7QUFFQSxPQUFLLEtBQUssT0FBVixFQUFvQjtBQUNuQixRQUFJLGNBQWMsSUFBbEI7O0FBRUE7QUFDQSxRQUFLLEtBQUssT0FBTCxDQUFhLEtBQWIsQ0FBbUIsVUFBbkIsQ0FBTCxFQUFzQztBQUNyQyxVQUFLLE1BQUwsQ0FBWSxLQUFaLENBQW9CLGtCQUFnQixLQUFLLE9BQVEsSUFBakQ7QUFDQSxtQkFBYyxTQUFTLGFBQVQsQ0FBd0IsR0FBeEIsQ0FBZDtBQUNBLGlCQUFZLFNBQVosQ0FBc0IsR0FBdEIsQ0FBMkIsR0FBRyxLQUFLLE9BQUwsQ0FBYSxLQUFiLENBQW1CLEtBQW5CLENBQTlCO0FBQ0EsaUJBQVksU0FBWixDQUFzQixHQUF0QixDQUEyQixTQUEzQjtBQUNBOztBQUVEO0FBUEEsU0FRSztBQUNKLFdBQUssTUFBTCxDQUFZLEtBQVosQ0FBb0Isa0JBQWdCLEtBQUssT0FBUSxJQUFqRDtBQUNBLFVBQUksVUFBVSxTQUFTLGNBQVQsQ0FBeUIsS0FBSyxPQUE5QixDQUFkO0FBQ0Esb0JBQWMsU0FBUyxhQUFULENBQXdCLE1BQXhCLENBQWQ7QUFDQSxrQkFBWSxTQUFaLENBQXNCLEdBQXRCLENBQTJCLFNBQTNCO0FBQ0Esa0JBQVksV0FBWixDQUF5QixPQUF6QjtBQUNBOztBQUVELFNBQU0sSUFBSSxDQUFWLElBQWUsS0FBSyxRQUFwQixFQUErQjtBQUM5QixTQUFLLElBQUksQ0FBVCxFQUFhO0FBQ1osVUFBSSxVQUFVLEtBQUssUUFBTCxDQUFlLENBQWYsQ0FBZDtBQUNBLFdBQUssT0FBTCxDQUFhLFlBQWIsQ0FBMkIsWUFBWSxTQUFaLENBQXNCLElBQXRCLENBQTNCLEVBQXdELE9BQXhEO0FBQ0E7QUFDRDtBQUNEO0FBQ0Q7O0FBckNxRCxFOzs7Ozs7Ozs7O0tBOEMxQyw0QixXQUFBLDRCLFlBRFosdUNBQWtCLElBQUUscUJBQVUsZUFBZ0IscUJBQTlDLEMsNkJBQ00sTUFBTSw0QkFBTixrQ0FBdUQ7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBSTdELFNBQU87QUFDTjtBQUNBLFFBQUssT0FBTCxDQUFhLFNBQWIsQ0FBdUIsR0FBdkIsQ0FBNEIsU0FBNUI7QUFDQTs7QUFQNEQsRTs7O1VBRXBDLEs7OztLQWNiLDRCLFdBQUEsNEIsWUFEWix1Q0FBa0IsSUFBRSxxQkFBVSxlQUFnQixxQkFBOUMsQyxrQkFDTSxNQUFNLDRCQUFOLGtDQUF1RDs7QUFFN0QsU0FBTztBQUNOO0FBQ0EsT0FBSyxLQUFLLE9BQUwsQ0FBYSxTQUFsQixFQUE4QjtBQUM3QixTQUFLLE9BQUwsQ0FBYSxTQUFiLENBQXVCLEdBQXZCLENBQTRCLFNBQTVCO0FBQ0E7QUFDRDs7QUFQNEQsRSIsImZpbGUiOiJjb2xsZWN0aW9ucy91aS1icmVhZGNydW1iLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBCcmVhZGNydW1iIC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9jb2xsZWN0aW9ucy9icmVhZGNydW1iLmh0bWxcbiAqL1xuXG5pbXBvcnQge2NvbnN0YW50c30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7VUlBdHRyaWJ1dGUsIGJpbmRhYmxlVG9nZ2xlLCBiaW5kYWJsZUVudW19IGZyb20gJy4uL3VpLWF0dHJpYnV0ZSc7XG5pbXBvcnQge2luamVjdCwgY3VzdG9tQXR0cmlidXRlLCBjaGlsZHJlbiwgYmluZGFibGUsIExvZ01hbmFnZXJ9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1icmVhZGNydW1iYCApXG5leHBvcnQgY2xhc3MgVUlCcmVhZGNydW1iQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG5cdEBiaW5kYWJsZSBkaXZpZGVyO1xuXHRAYmluZGFibGVFbnVtKCdzbWFsbCcsICdsYXJnZScsICdodWdlJykgc2l6ZTtcblx0QGNoaWxkcmVuKCAnW3VpLWJyZWFkY3J1bWItc2VjdGlvbl0nICkgc2VjdGlvbnM7XG5cblxuXHRiaW5kKCkge1xuXHRcdHN1cGVyLmJpbmQoKTtcblxuXHRcdGlmICggdGhpcy5kaXZpZGVyICkge1xuXHRcdFx0bGV0IGRpdmlkZXJOb2RlID0gbnVsbDtcblxuXHRcdFx0Ly8gSWNvbiBkaXZpZGVyICg8aT4pXG5cdFx0XHRpZiAoIHRoaXMuZGl2aWRlci5tYXRjaCgvXFxiaWNvblxcYi8pICkge1xuXHRcdFx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggYEljb24gZGl2aWRlciAoJHt0aGlzLmRpdmlkZXJ9KWAgKTtcblx0XHRcdFx0ZGl2aWRlck5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnaScgKTtcblx0XHRcdFx0ZGl2aWRlck5vZGUuY2xhc3NMaXN0LmFkZCggLi4udGhpcy5kaXZpZGVyLnNwbGl0KC9cXHMrLykgKTtcblx0XHRcdFx0ZGl2aWRlck5vZGUuY2xhc3NMaXN0LmFkZCggJ2RpdmlkZXInICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFRleHQgZGl2aWRlciAoPHNwYW4+KVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBgVGV4dCBkaXZpZGVyICgke3RoaXMuZGl2aWRlcn0pYCApO1xuXHRcdFx0XHRsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCB0aGlzLmRpdmlkZXIgKTtcblx0XHRcdFx0ZGl2aWRlck5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnc3BhbicgKTtcblx0XHRcdFx0ZGl2aWRlck5vZGUuY2xhc3NMaXN0LmFkZCggJ2RpdmlkZXInICk7XG5cdFx0XHRcdGRpdmlkZXJOb2RlLmFwcGVuZENoaWxkKCBjb250ZW50ICk7XG5cdFx0XHR9XG5cblx0XHRcdGZvciAoIGxldCBpIGluIHRoaXMuc2VjdGlvbnMgKSB7XG5cdFx0XHRcdGlmICggaSA+IDAgKSB7XG5cdFx0XHRcdFx0bGV0IHNlY3Rpb24gPSB0aGlzLnNlY3Rpb25zWyBpIF07XG5cdFx0XHRcdFx0dGhpcy5lbGVtZW50Lmluc2VydEJlZm9yZSggZGl2aWRlck5vZGUuY2xvbmVOb2RlKHRydWUpLCBzZWN0aW9uICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxufVxuXG5cbi8qKlxuICogdWktYnJlYWRjcnVtYi1zZWN0aW9uXG4gKi9cbkBjdXN0b21BdHRyaWJ1dGUoIGAke2NvbnN0YW50cy5hdHRyaWJ1dGVQcmVmaXh9YnJlYWRjcnVtYi1zZWN0aW9uYCApXG5leHBvcnQgY2xhc3MgVUlCcmVhZGNydW1iU2VjdGlvbkF0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGVUb2dnbGUgYWN0aXZlID0gZmFsc2U7XG5cblx0YmluZCgpIHtcblx0XHQvLyBObyBzdXBlclxuXHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAnc2VjdGlvbicgKTtcblx0fVxuXG59XG5cblxuLyoqXG4gKiB1aS1icmVhZGNydW1iLWRpdmlkZXJcbiAqL1xuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1icmVhZGNydW1iLWRpdmlkZXJgIClcbmV4cG9ydCBjbGFzcyBVSUJyZWFkY3J1bWJEaXZpZGVyQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG5cdGJpbmQoKSB7XG5cdFx0Ly8gTm8gc3VwZXJcblx0XHRpZiAoIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QgKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ2RpdmlkZXInICk7XG5cdFx0fVxuXHR9XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
