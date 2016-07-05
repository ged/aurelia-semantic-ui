define(['exports', '../constants', '../ui-base', 'aurelia-framework'], function (exports, _constants, _uiBase, _aureliaFramework) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Breadcrumb - http://semantic-ui.com/collections/breadcrumb.html
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.SemanticUIBreadcrumbDivider = exports.SemanticUIBreadcrumbSection = exports.SemanticUIBreadcrumbAttribute = exports.SemanticUIBreadcrumbElement = undefined;

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

	var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _dec4, _dec5, _dec6, _class4, _desc2, _value2, _class5, _descriptor4, _descriptor5, _descriptor6, _dec7, _class7, _desc3, _value3, _class8, _descriptor7, _dec8, _class10;

	function addDividerNodes(element, divider) {
		let dividerNode = null;
		let sections = element.querySelectorAll('[ui-breadcrumb-section]');

		if (sections.length === 0) {
			return;
		}

		// Icon divider (<i>)
		if (divider.match(/\bicon\b/)) {
			dividerNode = document.createElement('i');
			dividerNode.classList.add(...divider.split(/\s+/));
			dividerNode.classList.add('divider');
		}

		// Text divider (<span>)
		else {
				let content = document.createTextNode(divider);
				dividerNode = document.createElement('span');
				dividerNode.classList.add('divider');
				dividerNode.appendChild(content);
			}

		for (let i in sections) {
			if (i > 0) {
				let section = sections[i];
				element.insertBefore(dividerNode.cloneNode(true), section);
			}
		}
	}

	let SemanticUIBreadcrumbElement = exports.SemanticUIBreadcrumbElement = (_dec = (0, _aureliaFramework.customElement)(`${ _constants.constants.elementPrefix }breadcrumb`), _dec2 = (0, _uiBase.bindableEnum)(_constants.constants.VALID_SIZES), _dec3 = (0, _aureliaFramework.children)('[ui-breadcrumb-section]'), _dec(_class = (_class2 = class SemanticUIBreadcrumbElement extends _uiBase.SemanticUIElement {
		constructor(...args) {
			var _temp;

			return _temp = super(...args), _initDefineProp(this, 'divider', _descriptor, this), _initDefineProp(this, 'size', _descriptor2, this), _initDefineProp(this, 'sections', _descriptor3, this), _temp;
		}

		attached(...args) {
			this.logger.debug("Attached!");

			if (this.divider) {
				let div = this.element.querySelector('div');
				addDividerNodes(div, this.divider);
			}

			this.logger.debug("Done with attached().");
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
	let SemanticUIBreadcrumbAttribute = exports.SemanticUIBreadcrumbAttribute = (_dec4 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }breadcrumb`), _dec5 = (0, _uiBase.bindableEnum)(_constants.constants.VALID_SIZES), _dec6 = (0, _aureliaFramework.children)('[ui-breadcrumb-section]'), _dec4(_class4 = (_class5 = class SemanticUIBreadcrumbAttribute extends _uiBase.SemanticUIAttribute {
		constructor(...args) {
			var _temp2;

			return _temp2 = super(...args), _initDefineProp(this, 'divider', _descriptor4, this), _initDefineProp(this, 'size', _descriptor5, this), _initDefineProp(this, 'sections', _descriptor6, this), _temp2;
		}

		attached(...args) {
			this.logger.debug("Attached!");

			if (this.divider) {
				addDividerNodes(this.element, this.divider);
			}

			this.logger.debug("Done with attached().");
		}

	}, (_descriptor4 = _applyDecoratedDescriptor(_class5.prototype, 'divider', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: null
	}), _descriptor5 = _applyDecoratedDescriptor(_class5.prototype, 'size', [_dec5], {
		enumerable: true,
		initializer: null
	}), _descriptor6 = _applyDecoratedDescriptor(_class5.prototype, 'sections', [_dec6], {
		enumerable: true,
		initializer: null
	})), _class5)) || _class4);
	let SemanticUIBreadcrumbSection = exports.SemanticUIBreadcrumbSection = (_dec7 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }breadcrumb-section`), _dec7(_class7 = (_class8 = class SemanticUIBreadcrumbSection extends _uiBase.SemanticUIAttribute {
		constructor(...args) {
			var _temp3;

			return _temp3 = super(...args), _initDefineProp(this, 'active', _descriptor7, this), _temp3;
		}

		bind() {
			// No super
			this.element.classList.add('section');
		}

	}, (_descriptor7 = _applyDecoratedDescriptor(_class8.prototype, 'active', [_uiBase.bindableToggle], {
		enumerable: true,
		initializer: function () {
			return false;
		}
	})), _class8)) || _class7);
	let SemanticUIBreadcrumbDivider = exports.SemanticUIBreadcrumbDivider = (_dec8 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }breadcrumb-divider`), _dec8(_class10 = class SemanticUIBreadcrumbDivider extends _uiBase.SemanticUIAttribute {

		bind() {
			// No super
			if (this.element.classList) {
				this.element.classList.add('divider');
			}
		}

	}) || _class10);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL3VpLWJyZWFkY3J1bWIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNBLFVBQVMsZUFBVCxDQUEwQixPQUExQixFQUFtQyxPQUFuQyxFQUE2QztBQUM1QyxNQUFJLGNBQWMsSUFBbEI7QUFDQSxNQUFJLFdBQVcsUUFBUSxnQkFBUixDQUEwQix5QkFBMUIsQ0FBZjs7QUFFQSxNQUFLLFNBQVMsTUFBVCxLQUFvQixDQUF6QixFQUE2QjtBQUM1QjtBQUNBOztBQUVEO0FBQ0EsTUFBSyxRQUFRLEtBQVIsQ0FBYyxVQUFkLENBQUwsRUFBaUM7QUFDaEMsaUJBQWMsU0FBUyxhQUFULENBQXdCLEdBQXhCLENBQWQ7QUFDQSxlQUFZLFNBQVosQ0FBc0IsR0FBdEIsQ0FBMkIsR0FBRyxRQUFRLEtBQVIsQ0FBYyxLQUFkLENBQTlCO0FBQ0EsZUFBWSxTQUFaLENBQXNCLEdBQXRCLENBQTJCLFNBQTNCO0FBQ0E7O0FBRUQ7QUFOQSxPQU9LO0FBQ0osUUFBSSxVQUFVLFNBQVMsY0FBVCxDQUF5QixPQUF6QixDQUFkO0FBQ0Esa0JBQWMsU0FBUyxhQUFULENBQXdCLE1BQXhCLENBQWQ7QUFDQSxnQkFBWSxTQUFaLENBQXNCLEdBQXRCLENBQTJCLFNBQTNCO0FBQ0EsZ0JBQVksV0FBWixDQUF5QixPQUF6QjtBQUNBOztBQUVELE9BQU0sSUFBSSxDQUFWLElBQWUsUUFBZixFQUEwQjtBQUN6QixPQUFLLElBQUksQ0FBVCxFQUFhO0FBQ1osUUFBSSxVQUFVLFNBQVUsQ0FBVixDQUFkO0FBQ0EsWUFBUSxZQUFSLENBQXNCLFlBQVksU0FBWixDQUFzQixJQUF0QixDQUF0QixFQUFtRCxPQUFuRDtBQUNBO0FBQ0Q7QUFDRDs7S0FJWSwyQixXQUFBLDJCLFdBRFoscUNBQWdCLElBQUUscUJBQVUsYUFBYyxhQUExQyxDLFVBR0MsMEJBQWEscUJBQVUsV0FBdkIsQyxVQUNBLGdDQUFVLHlCQUFWLEMsMkJBSEssTUFBTSwyQkFBTixtQ0FBNEQ7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBS2xFLFdBQVUsR0FBRyxJQUFiLEVBQW9CO0FBQ25CLFFBQUssTUFBTCxDQUFZLEtBQVosQ0FBbUIsV0FBbkI7O0FBRUEsT0FBSyxLQUFLLE9BQVYsRUFBb0I7QUFDbkIsUUFBSSxNQUFNLEtBQUssT0FBTCxDQUFhLGFBQWIsQ0FBNEIsS0FBNUIsQ0FBVjtBQUNBLG9CQUFpQixHQUFqQixFQUFzQixLQUFLLE9BQTNCO0FBQ0E7O0FBRUQsUUFBSyxNQUFMLENBQVksS0FBWixDQUFtQix1QkFBbkI7QUFDQTs7QUFkaUUsRTs7Ozs7Ozs7OztLQW9CdEQsNkIsV0FBQSw2QixZQURaLHVDQUFrQixJQUFFLHFCQUFVLGVBQWdCLGFBQTlDLEMsVUFJQywwQkFBYSxxQkFBVSxXQUF2QixDLFVBQ0EsZ0NBQVUseUJBQVYsQyw2QkFKSyxNQUFNLDZCQUFOLHFDQUFnRTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFNdEUsV0FBVSxHQUFHLElBQWIsRUFBb0I7QUFDbkIsUUFBSyxNQUFMLENBQVksS0FBWixDQUFtQixXQUFuQjs7QUFFQSxPQUFLLEtBQUssT0FBVixFQUFvQjtBQUNuQixvQkFBaUIsS0FBSyxPQUF0QixFQUErQixLQUFLLE9BQXBDO0FBQ0E7O0FBRUQsUUFBSyxNQUFMLENBQVksS0FBWixDQUFtQix1QkFBbkI7QUFDQTs7QUFkcUUsRTs7Ozs7Ozs7OztLQXdCMUQsMkIsV0FBQSwyQixZQURaLHVDQUFrQixJQUFFLHFCQUFVLGVBQWdCLHFCQUE5QyxDLDZCQUNNLE1BQU0sMkJBQU4scUNBQThEO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUlwRSxTQUFPO0FBQ047QUFDQSxRQUFLLE9BQUwsQ0FBYSxTQUFiLENBQXVCLEdBQXZCLENBQTRCLFNBQTVCO0FBQ0E7O0FBUG1FLEU7OztVQUUzQyxLOzs7S0FjYiwyQixXQUFBLDJCLFlBRFosdUNBQWtCLElBQUUscUJBQVUsZUFBZ0IscUJBQTlDLEMsbUJBQ00sTUFBTSwyQkFBTixxQ0FBOEQ7O0FBRXBFLFNBQU87QUFDTjtBQUNBLE9BQUssS0FBSyxPQUFMLENBQWEsU0FBbEIsRUFBOEI7QUFDN0IsU0FBSyxPQUFMLENBQWEsU0FBYixDQUF1QixHQUF2QixDQUE0QixTQUE1QjtBQUNBO0FBQ0Q7O0FBUG1FLEUiLCJmaWxlIjoiY29sbGVjdGlvbnMvdWktYnJlYWRjcnVtYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQnJlYWRjcnVtYiAtIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vY29sbGVjdGlvbnMvYnJlYWRjcnVtYi5odG1sXG4gKi9cblxuaW1wb3J0IHtjb25zdGFudHN9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge1NlbWFudGljVUlFbGVtZW50LCBTZW1hbnRpY1VJQXR0cmlidXRlLCBiaW5kYWJsZVRvZ2dsZSwgYmluZGFibGVFbnVtfSBmcm9tICcuLi91aS1iYXNlJztcbmltcG9ydCB7aW5qZWN0LCBjdXN0b21BdHRyaWJ1dGUsIGN1c3RvbUVsZW1lbnQsIGNoaWxkcmVuLCBiaW5kYWJsZSwgTG9nTWFuYWdlcn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5cbmZ1bmN0aW9uIGFkZERpdmlkZXJOb2RlcyggZWxlbWVudCwgZGl2aWRlciApIHtcblx0bGV0IGRpdmlkZXJOb2RlID0gbnVsbDtcblx0bGV0IHNlY3Rpb25zID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnW3VpLWJyZWFkY3J1bWItc2VjdGlvbl0nICk7XG5cblx0aWYgKCBzZWN0aW9ucy5sZW5ndGggPT09IDAgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gSWNvbiBkaXZpZGVyICg8aT4pXG5cdGlmICggZGl2aWRlci5tYXRjaCgvXFxiaWNvblxcYi8pICkge1xuXHRcdGRpdmlkZXJOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2knICk7XG5cdFx0ZGl2aWRlck5vZGUuY2xhc3NMaXN0LmFkZCggLi4uZGl2aWRlci5zcGxpdCgvXFxzKy8pICk7XG5cdFx0ZGl2aWRlck5vZGUuY2xhc3NMaXN0LmFkZCggJ2RpdmlkZXInICk7XG5cdH1cblxuXHQvLyBUZXh0IGRpdmlkZXIgKDxzcGFuPilcblx0ZWxzZSB7XG5cdFx0bGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSggZGl2aWRlciApO1xuXHRcdGRpdmlkZXJOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3NwYW4nICk7XG5cdFx0ZGl2aWRlck5vZGUuY2xhc3NMaXN0LmFkZCggJ2RpdmlkZXInICk7XG5cdFx0ZGl2aWRlck5vZGUuYXBwZW5kQ2hpbGQoIGNvbnRlbnQgKTtcblx0fVxuXG5cdGZvciAoIGxldCBpIGluIHNlY3Rpb25zICkge1xuXHRcdGlmICggaSA+IDAgKSB7XG5cdFx0XHRsZXQgc2VjdGlvbiA9IHNlY3Rpb25zWyBpIF07XG5cdFx0XHRlbGVtZW50Lmluc2VydEJlZm9yZSggZGl2aWRlck5vZGUuY2xvbmVOb2RlKHRydWUpLCBzZWN0aW9uICk7XG5cdFx0fVxuXHR9XG59XG5cblxuQGN1c3RvbUVsZW1lbnQoIGAke2NvbnN0YW50cy5lbGVtZW50UHJlZml4fWJyZWFkY3J1bWJgIClcbmV4cG9ydCBjbGFzcyBTZW1hbnRpY1VJQnJlYWRjcnVtYkVsZW1lbnQgZXh0ZW5kcyBTZW1hbnRpY1VJRWxlbWVudCB7XG5cdEBiaW5kYWJsZSBkaXZpZGVyO1xuXHRAYmluZGFibGVFbnVtKGNvbnN0YW50cy5WQUxJRF9TSVpFUykgc2l6ZTtcblx0QGNoaWxkcmVuKCAnW3VpLWJyZWFkY3J1bWItc2VjdGlvbl0nICkgc2VjdGlvbnM7XG5cblx0YXR0YWNoZWQoIC4uLmFyZ3MgKSB7XG5cdFx0dGhpcy5sb2dnZXIuZGVidWcoIFwiQXR0YWNoZWQhXCIgKTtcblxuXHRcdGlmICggdGhpcy5kaXZpZGVyICkge1xuXHRcdFx0bGV0IGRpdiA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCAnZGl2JyApO1xuXHRcdFx0YWRkRGl2aWRlck5vZGVzKCBkaXYsIHRoaXMuZGl2aWRlciApO1xuXHRcdH1cblxuXHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBcIkRvbmUgd2l0aCBhdHRhY2hlZCgpLlwiICk7XG5cdH1cblxufVxuXG5cbkBjdXN0b21BdHRyaWJ1dGUoIGAke2NvbnN0YW50cy5hdHRyaWJ1dGVQcmVmaXh9YnJlYWRjcnVtYmAgKVxuZXhwb3J0IGNsYXNzIFNlbWFudGljVUlCcmVhZGNydW1iQXR0cmlidXRlIGV4dGVuZHMgU2VtYW50aWNVSUF0dHJpYnV0ZSB7XG5cblx0QGJpbmRhYmxlIGRpdmlkZXI7XG5cdEBiaW5kYWJsZUVudW0oY29uc3RhbnRzLlZBTElEX1NJWkVTKSBzaXplO1xuXHRAY2hpbGRyZW4oICdbdWktYnJlYWRjcnVtYi1zZWN0aW9uXScgKSBzZWN0aW9ucztcblxuXHRhdHRhY2hlZCggLi4uYXJncyApIHtcblx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggXCJBdHRhY2hlZCFcIiApO1xuXG5cdFx0aWYgKCB0aGlzLmRpdmlkZXIgKSB7XG5cdFx0XHRhZGREaXZpZGVyTm9kZXMoIHRoaXMuZWxlbWVudCwgdGhpcy5kaXZpZGVyICk7XG5cdFx0fVxuXG5cdFx0dGhpcy5sb2dnZXIuZGVidWcoIFwiRG9uZSB3aXRoIGF0dGFjaGVkKCkuXCIgKTtcblx0fVxuXG5cbn1cblxuXG4vKipcbiAqIHVpLWJyZWFkY3J1bWItc2VjdGlvblxuICovXG5AY3VzdG9tQXR0cmlidXRlKCBgJHtjb25zdGFudHMuYXR0cmlidXRlUHJlZml4fWJyZWFkY3J1bWItc2VjdGlvbmAgKVxuZXhwb3J0IGNsYXNzIFNlbWFudGljVUlCcmVhZGNydW1iU2VjdGlvbiBleHRlbmRzIFNlbWFudGljVUlBdHRyaWJ1dGUge1xuXG5cdEBiaW5kYWJsZVRvZ2dsZSBhY3RpdmUgPSBmYWxzZTtcblxuXHRiaW5kKCkge1xuXHRcdC8vIE5vIHN1cGVyXG5cdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoICdzZWN0aW9uJyApO1xuXHR9XG5cbn1cblxuXG4vKipcbiAqIHVpLWJyZWFkY3J1bWItZGl2aWRlclxuICovXG5AY3VzdG9tQXR0cmlidXRlKCBgJHtjb25zdGFudHMuYXR0cmlidXRlUHJlZml4fWJyZWFkY3J1bWItZGl2aWRlcmAgKVxuZXhwb3J0IGNsYXNzIFNlbWFudGljVUlCcmVhZGNydW1iRGl2aWRlciBleHRlbmRzIFNlbWFudGljVUlBdHRyaWJ1dGUge1xuXG5cdGJpbmQoKSB7XG5cdFx0Ly8gTm8gc3VwZXJcblx0XHRpZiAoIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QgKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ2RpdmlkZXInICk7XG5cdFx0fVxuXHR9XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
