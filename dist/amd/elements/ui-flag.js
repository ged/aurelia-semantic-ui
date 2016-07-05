define(['exports', '../constants', '../ui-base', 'aurelia-framework'], function (exports, _constants, _uiBase, _aureliaFramework) {
    /* -*- javascript -*- */
    "use strict";

    /**
     * Flag - http://semantic-ui.com/elements/flag.html
     */

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.SemanticUIFlagAttribute = exports.SemanticUIFlagElement = undefined;

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

    var _dec, _class, _dec2, _class2, _desc, _value, _class3, _descriptor;

    let SemanticUIFlagElement = exports.SemanticUIFlagElement = (_dec = (0, _aureliaFramework.customElement)(`${ _constants.constants.elementPrefix }flag`), _dec(_class = class SemanticUIFlagElement extends _uiBase.SemanticUIElement {}) || _class);
    let SemanticUIFlagAttribute = exports.SemanticUIFlagAttribute = (_dec2 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }flag`), _dec2(_class2 = (_class3 = class SemanticUIFlagAttribute extends _uiBase.SemanticUIAttribute {
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

    }, (_descriptor = _applyDecoratedDescriptor(_class3.prototype, 'country', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: null
    })), _class3)) || _class2);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWZsYWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQVNhLHFCLFdBQUEscUIsV0FEWixxQ0FBZ0IsSUFBRSxxQkFBVSxhQUFjLE9BQTFDLEMsZ0JBQ00sTUFBTSxxQkFBTixtQ0FBc0QsRTtRQUdoRCx1QixXQUFBLHVCLFlBRFosdUNBQWtCLElBQUUscUJBQVUsZUFBZ0IsT0FBOUMsQyw2QkFDTSxNQUFNLHVCQUFOLHFDQUEwRDtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFLN0QsYUFBTSxHQUFHLElBQVQsRUFBZ0I7QUFDWixrQkFBTSxJQUFOLENBQVksR0FBRyxJQUFmO0FBQ0EsZ0JBQUssS0FBSyxPQUFWLEVBQW9CO0FBQ2hCLHFCQUFLLE9BQUwsQ0FBYSxTQUFiLENBQXVCLEdBQXZCLENBQTRCLEdBQUcsS0FBSyxPQUFMLENBQWEsS0FBYixDQUFtQixHQUFuQixDQUEvQjtBQUNIO0FBQ0o7O0FBR0QsdUJBQWdCLFFBQWhCLEVBQTBCLFFBQTFCLEVBQXFDO0FBQ2pDLGdCQUFLLFFBQUwsRUFBZ0I7QUFBRSxxQkFBSyxPQUFMLENBQWEsU0FBYixDQUF1QixNQUF2QixDQUE4QixHQUFHLFNBQVMsS0FBVCxDQUFlLEdBQWYsQ0FBakM7QUFBd0Q7QUFDMUUsZ0JBQUssUUFBTCxFQUFnQjtBQUFFLHFCQUFLLE9BQUwsQ0FBYSxTQUFiLENBQXVCLEdBQXZCLENBQTJCLEdBQUcsU0FBUyxLQUFULENBQWUsR0FBZixDQUE5QjtBQUFxRDtBQUMxRTs7QUFoQjRELEsiLCJmaWxlIjoiZWxlbWVudHMvdWktZmxhZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogRmxhZyAtIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vZWxlbWVudHMvZmxhZy5odG1sXG4gKi9cblxuaW1wb3J0IHtjb25zdGFudHN9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge1NlbWFudGljVUlFbGVtZW50LCBTZW1hbnRpY1VJQXR0cmlidXRlfSBmcm9tICcuLi91aS1iYXNlJztcbmltcG9ydCB7Y3VzdG9tQXR0cmlidXRlLCBjdXN0b21FbGVtZW50LCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AY3VzdG9tRWxlbWVudCggYCR7Y29uc3RhbnRzLmVsZW1lbnRQcmVmaXh9ZmxhZ2AgKVxuZXhwb3J0IGNsYXNzIFNlbWFudGljVUlGbGFnRWxlbWVudCBleHRlbmRzIFNlbWFudGljVUlFbGVtZW50IHt9XG5cbkBjdXN0b21BdHRyaWJ1dGUoIGAke2NvbnN0YW50cy5hdHRyaWJ1dGVQcmVmaXh9ZmxhZ2AgKVxuZXhwb3J0IGNsYXNzIFNlbWFudGljVUlGbGFnQXR0cmlidXRlIGV4dGVuZHMgU2VtYW50aWNVSUF0dHJpYnV0ZSB7XG5cbiAgICBAYmluZGFibGUgY291bnRyeTtcblxuXG4gICAgYmluZCggLi4uYXJncyApIHtcbiAgICAgICAgc3VwZXIuYmluZCggLi4uYXJncyApO1xuICAgICAgICBpZiAoIHRoaXMuY291bnRyeSApIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAuLi50aGlzLmNvdW50cnkuc3BsaXQoJyAnKSApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjb3VudHJ5Q2hhbmdlZCggbmV3VmFsdWUsIG9sZFZhbHVlICkge1xuICAgICAgICBpZiAoIG9sZFZhbHVlICkgeyB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSguLi5vbGRWYWx1ZS5zcGxpdCgnICcpKTsgfVxuICAgICAgICBpZiAoIG5ld1ZhbHVlICkgeyB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5uZXdWYWx1ZS5zcGxpdCgnICcpKTsgfVxuICAgIH1cblxufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
