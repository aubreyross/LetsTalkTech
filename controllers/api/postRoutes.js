const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require ('../../utils/auth');

//route to create post
router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    //response handlers
    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// route to update post
router.put('/:id', withAuth, async (req, res) => {
  try {
      console.log('success');
      const postData = await Post.update(
      {
        description: req.body.description,
      },
      {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
      },
    }
  );
  //response handlers
  if (!postData) {
    res.status(404).json({ message: 'Oops! No post with this ID' });
    return;
  }
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//route to delete post
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    //response handlers
    if (!postData) {
      res.status(404).json({ message: 'Oops! No post with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
