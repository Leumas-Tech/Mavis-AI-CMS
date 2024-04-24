// api/user/controllers/user.js

module.exports = {
  getUserFiles: async ctx => {
    try {
      const userId = ctx.state.user.id; // Ensure you're getting the user ID correctly
      const userFiles = await someServiceToFetchUserFiles(userId); // Implement this service
      ctx.body = userFiles; // Use ctx.body to return JSON data
    } catch (err) {
      ctx.throw(500, 'Failed to fetch user files');
    }
  },

  getUserImages: async ctx => {
    try {
      const userId = ctx.state.user.id;
      const userImages = await someServiceToFetchUserImages(userId); // Implement this service
      ctx.body = userImages; // Use ctx.body to return JSON data
    } catch (err) {
      ctx.throw(500, 'Failed to fetch user images');
    }
  }
};
