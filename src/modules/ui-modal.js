/* -*- javascript -*- */
"use strict";

/**
 * Modal - http://semantic-ui.com/modules/modal.html
 */

import * as constants from '../constants';
import {bindable} from 'aurelia-framework';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';
import {uiElement, uiAttribute, bindableEnum} from '../decorators';

const MODAL_SETTINGS = {
	detachable: true,
	autoFocus: true,
	observeChanges: false,
	allowMultiple: false,
	keyboardShortcuts: true,
	offset: 0,
	context: 'body',
	closable: true,
	dimmerSettings: { closable: false, useCSS: true },
	transition: 'scale',
	duration: 400,
	queue: false,
};

const MODAL_CALLBACKS = [
	'show',
	'visible',
	'hide',
	'hidden',
	'approve',
	'deny'
];


@uiElement('modal')
export class SemanticUIModalElement extends SemanticUIElement {}

@uiAttribute('modal')
export class SemanticUIModalAttribute extends SemanticUIAttribute {

	@bindable shown             = false;

	@bindable detachable        = true;
	@bindable autoFocus         = true;
	@bindable observeChanges    = false;
	@bindable allowMultiple     = false;
	@bindable keyboardShortcuts = true;
	@bindable offset            = 0;
	@bindable context           = 'body';
	@bindable closable          = true;
	@bindable dimmerSettings    = { closable: false, useCSS: true };
	@bindable transition        = 'scale';
	@bindable duration          = 400;
	@bindable queue             = false;

	@bindable onShow    = null;
	@bindable onVisible = null;
	@bindable onHide    = null;
	@bindable onHidden  = null;
	@bindable onApprove = null;
	@bindable onDeny    = null;


	get settings() {
		let settings = {
			detachable: this.detachable,
			autoFocus: this.autoFocus,
			observeChanges: this.observeChanges,
			allowMultiple: this.allowMultiple,
			keyboardShortcuts: this.keyboardShortcuts,
			offset: this.offset,
			context: this.context,
			closable: this.closable,
			dimmerSettings: this.dimmerSettings,
			transition: this.transition,
			duration: this.duration,
			queue: this.queue,
		};

		if ( this.onShow ) { settings.onShow = this.onShow }
		if ( this.onVisible ) { settings.onVisible = this.onVisible }
		if ( this.onHide ) { settings.onHide = this.onHide }
		if ( this.onHidden ) { settings.onHidden = this.onHidden }
		if ( this.onApprove ) { settings.onApprove = this.onApprove }
		if ( this.onDeny ) { settings.onDeny = this.onDeny }

		return settings;
	}


	configure() {
		$( this.element ).modal( this.settings );
	}


	onApproval( callback ) {
		this.onApprove = callback;
		this.configure();
		return this;
	}

	onDenial( callback ) {
		this.onDeny = callback;
		this.configure();
		return this;
	}

	show() {
		$( this.element ).modal( 'show' );
		return this;
	}

	hide() {
		$( this.element ).modal( 'hide' );
		return this;
	}

	toggle() {
		$( this.element ).modal( 'toggle' );
		return this;
	}

	showDimmer() {
		$( this.element ).modal( 'show dimmer' );
		return this;
	}


	// Aurelia custom attribute API

	attached() {
		this.configure();
	}


	// Aurelia binding API

	shownChanged( newValue, oldValue ) {
		if ( newValue ) {
			this.show();
		} else {
			this.hide();
		}
	}


	onShowChanged( newValue, oldValue ) {
		this.onShow = newValue;
		this.configure();
	}
	onVisibleChanged( newValue, oldValue ) {
		this.onVisible = newValue;
		this.configure();
	}
	onHideChanged( newValue, oldValue ) {
		this.onHide = newValue;
		this.configure();
	}
	onHiddenChanged( newValue, oldValue ) {
		this.onHidden = newValue;
		this.configure();
	}
	onApproveChanged( newValue, oldValue ) {
		this.onApprove = newValue;
		this.configure();
	}
	onDenyChanged( newValue, oldValue ) {
		this.onDeny = newValue;
		this.configure();
	}

	onDetachableChanged( newValue, oldValue ) {
		this.detachable = newValue;
		this.configure();
	}
	onAutoFocusChanged( newValue, oldValue ) {
		this.autoFocus = newValue;
		this.configure();
	}
	onObserveChangesChanged( newValue, oldValue ) {
		this.observeChanges = newValue;
		this.configure();
	}
	onAllowMultipleChanged( newValue, oldValue ) {
		this.allowMultiple = newValue;
		this.configure();
	}
	onKeyboardShortcutsChanged( newValue, oldValue ) {
		this.keyboardShortcuts = newValue;
		this.configure();
	}
	onOffsetChanged( newValue, oldValue ) {
		this.offset = newValue;
		this.configure();
	}
	onContextChanged( newValue, oldValue ) {
		this.context = newValue;
		this.configure();
	}
	onClosableChanged( newValue, oldValue ) {
		this.closable = newValue;
		this.configure();
	}
	onDimmerSettingsChanged( newValue, oldValue ) {
		this.dimmerSettings = newValue;
		this.configure();
	}
	onTransitionChanged( newValue, oldValue ) {
		this.transition = newValue;
		this.configure();
	}
	onDurationChanged( newValue, oldValue ) {
		this.duration = newValue;
		this.configure();
	}
	onQueueChanged( newValue, oldValue ) {
		this.queue = newValue;
		this.configure();
	}


}

