import asyncHandler from 'express-async-handler'
import Comment from '../models/commentModel.js'
import Blog from '../models/blogModel.js'

// @desc Create comment
// @route POST api/blogs/:blogid/comment
// access PRIVATE
export const createComment = asyncHandler(async(req, res) => {
    // Find blog
    const blog = await Blog.findById(req.params.id)
    
    // create comment
    const comment = new Comment({...req.body, blog: blog._id, user: req.user._id })
    await comment.save()

    blog.comments.push(comment)
    await blog.save()

    res.json(comment)
})


// @desc get comments
// @route GET api/blogs/:blogid/comment
// access PRIVATE
export const getComments = asyncHandler(async(req, res) =>{
    // Find blog
    const blog = await Blog.findById(req.params.id).populate('comments')
    res.json(blog)
}) 

// @desc edit comments
// @route PUT api/blogs/comment/commentId/
// access PRIVATE
export const editComment = asyncHandler(async(req, res)=>{
    // find comment
    const comment = await Comment.findById(req.params.id)

    if(!comment){
        throw new Error('No comment found')
    }

    if(comment.user.toString() === req.user._id.toString()){
        comment.content = req.body.content || comment.content
        const updatedComment = await comment.save()
        res.json(updatedComment)
    }else{
        throw new Error('Cant update other comment')
    }
})


// @desc delete comment
// @route DELETE api/blogs/comment/commentId/
// access PRIVATE
export const deleteComment = asyncHandler(async(req, res)=>{
    // find comment
    const comment = await Comment.findById(req.params.id)

    if(!comment){
        throw new Error('No comment found')
    }

    if(comment.user.toString() === req.user._id.toString()){
        await comment.remove()
        res.json({msg: "Comment deleted successfully"})
    }else{
        throw new Error('Cant delete other comment')
    }
})