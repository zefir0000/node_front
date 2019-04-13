const router = require('express').Router();
const passport = require('passport');
const key = 'trolololo84746dupa';
const encryptor = require('simple-encryptor')(key);
const axios = require('axios')
const auth = require('basic-auth')

const api = axios.create({
    baseURL: process.env.API_URL,
    auth: {
        username: process.env.BASIC_AUTH_USER,
        password: process.env.BASIC_AUTH_PASS
    }
})

// auth logout
router.post('/logout', (req, res) => {
    delete req.session
    delete req.user
    res.clearCookie('express:sess.sig')
    res.clearCookie('express:sess').status(204).send('Ok.');
})
// auth login local
router.post('/login-user', async (req, res) => {
    const { email, password } = req.body;
    var { data } = await api.post('getUserByEmail/' + req.body.email)
    var passDecrypt = encryptor.decrypt(data.password)
    if (email === data.email && passDecrypt === password) {
        req.session.authUser = true
        req.session.user = data.id
        res.json({ status: 1 })
    } else {
        res.json({ status: 0 })
    }
})

// auth with google+
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    req.session.user = req.session.passport.user
    req.session.authUser = true

    res.redirect(301, '/')
});

module.exports = router;
