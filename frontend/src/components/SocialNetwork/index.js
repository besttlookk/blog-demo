import React from 'react'
import './style.css'
import Card from '../UI/Card'
import {FaFacebookSquare, FaInstagramSquare, FaTwitter, FaEnvelope} from 'react-icons/fa'
import { IconContext } from 'react-icons'
import {Link } from 'react-router-dom'

const SocialNetwork = () => {
    return (
        <Card style={{ marginBottom: '20px', padding: '20px'}}>
        <div className="cardHeader">
            <span>Connect With Me</span>
            <div id='icons'>
                <IconContext.Provider value={{size:"1.6rem" }}>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebookSquare color='blue '/></a> 
                    <a href="https://www.instagram.com/" target="_blank"  rel="noopener noreferrer"><FaInstagramSquare color="#C32668" /></a>
                    <a href="https://twitter.com/" target="_blank"  rel="noopener noreferrer"><FaTwitter color="#1DA1F2" /></a>
                    <Link to='/contact'><FaEnvelope color="#E94134" /></Link>
                </IconContext.Provider>
            </div>
        </div>
    </Card>
    )
}

export default SocialNetwork
