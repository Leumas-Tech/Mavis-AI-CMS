'use strict';

/**
 * latest-version router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::latest-version.latest-version');
