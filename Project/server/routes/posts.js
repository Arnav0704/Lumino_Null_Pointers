const express = require('express');
const {
    getPosts,
    getPost,
    createPost,
    deletePost,
    likePost,
    commentPost,
    sellPost
} = require('../controllers/postController')
const requireAuth = require('../middleware/requireAuth')
const router = express.Router()


router.get('/', getPosts)

router.get('/:id', getPost)

// router.use(requireAuth)

router.post('/', createPost)

router.delete('/:id', deletePost)

router.put('/like/:id', likePost)

router.put('/comment/:id', commentPost)

router.put('/sell/:id', sellPost)

module.exports = router