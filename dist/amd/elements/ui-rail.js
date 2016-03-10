define(['exports', '../constants', '../ui-attribute', 'aurelia-framework'], function (exports, _constants, _uiAttribute, _aureliaFramework) {
  "use strict";

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var UIRailAttribute = (function (_UIAttribute) {
    var _instanceInitializers = {};

    _inherits(UIRailAttribute, _UIAttribute);

    function UIRailAttribute() {
      _classCallCheck(this, _UIRailAttribute);

      _get(Object.getPrototypeOf(_UIRailAttribute.prototype), 'constructor', this).apply(this, arguments);

      _defineDecoratedPropertyDescriptor(this, 'side', _instanceInitializers);
    }

    _createDecoratedClass(UIRailAttribute, [{
      key: 'side',
      decorators: [(0, _uiAttribute.bindableEnum)('left', 'right')],
      initializer: function initializer() {
        return 'left';
      },
      enumerable: true
    }], null, _instanceInitializers);

    var _UIRailAttribute = UIRailAttribute;
    UIRailAttribute = (0, _aureliaFramework.customAttribute)(_constants.constants.attributePrefix + 'rail')(UIRailAttribute) || UIRailAttribute;
    return UIRailAttribute;
  })(_uiAttribute.UIAttribute);

  exports.UIRailAttribute = UIRailAttribute;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLXJhaWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGNBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztNQVdBLGVBQWU7OztjQUFmLGVBQWU7O2FBQWYsZUFBZTs7Ozs7Ozs7MEJBQWYsZUFBZTs7bUJBRTFCLGlCQU5tQixZQUFZLEVBTWpCLE1BQU0sRUFBRSxPQUFPLENBQUU7O2VBQVEsTUFBTTs7Ozs7MkJBRmxDLGVBQWU7QUFBZixtQkFBZSxHQUQzQixzQkFGTyxlQUFlLEVBRUYsV0FKYixTQUFTLENBSWMsZUFBZSxVQUFRLENBQ3pDLGVBQWUsS0FBZixlQUFlO1dBQWYsZUFBZTtrQkFKcEIsV0FBVyIsImZpbGUiOiJlbGVtZW50cy91aS1yYWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDb250ZW50IFJhaWwgLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL2VsZW1lbnRzL3JhaWwuaHRtbFxuICovXG5cbmltcG9ydCB7Y29uc3RhbnRzfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtVSUF0dHJpYnV0ZSwgYmluZGFibGVFbnVtfSBmcm9tICcuLi91aS1hdHRyaWJ1dGUnO1xuaW1wb3J0IHtjdXN0b21BdHRyaWJ1dGUsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBjdXN0b21BdHRyaWJ1dGUoIGAke2NvbnN0YW50cy5hdHRyaWJ1dGVQcmVmaXh9cmFpbGAgKVxuZXhwb3J0IGNsYXNzIFVJUmFpbEF0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGVFbnVtKCAnbGVmdCcsICdyaWdodCcgKSBzaWRlID0gJ2xlZnQnO1xuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
