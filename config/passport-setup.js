const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const axios = require('axios')
const api = axios.create({
    baseURL: process.env.APP_URL
})

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    api.get('api/getUser/' + id).then((user) => {
        done(null, user.data);
    });
});

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: process.env.GOOGLE_CLIENTID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
      console.log('getUser')
      api.get('api/getUser/' + profile.id).then((user) => {
          // check if user already exists in our own db
          if (user.data) {
              // already have this user
              done(null, user.data);
          } else {
              // create user
              api.post('api/createUser/', profile).then((response) => {
                  if (response.statusCode = 204) {
                      done(null, profile);
                  } else {
                      console.log('something wet wrong with google strategy authorization')
                  }
              })
          }
      }).catch(e => {
        console.log(e)
      })
    })
);
