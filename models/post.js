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
    community:{
        type: String,
        required:true
    }
})

module.exports = mongoose.model('Post', postSchema)