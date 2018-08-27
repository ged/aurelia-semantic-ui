/**
 * Aurelia-Semantic-UI -- Aurelia components for Semantic-UI
 * $Id$
 *
 * Authors
 * - Michael Granger <ged@FaerieMUD.org>
 */

import jQuery from 'jquery'; // eslint-disable-line no-unused-vars
import {PLATFORM} from 'aurelia-framework';

import './semantic/semantic';

export const VERSION = '0.0.2-alpha.1';

// Aurelia plugin hook
export function configure(config, callback=null) {
	config.globalResources(
		PLATFORM.moduleName('aurelia-semantic-ui/behaviors/ui-visibility'),
		PLATFORM.moduleName('aurelia-semantic-ui/collections/ui-breadcrumb'),
		PLATFORM.moduleName('aurelia-semantic-ui/collections/ui-form'),
		PLATFORM.moduleName('aurelia-semantic-ui/collections/ui-grid'),
		PLATFORM.moduleName('aurelia-semantic-ui/collections/ui-menu'),
		PLATFORM.moduleName('aurelia-semantic-ui/collections/ui-message'),
		PLATFORM.moduleName('aurelia-semantic-ui/collections/ui-table'),
		PLATFORM.moduleName('aurelia-semantic-ui/elements/ui-button'),
		PLATFORM.moduleName('aurelia-semantic-ui/elements/ui-container'),
		PLATFORM.moduleName('aurelia-semantic-ui/elements/ui-divider'),
		PLATFORM.moduleName('aurelia-semantic-ui/elements/ui-flag'),
		PLATFORM.moduleName('aurelia-semantic-ui/elements/ui-header'),
		PLATFORM.moduleName('aurelia-semantic-ui/elements/ui-icon'),
		PLATFORM.moduleName('aurelia-semantic-ui/elements/ui-image'),
		PLATFORM.moduleName('aurelia-semantic-ui/elements/ui-input'),
		PLATFORM.moduleName('aurelia-semantic-ui/elements/ui-label'),
		PLATFORM.moduleName('aurelia-semantic-ui/elements/ui-list'),
		PLATFORM.moduleName('aurelia-semantic-ui/elements/ui-loader'),
		PLATFORM.moduleName('aurelia-semantic-ui/elements/ui-rail'),
		PLATFORM.moduleName('aurelia-semantic-ui/elements/ui-reveal'),
		PLATFORM.moduleName('aurelia-semantic-ui/elements/ui-segment'),
		PLATFORM.moduleName('aurelia-semantic-ui/elements/ui-step'),
		PLATFORM.moduleName('aurelia-semantic-ui/modules/ui-accordion'),
		PLATFORM.moduleName('aurelia-semantic-ui/modules/ui-checkbox'),
		PLATFORM.moduleName('aurelia-semantic-ui/modules/ui-dimmer'),
		PLATFORM.moduleName('aurelia-semantic-ui/modules/ui-dropdown'),
		PLATFORM.moduleName('aurelia-semantic-ui/modules/ui-modal'),
		PLATFORM.moduleName('aurelia-semantic-ui/modules/ui-popup'),
		PLATFORM.moduleName('aurelia-semantic-ui/modules/ui-progress'),
		PLATFORM.moduleName('aurelia-semantic-ui/modules/ui-search'),
		PLATFORM.moduleName('aurelia-semantic-ui/modules/ui-sidebar'),
		PLATFORM.moduleName('aurelia-semantic-ui/modules/ui-sticky'),
		PLATFORM.moduleName('aurelia-semantic-ui/views/ui-card'),
		PLATFORM.moduleName('aurelia-semantic-ui/views/ui-feed'),
		PLATFORM.moduleName('./views/ui-statistic')
	);
}

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

