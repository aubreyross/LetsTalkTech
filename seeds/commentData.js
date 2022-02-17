const { Comment } = require('../models');

const commentContent = 
[
    {
        "content": "I couldn't agree more about MVC!",
        "post_id": 1,
        "user_id": 1
    },
]

const commentSeeded = () => Comment.bulkCreate(commentContent);

module.exports = commentSeeded;