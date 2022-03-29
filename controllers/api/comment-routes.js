const { Comment } = require('../../models');
const router = require('express').Router();


router.get('/', (req, res) => {
    Comment.findAll({})
        .then(commentData => res.json(commentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.post('/', (req, res) => {
    Comment.create({
        comment: req.body.comment_body,
        post_id: req.body.post_id,
        user_id: req.session.user_id
    })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => res.status(500).json(err));
});

// DELETE /api/comments/1
router.put('/:id', (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(500).json(err));
});

module.exports = router;