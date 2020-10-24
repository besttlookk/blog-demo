import express from 'express'

const app = express()
import dotenv from 'dotenv'
import morgan from 'morgan'

import connectDB from './config/db.js'
import userRouters from './routers/userRoutes.js'
import blogRouter from './routers/blogRoutes.js'
import {errorHandle, notFound} from './middleware/errorMiddleware.js'



dotenv.config()
connectDB()
app.use(express.json())
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.use('/api/users', userRouters)
app.use('/api/blogs', blogRouter)

app.use(notFound) // it should be written before "errorHandle"
app.use(errorHandle)


const PORT = process.env.PORT 
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})