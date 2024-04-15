module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/paypal/start', // This endpoint initiates the OAuth process
        handler: 'paypal.startOAuth',
        config: {
          auth: false, // No authentication required to access this route
        },
      },
      {
        method: 'GET',
        path: '/paypal/callback', // This endpoint handles the callback from PayPal
        handler: 'paypal.handleCallback',
        config: {
          auth: false, // No authentication required to access this route
        },
      }
    ],
  };
  