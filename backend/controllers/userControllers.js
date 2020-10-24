import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'



// @desc   Register new user
// @route  POST /api/users/register
// access  Public
export const registerUser = asyncHandler(async(req,res) => {

    const user = await User.findOne({email: req.body.email})
    if(user){
        throw new Error('Email already registered')
    }

    const newUser = new User(req.body)
    await newUser.save()
    res.json(newUser)
})


// @desc  login 
// @route POST /api/users/login
// access Public
export const loginUser = asyncHandler(async(req, res)=>{
    const user = await User.findByCredentials(req.body.email, req.body.password) //using 
    const token = await user.generateAuthToken() // we have to also send token back so that it can be stored for further access
    res.json({user, token})
})

// @desc logout all
// @route GET /api/users/:id/logoutAll
// access private
export const logoutAll = asyncHandler(async(req, res)=>{
    const id = req.params.id
    if(req.user._id.toString() !== id.toString()){
        throw new Error('You Cannot logout others account')
    }
    req.user.tokens = []
    await req.user.save()
    res.json({msg:"You have been logged out of all the devices"})

})

// @desc get user by id
// @route GET /api/users/:id
// access public
export const getUser = asyncHandler(async(req, res)=>{
    const id = req.params.id
    // const user = await User.findById(id).select("-password")
    const user = await User.findById(id)
    if(!user){
        throw new Error('No user found ')
    }

    res.json(user)
})

// @desc get user profile
// @route GET /api/users/profile
// access PRIVATE
export const getProfile = asyncHandler(async(req, res)=>{
    res.json(req.user)
})

// @desc get all users
// @route GET/api/users
// access PRIVATE/ADMIN
export const getUsers = asyncHandler(async(req, res)=>{
    const users = await User.find()
    if(!users){
        throw new Error('No user found ')
    }

    res.json(users)
})


// @desc edit user info
// @route PUT api/users/:id
// access PRIVATE
export const editUser = asyncHandler(async(req, res)=>{

    const updates = Object.keys(req.body)
    const allowedUpdate = ['name', 'email', 'password']
    const isValidUpdate = updates.every(update => allowedUpdate.includes(update))
    if(!isValidUpdate){
        throw new Error('Update Invalid')
    }

    const id = req.params.id

    if(req.user._id.toString() !== id.toString()){
        throw new Error('You can not change others profile')
    }else{
        const { name, email, password} = req.body
        const user = req.user
        user.name     =  name || user.name
        user.password =  password || user.password
        user.email    =  email || user.email

        await user.save()
        res.json(user)
    }
})

// @desc delete own account
// @route DELETE api/users/:id
// @access Privte
export const deleteUser = asyncHandler(async(req, res)=>{
    const id = req.params.id
    if(req.user._id.toString() !== id.toString()){
        throw new Error('You can not delete others account')
    }else{
        await req.user.remove()
        res.json({msg: "Account deleted successfully"})
    }
})