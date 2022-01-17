const Comment = require('./Post');
const User = require('./User');
const Post = require('./Post');

Comment.belongsto(Post, {
  foreignKey: 'user_id',
});

Comment.belongsto(User, {
  foreignKey: 'post_id',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});


module.exports = { Comment, User, Post };
