import {inject, customElement, bindable, bindingMode, containerless, LogManager} from 'aurelia-framework';
import {constants} from "../constants";
import {} from "../ui-base"
import "../resources/libraries/calendar";


@customElement(`${constants.elementPrefix}calendar`)
export class SemanticUICalenderElement extends SemanticUIElement {

  @bindable({ defaultBindingMode: bindingMode.twoWay }) date;
  @bindable() placeholder;

  bind() {
  }

  attached() {
    $(this.element).children().calendar({
      type: 'date',
      onChange: d => {
        this.date = d;
        return true;
      }
    });
    this.logger.debug("Calendar activated for", this.element);
  }

  detached() {
    // remove it in here if possible!
  }
}
