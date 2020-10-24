import mongoose from 'mongoose'
import slugify from 'slugify'

const blogSchema = new mongoose.Schema({
    author:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    title:{
        type: String,
        required: true

    },
    slug:{
        type:String,
        unique: true,
        required: true
    },
    body:{
        type: String,
        required: true
    },
    category:{
        type:String,
        
    },
    image:{
        type: String,
    },
    comments: [{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]

},{
    timestamps: true,
})

blogSchema.pre('validate', function(next){
    if(this.title){
        this.slug = slugify(this.title, {lower: true, strict:true})
    }
    next()
})

const Blog = mongoose.model("Blog", blogSchema)

export default Blog