import {createStore, combineReducers, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'


import thunk from 'redux-thunk'
import {
    allBlogsReducer,
    blogDetailsReducer,
    blogCreateReducer,
    userBlogsReducer,
    blogDeleteReducer,
    blogEditReducer
} from './reducers/blogReducers'

import {
    userInfoReducer,
    userLoginReducer
} from './reducers/userReducers'


const reducer = combineReducers({

    userLogin: userLoginReducer,
    userInfo: userInfoReducer,
    allBlogs: allBlogsReducer,
    blogDetails: blogDetailsReducer,
    blogCreate: blogCreateReducer,
    userBlogs: userBlogsReducer,
    blogDelete: blogDeleteReducer,
    blogEdit: blogEditReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null
const initialState = {
    userLogin: { userInfo: userInfoFromStorage }  // userLogin is same as in reducer
}

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)))

export default store