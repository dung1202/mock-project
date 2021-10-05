var mongoose = require('mongoose')

var postSchema = mongoose.Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    status: Number,
    content: String,
    file: String,
})

var Post = mongoose.model('Post', postSchema)

module.exports = Post;