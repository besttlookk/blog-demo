import express from 'express'
// import {protect} from '../middleware/authMiddleware.js'

import {
    registerUser,
    loginUser,
    logoutAll,
    getUser,
    getUsers,
    getProfile,
    editUser,
    deleteUser
} from '../controllers/userControllers.js'

import { protect, admin } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(protect, admin, getUsers)
router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/:id/logoutAll').get(protect, logoutAll)
router.route('/:id').get(getUser).put(protect,editUser).delete(protect,deleteUser)
router.route('/me').get(protect, getProfile)

export default router