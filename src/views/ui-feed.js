/* -*- javascript -*- */
"use strict";

/**
 * Feed - http://semantic-ui.com/views/feed.html
 */

import {constants} from '../constants';
import {SemanticUIElement, SemanticUIAttribute, bindableEnum} from '../ui-base';
import {customAttribute, customElement} from 'aurelia-framework';

@customElement( `${constants.elementPrefix}feed` )
export class SemanticUIFeedElement extends SemanticUIElement {}

@customAttribute( `${constants.attributePrefix}feed` )
export class SemanticUIFeedAttribute extends SemanticUIAttribute {

	@bindableEnum( ...constants.VALID_SIZES ) size;

}


