import React from 'react'
import BlogPost from '../../components/BlogPost'
import SideBar from '../../components/SideBar'
import './style.css'
// import Hero from '../../components/Hero'

const Home = () => {
    return (
        <>
        {/* <Hero /> */}
        <section className='homeContainer'>
            <BlogPost />
            <SideBar />
        </section>
        </>
    )
}

export default Home
