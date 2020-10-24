import {
    ALL_BLOGS_REQUEST,
    ALL_BLOGS_SUCCESS,
    ALL_BLOGS_FAIL,
    BLOG_DETAILS_REQUEST,
    BLOG_DETAILS_SUCCESS,
    BLOG_DETAILS_FAIL,
    BLOG_CREATE_REQUEST,
    BLOG_CREATE_SUCCESS,
    BLOG_CREATE_FAIL,
    USER_BLOGS_REQUEST,
    USER_BLOGS_SUCCESS,
    USER_BLOGS_FAIL,
    BLOG_DELETE_SUCCESS,
    BLOG_DELETE_REQUEST,
    BLOG_DELETE_FAIL,
    BLOG_EDIT_FAIL,
    BLOG_EDIT_SUCCESS,
    BLOG_EDIT_REQUEST,
} from '../constants/blogConstants'

import axios from 'axios'

export const getAllBlogs = () => async(dispatch) =>{
    try{
        dispatch({type:ALL_BLOGS_REQUEST})

        const { data } = await axios.get('/api/blogs')
        dispatch({type:ALL_BLOGS_SUCCESS, payload: data})
    }catch(error){
        dispatch({
            type: ALL_BLOGS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const getBlogDetails = (id) => async(dispatch) =>{
    try{
        dispatch({type:BLOG_DETAILS_REQUEST})

        const { data } = await axios.get(`/api/blogs/${id}`)
        dispatch({type:BLOG_DETAILS_SUCCESS, payload: data})
    }catch(error){
        dispatch({
            type: BLOG_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const blogCreateAction = (title,category,body) => async(dispatch, getState) =>{
    try{
        dispatch({type:BLOG_CREATE_REQUEST})

        const {
            userLogin: {userInfo}
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post('api/blogs/create', {category,title, body}, config)
        dispatch({type:BLOG_CREATE_SUCCESS, payload: data})
    }catch(error){
        dispatch({
            type: BLOG_CREATE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}


export const getUserBlogs = (userId) => async(dispatch) =>{
    try{
        dispatch({type:USER_BLOGS_REQUEST})

        const { data } = await axios.get(`/api/blogs/user/${userId}`)
        dispatch({type:USER_BLOGS_SUCCESS, payload: data})
    }catch(error){
        dispatch({
            type: USER_BLOGS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const deleteUserBlog = (id) => async(dispatch, getState) =>{
    try{
        dispatch({type:BLOG_DELETE_REQUEST})

        const {
            userLogin: { userInfo },
          } = getState()
      
          const config = {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
            },
          }
      
          await axios.delete(`/api/blogs/${id}`, config)
        dispatch({type:BLOG_DELETE_SUCCESS})
    }catch(error){
        dispatch({
            type: BLOG_DELETE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const editUserBlog = (id) => async(dispatch, getState) =>{
    try{
        dispatch({type:BLOG_EDIT_REQUEST})

        const {
            userLogin: { userInfo },
          } = getState()
      
          const config = {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
            },
          }
      
        const {data} = await axios.delete(`/api/blogs/${id}`, config)
        dispatch({type:BLOG_EDIT_SUCCESS, payload: data})
    }catch(error){
        dispatch({
            type: BLOG_EDIT_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

