const Post = require('../models/postModel.js')
const User = require('../models/userModel.js')

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ error: 'Error fetching posts' });
    }
}

const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

const createPost = async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const post = await newPost.save();
        const user = await User.findById(req.body.userId);
        user.posts.push(post._id);
        await user.save();
        res.status(200).json(post);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

const deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        const author = await User.findById(post.userId);

        if (post.userId.equals(req.body.userId)) {
            await Post.deleteOne({ _id: req.params.id });

            author.posts.pull(req.params.id);
            await author.save();

            res.status(200).json("Post has been deleted");
        } else {
            res.status(403).json("You can only delete your own post");
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

const likePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        const user = await User.findById(req.body.userId);
        const author = await User.findById(post.userId);
        if (!post.likes.includes(req.body.userId)) {
            post.likes.push(req.body.userId);
            post.save();
            user.points++;
            await user.save();
            author.points++;
            await author.save();
            res.status(200).json("Post has been liked");
        }
        else {
            // await post.updateOne({ $pull: { likes: req.body.userId } });
            post.likes.pull(req.body.userId);
            if (user.points) {
                user.points--;
                await user.save();
            }
            if (author.points){
                author.points--;
                await author.save();
            } 
            res.status(200).json("Post has been disliked");
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
}

const commentPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        const user = await User.findById(req.body.userId);
        const author = await User.findById(post.userId);
        if (!post.comments.some(comment => comment.userId.equals(req.body.userId))) {
            user.points += 2;
            await user.save();
            author.points += 2;
            await author.save();
        }
        post.comments.push({ userId: req.body.userId, comment: req.body.comment });
        await post.save();
        res.status(200).json("Comment added successfully")
    }
    catch (err) {
        res.status(500).json(err);
    }
}

const sellPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        const user = await User.findById(req.body.userId);
        const author = await User.findById(post.userId);

        post.userId = user._id;
        await post.save();

        user.posts.push(req.params.id);
        await user.save();

        author.posts.pull(req.params.id);
        await author.save();

        res.status(200).json("Post ownership has been transferred successfully");
    }
    catch (err) {
        res.status(400).json(err)
    }
}

module.exports = {
    getPosts,
    getPost,
    createPost,
    deletePost,
    likePost,
    commentPost,
    sellPost
}