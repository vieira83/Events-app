module.exports = {
  AUTH0_DOMAIN: 'mean-rsvp-auth.auth0.com', // e.g., kmaida.auth0.com
  AUTH0_API_AUDIENCE: 'http://localhost:8083/api/', // e.g., 'http://localhost:8083/api/'
  MONGO_URI: process.env.MONGO_URI || 'mongodb://vlad:vlad@ds249575.mlab.com:49575/mean'
};