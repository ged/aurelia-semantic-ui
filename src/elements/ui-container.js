/* -*- javascript -*- */
"use strict";

/**
 * Container - http://semantic-ui.com/elements/container.html
 */

import {constants} from '../constants';
import {uiElement, uiAttribute, bindableToggle, bindableEnum} from '../decorators';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';

@uiElement( 'container' )
export class SemanticUIContainerElement extends SemanticUIElement {

	@bindableToggle text = false;
	@bindableToggle justified = false;
	@bindableToggle fluid = false;

	@bindableEnum( constants.VALID_ALIGNMENTS ) aligned;

}

@uiAttribute( 'container' )
export class SemanticUIContainerAttribute extends SemanticUIAttribute {

	@bindableToggle text = false;
	@bindableToggle justified = false;
	@bindableToggle fluid = false;

	@bindableEnum( constants.VALID_ALIGNMENTS ) aligned;

}

