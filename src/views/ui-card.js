/* -*- javascript -*- */

/**
 * Card - http://semantic-ui.com/views/card.html
 */

import * as constants from '../constants';
import {uiElement, uiAttribute} from '../decorators';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';


@uiElement( 'card' )
export class SemanticUICardElement extends SemanticUIElement {}

@uiAttribute( 'card' )
export class SemanticUICardAttribute extends SemanticUIAttribute {
}


@uiElement( 'cards' )
export class SemanticUICardsElement extends SemanticUIElement {}

@uiAttribute( 'cards' )
export class SemanticUICardsAttribute extends SemanticUIAttribute {
}


