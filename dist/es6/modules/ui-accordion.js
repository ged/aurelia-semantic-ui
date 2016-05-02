/* -*- javascript -*- */
"use strict";

/**
 * Accordion - http://semantic-ui.com/modules/accordion.html
 */

import {constants} from '../constants';
import {UIAttribute, bindableToggle, bindableEnum} from '../ui-attribute';
import {inject, customAttribute, bindable, bindingMode} from 'aurelia-framework';

@customAttribute( `${constants.attributePrefix}accordion` )
export class UIAccordionAttribute extends UIAttribute {

    attached() {
		this.logger.debug( "Activating accordion for ", this.element );
        $( this.element ).accordion();
    }

}

