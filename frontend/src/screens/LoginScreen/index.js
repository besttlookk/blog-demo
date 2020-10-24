import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Card from '../../components/UI/Card'
import './style.css'
import SideBar from '../../components/SideBar'
import {userLoginAction} from '../../actions/userActions'

const Login = ({location, history}) => {

    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {userInfo} = useSelector(state => state.userLogin)

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(userLoginAction(email, password))
        history.push(redirect)
    }   

    useEffect(()=>{
        if(userInfo){
            history.push(redirect)

        }
    },[userInfo, history, redirect])
    return (
        <section className='container'>
            <div className='formContainer'>
                <Card style={{ marginBottom: '20px', padding: '20px', height: '100%'}}>
                    <div className='formWrapper'>
                        <form className='form' onSubmit={handleSubmit}>
                            <h1> Login</h1>

                            <div className='formGroup'>
                                <label htmlFor="email">Email Address</label>
                                <input type='email' placeholder="Enter your Email here" id="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                            </div>
                            <div className='formGroup'>
                                <label htmlFor="password">Password</label>
                                <input type='password' placeholder="Enter your Email here" id="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                            </div>
                            <button type='submit'>Login</button>
                        </form>

                    </div>
                    
                  
                </Card>
            </div>
            
            <SideBar />
        </section>
    )
}

export default Login
