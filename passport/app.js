const express = require("express");
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const passport = require('passport');
const routes = require('./routes/index');
require('dotenv').config();

const app = express();
const port = 3000;


const db = require('./db/db');
const { Sequelize } = require('sequelize');
const Users = require("./db/model/Users");
db.sequelize.sync();

const sequelize = new Sequelize(process.env.DB_STRING);
const sessionStore = new SequelizeStore({
  db: db.sequelize
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(session({
  store: sessionStore,
  secret: 'mykey',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 *24
   }, // Set to true if using HTTPS
}));

// -------------PASSPORT AUTHENTICATION----------------
require('./lib/lcpassport');
require('./lib/fbpassport');
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);
app.listen(port, () => {
  console.log("Listening on port %d", port);
});
