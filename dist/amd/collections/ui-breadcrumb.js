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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL3VpLWJyZWFkY3J1bWIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FXYSxnRUFEWix1Q0FBaUIsQ0FBQyxHQUFFLHFCQUFVLGVBQVYsRUFBMEIsVUFBN0IsQ0FBakIsV0FJQywrQkFBYSxPQUFiLEVBQXNCLE9BQXRCLEVBQStCLE1BQS9CLFdBQ0EsZ0NBQVUseUJBQVYsNEJBSkssTUFBTSxxQkFBTixrQ0FBZ0Q7Ozs7Ozs7QUFPdEQsU0FBTztBQUNOLFNBQU0sSUFBTixHQURNOztBQUdOLE9BQUssS0FBSyxPQUFMLEVBQWU7QUFDbkIsUUFBSSxjQUFjLElBQWQ7OztBQURlLFFBSWQsS0FBSyxPQUFMLENBQWEsS0FBYixDQUFtQixVQUFuQixDQUFMLEVBQXNDO0FBQ3JDLFVBQUssTUFBTCxDQUFZLEtBQVosQ0FBbUIsQ0FBQyxjQUFELEdBQWlCLEtBQUssT0FBTCxFQUFhLENBQTlCLENBQW5CLEVBRHFDO0FBRXJDLG1CQUFjLFNBQVMsYUFBVCxDQUF3QixHQUF4QixDQUFkLENBRnFDO0FBR3JDLGlCQUFZLFNBQVosQ0FBc0IsR0FBdEIsQ0FBMkIsR0FBRyxLQUFLLE9BQUwsQ0FBYSxLQUFiLENBQW1CLEtBQW5CLENBQUgsQ0FBM0IsQ0FIcUM7QUFJckMsaUJBQVksU0FBWixDQUFzQixHQUF0QixDQUEyQixTQUEzQixFQUpxQzs7OztBQUF0QyxTQVFLO0FBQ0osV0FBSyxNQUFMLENBQVksS0FBWixDQUFtQixDQUFDLGNBQUQsR0FBaUIsS0FBSyxPQUFMLEVBQWEsQ0FBOUIsQ0FBbkIsRUFESTtBQUVKLFVBQUksVUFBVSxTQUFTLGNBQVQsQ0FBeUIsS0FBSyxPQUFMLENBQW5DLENBRkE7QUFHSixvQkFBYyxTQUFTLGFBQVQsQ0FBd0IsTUFBeEIsQ0FBZCxDQUhJO0FBSUosa0JBQVksU0FBWixDQUFzQixHQUF0QixDQUEyQixTQUEzQixFQUpJO0FBS0osa0JBQVksV0FBWixDQUF5QixPQUF6QixFQUxJO01BUkw7O0FBZ0JBLFNBQU0sSUFBSSxDQUFKLElBQVMsS0FBSyxRQUFMLEVBQWdCO0FBQzlCLFNBQUssSUFBSSxDQUFKLEVBQVE7QUFDWixVQUFJLFVBQVUsS0FBSyxRQUFMLENBQWUsQ0FBZixDQUFWLENBRFE7QUFFWixXQUFLLE9BQUwsQ0FBYSxZQUFiLENBQTJCLFlBQVksU0FBWixDQUFzQixJQUF0QixDQUEzQixFQUF3RCxPQUF4RCxFQUZZO01BQWI7S0FERDtJQXBCRDtHQUhEOztFQVBNOzs7Ozs7Ozs7O0tBOENNLCtFQURaLHVDQUFpQixDQUFDLEdBQUUscUJBQVUsZUFBVixFQUEwQixrQkFBN0IsQ0FBakIsOEJBQ00sTUFBTSw0QkFBTixrQ0FBdUQ7Ozs7Ozs7QUFJN0QsU0FBTzs7QUFFTixRQUFLLE9BQUwsQ0FBYSxTQUFiLENBQXVCLEdBQXZCLENBQTRCLFNBQTVCLEVBRk07R0FBUDs7RUFKTTs7O1VBRW1COzs7S0FjYiwrRUFEWix1Q0FBaUIsQ0FBQyxHQUFFLHFCQUFVLGVBQVYsRUFBMEIsa0JBQTdCLENBQWpCLG1CQUNNLE1BQU0sNEJBQU4sa0NBQXVEOztBQUU3RCxTQUFPOztBQUVOLE9BQUssS0FBSyxPQUFMLENBQWEsU0FBYixFQUF5QjtBQUM3QixTQUFLLE9BQUwsQ0FBYSxTQUFiLENBQXVCLEdBQXZCLENBQTRCLFNBQTVCLEVBRDZCO0lBQTlCO0dBRkQ7O0VBRk0iLCJmaWxlIjoiY29sbGVjdGlvbnMvdWktYnJlYWRjcnVtYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQnJlYWRjcnVtYiAtIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vY29sbGVjdGlvbnMvYnJlYWRjcnVtYi5odG1sXG4gKi9cblxuaW1wb3J0IHtjb25zdGFudHN9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge1VJQXR0cmlidXRlLCBiaW5kYWJsZVRvZ2dsZSwgYmluZGFibGVFbnVtfSBmcm9tICcuLi91aS1hdHRyaWJ1dGUnO1xuaW1wb3J0IHtpbmplY3QsIGN1c3RvbUF0dHJpYnV0ZSwgY2hpbGRyZW4sIGJpbmRhYmxlLCBMb2dNYW5hZ2VyfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBjdXN0b21BdHRyaWJ1dGUoIGAke2NvbnN0YW50cy5hdHRyaWJ1dGVQcmVmaXh9YnJlYWRjcnVtYmAgKVxuZXhwb3J0IGNsYXNzIFVJQnJlYWRjcnVtYkF0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGUgZGl2aWRlcjtcblx0QGJpbmRhYmxlRW51bSgnc21hbGwnLCAnbGFyZ2UnLCAnaHVnZScpIHNpemU7XG5cdEBjaGlsZHJlbiggJ1t1aS1icmVhZGNydW1iLXNlY3Rpb25dJyApIHNlY3Rpb25zO1xuXG5cblx0YmluZCgpIHtcblx0XHRzdXBlci5iaW5kKCk7XG5cblx0XHRpZiAoIHRoaXMuZGl2aWRlciApIHtcblx0XHRcdGxldCBkaXZpZGVyTm9kZSA9IG51bGw7XG5cblx0XHRcdC8vIEljb24gZGl2aWRlciAoPGk+KVxuXHRcdFx0aWYgKCB0aGlzLmRpdmlkZXIubWF0Y2goL1xcYmljb25cXGIvKSApIHtcblx0XHRcdFx0dGhpcy5sb2dnZXIuZGVidWcoIGBJY29uIGRpdmlkZXIgKCR7dGhpcy5kaXZpZGVyfSlgICk7XG5cdFx0XHRcdGRpdmlkZXJOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2knICk7XG5cdFx0XHRcdGRpdmlkZXJOb2RlLmNsYXNzTGlzdC5hZGQoIC4uLnRoaXMuZGl2aWRlci5zcGxpdCgvXFxzKy8pICk7XG5cdFx0XHRcdGRpdmlkZXJOb2RlLmNsYXNzTGlzdC5hZGQoICdkaXZpZGVyJyApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBUZXh0IGRpdmlkZXIgKDxzcGFuPilcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggYFRleHQgZGl2aWRlciAoJHt0aGlzLmRpdmlkZXJ9KWAgKTtcblx0XHRcdFx0bGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSggdGhpcy5kaXZpZGVyICk7XG5cdFx0XHRcdGRpdmlkZXJOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3NwYW4nICk7XG5cdFx0XHRcdGRpdmlkZXJOb2RlLmNsYXNzTGlzdC5hZGQoICdkaXZpZGVyJyApO1xuXHRcdFx0XHRkaXZpZGVyTm9kZS5hcHBlbmRDaGlsZCggY29udGVudCApO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKCBsZXQgaSBpbiB0aGlzLnNlY3Rpb25zICkge1xuXHRcdFx0XHRpZiAoIGkgPiAwICkge1xuXHRcdFx0XHRcdGxldCBzZWN0aW9uID0gdGhpcy5zZWN0aW9uc1sgaSBdO1xuXHRcdFx0XHRcdHRoaXMuZWxlbWVudC5pbnNlcnRCZWZvcmUoIGRpdmlkZXJOb2RlLmNsb25lTm9kZSh0cnVlKSwgc2VjdGlvbiApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbn1cblxuXG4vKipcbiAqIHVpLWJyZWFkY3J1bWItc2VjdGlvblxuICovXG5AY3VzdG9tQXR0cmlidXRlKCBgJHtjb25zdGFudHMuYXR0cmlidXRlUHJlZml4fWJyZWFkY3J1bWItc2VjdGlvbmAgKVxuZXhwb3J0IGNsYXNzIFVJQnJlYWRjcnVtYlNlY3Rpb25BdHRyaWJ1dGUgZXh0ZW5kcyBVSUF0dHJpYnV0ZSB7XG5cblx0QGJpbmRhYmxlVG9nZ2xlIGFjdGl2ZSA9IGZhbHNlO1xuXG5cdGJpbmQoKSB7XG5cdFx0Ly8gTm8gc3VwZXJcblx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ3NlY3Rpb24nICk7XG5cdH1cblxufVxuXG5cbi8qKlxuICogdWktYnJlYWRjcnVtYi1kaXZpZGVyXG4gKi9cbkBjdXN0b21BdHRyaWJ1dGUoIGAke2NvbnN0YW50cy5hdHRyaWJ1dGVQcmVmaXh9YnJlYWRjcnVtYi1kaXZpZGVyYCApXG5leHBvcnQgY2xhc3MgVUlCcmVhZGNydW1iRGl2aWRlckF0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcblxuXHRiaW5kKCkge1xuXHRcdC8vIE5vIHN1cGVyXG5cdFx0aWYgKCB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0ICkge1xuXHRcdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoICdkaXZpZGVyJyApO1xuXHRcdH1cblx0fVxuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
