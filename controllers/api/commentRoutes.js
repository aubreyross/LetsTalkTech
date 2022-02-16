const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require ('../../utils/auth');

//rute to create comment by ID
router.post("/:id", withAuth, async (req, res) => {
    try {
      const newComment = await Comment.create({
        ...req.body,
        user_id: req.session.user_id,
        post_id: req.params.id,
      });
      //response handlers
      console.log(newComment);
      res.status(200).json(newComment);
  
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;