import React from 'react'
import Card from '../UI/Card'
import './style.css'

import RecentPosts from '../RecentPosts'
import SocialNetwork from '../SocialNetwork'

const SideBar = (props) => {


    return (
    
        <div className="sidebarContainer">
              <Card style={{ marginBottom: '20px', padding: '20px'}}>
                  <div className="cardHeader">
                      <span>About Me</span>
                  </div>
                  <div className="profileImageContainer">
                      <img src="/sample.png" alt="" className='image' />
                  </div>
                  <div className="cardBody">
                      <p className="personalBio"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, impedit, vitae vero non quo reprehenderit eius libero similique, quidem tenetur expedita nemo. Corporis, amet enim?</p>
                  </div>
              </Card>
  
             <SocialNetwork />

              <RecentPosts />
  
              
        </div>
    )
}

export default SideBar
