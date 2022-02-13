const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');
const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const postData = await post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name']
                }
            ]
        });

        // Serialize data so the template can read it
        const post = postData.map((post) =>
            post.get({ plain: true })
        );
        console.log(post);
        res
            .status(200)
            .render('homepage', { post, logged_in: req.session.logged_in });
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/login', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [
                { model: post, include: [{ model: User, attributes: ['name'] }] }
            ]
        });

        const user = userData.get({ plain: true });
        console.log(user);
        res.render('dashboard', { ...user, logged_in: true });
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/post/:id', withAuth, async (req, res) => {
    try {
        const postData = await post.findByPk(req.params.id, {
            include: [
                { model: Comment, include: [{ model: User, attributes: ['name'] }] },
                { model: User, attributes: ['name'] }
            ]
        });

        const post = postData.get({ plain: true });

        console.log(post);
        res.render('post', {
            ...post,
            logged_in: req.session.logged_in
        });
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;