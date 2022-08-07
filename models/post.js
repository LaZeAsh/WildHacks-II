const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    post:{
        type:String,
        required:true
    },
    tag:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    community:{
        type: String,
        required:true
    },
    createdAt:{
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Post', postSchema)