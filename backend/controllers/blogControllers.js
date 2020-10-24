import asyncHandler from 'express-async-handler'


import Blog from '../models/blogModel.js'
import User from '../models/userModel.js'


//@desc create a new blog
// @route api/blogs/create
// access PRIVATE
export const createBlog = asyncHandler(async(req, res) =>{
    const blog = await new Blog({...req.body, author:req.user._id})

    await blog.save()
    res.json(blog)
})

// @desc get all the blogs
// @route GET api/blogs
// access PUBLIC
export const getAllBlogs= asyncHandler(async(req, res)=>{

    const blogs = await Blog.find().populate('author')
    if(blogs.length === 0){
        throw new Error("No Blog Found")
    }

    
    res.json(blogs)
}) 

// @desc get blog by id
// @route GET api/blogs/:id
// access PUBLIC
export const getBlog =  asyncHandler(async(req, res)=>{
    const blogId = req.params.id
    const blog = await Blog.findById(blogId).populate('author').populate({
        path:"comments",
        populate: {
            path: "user"
        }
    })

    if(!blog){
        throw new Error("Blog Not found")
    }

    res.json(blog)
})

// @desc get all blogs of a user
// @route GET api/blogs/user/:userId
// access PUBLIC
export const getUserBlogs = asyncHandler(async(req, res)=>{
   
    const blogs = await Blog.find({author: req.params.userId}).populate('author')

    if(blogs.length === 0){
        throw new Error("Blog Not found")
    }

    res.json(blogs)
})

// // @desc Edit a blog
// // @route PUT api/blogs/:id
// // @access PRIVATE
// export const editBlog = asyncHandler(async(req, res)=>{
//     const blogId = req.params.id
//     const blog = await Blog.findById(blogId)

//     if(!blog){
//         throw new Error("Blog Not found")
//     }
//     const { title, body} = req.body
//     blog.title = title || blog.title
//     blog.body =  body || blog.body

//     const updatedBlog = await blog.save()

//     res.json(updatedBlog)

// })

// @desc Edit a blog[only valid update]
// @route PUT api/blogs/:id
// @access PRIVATE
export const editBlog = asyncHandler(async(req, res)=>{

    const updates = Object.keys(req.body)
    const allowedUpdate = ['title', 'body']
    const isValidUpdate = updates.every(update => allowedUpdate.includes(update))
    if(!isValidUpdate){
        throw new Error('Invalid Update')
    }else{
        const blogId = req.params.id
        const blog = await Blog.findById(blogId)
    
        if(!blog){
            throw new Error("Blog Not found")
        }else{
            if(req.user._id.toString() !== blog.author.toString()){
                throw new Error("You are not autherized to edit others blog")
            }

            const { title, body} = req.body
            blog.title = title || blog.title
            blog.body =  body || blog.body
        
            const updatedBlog = await blog.save()
        
            res.json(updatedBlog)
        }
        
    }
})

// @desc delete a blog
// route DELETE api/blogs/:id
// access PRIVATE
export const deleteBlog = asyncHandler(async(req, res)=>{
    const id = req.params.id
    const blog = await Blog.findById(id)
    if(!blog){
        throw new Error("Blog Not found")
    }else{
        if(req.user._id.toString() !== blog.author.toString()){
            throw new Error("You are not autherized to delete others blog")
        }else{
            if(!blog){
                throw new Error("Blog Not found")
            }
        }
        await Blog.findByIdAndDelete(id)
        res.json({msg: "Deleetd successfully"})
    }

    

    await Blog.findByIdAndDelete(id)
    res.json({msg: "Deleetd successfully"})
})