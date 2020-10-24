import React from 'react'
import Card from '../UI/Card'
import './style.css'

const Hero = () => {
    return (
        <div>
             <Card> 
                 <div id='heroContainer'>
                     <div className='heroDiv'>
                         Left
                     </div>
                     <div className='heroDiv'>
                         Middle
                     </div>
                     <div className='heroDiv'>
                         Right
                     </div>
                 </div> 
            </Card>
        </div>
    )
}

export default Hero
