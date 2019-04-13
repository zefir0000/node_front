module.exports = authCheck = (req, res, next) => {
    console.log('authCheck', req.session.authUser)
    if(!req.session.authUser){
        res.redirect('/login');
    } else { next() }
};