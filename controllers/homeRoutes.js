const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

//route to find all posts including relevant user data
router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        // serialize data so the template can read it
        const posts = postData.map((post) => post.get({ plain: true }));

        // pass posts to homepage template
        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in,
        });
        //return errors if occurred
    } catch (err) {
        res.status(500).json(err);
    }
});

//route to return single post by ID
router.get('/post/:id', withAuth, async (req, res) => {
    //find by ID. Attributes include user's name, content of comment,  and date created
    try {
        //include post id parameter in query
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
                {
                    model: Comment,
                    attributes: ['content', 'date_created'],
                    include: [
                        {
                            model: User,
                            attributes: ['name'],
                        },
                    ],
                },
            ],
        });
        //serialize data
        const post = postData.get({ plain: true });
        console.log(post);
        res.render('post', {
            ...post,
            logged_in: req.session.logged_in,
        });
    //return error if occurred
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

});

// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
    try {
        // finds logged in user based on the session ID
        const userData = await
            User.findByPk(req.session.user_id, {
                attributes: { exclude: ['password'] },
                include: [{ model: Post }],
            });
        //serialize data
        const user = userData.get({ plain: true });

        res.render('dashboard', {
            ...user,
            logged_in: true,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//get session login
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect request to homepage
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

//get signup 
router.get('/signup', (req, res) => {
    // If the user is already logged in, redirect request to homepage
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('signup');
});

module.exports = router;