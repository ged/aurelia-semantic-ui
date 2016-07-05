/* -*- javascript -*- */
"use strict";

/**
 * Grid - http://semantic-ui.com/collections/grid.html
 */

import {constants} from '../constants';
import {SemanticUIElement, SemanticUIAttribute, bindableToggle, bindableEnum} from '../ui-base';
import {customAttribute, customElement, children} from 'aurelia-framework';

@customElement( `${constants.elementPrefix}grid` )
export class SemanticUIGridElement extends SemanticUIElement {}

@customAttribute( `${constants.attributePrefix}grid` )
export class SemanticUIGridAttribute extends SemanticUIAttribute {

	@children( '.column' ) columns;
	@children( '.row' ) rows;

}


