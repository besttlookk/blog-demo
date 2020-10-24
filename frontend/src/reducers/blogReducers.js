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
    BLOG_DELETE_REQUEST,
    BLOG_DELETE_SUCCESS,
    BLOG_DELETE_FAIL,
    BLOG_EDIT_REQUEST,
    BLOG_EDIT_SUCCESS,
    BLOG_EDIT_FAIL,
} from '../constants/blogConstants'

export const allBlogsReducer = (state = {blogs: []}, action) =>{
    switch(action.type){
        case ALL_BLOGS_REQUEST:
            return {loading: true}
        
        case ALL_BLOGS_SUCCESS:
            return {loading: false, blogs: action.payload}

        case ALL_BLOGS_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}

export const blogDetailsReducer = (state = {blog: {}}, action) =>{
    switch(action.type){
        case BLOG_DETAILS_REQUEST:
            return {loading: true}
        
        case BLOG_DETAILS_SUCCESS:
            return {loading: false, blog: action.payload}

        case BLOG_DETAILS_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}


export const blogCreateReducer = (state = {blog: {}}, action) =>{
    switch(action.type){
        case BLOG_CREATE_REQUEST:
            return {loading: true}
        
        case BLOG_CREATE_SUCCESS:
            return {loading: false, blog: action.payload}

        case BLOG_CREATE_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}

export const userBlogsReducer = (state = {blogs:[] }, action) =>{
    switch(action.type){
        case USER_BLOGS_REQUEST:
            return {loading: true}
        
        case USER_BLOGS_SUCCESS:
            return {loading: false, blogs: action.payload}

        case USER_BLOGS_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}

export const blogDeleteReducer = (state = {}, action) =>{
    switch(action.type){
        case BLOG_DELETE_REQUEST:
            return {loading: true}
        
        case BLOG_DELETE_SUCCESS:
            return {loading: false, success: true}

        case BLOG_DELETE_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}

export const blogEditReducer = (state = {blog:{}}, action) =>{
    switch(action.type){
        case BLOG_EDIT_REQUEST:
            return {loading: true}
        
        case BLOG_EDIT_SUCCESS:
            return {loading: false, success: true, blog: action.payload}

        case BLOG_EDIT_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}