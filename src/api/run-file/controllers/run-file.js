'use strict';

/**
 * run-file controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::run-file.run-file');
