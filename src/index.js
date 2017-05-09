/**
 * Aurelia-Semantic-UI -- Aurelia components for Semantic-UI
 * $Id$
 *
 * Authors
 * - Michael Granger <ged@FaerieMUD.org>
 */

import jQuery from 'jquery';
import 'semantic-ui';


export var VERSION = '0.0.1-alpha.20';

export * from './behaviors/ui-visibility';

export * from './collections/ui-breadcrumb';
export * from './collections/ui-form';
export * from './collections/ui-grid';
export * from './collections/ui-menu';
export * from './collections/ui-message';
export * from './collections/ui-table';

export * from './elements/ui-button';
export * from './elements/ui-container';
export * from './elements/ui-divider';
export * from './elements/ui-flag';
export * from './elements/ui-header';
export * from './elements/ui-icon';
export * from './elements/ui-image';
export * from './elements/ui-input';
export * from './elements/ui-label';
export * from './elements/ui-list';
export * from './elements/ui-loader';
export * from './elements/ui-rail';
export * from './elements/ui-reveal';
export * from './elements/ui-segment';
export * from './elements/ui-step';

export * from './modules/ui-accordion';
export * from './modules/ui-checkbox';
export * from './modules/ui-dimmer';
export * from './modules/ui-dropdown';
export * from './modules/ui-modal';
export * from './modules/ui-popup';
export * from './modules/ui-progress';
export * from './modules/ui-search';
export * from './modules/ui-sidebar';
export * from './modules/ui-sticky';

export * from './views/ui-card';
export * from './views/ui-feed';
export * from './views/ui-statistic';

// Aurelia plugin hook
export function configure(config) {
	config.globalResources(
		'./behaviors/ui-visibility',
		'./collections/ui-breadcrumb',
		'./collections/ui-form',
		'./collections/ui-grid',
		'./collections/ui-menu',
		'./collections/ui-message',
		'./collections/ui-table',
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
		'./modules/ui-accordion',
		'./modules/ui-checkbox',
		'./modules/ui-dimmer',
		'./modules/ui-dropdown',
		'./modules/ui-modal',
		'./modules/ui-popup',
		'./modules/ui-progress',
		'./modules/ui-search',
		'./modules/ui-sidebar',
		'./modules/ui-sticky',
		'./views/ui-card',
		'./views/ui-feed',
		'./views/ui-statistic'
	);
}

