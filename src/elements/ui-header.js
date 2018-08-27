/* -*- javascript -*- */

/**
 * Content Header - http://semantic-ui.com/elements/header.html#content-headers
 */

import * as constants from '../constants';
import {uiElement, uiAttribute, bindableEnum} from '../decorators';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';


@uiElement( 'header' )
export class SemanticUIHeaderElement extends SemanticUIElement {}

@uiAttribute( 'header' )
export class SemanticUIHeaderAttribute extends SemanticUIAttribute {

	@bindableEnum( constants.VALID_SIZES ) size;
	@bindableEnum( constants.VALID_COLORS, {includeName: false} ) color;

}

