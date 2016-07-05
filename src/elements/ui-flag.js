/* -*- javascript -*- */
"use strict";

/**
 * Flag - http://semantic-ui.com/elements/flag.html
 */

import {constants} from '../constants';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';
import {customAttribute, customElement, bindable} from 'aurelia-framework';

@customElement( `${constants.elementPrefix}flag` )
export class SemanticUIFlagElement extends SemanticUIElement {}

@customAttribute( `${constants.attributePrefix}flag` )
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


