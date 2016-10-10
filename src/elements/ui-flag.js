/* -*- javascript -*- */
"use strict";

/**
 * Flag - http://semantic-ui.com/elements/flag.html
 */

import {constants} from '../constants';
import {uiElement, uiAttribute} from '../decorators';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';
import {bindable} from 'aurelia-framework';

@uiElement( 'flag' )
export class SemanticUIFlagElement extends SemanticUIElement {}

@uiAttribute( 'flag' )
export class SemanticUIFlagAttribute extends SemanticUIAttribute {

    @bindable country;


    bind( ...args ) {
        super.bind( ...args );
        if ( this.country ) {
            this.element.classList.add( ...this.country.split(' ') );
        }
    }


    countryChanged( newValue, oldValue ) {
        if ( oldValue ) { this.element.classList.remove(...oldValue.split(' ')); }
        if ( newValue ) { this.element.classList.add(...newValue.split(' ')); }
    }

}


