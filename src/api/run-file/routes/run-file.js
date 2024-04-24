'use strict';

/**
 * run-file router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::run-file.run-file');
