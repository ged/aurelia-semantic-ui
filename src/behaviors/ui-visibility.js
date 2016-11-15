/* -*- javascript -*- */
"use strict";

/**
 * Visibility - http://semantic-ui.com/behaviors/visibility.html
 */

import {constants} from '../constants';
import {uiAttribute, bindableToggle} from '../decorators';
import {bindable} from 'aurelia-framework';
import {SemanticUIAttribute} from '../ui-base';

const CALLBACK_NAMES = [
	'onTopVisible',
	'onTopPassed',
	'onBottomVisible',
	'onPassing',
	'onBottomPassed',
	'onTopVisibleReverse',
	'onTopPassedReverse',
	'onBottomVisibleReverse',
	'onPassingReverse',
	'onBottomPassedReverse',
	'onLoad',
	'onAllLoaded',
	'onFixed',
	'onUnfixed',
	'onUpdate',
	'onRefresh'
];

@uiAttribute( 'visibility' )
export class SemanticUIVisibilityAttribute extends SemanticUIAttribute {

	@bindable type = false;

	@bindable onTopVisible = null;
	@bindable onTopPassed = null;
	@bindable onBottomVisible = null;
	@bindable onPassing = null;
	@bindable onBottomPassed = null;
	@bindable onTopVisibleReverse = null;
	@bindable onTopPassedReverse = null;
	@bindable onBottomVisibleReverse = null;
	@bindable onPassingReverse = null;
	@bindable onBottomPassedReverse = null;

	@bindable onLoad = null;
	@bindable onAllLoaded = null;

	@bindable onFixed = null;
	@bindable onUnfixed = null;

	@bindable onUpdate = null;
	@bindable onRefresh = null;


	callbackScope = null;


	get options() {
		let opts = Object.assign( {}, this.visibilityCallbacks );

		opts.type = this.visibilityType;

		this.logger.debug( "Visibility options are: ", opts );
		return opts;
	}


	get visibilityType() {
		if ( this.type ) return this.type;
		return (this.element.tagName === 'IMG') ? 'image' : false;
	}

	get visibilityCallbacks() {
		let callbacks = {};

		if ( !this.callbackScope ) {
			throw new Error( "Tried to build callbacks for unbound control." );
		}

		CALLBACK_NAMES.forEach( name => {
			if ( this[name] ) {
				this.logger.debug( `Registering callback ${name}: ${this[name]}.` );
				callbacks[ name ] = this[ name ].bind( this.callbackScope );
			}
		});

		this.logger.debug( "Visibility callbacks are: ", callbacks );
		return callbacks;
	}


	bind( context, override ) {
		super.bind( context, override );
		this.callbackScope = context;
	}


	unbind() {
		this.callbackScope = null;
		if ( super.unbind ) super.unbind();
	}


	attached() {
		$( this.semanticElement ).visibility( this.options );
	}

}

