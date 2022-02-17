const router = require('express').Router();

//api routes folder
const apiRoutes = require('./api');
//route for homepage
const homeRoutes = require('./homeRoutes');

//specify path for routes that the server will utilize
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
