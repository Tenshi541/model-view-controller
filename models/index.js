const User = require('./user');
const Post = require('./post');
const Comment = require('./Comment');

User.hasMany(Post, {
    foreignKey: 'user_id'
});

User.belongsToMany(Post, {
    through: Comment,
    as: 'commented_posts',
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});


Post.belongsToMany(User, {
    through: Comment,
    as: 'commented_posts',
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});



Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Comment };
