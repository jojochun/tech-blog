const { Post } = require('../../models');
const router = require('express').Router();
const withAutn = require('../../utils/auth');


// GET /api/post
router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'content',
            'title',
            'created_at',
        ],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(postData => res.json(postData))
        .catch(err => {
            res.status(500).json(err);
        });
});