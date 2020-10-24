import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import './style.css'

const NavBar = () => {

    const [search, setSearch] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()
        alert('Searched')
    }

    const handleClick = () =>{
        setSearch(true)
    }

    const searchClass = search ?  "searchInput active": "searchInput"
    return (
        <div className="navbar">
            <ul className="navbarMenu">
                <li><NavLink to="/create">Create</NavLink></li>
                <li><NavLink to="/post">Posts</NavLink></li>
                <li><NavLink to="#">Link 3</NavLink></li>
                <li><NavLink to="#">Link 4</NavLink></li>
            </ul>

            <div className="search">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Search" className={searchClass} />
                    <img alt="search" src={require("../../assets/icons/search.png")} className="searchIcon" onClick={handleClick}/>
                </form>
               
            </div>
        </div>
    )
}

export default NavBar
