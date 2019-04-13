var Fingerprint = require('express-fingerprint')

module.exports = async (req, res, next) => {
    Fingerprint({
        parameters:[
            // Defaults
            Fingerprint.useragent,
            Fingerprint.acceptHeaders,
            Fingerprint.geoip,
        ]
    }),

    next();
};