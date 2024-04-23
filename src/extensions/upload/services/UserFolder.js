// Path: extensions/upload/services/UserFolder.js

const path = require('path');
const fs = require('fs-extra');

module.exports = {
  provider: 'user-folder',
  name: 'User specific folder',
  init: (config) => ({
    upload: async (file, customParams = {}) => {
      const { refId, ref, field, user } = customParams;

      // Generate folder path based on user info
      const folderPath = path.join(strapi.config.paths.static, `${user.username}-${user.id}`);

      // Ensure the directory exists
      await fs.ensureDir(folderPath);

      // Compute the path to store the file
      const filePath = path.join(folderPath, file.hash + file.ext);

      // Stream the file to the directory
      await new Promise((resolve, reject) => {
        const stream = fs.createWriteStream(filePath);
        stream.on('error', error => reject(error));
        stream.on('finish', resolve);
        file.stream.pipe(stream);
      });

      // Save the file path relative to the public folder
      file.url = path.relative(strapi.config.paths.public, filePath);
    },
    delete: async (file, customParams = {}) => {
      const filePath = path.join(strapi.config.paths.static, file.url);
      await fs.remove(filePath);
    },
  }),
};
