import {
    USER_lOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_lOGIN_FAIL,
    USER_LOGOUT,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAIL,
    USER_INFO_REQUEST,
    USER_INFO_SUCCESS,
    USER_INFO_FAIL,
    
   

} from '../constants/userConstants'

export const userLoginReducer = (state = {userInfo:{}}, action) =>{
    switch(action.type){
        case USER_lOGIN_REQUEST: 
            return { loading: true}

        case USER_LOGIN_SUCCESS:
            return {loading: false, userInfo: action.payload}

        case USER_lOGIN_FAIL:
            return {loading: false, error: action.payload}

        case USER_LOGOUT:
            return {}

        default:
            return state
    }
} 
export const userInfoReducer = (state = {user:{}}, action) =>{
    switch(action.type){
        case USER_INFO_REQUEST: 
            return { loading: true}

        case USER_INFO_SUCCESS:
            return {loading: false, user: action.payload}

        case USER_INFO_FAIL:
            return {loading: false, error: action.payload}

        case USER_LOGOUT:
            return {}

        default:
            return state
    }
} 


export const userSignUpReducer = (state = {userInfo:{}}, action) =>{
    switch(action.type){
        case USER_SIGNUP_REQUEST: 
        return { loading: true}

    case USER_SIGNUP_SUCCESS:
        return {loading: false, userInfo: action.payload}

    case USER_SIGNUP_FAIL:
        return {loading: false, error: action.payload}
        
    default:
        return state
    }
}