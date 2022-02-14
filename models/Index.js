const User = require('./User');
const BlogPost = require('./Post');
const Comment = require('./Comment');

//User:Post
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

//Post:Comment
Post.hasMany(Comment, {
    foreignKey: 'blog_post_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
    foreignKey: 'blog_post_id'
});

//User:Comment
User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, BlogPost, Comment };