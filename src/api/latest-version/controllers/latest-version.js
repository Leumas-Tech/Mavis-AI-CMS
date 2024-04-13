'use strict';

/**
 * latest-version controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::latest-version.latest-version');
