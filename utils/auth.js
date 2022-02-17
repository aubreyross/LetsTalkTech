//request will be redirected to login if user is not logged in/authenticated
const withAuth = (req, res, next) => {
    if (!req.session.logged_in){
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;