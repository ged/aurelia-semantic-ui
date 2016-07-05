define(['exports', '../constants', '../ui-base', 'aurelia-framework'], function (exports, _constants, _uiBase, _aureliaFramework) {
  /* -*- javascript -*- */
  "use strict";

  /**
   * Content Rail - http://semantic-ui.com/elements/rail.html
   */

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SemanticUIRailAttribute = exports.SemanticUIRailElement = undefined;

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

  let SemanticUIRailElement = exports.SemanticUIRailElement = (_dec = (0, _aureliaFramework.customElement)(`${ _constants.constants.elementPrefix }rail`), _dec(_class = class SemanticUIRailElement extends _uiBase.SemanticUIElement {}) || _class);
  let SemanticUIRailAttribute = exports.SemanticUIRailAttribute = (_dec2 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }rail`), _dec3 = (0, _uiBase.bindableEnum)('left', 'right'), _dec2(_class2 = (_class3 = class SemanticUIRailAttribute extends _uiBase.SemanticUIAttribute {
    constructor(...args) {
      var _temp;

      return _temp = super(...args), _initDefineProp(this, 'side', _descriptor, this), _temp;
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class3.prototype, 'side', [_dec3], {
    enumerable: true,
    initializer: function () {
      return 'left';
    }
  })), _class3)) || _class2);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLXJhaWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQVNhLHFCLFdBQUEscUIsV0FEWixxQ0FBZ0IsSUFBRSxxQkFBVSxhQUFjLE9BQTFDLEMsZ0JBQ00sTUFBTSxxQkFBTixtQ0FBc0QsRTtNQUdoRCx1QixXQUFBLHVCLFlBRFosdUNBQWtCLElBQUUscUJBQVUsZUFBZ0IsT0FBOUMsQyxVQUdDLDBCQUFjLE1BQWQsRUFBc0IsT0FBdEIsQyw2QkFGSyxNQUFNLHVCQUFOLHFDQUEwRDtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQSxHOzs7YUFFeEIsTSIsImZpbGUiOiJlbGVtZW50cy91aS1yYWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDb250ZW50IFJhaWwgLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL2VsZW1lbnRzL3JhaWwuaHRtbFxuICovXG5cbmltcG9ydCB7Y29uc3RhbnRzfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtTZW1hbnRpY1VJRWxlbWVudCwgU2VtYW50aWNVSUF0dHJpYnV0ZSwgYmluZGFibGVFbnVtfSBmcm9tICcuLi91aS1iYXNlJztcbmltcG9ydCB7Y3VzdG9tQXR0cmlidXRlLCBjdXN0b21FbGVtZW50LCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AY3VzdG9tRWxlbWVudCggYCR7Y29uc3RhbnRzLmVsZW1lbnRQcmVmaXh9cmFpbGAgKVxuZXhwb3J0IGNsYXNzIFNlbWFudGljVUlSYWlsRWxlbWVudCBleHRlbmRzIFNlbWFudGljVUlFbGVtZW50IHt9XG5cbkBjdXN0b21BdHRyaWJ1dGUoIGAke2NvbnN0YW50cy5hdHRyaWJ1dGVQcmVmaXh9cmFpbGAgKVxuZXhwb3J0IGNsYXNzIFNlbWFudGljVUlSYWlsQXR0cmlidXRlIGV4dGVuZHMgU2VtYW50aWNVSUF0dHJpYnV0ZSB7XG5cblx0QGJpbmRhYmxlRW51bSggJ2xlZnQnLCAncmlnaHQnICkgc2lkZSA9ICdsZWZ0JztcblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
