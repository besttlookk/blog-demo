import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import Blog from '../models/blogModel.js'

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required:true,
        trim: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
    },
    isAdmin:{
        type: Boolean,
        required: true,
        default: false
    },
    tokens:[{
        token: {
            type: String,
            required: true
        }
    }]
},{
    timestamps: true,
})

userSchema.virtual('blogs', {
    ref: "Blog",
    localField: '_id',
    foreignField: 'author'
})

userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 10)
    }
    next()

})

userSchema.pre('remove', async function(next){
    const user = this
    console.log(user)
    await Blog.deleteMany({author: user._id})

    next()
})


userSchema.statics.findByCredentials = async(email, password) => {

            // first find if the email is register or not . If yes, use "bcrypt.js" to compare password.
            // if everythings goes right return user
            const user = await User.findOne({email})
            if(!user){
                throw new Error('Email not registered')
            }
            
            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch){
                throw new Error('Wrong password')
            }
            return user
}

userSchema.methods.generateAuthToken = async function(){
    const user = this
    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)
    user.tokens.push({token})
    await user.save()
    return token


}

userSchema.methods.toJSON = function(){
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens

    return userObject
}

const User = mongoose.model('User', userSchema)

export default User