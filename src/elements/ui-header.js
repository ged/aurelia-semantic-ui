/* -*- javascript -*- */
"use strict";

/**
 * Content Header - http://semantic-ui.com/elements/header.html#content-headers
 */

import {inject, customElement, bindable} from 'aurelia-framework';
import $ from 'jquery';

@customElement( 'ui-header' )
export class UIHeaderElement {

	@bindable type = null;
	@bindable size = null;

}

