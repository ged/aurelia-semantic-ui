define(['exports', '../constants', '../ui-base', 'aurelia-framework'], function (exports, _constants, _uiBase, _aureliaFramework) {
  /* -*- javascript -*- */
  "use strict";

  /**
   * Grid - http://semantic-ui.com/collections/grid.html
   */

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SemanticUIGridAttribute = exports.SemanticUIGridElement = undefined;

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

  let SemanticUIGridElement = exports.SemanticUIGridElement = (_dec = (0, _aureliaFramework.customElement)(`${ _constants.constants.elementPrefix }grid`), _dec(_class = class SemanticUIGridElement extends _uiBase.SemanticUIElement {}) || _class);
  let SemanticUIGridAttribute = exports.SemanticUIGridAttribute = (_dec2 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }grid`), _dec3 = (0, _aureliaFramework.children)('.column'), _dec4 = (0, _aureliaFramework.children)('.row'), _dec2(_class2 = (_class3 = class SemanticUIGridAttribute extends _uiBase.SemanticUIAttribute {
    constructor(...args) {
      var _temp;

      return _temp = super(...args), _initDefineProp(this, 'columns', _descriptor, this), _initDefineProp(this, 'rows', _descriptor2, this), _temp;
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class3.prototype, 'columns', [_dec3], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, 'rows', [_dec4], {
    enumerable: true,
    initializer: null
  })), _class3)) || _class2);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL3VpLWdyaWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQVNhLHFCLFdBQUEscUIsV0FEWixxQ0FBZ0IsSUFBRSxxQkFBVSxhQUFjLE9BQTFDLEMsZ0JBQ00sTUFBTSxxQkFBTixtQ0FBc0QsRTtNQUdoRCx1QixXQUFBLHVCLFlBRFosdUNBQWtCLElBQUUscUJBQVUsZUFBZ0IsT0FBOUMsQyxVQUdDLGdDQUFVLFNBQVYsQyxVQUNBLGdDQUFVLE1BQVYsQyw2QkFISyxNQUFNLHVCQUFOLHFDQUEwRDtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQSxHIiwiZmlsZSI6ImNvbGxlY3Rpb25zL3VpLWdyaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIEdyaWQgLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL2NvbGxlY3Rpb25zL2dyaWQuaHRtbFxuICovXG5cbmltcG9ydCB7Y29uc3RhbnRzfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtTZW1hbnRpY1VJRWxlbWVudCwgU2VtYW50aWNVSUF0dHJpYnV0ZSwgYmluZGFibGVUb2dnbGUsIGJpbmRhYmxlRW51bX0gZnJvbSAnLi4vdWktYmFzZSc7XG5pbXBvcnQge2N1c3RvbUF0dHJpYnV0ZSwgY3VzdG9tRWxlbWVudCwgY2hpbGRyZW59IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUVsZW1lbnQoIGAke2NvbnN0YW50cy5lbGVtZW50UHJlZml4fWdyaWRgIClcbmV4cG9ydCBjbGFzcyBTZW1hbnRpY1VJR3JpZEVsZW1lbnQgZXh0ZW5kcyBTZW1hbnRpY1VJRWxlbWVudCB7fVxuXG5AY3VzdG9tQXR0cmlidXRlKCBgJHtjb25zdGFudHMuYXR0cmlidXRlUHJlZml4fWdyaWRgIClcbmV4cG9ydCBjbGFzcyBTZW1hbnRpY1VJR3JpZEF0dHJpYnV0ZSBleHRlbmRzIFNlbWFudGljVUlBdHRyaWJ1dGUge1xuXG5cdEBjaGlsZHJlbiggJy5jb2x1bW4nICkgY29sdW1ucztcblx0QGNoaWxkcmVuKCAnLnJvdycgKSByb3dzO1xuXG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
