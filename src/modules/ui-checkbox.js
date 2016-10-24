/* -*- javascript -*- */
"use strict";

/**
 * Checkbox - http://semantic-ui.com/modules/checkbox.html
 */

import {constants} from '../constants';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';
import {uiElement, uiAttribute, bindableEnum, bindableToggle} from '../decorators';
import {bindable, bindingMode} from 'aurelia-framework';


@uiElement( 'checkbox' )
export class SemanticUICheckboxElement extends SemanticUIElement {

	@bindable({ defaultBindingMode: bindingMode.twoWay }) checked = false;


	attached() {
		this.logger.debug( "Checkboxing ", this.semanticElement );
		$( this.semanticElement ).checkbox({
			fireOnInit: true,
			onChecked: (ev) => this.checked = true,
			onUnchecked: (ev) => this.checked = false
		});
	}

}


@uiAttribute( 'checkbox' )
export class SemanticUICheckboxAttribute extends SemanticUIAttribute {

	@bindable({ defaultBindingMode: bindingMode.twoWay }) checked = false;

	attached() {
		this.logger.debug( "Checkboxing ", this.element );
		$( this.semanticElement ).checkbox({
			fireOnInit: true,
			onChecked: (ev) => this.checked = true,
			onUnchecked: (ev) => this.checked = false
		});
	}

}


