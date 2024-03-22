const express = require('express')
const { signupUser, loginUser, redeemPoints, followUser } = require('../controllers/userController')
const router = express.Router()

//login route
router.post('/login', loginUser)

//signup route
router.post('/signup', signupUser)

router.post('/redeem',redeemPoints)

router.put('/follow/:id',followUser)

module.exports = router