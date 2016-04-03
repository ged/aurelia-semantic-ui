define(['exports', '../constants', '../ui-attribute', 'aurelia-framework'], function (exports, _constants, _uiAttribute, _aureliaFramework) {
  /* -*- javascript -*- */
  "use strict";

  /**
   * Content Rail - http://semantic-ui.com/elements/rail.html
   */

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.UIRailAttribute = undefined;

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

  var _dec, _dec2, _class, _desc, _value, _class2, _descriptor;

  let UIRailAttribute = exports.UIRailAttribute = (_dec = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }rail`), _dec2 = (0, _uiAttribute.bindableEnum)('left', 'right'), _dec(_class = (_class2 = class UIRailAttribute extends _uiAttribute.UIAttribute {
    constructor(...args) {
      var _temp;

      return _temp = super(...args), _initDefineProp(this, 'side', _descriptor, this), _temp;
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'side', [_dec2], {
    enumerable: true,
    initializer: function () {
      return 'left';
    }
  })), _class2)) || _class);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLXJhaWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFXYSxvREFEWix1Q0FBaUIsQ0FBQyxHQUFFLHFCQUFVLGVBQVYsRUFBMEIsSUFBN0IsQ0FBakIsV0FHQywrQkFBYyxNQUFkLEVBQXNCLE9BQXRCLDRCQUZLLE1BQU0sZUFBTixrQ0FBMEM7Ozs7Ozs7R0FBMUM7OzthQUVrQyIsImZpbGUiOiJlbGVtZW50cy91aS1yYWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDb250ZW50IFJhaWwgLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL2VsZW1lbnRzL3JhaWwuaHRtbFxuICovXG5cbmltcG9ydCB7Y29uc3RhbnRzfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtVSUF0dHJpYnV0ZSwgYmluZGFibGVFbnVtfSBmcm9tICcuLi91aS1hdHRyaWJ1dGUnO1xuaW1wb3J0IHtjdXN0b21BdHRyaWJ1dGUsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBjdXN0b21BdHRyaWJ1dGUoIGAke2NvbnN0YW50cy5hdHRyaWJ1dGVQcmVmaXh9cmFpbGAgKVxuZXhwb3J0IGNsYXNzIFVJUmFpbEF0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGVFbnVtKCAnbGVmdCcsICdyaWdodCcgKSBzaWRlID0gJ2xlZnQnO1xuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
