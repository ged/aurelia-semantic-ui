define(['exports', '../constants', '../ui-base', 'aurelia-framework'], function (exports, _constants, _uiBase, _aureliaFramework) {
    /* -*- javascript -*- */
    "use strict";

    /**
     * Accordion - http://semantic-ui.com/modules/accordion.html
     */

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.SemanticUIAccordionAttribute = exports.SemanticUIAccordionElement = undefined;

    var _dec, _class, _dec2, _class2;

    let SemanticUIAccordionElement = exports.SemanticUIAccordionElement = (_dec = (0, _aureliaFramework.customElement)(`${ _constants.constants.elementPrefix }accordion`), _dec(_class = class SemanticUIAccordionElement extends _uiBase.SemanticUIElement {}) || _class);
    let SemanticUIAccordionAttribute = exports.SemanticUIAccordionAttribute = (_dec2 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }accordion`), _dec2(_class2 = class SemanticUIAccordionAttribute extends _uiBase.SemanticUIAttribute {

        attached() {
            this.logger.debug("Activating accordion for ", this.element);
            $(this.element).accordion();
        }

    }) || _class2);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdWktYWNjb3JkaW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztRQVNhLDBCLFdBQUEsMEIsV0FEWixxQ0FBZ0IsSUFBRSxxQkFBVSxhQUFjLFlBQTFDLEMsZ0JBQ00sTUFBTSwwQkFBTixtQ0FBMkQsRTtRQUdyRCw0QixXQUFBLDRCLFlBRFosdUNBQWtCLElBQUUscUJBQVUsZUFBZ0IsWUFBOUMsQyxrQkFDTSxNQUFNLDRCQUFOLHFDQUErRDs7QUFFbEUsbUJBQVc7QUFDYixpQkFBSyxNQUFMLENBQVksS0FBWixDQUFtQiwyQkFBbkIsRUFBZ0QsS0FBSyxPQUFyRDtBQUNNLGNBQUcsS0FBSyxPQUFSLEVBQWtCLFNBQWxCO0FBQ0g7O0FBTGlFLEsiLCJmaWxlIjoibW9kdWxlcy91aS1hY2NvcmRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIEFjY29yZGlvbiAtIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vbW9kdWxlcy9hY2NvcmRpb24uaHRtbFxuICovXG5cbmltcG9ydCB7Y29uc3RhbnRzfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtTZW1hbnRpY1VJRWxlbWVudCwgU2VtYW50aWNVSUF0dHJpYnV0ZSwgYmluZGFibGVUb2dnbGUsIGJpbmRhYmxlRW51bX0gZnJvbSAnLi4vdWktYmFzZSc7XG5pbXBvcnQge2N1c3RvbUF0dHJpYnV0ZSwgY3VzdG9tRWxlbWVudH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AY3VzdG9tRWxlbWVudCggYCR7Y29uc3RhbnRzLmVsZW1lbnRQcmVmaXh9YWNjb3JkaW9uYCApXG5leHBvcnQgY2xhc3MgU2VtYW50aWNVSUFjY29yZGlvbkVsZW1lbnQgZXh0ZW5kcyBTZW1hbnRpY1VJRWxlbWVudCB7fVxuXG5AY3VzdG9tQXR0cmlidXRlKCBgJHtjb25zdGFudHMuYXR0cmlidXRlUHJlZml4fWFjY29yZGlvbmAgKVxuZXhwb3J0IGNsYXNzIFNlbWFudGljVUlBY2NvcmRpb25BdHRyaWJ1dGUgZXh0ZW5kcyBTZW1hbnRpY1VJQXR0cmlidXRlIHtcblxuICAgIGF0dGFjaGVkKCkge1xuXHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBcIkFjdGl2YXRpbmcgYWNjb3JkaW9uIGZvciBcIiwgdGhpcy5lbGVtZW50ICk7XG4gICAgICAgICQoIHRoaXMuZWxlbWVudCApLmFjY29yZGlvbigpO1xuICAgIH1cblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
