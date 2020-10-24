import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import './style.css'
import Card from '../UI/Card'
import {NavLink} from 'react-router-dom'
import { getAllBlogs } from '../../actions/blogActions'
import Loader from '../Loader'
import moment from 'moment'


const RecentPosts = () => {

   const dispatch = useDispatch()
   const {loading, error, blogs } = useSelector(state => state.allBlogs)

   useEffect(()=>{
       dispatch(getAllBlogs)
   },[dispatch])

    return (
        <>
        {loading? (<Loader />) : error?  (<h3>{error}</h3>) : (
                   <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                   <div className="cardHeader">
                       <span>Recent Posts</span>
                   </div>
   
                   <div id="recentPosts">
   
                       {
                           blogs.slice(0, 5).map(blog => {
                               return (
                                <div id="recentPost">
                                   <NavLink key={blog.id} to={`/post/${blog.slug}`}>
                                           <h3>{blog.title}</h3>
                                   </NavLink>
                                           <span>{moment(blog.createdAt).format("LL")}</span>
                                </div>
                               );
                           })
                       }
                   </div>
   
               </Card>

        )}
 
            </>
    )
}

export default RecentPosts
