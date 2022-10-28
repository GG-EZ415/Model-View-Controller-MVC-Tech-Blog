const router = require('express').Router();

const userRoutes = require('./user.js');
const postRoutes = require('./post');
const commentRoutes = require('./comments');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;