import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import './style.css'
import {getUserBlogs} from '../../actions/blogActions'
import {getUserInfo} from '../../actions/userActions'
import Loader from '../../components/Loader'
import Card from '../../components/UI/Card'
import moment from 'moment'
import {Link} from 'react-router-dom'

const UserBlogsScreen = ({match}) => {
    
    const id = match.params.id
    const dispatch = useDispatch()

    const {loading, error, blogs} = useSelector(state => state.userBlogs)
    const {user} = useSelector(state => state.userInfo)

    useEffect(()=>{
        dispatch(getUserBlogs(id))
        dispatch(getUserInfo(id))
    },[dispatch, id])
    return (
        <>
        {
            loading ? <Loader /> : error ? <h6>{error}</h6> : (
                <div id="userBlogsContainer">
                <div id='userBlogsLeftMenu'>
                    <Card style={{ marginBottom: '20px', padding: '20px'}}>
                    <div className="cardHeader">
            <span>{user.name}</span>
                    </div>
                    <div className="profileImageContainer">
                        <img src="/sample.png" alt="" className='image' />
                    </div>
                    <br />
                    <div className="cardBody">
                        <p className="personalBio"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, impedit, vitae vero non quo reprehenderit eius libero similique, quidem tenetur expedita nemo. Corporis, amet enim?</p>
                    </div>
                </Card>
                </div>
                <div id='userBlogsRightMenu'>
                    {
                        blogs.map(blog => (
                            <Card style={{marginBottom: "30px", height: "180px", boxShadow: "0 0 6px .1px #bbb", borderRadius:"4px", display:"flex"}} key={blog._id}>
                                { blog.image && (
                                      <div id='userBlogsImgDiv'>
                                      <img src={`/blogPostImages/${blog.image}`} className="image" alt='logo'/>
                                    </div>
                                )}
                              
                                <div id={blog.image?  "userBlogsBodyDiv1" : "userBlogsBodyDiv2"} className="userBlogsBodyDiv">
                                    <Link to={`/${blog._id}`} ><h4>{blog.title}</h4></Link>
                                <span >{moment(blog.createdAt).format("LL")} | </span> <span>{blog.category}</span>
                                    <p>{blog.body.substr(0,250) + '....'} <Link to={`/${blog._id}`}>Read More</Link></p>
                                </div>
                            </Card>
                            ))
                    }
                    
                   
                </div>
               
            </div>
            )}
       
    </>
    )
}

export default UserBlogsScreen
