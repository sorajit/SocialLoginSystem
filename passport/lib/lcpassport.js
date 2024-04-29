const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../db/db');
const Users = db.Users;
const validPassword  = require('./passwordUtlis').validPassword;
const verifyCallback = (username, password, done)=>{
    Users.findOne({ where: {username:username}})
    .then((user)=>{
        if(!user){return done(null,false)}

        const isValid = validPassword(password,user.hash,user.salt);
        if(isValid){
            return done(null,user);
        }else{
            return done(null,false);
        }
      })
      .catch((err) =>{
        done(err);
      })
}

const strategy = new LocalStrategy(verifyCallback);
passport.use(strategy);

passport.serializeUser((user,done)=>{
    done(null, user);
  });
  
  passport.deserializeUser((user,done)=>{
    done(null, user);
  });