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

		bind(...args) {
			this.logger.debug("Bound!");
			return super.bind(...args);
		}

		attached(...args) {
			this.logger.debug("Attached!");

			if (this.divider) {
				console.log("Divider is: ", this.divider);
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

				// Have to do this for testing, as the StageComponent apparently doesn't
				// populate @children attributes
				if (!this.sections) {
					this.sections = this.element.querySelectorAll('[ui-breadcrumb-section]');
				}

				this.logger.debug("Adding divider to sections: ", this.sections);
				for (let i in this.sections) {
					if (i > 0) {
						let section = this.sections[i];
						this.element.insertBefore(dividerNode.cloneNode(true), section);
					}
				}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL3VpLWJyZWFkY3J1bWIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQVNhLHFCLFdBQUEscUIsV0FEWix1Q0FBa0IsSUFBRSxxQkFBVSxlQUFnQixhQUE5QyxDLFVBSUMsK0JBQWEsT0FBYixFQUFzQixPQUF0QixFQUErQixNQUEvQixDLFVBQ0EsZ0NBQVUseUJBQVYsQywyQkFKSyxNQUFNLHFCQUFOLGtDQUFnRDtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFPdEQsT0FBTSxHQUFHLElBQVQsRUFBZ0I7QUFDZixRQUFLLE1BQUwsQ0FBWSxLQUFaLENBQW1CLFFBQW5CO0FBQ0EsVUFBTyxNQUFNLElBQU4sQ0FBWSxHQUFHLElBQWYsQ0FBUDtBQUNBOztBQUVELFdBQVUsR0FBRyxJQUFiLEVBQW9CO0FBQ25CLFFBQUssTUFBTCxDQUFZLEtBQVosQ0FBbUIsV0FBbkI7O0FBRUEsT0FBSyxLQUFLLE9BQVYsRUFBb0I7QUFDbkIsWUFBUSxHQUFSLENBQWEsY0FBYixFQUE2QixLQUFLLE9BQWxDO0FBQ0EsUUFBSSxjQUFjLElBQWxCOztBQUVBO0FBQ0EsUUFBSyxLQUFLLE9BQUwsQ0FBYSxLQUFiLENBQW1CLFVBQW5CLENBQUwsRUFBc0M7QUFDckMsVUFBSyxNQUFMLENBQVksS0FBWixDQUFvQixrQkFBZ0IsS0FBSyxPQUFRLElBQWpEO0FBQ0EsbUJBQWMsU0FBUyxhQUFULENBQXdCLEdBQXhCLENBQWQ7QUFDQSxpQkFBWSxTQUFaLENBQXNCLEdBQXRCLENBQTJCLEdBQUcsS0FBSyxPQUFMLENBQWEsS0FBYixDQUFtQixLQUFuQixDQUE5QjtBQUNBLGlCQUFZLFNBQVosQ0FBc0IsR0FBdEIsQ0FBMkIsU0FBM0I7QUFDQTs7QUFFRDtBQVBBLFNBUUs7QUFDSixXQUFLLE1BQUwsQ0FBWSxLQUFaLENBQW9CLGtCQUFnQixLQUFLLE9BQVEsSUFBakQ7QUFDQSxVQUFJLFVBQVUsU0FBUyxjQUFULENBQXlCLEtBQUssT0FBOUIsQ0FBZDtBQUNBLG9CQUFjLFNBQVMsYUFBVCxDQUF3QixNQUF4QixDQUFkO0FBQ0Esa0JBQVksU0FBWixDQUFzQixHQUF0QixDQUEyQixTQUEzQjtBQUNBLGtCQUFZLFdBQVosQ0FBeUIsT0FBekI7QUFDQTs7QUFFRDtBQUNBO0FBQ0EsUUFBSyxDQUFDLEtBQUssUUFBWCxFQUFzQjtBQUNyQixVQUFLLFFBQUwsR0FBZ0IsS0FBSyxPQUFMLENBQWEsZ0JBQWIsQ0FBK0IseUJBQS9CLENBQWhCO0FBQ0E7O0FBRUQsU0FBSyxNQUFMLENBQVksS0FBWixDQUFtQiw4QkFBbkIsRUFBbUQsS0FBSyxRQUF4RDtBQUNBLFNBQU0sSUFBSSxDQUFWLElBQWUsS0FBSyxRQUFwQixFQUErQjtBQUM5QixTQUFLLElBQUksQ0FBVCxFQUFhO0FBQ1osVUFBSSxVQUFVLEtBQUssUUFBTCxDQUFlLENBQWYsQ0FBZDtBQUNBLFdBQUssT0FBTCxDQUFhLFlBQWIsQ0FBMkIsWUFBWSxTQUFaLENBQXNCLElBQXRCLENBQTNCLEVBQXdELE9BQXhEO0FBQ0E7QUFDRDtBQUNEOztBQUVELFFBQUssTUFBTCxDQUFZLEtBQVosQ0FBbUIsdUJBQW5CO0FBQ0E7O0FBcERxRCxFOzs7Ozs7Ozs7O0tBNkQxQyw0QixXQUFBLDRCLFlBRFosdUNBQWtCLElBQUUscUJBQVUsZUFBZ0IscUJBQTlDLEMsNkJBQ00sTUFBTSw0QkFBTixrQ0FBdUQ7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBSTdELFNBQU87QUFDTjtBQUNBLFFBQUssT0FBTCxDQUFhLFNBQWIsQ0FBdUIsR0FBdkIsQ0FBNEIsU0FBNUI7QUFDQTs7QUFQNEQsRTs7O1VBRXBDLEs7OztLQWNiLDRCLFdBQUEsNEIsWUFEWix1Q0FBa0IsSUFBRSxxQkFBVSxlQUFnQixxQkFBOUMsQyxrQkFDTSxNQUFNLDRCQUFOLGtDQUF1RDs7QUFFN0QsU0FBTztBQUNOO0FBQ0EsT0FBSyxLQUFLLE9BQUwsQ0FBYSxTQUFsQixFQUE4QjtBQUM3QixTQUFLLE9BQUwsQ0FBYSxTQUFiLENBQXVCLEdBQXZCLENBQTRCLFNBQTVCO0FBQ0E7QUFDRDs7QUFQNEQsRSIsImZpbGUiOiJjb2xsZWN0aW9ucy91aS1icmVhZGNydW1iLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBCcmVhZGNydW1iIC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9jb2xsZWN0aW9ucy9icmVhZGNydW1iLmh0bWxcbiAqL1xuXG5pbXBvcnQge2NvbnN0YW50c30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7VUlBdHRyaWJ1dGUsIGJpbmRhYmxlVG9nZ2xlLCBiaW5kYWJsZUVudW19IGZyb20gJy4uL3VpLWF0dHJpYnV0ZSc7XG5pbXBvcnQge2luamVjdCwgY3VzdG9tQXR0cmlidXRlLCBjaGlsZHJlbiwgYmluZGFibGUsIExvZ01hbmFnZXJ9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1icmVhZGNydW1iYCApXG5leHBvcnQgY2xhc3MgVUlCcmVhZGNydW1iQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG5cdEBiaW5kYWJsZSBkaXZpZGVyO1xuXHRAYmluZGFibGVFbnVtKCdzbWFsbCcsICdsYXJnZScsICdodWdlJykgc2l6ZTtcblx0QGNoaWxkcmVuKCAnW3VpLWJyZWFkY3J1bWItc2VjdGlvbl0nICkgc2VjdGlvbnM7XG5cblxuXHRiaW5kKCAuLi5hcmdzICkge1xuXHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBcIkJvdW5kIVwiICk7XG5cdFx0cmV0dXJuIHN1cGVyLmJpbmQoIC4uLmFyZ3MgKTtcblx0fVxuXG5cdGF0dGFjaGVkKCAuLi5hcmdzICkge1xuXHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBcIkF0dGFjaGVkIVwiICk7XG5cblx0XHRpZiAoIHRoaXMuZGl2aWRlciApIHtcblx0XHRcdGNvbnNvbGUubG9nKCBcIkRpdmlkZXIgaXM6IFwiLCB0aGlzLmRpdmlkZXIgKTtcblx0XHRcdGxldCBkaXZpZGVyTm9kZSA9IG51bGw7XG5cblx0XHRcdC8vIEljb24gZGl2aWRlciAoPGk+KVxuXHRcdFx0aWYgKCB0aGlzLmRpdmlkZXIubWF0Y2goL1xcYmljb25cXGIvKSApIHtcblx0XHRcdFx0dGhpcy5sb2dnZXIuZGVidWcoIGBJY29uIGRpdmlkZXIgKCR7dGhpcy5kaXZpZGVyfSlgICk7XG5cdFx0XHRcdGRpdmlkZXJOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2knICk7XG5cdFx0XHRcdGRpdmlkZXJOb2RlLmNsYXNzTGlzdC5hZGQoIC4uLnRoaXMuZGl2aWRlci5zcGxpdCgvXFxzKy8pICk7XG5cdFx0XHRcdGRpdmlkZXJOb2RlLmNsYXNzTGlzdC5hZGQoICdkaXZpZGVyJyApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBUZXh0IGRpdmlkZXIgKDxzcGFuPilcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggYFRleHQgZGl2aWRlciAoJHt0aGlzLmRpdmlkZXJ9KWAgKTtcblx0XHRcdFx0bGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSggdGhpcy5kaXZpZGVyICk7XG5cdFx0XHRcdGRpdmlkZXJOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3NwYW4nICk7XG5cdFx0XHRcdGRpdmlkZXJOb2RlLmNsYXNzTGlzdC5hZGQoICdkaXZpZGVyJyApO1xuXHRcdFx0XHRkaXZpZGVyTm9kZS5hcHBlbmRDaGlsZCggY29udGVudCApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBIYXZlIHRvIGRvIHRoaXMgZm9yIHRlc3RpbmcsIGFzIHRoZSBTdGFnZUNvbXBvbmVudCBhcHBhcmVudGx5IGRvZXNuJ3Rcblx0XHRcdC8vIHBvcHVsYXRlIEBjaGlsZHJlbiBhdHRyaWJ1dGVzXG5cdFx0XHRpZiAoICF0aGlzLnNlY3Rpb25zICkge1xuXHRcdFx0XHR0aGlzLnNlY3Rpb25zID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICdbdWktYnJlYWRjcnVtYi1zZWN0aW9uXScgKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5sb2dnZXIuZGVidWcoIFwiQWRkaW5nIGRpdmlkZXIgdG8gc2VjdGlvbnM6IFwiLCB0aGlzLnNlY3Rpb25zICk7XG5cdFx0XHRmb3IgKCBsZXQgaSBpbiB0aGlzLnNlY3Rpb25zICkge1xuXHRcdFx0XHRpZiAoIGkgPiAwICkge1xuXHRcdFx0XHRcdGxldCBzZWN0aW9uID0gdGhpcy5zZWN0aW9uc1sgaSBdO1xuXHRcdFx0XHRcdHRoaXMuZWxlbWVudC5pbnNlcnRCZWZvcmUoIGRpdmlkZXJOb2RlLmNsb25lTm9kZSh0cnVlKSwgc2VjdGlvbiApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5sb2dnZXIuZGVidWcoIFwiRG9uZSB3aXRoIGF0dGFjaGVkKCkuXCIgKTtcblx0fVxuXG59XG5cblxuLyoqXG4gKiB1aS1icmVhZGNydW1iLXNlY3Rpb25cbiAqL1xuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1icmVhZGNydW1iLXNlY3Rpb25gIClcbmV4cG9ydCBjbGFzcyBVSUJyZWFkY3J1bWJTZWN0aW9uQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG5cdEBiaW5kYWJsZVRvZ2dsZSBhY3RpdmUgPSBmYWxzZTtcblxuXHRiaW5kKCkge1xuXHRcdC8vIE5vIHN1cGVyXG5cdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoICdzZWN0aW9uJyApO1xuXHR9XG5cbn1cblxuXG4vKipcbiAqIHVpLWJyZWFkY3J1bWItZGl2aWRlclxuICovXG5AY3VzdG9tQXR0cmlidXRlKCBgJHtjb25zdGFudHMuYXR0cmlidXRlUHJlZml4fWJyZWFkY3J1bWItZGl2aWRlcmAgKVxuZXhwb3J0IGNsYXNzIFVJQnJlYWRjcnVtYkRpdmlkZXJBdHRyaWJ1dGUgZXh0ZW5kcyBVSUF0dHJpYnV0ZSB7XG5cblx0YmluZCgpIHtcblx0XHQvLyBObyBzdXBlclxuXHRcdGlmICggdGhpcy5lbGVtZW50LmNsYXNzTGlzdCApIHtcblx0XHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAnZGl2aWRlcicgKTtcblx0XHR9XG5cdH1cblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
