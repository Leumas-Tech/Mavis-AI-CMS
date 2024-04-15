module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  {
    // Ensure the public middleware is correctly configured to serve static files
    name: 'strapi::public',
    config: {
      maxAge: 60000, // Example: Cache static assets for 60 seconds for browsers
    },
  },
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:', 'wss:'], // Ensure WebSocket and secure origins are allowed
          'img-src': ["'self'", 'data:', 'blob:', 'market-assets.strapi.io', 'res.cloudinary.com', 'yourserver.com'], // Ensure images are loaded correctly
          'media-src': ["'self'", 'data:', 'blob:', 'market-assets.strapi.io', 'res.cloudinary.com', 'yourserver.com'], // Include your server domain if media files are hosted there
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    // CORS settings: adjust according to your frontend's domain to allow requests
    name: 'strapi::cors',
    config: {
      origin: ["http://localhost:3000", "https://yourfrontenddomain.com"], // Add your frontend domain here
    },
  },
];
