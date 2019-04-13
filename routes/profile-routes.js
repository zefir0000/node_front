const router = require('express').Router();
const authCheck = require('../middleware/authCheck')

router.get('/a', authCheck, (req, res) => {
    console.log(req.fingerprint, 'finger')
    console.log(req.session)

    res.statusCode = 200
    res.redirect('../')
});

module.exports = router;
