/**
 * Aurelia-Semantic-UI -- Aurelia components for Semantic-UI
 * $Id$
 *
 * Authors
 * - Michael Granger <ged@FaerieMUD.org>
 */

import 'semantic';
import 'semantic/semantic.css!';


export var VERSION = '0.0.1.dev';

// Aurelia plugin hook
export function configure(config) {
	config.globalResources(
		'./collections/ui-breadcrumb',
		'./collections/ui-form',
		'./collections/ui-menu',
		'./collections/ui-message',
		'./elements/ui-button',
		'./elements/ui-container',
		'./elements/ui-divider',
		'./elements/ui-flag',
		'./elements/ui-header',
		'./elements/ui-icon',
		'./elements/ui-image',
		'./elements/ui-input',
		'./elements/ui-label',
		'./elements/ui-list',
		'./elements/ui-loader',
		'./elements/ui-rail',
		'./elements/ui-reveal',
		'./elements/ui-segment',
		'./elements/ui-step',
		'./modules/ui-dropdown',
		'./modules/ui-modal',
		'./modules/ui-search',
		'./views/ui-card'
	);
}

