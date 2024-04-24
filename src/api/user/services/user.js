// user.services.js

module.exports = {
    getUserImages: async function(userId) {
      try {
        // Query images associated with the user's ID from your database
        const userImages = await strapi.query('image').find({ user: userId });
        return userImages;
      } catch (error) {
        console.error('Error fetching user images:', error);
        throw new Error('Failed to fetch user images. Please try again.');
      }
    },
  
    getUserFiles: async function(userId) {
      try {
        // Query files associated with the user's ID from your database
        const userFiles = await strapi.query('file').find({ user: userId });
        return userFiles;
      } catch (error) {
        console.error('Error fetching user files:', error);
        throw new Error('Failed to fetch user files. Please try again.');
      }
    }
  };
  