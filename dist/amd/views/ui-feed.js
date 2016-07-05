define(['exports', '../constants', '../ui-base', 'aurelia-framework'], function (exports, _constants, _uiBase, _aureliaFramework) {
  /* -*- javascript -*- */
  "use strict";

  /**
   * Feed - http://semantic-ui.com/views/feed.html
   */

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SemanticUIFeedAttribute = exports.SemanticUIFeedElement = undefined;

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

  let SemanticUIFeedElement = exports.SemanticUIFeedElement = (_dec = (0, _aureliaFramework.customElement)(`${ _constants.constants.elementPrefix }feed`), _dec(_class = class SemanticUIFeedElement extends _uiBase.SemanticUIElement {}) || _class);
  let SemanticUIFeedAttribute = exports.SemanticUIFeedAttribute = (_dec2 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }feed`), _dec3 = (0, _uiBase.bindableEnum)(..._constants.constants.VALID_SIZES), _dec2(_class2 = (_class3 = class SemanticUIFeedAttribute extends _uiBase.SemanticUIAttribute {
    constructor(...args) {
      var _temp;

      return _temp = super(...args), _initDefineProp(this, 'size', _descriptor, this), _temp;
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class3.prototype, 'size', [_dec3], {
    enumerable: true,
    initializer: null
  })), _class3)) || _class2);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL3VpLWZlZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQVNhLHFCLFdBQUEscUIsV0FEWixxQ0FBZ0IsSUFBRSxxQkFBVSxhQUFjLE9BQTFDLEMsZ0JBQ00sTUFBTSxxQkFBTixtQ0FBc0QsRTtNQUdoRCx1QixXQUFBLHVCLFlBRFosdUNBQWtCLElBQUUscUJBQVUsZUFBZ0IsT0FBOUMsQyxVQUdDLDBCQUFjLEdBQUcscUJBQVUsV0FBM0IsQyw2QkFGSyxNQUFNLHVCQUFOLHFDQUEwRDtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQSxHIiwiZmlsZSI6InZpZXdzL3VpLWZlZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIEZlZWQgLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL3ZpZXdzL2ZlZWQuaHRtbFxuICovXG5cbmltcG9ydCB7Y29uc3RhbnRzfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtTZW1hbnRpY1VJRWxlbWVudCwgU2VtYW50aWNVSUF0dHJpYnV0ZSwgYmluZGFibGVFbnVtfSBmcm9tICcuLi91aS1iYXNlJztcbmltcG9ydCB7Y3VzdG9tQXR0cmlidXRlLCBjdXN0b21FbGVtZW50fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBjdXN0b21FbGVtZW50KCBgJHtjb25zdGFudHMuZWxlbWVudFByZWZpeH1mZWVkYCApXG5leHBvcnQgY2xhc3MgU2VtYW50aWNVSUZlZWRFbGVtZW50IGV4dGVuZHMgU2VtYW50aWNVSUVsZW1lbnQge31cblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1mZWVkYCApXG5leHBvcnQgY2xhc3MgU2VtYW50aWNVSUZlZWRBdHRyaWJ1dGUgZXh0ZW5kcyBTZW1hbnRpY1VJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGVFbnVtKCAuLi5jb25zdGFudHMuVkFMSURfU0laRVMgKSBzaXplO1xuXG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
