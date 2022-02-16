//request will be rerouted to login if user is not already logged in
const withAuth = (req, res, next) => {
    if (!req.session.logged_in){
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;