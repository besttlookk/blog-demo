import React, {useEffect} from 'react'
import './style.css'
import {getUserBlogs} from '../../actions/blogActions'
import {NavLink} from 'react-router-dom'
import Loader from '../Loader'
import {useSelector, useDispatch} from 'react-redux'
import Card from '../UI/Card'
import moment from 'moment'



const UserBlogs = ({userId}) => {

    const dispatch = useDispatch()


    const {loading, error, blogs} = useSelector(state => state.userBlogs)

    useEffect(()=>{
        if(userId){
        dispatch(getUserBlogs(userId))

        }
    }, [dispatch, userId])

    return (
        <Card style={{ marginBottom: '20px', padding: '20px'}}>
        <div className="cardHeader">
            <span>More From Him</span>
            <hr className='hr'/>
        </div>
        <div id="userBlogsList">
            {loading ? (<Loader />) : error ? (<h3>{error}</h3>) : (
            <>
             {
                
                blogs.map(blog => {
                    return (
                        <div id="userBlogItem">
                        <NavLink key={blog._id} to={`/${blog._id}/${blog.slug}`} className='linkTag'>
                                <h3>{blog.title}</h3>
                        </NavLink>
                                <span>{moment(blog.createdAt).format("MMMM Do YYYY")}</span>
                        </div>
                                        
                    );
                })
            }

            </>
        )}
    
    
                      </div>
                  </Card>
    )
}

export default UserBlogs
