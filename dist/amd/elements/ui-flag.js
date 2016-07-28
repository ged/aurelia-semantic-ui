define(['exports', '../constants', '../ui-attribute', 'aurelia-framework'], function (exports, _constants, _uiAttribute, _aureliaFramework) {
    /* -*- javascript -*- */
    "use strict";

    /**
     * Flag - http://semantic-ui.com/elements/flag.html
     */

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.UIFlagAttribute = undefined;

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

    var _dec, _class, _desc, _value, _class2, _descriptor;

    let UIFlagAttribute = exports.UIFlagAttribute = (_dec = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }flag`), _dec(_class = (_class2 = class UIFlagAttribute extends _uiAttribute.UIAttribute {
        constructor(...args) {
            var _temp;

            return _temp = super(...args), _initDefineProp(this, 'country', _descriptor, this), _temp;
        }

        bind(...args) {
            super.bind(...args);
            if (this.country) {
                this.element.classList.add(...this.country.split(' '));
            }
        }

        countryChanged(newValue, oldValue) {
            if (oldValue) {
                this.element.classList.remove(...oldValue.split(' '));
            }
            if (newValue) {
                this.element.classList.add(...newValue.split(' '));
            }
        }

    }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'country', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: null
    })), _class2)) || _class);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWZsYWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQVNhLGUsV0FBQSxlLFdBRFosdUNBQWtCLElBQUUscUJBQVUsZUFBZ0IsT0FBOUMsQywyQkFDTSxNQUFNLGVBQU4sa0NBQTBDO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUs3QyxhQUFNLEdBQUcsSUFBVCxFQUFnQjtBQUNaLGtCQUFNLElBQU4sQ0FBWSxHQUFHLElBQWY7QUFDQSxnQkFBSyxLQUFLLE9BQVYsRUFBb0I7QUFDaEIscUJBQUssT0FBTCxDQUFhLFNBQWIsQ0FBdUIsR0FBdkIsQ0FBNEIsR0FBRyxLQUFLLE9BQUwsQ0FBYSxLQUFiLENBQW1CLEdBQW5CLENBQS9CO0FBQ0g7QUFDSjs7QUFHRCx1QkFBZ0IsUUFBaEIsRUFBMEIsUUFBMUIsRUFBcUM7QUFDakMsZ0JBQUssUUFBTCxFQUFnQjtBQUFFLHFCQUFLLE9BQUwsQ0FBYSxTQUFiLENBQXVCLE1BQXZCLENBQThCLEdBQUcsU0FBUyxLQUFULENBQWUsR0FBZixDQUFqQztBQUF3RDtBQUMxRSxnQkFBSyxRQUFMLEVBQWdCO0FBQUUscUJBQUssT0FBTCxDQUFhLFNBQWIsQ0FBdUIsR0FBdkIsQ0FBMkIsR0FBRyxTQUFTLEtBQVQsQ0FBZSxHQUFmLENBQTlCO0FBQXFEO0FBQzFFOztBQWhCNEMsSyIsImZpbGUiOiJlbGVtZW50cy91aS1mbGFnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBGbGFnIC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9lbGVtZW50cy9mbGFnLmh0bWxcbiAqL1xuXG5pbXBvcnQge2NvbnN0YW50c30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7VUlBdHRyaWJ1dGV9IGZyb20gJy4uL3VpLWF0dHJpYnV0ZSc7XG5pbXBvcnQge2N1c3RvbUF0dHJpYnV0ZSwgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1mbGFnYCApXG5leHBvcnQgY2xhc3MgVUlGbGFnQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG4gICAgQGJpbmRhYmxlIGNvdW50cnk7XG5cblxuICAgIGJpbmQoIC4uLmFyZ3MgKSB7XG4gICAgICAgIHN1cGVyLmJpbmQoIC4uLmFyZ3MgKTtcbiAgICAgICAgaWYgKCB0aGlzLmNvdW50cnkgKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCggLi4udGhpcy5jb3VudHJ5LnNwbGl0KCcgJykgKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY291bnRyeUNoYW5nZWQoIG5ld1ZhbHVlLCBvbGRWYWx1ZSApIHtcbiAgICAgICAgaWYgKCBvbGRWYWx1ZSApIHsgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoLi4ub2xkVmFsdWUuc3BsaXQoJyAnKSk7IH1cbiAgICAgICAgaWYgKCBuZXdWYWx1ZSApIHsgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4ubmV3VmFsdWUuc3BsaXQoJyAnKSk7IH1cbiAgICB9XG5cbn1cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
