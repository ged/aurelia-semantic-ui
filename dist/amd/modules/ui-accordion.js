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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdWktYWNjb3JkaW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7UUFXYSxvQixXQUFBLG9CLFdBRFosdUNBQWtCLElBQUUscUJBQVUsZUFBZ0IsWUFBOUMsQyxnQkFDTSxNQUFNLG9CQUFOLGtDQUErQzs7QUFFbEQsbUJBQVc7QUFDYixpQkFBSyxNQUFMLENBQVksS0FBWixDQUFtQiwyQkFBbkIsRUFBZ0QsS0FBSyxPQUFyRDtBQUNNLGNBQUcsS0FBSyxPQUFSLEVBQWtCLFNBQWxCO0FBQ0g7O0FBTGlELEsiLCJmaWxlIjoibW9kdWxlcy91aS1hY2NvcmRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIEFjY29yZGlvbiAtIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vbW9kdWxlcy9hY2NvcmRpb24uaHRtbFxuICovXG5cbmltcG9ydCB7Y29uc3RhbnRzfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtVSUF0dHJpYnV0ZSwgYmluZGFibGVUb2dnbGUsIGJpbmRhYmxlRW51bX0gZnJvbSAnLi4vdWktYXR0cmlidXRlJztcbmltcG9ydCB7aW5qZWN0LCBjdXN0b21BdHRyaWJ1dGUsIGJpbmRhYmxlLCBiaW5kaW5nTW9kZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AY3VzdG9tQXR0cmlidXRlKCBgJHtjb25zdGFudHMuYXR0cmlidXRlUHJlZml4fWFjY29yZGlvbmAgKVxuZXhwb3J0IGNsYXNzIFVJQWNjb3JkaW9uQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG4gICAgYXR0YWNoZWQoKSB7XG5cdFx0dGhpcy5sb2dnZXIuZGVidWcoIFwiQWN0aXZhdGluZyBhY2NvcmRpb24gZm9yIFwiLCB0aGlzLmVsZW1lbnQgKTtcbiAgICAgICAgJCggdGhpcy5lbGVtZW50ICkuYWNjb3JkaW9uKCk7XG4gICAgfVxuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
