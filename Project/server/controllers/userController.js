//login user
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET;
const createToken = (_id) => {
    return jwt.sign({ _id }, SECRET, { expiresIn: '3d' })
}

const loginUser = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.login(email, password)

        const token = createToken(user._id);

        res.status(200).json({ email, token })
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }
}   


const signupUser = async (req, res) => {

    const { name, email, password, wallet, username } = req.body
    try {
        const user = await User.signup(name, email, password, wallet, username)

        const token = createToken(user._id);

        res.status(200).json({ email, token })
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }
}

const redeemPoints = async (req,res) => {
    const userId = req.body.userId
    const amount = req.body.amount
    try{
        const user = await User.findById(userId)
        if(user.points<amount){
            res.status(403).json("Not enough Points")
        }
        user.points-=amount
        await user.save();
        res.status(200).json("Points redeemed successfully")
    }
    catch(err){
        res.status(400).json(err)
    }
}

const followUser = async (req,res) => {
    try{
        const targetUser = await User.findById(req.params.id)
        const user = await User.findById(req.body.userId)
        if(user.following.includes(targetUser._id)){
            targetUser.followers.pull(user._id)
            targetUser.save()
            user.following.pull(req.params.id)
            user.save()
            res.status(200).json("Unfollowed successfully")
        }
        else{
            targetUser.followers.push(user._id)
            targetUser.save()
            user.following.push(req.params.id)
            user.save()
            res.status(200).json("Followed successfully")
        }
    }
    catch(err){
        res.status(400).json(err)
    }
}


module.exports = { signupUser, loginUser, redeemPoints, followUser }