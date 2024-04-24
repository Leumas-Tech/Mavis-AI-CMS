// user.controller.js
const { getUserFiles , getUserImages  } = require('../services/user.services');

module.exports = {
  getUserFiles: async function(ctx) {
    const userId = ctx.state.user.id; // Assuming the user ID is stored in the request context
    try {
      const userFiles = await getUserFiles(userId);
      return ctx.send({ data: userFiles });
    } catch (error) {
      console.error('Error fetching user files:', error);
      return ctx.badRequest('Failed to fetch user files. Please try again.');
    }
  },

  getUserImages: async function(ctx) {
    const userId = ctx.state.user.id; // Assuming the user ID is stored in the request context
    try {
      const userImages = await getUserImages(userId);
      return ctx.send({ data: userImages });
    } catch (error) {
      console.error('Error fetching user images:', error);
      return ctx.badRequest('Failed to fetch user images. Please try again.');
    }
  }

};
