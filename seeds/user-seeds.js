const { User } = require('../models');

const userData = [
    {
        username: 'jojo_go',
        email: 'joanne@gmail.com',
        password: 'gobears'
    },
    {
        username: 'las',
        email: 'larry@gmail.com',
        password: 'september'
    },
    {
        username: 'max',
        email: 'max@gmail.com',
        password: 'animal'
    },
    {
        username: 'holymoly',
        email: 'molly@gmail.com',
        password: 'potato'
    },
    {
        username: 'jilly',
        email: 'jill@gmail.com',
        password: 'lily'
    }
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;