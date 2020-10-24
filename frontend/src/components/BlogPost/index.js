import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Card from '../UI/Card'
import './style.css'
import {Link} from 'react-router-dom'
import moment from 'moment'
import Loader from '../Loader'
import Delete from '../Delete'

import {getAllBlogs} from '../../actions/blogActions'
const BlogPost = () => {

    const dispatch = useDispatch()

    const {loading, error, blogs} = useSelector(state => state.allBlogs)
    const { userInfo } = useSelector(state => state.userLogin)


    useEffect(() =>{
        dispatch(getAllBlogs())
    },[dispatch])
    return (
        <div className="blogPostContainer">
        {loading ? (<Loader />) : error ? (<h3>{error}</h3>) : (
            blogs.map(blog => (
            <div className='cardDiv'>
            <Card style={{marginBottom: "20px"}} key={blog._id}>
                {!(userInfo && blog.author) ? null : userInfo.user._id === blog.author._id ? (
                             <div id='homeDelete'>
                             <Delete id={blog._id}/>
                            </div>
                ): null } 
                <div className="blogHeader">
                <span className="blogCategory"><Link to='/' className='linkTag'>{blog.category}</Link></span>
                <h1 className="postTitle"><Link className="linkTag" to={`/${blog._id}`}>{blog.title}</Link></h1>
                <span className="postedBy">posted on <span style={{color:"#2a932e"}}>{moment(blog.createdAt).format("LL")}</span> by <Link className='linkTag author' to={`/${blog.author._id}/posts`}>{blog.author.name}</Link></span>
                </div>
                <hr  className="hr"/>
                <div id='homeBlogBody'>
                {blog.image ? (
                     <div id="homeBlogImgContainer">
                     <img src={require('../../blogPostImages/' + blog.image )}  alt="Post" className="image" />
                     
                 </div>
                ) : null}
               
    
                <div id="homeBlogContent">
                    <p>{blog.body.substr(0,500) + '....'}</p>
                    <span className='linkSpan'><Link to={`/${blog._id}`} className='blogLink'>Read More</Link></span>
                </div>
                </div>
             
            </Card>
            </div>
            ))
            
        )}

    </div>
    )
}

export default BlogPost
