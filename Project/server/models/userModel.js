const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    lastLoginDate: {
        type: Date,
        default: Date.now
    },
    posts: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Post'
    },
    followers: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User'
    },
    following: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User'
    },
    points: {
        type: Number,
        default: 0
    },
    wallet: {
        type: String,
        required: true
    },
    streak: {
        type: Number,
        default: 0
    },
    password: {
        type: String,
        required: true
    },
    referralCode: {
        type: String,
        required: true,
        unique: true
    }
});

userSchema.statics.signup = async function (name, email, password, wallet, username) {
    if (!email || !password || !name || !wallet) {
        throw Error('All fields must be filled');
    }
    if (!validator.isEmail(email)) {
        throw Error('Enter a valid email');
    }
    const exists = await this.findOne({ email });

    if (exists) {
        throw Error('Email already registered');
    }

    if (!validator.isStrongPassword(password)) {
        throw Error('Password not strong enough');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    let referralCode;
    let isUnique = false;

    while (!isUnique) {
        referralCode = generateReferralCode();
        const existingUser = await this.findOne({ referralCode });

        if (!existingUser) {
            isUnique = true;
        }
    }
    
    const user = await this.create({ email, password: hash, name, referralCode, wallet, username });
    return user;
};

userSchema.statics.login = async function (email, password) {
    if (!email || !password) {
        throw Error('All fields must be filled');
    }

    const user = await this.findOne({ email });

    if (!user) {
        throw Error('User does not exist');
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        throw Error('Incorrect password');
    }

    const today = new Date().setHours(0, 0, 0, 0);
    const lastLoginDate = user.lastLoginDate ? user.lastLoginDate.setHours(0, 0, 0, 0) : null;

    if (lastLoginDate === null) {
        user.streak = 1;
    } else {
        const previousLoginDay = new Date(lastLoginDate).getDate();
        const currentDay = new Date(today).getDate();

        if (previousLoginDay === currentDay - 1) {
            user.streak++;
        } else if (previousLoginDay < currentDay) {
            user.streak = 1;
        }
    }

    user.lastLoginDate = new Date();
    await user.save();

    return user;
};

function generateReferralCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';

    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * characters.length);
        code += characters[index];
    }

    return code;
}

module.exports = mongoose.model('User', userSchema)
