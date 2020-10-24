import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../actions/userActions'

const Header = () => {

    const dispatch = useDispatch()
    const {userInfo} = useSelector(state => state.userLogin)

    const handleClick = () =>{
        dispatch(logout())
    }

    return (
        
        <header className="header">
            <nav className="headerMenu">
                <Link to="/">Home</Link>
                <Link to="#">About </Link>
                <Link to="/contact">Contact</Link>
            </nav>
            <div className='headerMenu'>
                {userInfo ? (
                    <>
                    <Link to='/create'>Add Post</Link> 
                    <Link to='#' onClick={handleClick}>Logout</Link>
                    </>
                ) : (
                    <>
                    <Link to='/signup'>Sign Up</Link>
                    <Link to='/login'>Login</Link>
                    </>
                )}
            </div>
        </header>
    )
}

export default Header
