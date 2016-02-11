/* -*- javascript -*- */
"use strict";

/**
 * Icon - http://semantic-ui.com/elements/icon.html#/definition
 */

import {customElement, containerless, bindable} from 'aurelia-framework';

@customElement( 'ui-icon' )
@containerless()
export class UIIconElement {

	@bindable name = "help circle";

}

