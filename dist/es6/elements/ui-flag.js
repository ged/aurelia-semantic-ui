/* -*- javascript -*- */
"use strict";

/**
 * Flag - http://semantic-ui.com/elements/flag.html
 */

import {constants} from '../constants';
import {UIAttribute} from '../ui-attribute';
import {customAttribute, bindable} from 'aurelia-framework';

@customAttribute( `${constants.attributePrefix}flag` )
export class UIFlagAttribute extends UIAttribute {

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


