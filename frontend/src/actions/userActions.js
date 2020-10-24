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

import axios from 'axios'

export const userLoginAction = (email, password) => async(dispatch) => {

    try {
        dispatch({type:USER_lOGIN_REQUEST})

        const config = {
            headers: {
                'Content-Type' : "application/json"
            }
        }

        const { data } = await axios.post('api/users/login',{email, password}, config)
        dispatch({type: USER_LOGIN_SUCCESS, payload: data})

        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_lOGIN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({type: USER_LOGOUT})
}

export const userSignupAction = (name, email, password) => async(dispatch) =>{
    try {
        dispatch({type:USER_SIGNUP_REQUEST})

        const config = {
            headers: {
                'Content-Type' : "application/json"
            }
        }

        const { data } = await axios.post('/api/users/register', {name, email, password}, config)
        
        dispatch({type: USER_SIGNUP_SUCCESS, payload: data})
    } catch (error) {
        dispatch({
            type: USER_SIGNUP_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}


export const getUserInfo = (id) => async(dispatch) =>{
    try {
        dispatch({type:USER_INFO_REQUEST})

        

        const { data } = await axios.get(`/api/users/${id}`)
        
        dispatch({type: USER_INFO_SUCCESS, payload: data})
    } catch (error) {
        dispatch({
            type: USER_INFO_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

