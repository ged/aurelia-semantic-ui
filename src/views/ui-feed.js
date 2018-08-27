/* -*- javascript -*- */

/**
 * Feed - http://semantic-ui.com/views/feed.html
 */

import * as constants from '../constants';
import {uiElement, uiAttribute, bindableEnum} from '../decorators';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';


@uiElement( 'feed' )
export class SemanticUIFeedElement extends SemanticUIElement {}


@uiAttribute( 'feed' )
export class SemanticUIFeedAttribute extends SemanticUIAttribute {

	@bindableEnum( constants.VALID_SIZES ) size;

}


