import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './style.css'
import {getBlogDetails} from '../../actions/blogActions'
import Card from '../../components/UI/Card'
import moment from 'moment'
import {Link} from 'react-router-dom'
import Loader from '../../components/Loader'
import UserBlogs from '../../components/UserBlogs'
import {FaEdit} from 'react-icons/fa'

import Delete from '..//../components/Delete'



const BlogDetail = ({match, history}) => {

    const dispatch = useDispatch()

    const {loading, error, blog} = useSelector(state => state.blogDetails)
    const { userInfo } = useSelector(state => state.userLogin)
    const blogDelete = useSelector(state => state.blogDelete)
    const { success: successDelete } = blogDelete

   
    useEffect(()=>{
        dispatch(getBlogDetails(match.params.id))

        if(successDelete){
            history.push('/')
        }
        
    }, [match, dispatch, successDelete, history])

    return (
        <div className='container'>
            {loading ? (<Loader />) : error ? (<h3>error</h3>) : (
                <>
                        <section id='detailLeftMenu'>
                        {!(userInfo && blog.author) ? null : userInfo.user._id === blog.author._id ? (
                             <div id='detailDelete'>
                             <Delete id={match.params.id}/>
                            </div>
                         ): null } 
                       
                        <Card style={{marginBottom: "20px"}}>
                            <div className="blogHeader">
                            <span className="blogCategory">{blog.category}</span>
                            <h1 className="blogTitle">{blog.title}</h1>
                        <span className="postedBy">posted on <span style={{color:"#2a932e"}}>{moment(blog.createdAt).format("LL")}</span> by <Link className='linkTag author' to={blog.author ? `/${blog.author._id}/posts` : '/'}>{blog.author ? blog.author.name : null}</Link></span>
                            </div>
                            {blog.image ? (
                                  <div id="blogDetailsImageContainer">
                                    <img src={`/blogPostImages/${blog.image}`}  alt="blog" className='image'/>
                                  
                                </div>
                            ) : null}
                          
                
                            <div id="blogDetailsContent">
                                <h3>{blog.title} <span id="detailEdit">
                                {!(userInfo && blog.author) ? null : userInfo.user._id === blog.author._id ? (
                                    <Link to={`edit/${blog._id}`} style={{marginLeft: '5px'}}><FaEdit color="green" size='1.2rem'/></Link>
                                ): null } </span></h3> 
                                <p>{blog.body}</p>
                            </div>
                        </Card>


                        <div>
                        {blog.comments ? (
                            <>
                            <h3>Comments</h3>

                            {blog.comments.map(comment => (
                                
                                <Card style={{marginBottom: "20px"}} key={comment._id}>
                                    <div id="commentWrapper">
                                        <div id="commentImgDiv">
                                            <img src='/profilepic-sample.jpg' alt='profile' className='image' />
                                        </div>
                                        <div id="commentContentDiv">
                                        <h6>{comment.user ? comment.user.name : null}</h6>
                                        <p>{comment.content}</p>
                                        </div>
                                    </div>
                                
                                    
                                
                                </Card>
                            ))}
                            </>
                        ) : <h1>Loading</h1>
                        
                        }
                        </div>
                    
    
               </section>
               <aside className='detailRighMenu'>
              
               <Card style={{ marginBottom: '20px', padding: '20px'}}>
                      <div className="cardHeader">
                            <span>About {blog.author ? blog.author.name : 'ME'}</span>
                      </div>
                      <div className="profileImageContainer">
                          <img src="/sample.png" alt="" className='image'/>
                      </div>
                      <div className="cardBody">
                          <p className="personalBio"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, impedit, vitae vero non quo reprehenderit eius libero similique, quidem tenetur expedita nemo. Corporis, amet enim?</p>
                      </div>
                  </Card>

                <UserBlogs userId={blog.author ? blog.author._id : null} />
                    
                
            </aside>
            </>
        )}

   
        </div>
    )
}

export default BlogDetail

