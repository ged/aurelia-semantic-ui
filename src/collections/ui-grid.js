/* -*- javascript -*- */
"use strict";

/**
 * Grid - http://semantic-ui.com/collections/grid.html
 */

import {constants} from '../constants';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';
import {uiElement, uiAttribute, bindableEnum, bindableToggle} from '../decorators';
import {children} from 'aurelia-framework';

@uiElement( 'grid' )
export class SemanticUIGridElement extends SemanticUIElement {}

@uiAttribute( 'grid' )
export class SemanticUIGridAttribute extends SemanticUIAttribute {

	@children( '.column' ) columns;
	@children( '.row' ) rows;

}


