const { Post } = require('../models');

const postData = [
    {
        title: 'Kailua beach',
        content: 'Lorem ipsum tempor incididunt ut labore et dolore magna aliqua.',
        user_id: 1

    },
    {
        title: 'Hunakai park',
        content: 'id diam maecenas ultricies mi eget mauris.',
        user_id: 2
    },
    {
        title: 'Olomana trails',
        content: 'Uperspiciatis unde omnis iste natut etiam sit amet ',
        user_id: 3
    },
    {
        title: 'Nuuanu stream',
        content: 'Lorem tempor incididunt ut labore et dolore magna aliqua.',
        user_id: 4

    },
    {
        title: 'Judd trail',
        content: 'Amet aliquam id diam maecenas ultricies mi eget mauris pharetra.',
        user_id: 5
    }

];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;