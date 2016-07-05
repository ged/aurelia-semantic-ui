define(['exports', '../constants', 'aurelia-framework', '../ui-base'], function (exports, _constants, _aureliaFramework, _uiBase) {
  /* -*- javascript -*- */
  "use strict";

  /**
   * List - http://semantic-ui.com/elements/list.html
   */

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SemanticUIListAttribute = exports.SemanticUIListElement = undefined;

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

  var _dec, _class, _dec2, _dec3, _class2, _desc, _value, _class3, _descriptor;

  let SemanticUIListElement = exports.SemanticUIListElement = (_dec = (0, _aureliaFramework.customElement)(`${ _constants.constants.elementPrefix }list`), _dec(_class = class SemanticUIListElement extends _uiBase.SemanticUIElement {}) || _class);
  let SemanticUIListAttribute = exports.SemanticUIListAttribute = (_dec2 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }list`), _dec3 = (0, _uiBase.bindableEnum)(..._constants.constants.VALID_SIZES), _dec2(_class2 = (_class3 = class SemanticUIListAttribute extends _uiBase.SemanticUIAttribute {
    constructor(...args) {
      var _temp;

      return _temp = super(...args), _initDefineProp(this, 'size', _descriptor, this), _temp;
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class3.prototype, 'size', [_dec3], {
    enumerable: true,
    initializer: null
  })), _class3)) || _class2);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQVNhLHFCLFdBQUEscUIsV0FEWixxQ0FBZ0IsSUFBRSxxQkFBVSxhQUFjLE9BQTFDLEMsZ0JBQ00sTUFBTSxxQkFBTixtQ0FBc0QsRTtNQUdoRCx1QixXQUFBLHVCLFlBRFosdUNBQWtCLElBQUUscUJBQVUsZUFBZ0IsT0FBOUMsQyxVQUdDLDBCQUFjLEdBQUcscUJBQVUsV0FBM0IsQyw2QkFGSyxNQUFNLHVCQUFOLHFDQUEwRDtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQSxHIiwiZmlsZSI6ImVsZW1lbnRzL3VpLWxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIExpc3QgLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL2VsZW1lbnRzL2xpc3QuaHRtbFxuICovXG5cbmltcG9ydCB7Y29uc3RhbnRzfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtjdXN0b21BdHRyaWJ1dGUsIGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge1NlbWFudGljVUlFbGVtZW50LCBTZW1hbnRpY1VJQXR0cmlidXRlLCBiaW5kYWJsZUVudW19IGZyb20gJy4uL3VpLWJhc2UnO1xuXG5AY3VzdG9tRWxlbWVudCggYCR7Y29uc3RhbnRzLmVsZW1lbnRQcmVmaXh9bGlzdGAgKVxuZXhwb3J0IGNsYXNzIFNlbWFudGljVUlMaXN0RWxlbWVudCBleHRlbmRzIFNlbWFudGljVUlFbGVtZW50IHt9XG5cbkBjdXN0b21BdHRyaWJ1dGUoIGAke2NvbnN0YW50cy5hdHRyaWJ1dGVQcmVmaXh9bGlzdGAgKVxuZXhwb3J0IGNsYXNzIFNlbWFudGljVUlMaXN0QXR0cmlidXRlIGV4dGVuZHMgU2VtYW50aWNVSUF0dHJpYnV0ZSB7XG5cblx0QGJpbmRhYmxlRW51bSggLi4uY29uc3RhbnRzLlZBTElEX1NJWkVTICkgc2l6ZTtcblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
