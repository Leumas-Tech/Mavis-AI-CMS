// Path: /src/api/paypal/controllers/paypal.js

const axios = require('axios');
const qs = require('querystring');

module.exports = {
  async startOAuth(ctx) {
    const redirectUri = `${strapi.config.get('server.url')}/api/paypal/callback`;  // Ensure this is correctly set and matches the URL registered in PayPal
    const scope = 'openid email';
    const url = `${process.env.PAYPAL_AUTHORIZE_URL}?response_type=code&client_id=${process.env.PAYPAL_CLIENT_ID}&scope=${scope}&redirect_uri=${encodeURIComponent(redirectUri)}`;
    ctx.send({ url });  // Make sure this sends a JSON object with the URL
},



// Continue in /src/api/paypal/controllers/paypal.js

async handleCallback(ctx) {
  const { code } = ctx.query;
  if (!code) {
    return ctx.throw(400, 'Authorization code is required');
  }

  // Exchange the code for an access token
  const data = {
    grant_type: 'authorization_code',
    code,
    redirect_uri: `${strapi.config.get('server.url')}/api/paypal/callback`
  };
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': `Basic ${Buffer.from(`${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`).toString('base64')}`
  };

  try {
    const response = await axios.post(process.env.PAYPAL_OAUTH_URL, qs.stringify(data), { headers });
    const { access_token, refresh_token, expires_in } = response.data;

    // Assume the user is logged in and you have the user's ID
    const user = ctx.state.user;

    // Save the PayPal tokens to the user's profile in your database
    await strapi.plugins['users-permissions'].services.user.edit({ id: user.id }, {
      paypal_access_token: access_token,
      paypal_refresh_token: refresh_token,
      paypal_token_expiration: new Date(new Date().getTime() + expires_in * 1000)
    });

    ctx.redirect(`${process.env.FRONTEND_REDIRECT_URL}?success=true`);
  } catch (error) {
    console.error('Failed to exchange PayPal token:', error);
    ctx.throw(500, 'Internal server error');
  }
}


};
