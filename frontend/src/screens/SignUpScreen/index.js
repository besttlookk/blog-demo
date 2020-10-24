import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Card from '../../components/UI/Card'
import './style.css'
import SideBar from '../../components/SideBar'
import {userSignupAction} from '../../actions/userActions'
import {Link } from 'react-router-dom'

const Signup = ({location, history}) => {

    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const {userInfo} = useSelector(state => state.userLogin)

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(password === password2){
            dispatch(userSignupAction(name, email, password))
            history.push(redirect)
        }
    
    }   

    useEffect(()=>{
        if(userInfo){
            history.push(redirect)

        }
    },[history, redirect, userInfo])
    return (
        <section className='container'>
            <div className='formContainer'>
                <Card style={{ marginBottom: '20px', padding: '20px', height: '100%'}}>
                    <div className='formWrapper'>
                        <div className='logo'>
                            <img src='/logo.png' alt='logo' />
                        </div>
                        {/* <h3 className="signupH">Create an Account</h3> */}
                        <form className='form' onSubmit={handleSubmit}>

                            <div className='formGroup'>
                                <input type='text' placeholder="Username" id="name" value={name} onChange={(e)=> setName(e.target.value)}/>
                            </div>
                            <div className='formGroup'>
                                <input type='email' placeholder="Email Address" id="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                            </div>
                            <div className='formGroup'>
                                <input type='password' placeholder="Password" id="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                            </div>
                            <div className='formGroup'>
                                <input type='password' placeholder="Confirm Password" id="password" value={password2} onChange={(e)=> setPassword2(e.target.value)}/>
                            </div>
                            <button type='submit' className='signupBtn'>Create Account</button>
                        </form>
                        <hr />
                        <div>
                            <small>Already have an account? <Link style={{textDecoration: 'none', color:'red'}} to='/login'>Login</Link></small>
                        </div>

                    </div>
                    
                  
                </Card>
            </div>
            
            <SideBar />
        </section>
    )
}

export default Signup
