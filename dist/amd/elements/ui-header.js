define(['exports', '../constants', '../ui-base', 'aurelia-framework'], function (exports, _constants, _uiBase, _aureliaFramework) {
  /* -*- javascript -*- */
  "use strict";

  /**
   * Content Header - http://semantic-ui.com/elements/header.html#content-headers
   */

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SemanticUIHeaderAttribute = exports.SemanticUIHeaderElement = undefined;

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

  var _dec, _class, _dec2, _dec3, _dec4, _class2, _desc, _value, _class3, _descriptor, _descriptor2;

  let SemanticUIHeaderElement = exports.SemanticUIHeaderElement = (_dec = (0, _aureliaFramework.customElement)(`${ _constants.constants.elementPrefix }header`), _dec(_class = class SemanticUIHeaderElement extends _uiBase.SemanticUIElement {}) || _class);
  let SemanticUIHeaderAttribute = exports.SemanticUIHeaderAttribute = (_dec2 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }header`), _dec3 = (0, _uiBase.bindableEnum)(..._constants.constants.VALID_SIZES), _dec4 = (0, _uiBase.bindableEnum)(..._constants.constants.VALID_COLORS), _dec2(_class2 = (_class3 = class SemanticUIHeaderAttribute extends _uiBase.SemanticUIAttribute {
    constructor(...args) {
      var _temp;

      return _temp = super(...args), _initDefineProp(this, 'size', _descriptor, this), _initDefineProp(this, 'color', _descriptor2, this), _temp;
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class3.prototype, 'size', [_dec3], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, 'color', [_dec4], {
    enumerable: true,
    initializer: null
  })), _class3)) || _class2);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BU2EsdUIsV0FBQSx1QixXQURaLHFDQUFnQixJQUFFLHFCQUFVLGFBQWMsU0FBMUMsQyxnQkFDTSxNQUFNLHVCQUFOLG1DQUF3RCxFO01BR2xELHlCLFdBQUEseUIsWUFEWix1Q0FBa0IsSUFBRSxxQkFBVSxlQUFnQixTQUE5QyxDLFVBR0MsMEJBQWMsR0FBRyxxQkFBVSxXQUEzQixDLFVBQ0EsMEJBQWMsR0FBRyxxQkFBVSxZQUEzQixDLDZCQUhLLE1BQU0seUJBQU4scUNBQTREO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBLEciLCJmaWxlIjoiZWxlbWVudHMvdWktaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDb250ZW50IEhlYWRlciAtIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vZWxlbWVudHMvaGVhZGVyLmh0bWwjY29udGVudC1oZWFkZXJzXG4gKi9cblxuaW1wb3J0IHtjb25zdGFudHN9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge1NlbWFudGljVUlFbGVtZW50LCBTZW1hbnRpY1VJQXR0cmlidXRlLCBiaW5kYWJsZUVudW19IGZyb20gJy4uL3VpLWJhc2UnO1xuaW1wb3J0IHtjdXN0b21BdHRyaWJ1dGUsIGN1c3RvbUVsZW1lbnR9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUVsZW1lbnQoIGAke2NvbnN0YW50cy5lbGVtZW50UHJlZml4fWhlYWRlcmAgKVxuZXhwb3J0IGNsYXNzIFNlbWFudGljVUlIZWFkZXJFbGVtZW50IGV4dGVuZHMgU2VtYW50aWNVSUVsZW1lbnQge31cblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1oZWFkZXJgIClcbmV4cG9ydCBjbGFzcyBTZW1hbnRpY1VJSGVhZGVyQXR0cmlidXRlIGV4dGVuZHMgU2VtYW50aWNVSUF0dHJpYnV0ZSB7XG5cblx0QGJpbmRhYmxlRW51bSggLi4uY29uc3RhbnRzLlZBTElEX1NJWkVTICkgc2l6ZTtcblx0QGJpbmRhYmxlRW51bSggLi4uY29uc3RhbnRzLlZBTElEX0NPTE9SUyApIGNvbG9yO1xuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
