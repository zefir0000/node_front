const session = require("express-session");

module.exports = async (req, res, next) => {
    session({
        secret: process.env.COOKIE_KEY,
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 60000 }
      }),

    next();
};