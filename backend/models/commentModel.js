import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
  
    content:{
        type: String,
        required: "Content is required"

    },
    blog:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog",
        required: "Blog is required field"
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: "User is required"
    }

}, {
    timestamps: true
})


const Comment = mongoose.model("Comment", commentSchema)

export default Comment