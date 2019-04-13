const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const authRoutes = require('../routes/auth-routes');
const profileRoutes = require('../routes/profile-routes');
const apiRoutes = require('../routes/backendApi-routes');
const passportSetup = require('../config/passport-setup');
const keys = require('../config/keys');
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

const auth = require("./middlewares/auth");
var Fingerprint = require('express-fingerprint')

app.set('port', port)

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [process.env.COOKIE_KEY]
}));
// app.use(basicAuth)
//app.use(auth)
app.use(Fingerprint({
  parameters:[
      // Defaults
      Fingerprint.useragent,
      Fingerprint.acceptHeaders,
      Fingerprint.geoip,
  ]
}))

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);
app.use('/api', apiRoutes);


// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // set up session cookies


  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
