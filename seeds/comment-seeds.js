const { Comment } = require('../models');

const commentData = [
    {
        comment: 'Lorem ipsum  egestas pretium bibendum. Orci varius natoque.',
        user_id: 1,
        post_id: 2
    },
    {
        comment: 'Lorem ipsum gravida in velit.',
        user_id: 2,
        post_id: 3
    },
    {
        comment: 'Lorem dolor eu felis fermentum tincidunt. Aenean lacinia lectus.',
        user_id: 3,
        post_id: 4
    },
    {
        comment: 'Lorem ipsum dolor sit amet,  adipiscing elit. Ut sagittis.',
        user_id: 4,
        post_id: 2
    },
    {
        comment: 'Lorem ipsum dolor mauris sed, ornare.',
        user_id: 5,
        post_id: 1
    }

];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;