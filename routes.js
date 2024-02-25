module.exports = (app, { Post, Comment }) => {
  // Posts routes
  app.post('/posts', async (req, res) => {
    try {
      const post = await Post.create(req.body);
      res.status(201).json(post);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  app.get('/posts', async (req, res) => {
    const posts = await Post.findAll();
    res.json(posts);
  });

  app.get('/posts/:id', async (req, res) => {
    const post = await Post.findByPk(req.params.id, {
      include: Comment
    });
    post ? res.json(post) : res.status(404).json({ error: 'Post not found' });
  });

  app.put('/posts/:id', async (req, res) => {
    const [updated] = await Post.update(req.body, {
      where: { id: req.params.id }
    });
    updated ? res.json({ message: 'Post updated' }) : res.status(404).json({ error: 'Post not found' });
  });

  app.delete('/posts/:id', async (req, res) => {
    const deleted = await Post.destroy({ where: { id: req.params.id } });
    deleted ? res.status(204).end() : res.status(404).json({ error: 'Post not found' });
  });

  // Comments routes
  app.post('/posts/:postId/comments', async (req, res) => {
    const comment = await Comment.create({
      ...req.body,
      PostId: req.params.postId
    });
    res.status(201).json(comment);
  });

  app.delete('/comments/:commentId', async (req, res) => {
    const deleted = await Comment.destroy({ where: { id: req.params.commentId } });
    deleted ? res.status(204).end() : res.status(404).json({ error: 'Comment not found' });
  });
};
