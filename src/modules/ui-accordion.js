/* -*- javascript -*- */
"use strict";

/**
 * Accordion - http://semantic-ui.com/modules/accordion.html
 */

import {constants} from '../constants';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';
import {uiElement, uiAttribute, bindableEnum, bindableToggle} from '../decorators';


@uiElement( 'accordion' )
export class SemanticUIAccordionElement extends SemanticUIElement {}

@uiAttribute( 'accordion' )
export class SemanticUIAccordionAttribute extends SemanticUIAttribute {

    attached() {
		this.logger.debug( "Activating accordion for ", this.element );
        $( this.element ).accordion();
    }

}

