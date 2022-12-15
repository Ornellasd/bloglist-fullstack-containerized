const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 3
  },
  author: {
    type: String,
    required: true,
    minLength: 2
  },
  url: {
    type: String,
    required: true,
    minLength: 4
  },
  likes: Number,
  posted_at: {
    type: Date,
    default: Date.now
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  comments: [{ 
    text: String
  }]
})

blogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Blog', blogSchema)