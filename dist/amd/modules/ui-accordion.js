define(['exports', '../constants', '../ui-attribute', 'aurelia-framework'], function (exports, _constants, _uiAttribute, _aureliaFramework) {
    /* -*- javascript -*- */
    "use strict";

    /**
     * Accordion - http://semantic-ui.com/modules/accordion.html
     */

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.UIAccordionAttribute = undefined;

    var _dec, _class;

    let UIAccordionAttribute = exports.UIAccordionAttribute = (_dec = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }accordion`), _dec(_class = class UIAccordionAttribute extends _uiAttribute.UIAttribute {

        attached() {
            this.logger.debug("Activating accordion for ", this.element);
            $(this.element).accordion();
        }

    }) || _class);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdWktYWNjb3JkaW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztRQVNhLG9CLFdBQUEsb0IsV0FEWix1Q0FBa0IsSUFBRSxxQkFBVSxlQUFnQixZQUE5QyxDLGdCQUNNLE1BQU0sb0JBQU4sa0NBQStDOztBQUVsRCxtQkFBVztBQUNiLGlCQUFLLE1BQUwsQ0FBWSxLQUFaLENBQW1CLDJCQUFuQixFQUFnRCxLQUFLLE9BQXJEO0FBQ00sY0FBRyxLQUFLLE9BQVIsRUFBa0IsU0FBbEI7QUFDSDs7QUFMaUQsSyIsImZpbGUiOiJtb2R1bGVzL3VpLWFjY29yZGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQWNjb3JkaW9uIC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9tb2R1bGVzL2FjY29yZGlvbi5odG1sXG4gKi9cblxuaW1wb3J0IHtjb25zdGFudHN9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge1VJQXR0cmlidXRlLCBiaW5kYWJsZVRvZ2dsZSwgYmluZGFibGVFbnVtfSBmcm9tICcuLi91aS1hdHRyaWJ1dGUnO1xuaW1wb3J0IHtpbmplY3QsIGN1c3RvbUF0dHJpYnV0ZSwgYmluZGFibGUsIGJpbmRpbmdNb2RlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBjdXN0b21BdHRyaWJ1dGUoIGAke2NvbnN0YW50cy5hdHRyaWJ1dGVQcmVmaXh9YWNjb3JkaW9uYCApXG5leHBvcnQgY2xhc3MgVUlBY2NvcmRpb25BdHRyaWJ1dGUgZXh0ZW5kcyBVSUF0dHJpYnV0ZSB7XG5cbiAgICBhdHRhY2hlZCgpIHtcblx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggXCJBY3RpdmF0aW5nIGFjY29yZGlvbiBmb3IgXCIsIHRoaXMuZWxlbWVudCApO1xuICAgICAgICAkKCB0aGlzLmVsZW1lbnQgKS5hY2NvcmRpb24oKTtcbiAgICB9XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
