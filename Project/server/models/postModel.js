const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  comments: [{
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    comment: String
  }],
  username: {
    type: String,
    required: true
  },
  isSaleable: {
    type: Boolean,
    default: false
  },
  price: {
    type: Number,
    default: 0
  },
  userId: {
    type: ObjectId,
    required: true
  }
},{ timestamps: true });

module.exports = mongoose.model('Post', postSchema);