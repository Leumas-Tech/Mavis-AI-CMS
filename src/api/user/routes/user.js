// api/user/routes/user.js

module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/user/files',
        handler: 'user.getUserFiles',
        config: {
          policies: [],
        },
      },
      {
        method: 'GET',
        path: '/user/images',
        handler: 'user.getUserImages',
        config: {
          policies: [],
        },
      }
    ]
  };
  