/* -*- javascript -*- */
"use strict";

import {bindable, bindingMode} from 'aurelia-framework';
import {uiElement, uiAttribute, bindableEnum} from "../decorators";
import {SemanticUIElement, SemanticUIAttribute} from "../ui-base"
import "../resources/libraries/calendar";

const DEFAULT_TYPE = 'datetime';

@uiElement( 'calendar' )
export class SemanticUICalenderElement extends SemanticUIElement {

	@bindable({ defaultBindingMode: bindingMode.oneTime }) type = DEFAULT_TYPE;
	@bindable({ defaultBindingMode: bindingMode.twoWay }) value;
	@bindable placeholder = null;

	onChangeCallback = null;


	attached() {
		$( this.semanticElement ).calendar({
			type: this.type,
			initialDate: this.value,
			verbose: true,
			onChange: newValue => this.value = newValue
		});
	}

	detached() {
		$( this.semanticElement ).calendar( 'destroy' );
	}

}


@uiAttribute( 'calendar' )
export class SemanticUICalenderAttribute extends SemanticUIAttribute {

	@bindable({ defaultBindingMode: bindingMode.oneTime }) type = DEFAULT_TYPE;
	@bindable({ defaultBindingMode: bindingMode.twoWay }) value;
	@bindable placeholder = null;


	attached() {
		$( this.semanticElement ).calendar({
			type: this.type,
			initialDate: this.value,
			verbose: true,
			onChange: value => this.value = value
		});
	}

	detached() {
		$( this.semanticElement ).calendar( 'destroy' );
	}

}
