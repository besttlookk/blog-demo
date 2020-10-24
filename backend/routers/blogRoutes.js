import express from 'express'

import {createBlog,
        getAllBlogs,
        getBlog,
        editBlog,
        deleteBlog,
        getUserBlogs
} from '../controllers/blogControllers.js'

import {
        createComment,
        editComment,
        getComments,
        deleteComment
}from '../controllers/commentControllers.js'
import {protect} from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(getAllBlogs)
router.route('/:id').get(getBlog).put(protect, editBlog).delete(protect, deleteBlog)
router.route("/user/:userId").get(getUserBlogs)
router.route('/create').post(protect, createBlog)

router.route('/:id/comment').post(protect, createComment).get(getComments)
router.route('/comment/:id/').put(protect, editComment).delete(protect, deleteComment)



export default router