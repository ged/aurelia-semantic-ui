/* -*- javascript -*- */
"use strict";

/**
 * Accordion - http://semantic-ui.com/modules/accordion.html
 */

import {constants} from '../constants';
import {SemanticUIElement, SemanticUIAttribute, bindableToggle, bindableEnum} from '../ui-base';
import {customAttribute, customElement} from 'aurelia-framework';

@customElement( `${constants.elementPrefix}accordion` )
export class SemanticUIAccordionElement extends SemanticUIElement {}

@customAttribute( `${constants.attributePrefix}accordion` )
export class SemanticUIAccordionAttribute extends SemanticUIAttribute {

    attached() {
		this.logger.debug( "Activating accordion for ", this.element );
        $( this.element ).accordion();
    }

}

