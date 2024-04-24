'use strict';

/**
 * run-file service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::run-file.run-file');
