const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
require('dotenv').config();

passport.use(new FacebookStrategy({
  clientID: '975082626986967',
  clientSecret: '1261cb7f84be51c1f1b251c36c3d3eb7',
  callbackURL: 'http://localhost:3000/auth/facebook/callback',
  state: true
  },
  function(accessToken, refreshToken, profile, cb) {
    return cb(null,profile.id)
  }
));