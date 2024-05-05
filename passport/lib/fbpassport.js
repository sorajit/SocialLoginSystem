const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
require('dotenv').config();

passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_SECRET_ID,
  callbackURL: 'http://localhost:3000/auth/facebook/callback',
  state: true
  },
  function(accessToken, refreshToken, profile, cb) {
    return cb(null,profile.id)
  }
));