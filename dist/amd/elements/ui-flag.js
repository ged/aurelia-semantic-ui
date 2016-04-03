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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWZsYWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFXYSxvREFEWix1Q0FBaUIsQ0FBQyxHQUFFLHFCQUFVLGVBQVYsRUFBMEIsSUFBN0IsQ0FBakIsNEJBQ00sTUFBTSxlQUFOLGtDQUEwQzs7Ozs7OztBQUs3QyxhQUFNLEdBQUcsSUFBSCxFQUFVO0FBQ1osa0JBQU0sSUFBTixDQUFZLEdBQUcsSUFBSCxDQUFaLENBRFk7QUFFWixnQkFBSyxLQUFLLE9BQUwsRUFBZTtBQUNoQixxQkFBSyxPQUFMLENBQWEsU0FBYixDQUF1QixHQUF2QixDQUE0QixHQUFHLEtBQUssT0FBTCxDQUFhLEtBQWIsQ0FBbUIsR0FBbkIsQ0FBSCxDQUE1QixDQURnQjthQUFwQjtTQUZKOztBQVFBLHVCQUFnQixRQUFoQixFQUEwQixRQUExQixFQUFxQztBQUNqQyxnQkFBSyxRQUFMLEVBQWdCO0FBQUUscUJBQUssT0FBTCxDQUFhLFNBQWIsQ0FBdUIsTUFBdkIsQ0FBOEIsR0FBRyxTQUFTLEtBQVQsQ0FBZSxHQUFmLENBQUgsQ0FBOUIsQ0FBRjthQUFoQjtBQUNBLGdCQUFLLFFBQUwsRUFBZ0I7QUFBRSxxQkFBSyxPQUFMLENBQWEsU0FBYixDQUF1QixHQUF2QixDQUEyQixHQUFHLFNBQVMsS0FBVCxDQUFlLEdBQWYsQ0FBSCxDQUEzQixDQUFGO2FBQWhCO1NBRko7O0tBYkciLCJmaWxlIjoiZWxlbWVudHMvdWktZmxhZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogRmxhZyAtIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vZWxlbWVudHMvZmxhZy5odG1sXG4gKi9cblxuaW1wb3J0IHtjb25zdGFudHN9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge1VJQXR0cmlidXRlfSBmcm9tICcuLi91aS1hdHRyaWJ1dGUnO1xuaW1wb3J0IHtjdXN0b21BdHRyaWJ1dGUsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBjdXN0b21BdHRyaWJ1dGUoIGAke2NvbnN0YW50cy5hdHRyaWJ1dGVQcmVmaXh9ZmxhZ2AgKVxuZXhwb3J0IGNsYXNzIFVJRmxhZ0F0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcblxuICAgIEBiaW5kYWJsZSBjb3VudHJ5O1xuXG5cbiAgICBiaW5kKCAuLi5hcmdzICkge1xuICAgICAgICBzdXBlci5iaW5kKCAuLi5hcmdzICk7XG4gICAgICAgIGlmICggdGhpcy5jb3VudHJ5ICkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoIC4uLnRoaXMuY291bnRyeS5zcGxpdCgnICcpICk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNvdW50cnlDaGFuZ2VkKCBuZXdWYWx1ZSwgb2xkVmFsdWUgKSB7XG4gICAgICAgIGlmICggb2xkVmFsdWUgKSB7IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKC4uLm9sZFZhbHVlLnNwbGl0KCcgJykpOyB9XG4gICAgICAgIGlmICggbmV3VmFsdWUgKSB7IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLm5ld1ZhbHVlLnNwbGl0KCcgJykpOyB9XG4gICAgfVxuXG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
