'use strict';

/**
 * latest-version service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::latest-version.latest-version');
