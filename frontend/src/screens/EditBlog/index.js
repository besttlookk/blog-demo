import React, {useState} from 'react'
// import { useDispatch} from 'react-redux'
import './style.css'

// import {editUserBlog} from '../../actions/blogActions'
const Edit = ({blog}) => {
    // const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [body, setBody] = useState('')
    
    const handleSubmit =(e) =>{
        e.preventDefault()
        // dispatch(editUserBlog(title, category, body))
    }
    return (
        <div className='container'>
            <div id='editLeftMenu'>
                            <form onSubmit={handleSubmit}>
                                <h1>Edit Blog</h1>
                                <div className='formGroup'>
                                    <label htmlFor="title">Title</label>
                                    <input type='text' id='title' value={title} onChange={(e)=>setTitle(e.target.value)} />
                                </div>
                                <div className='formGroup'>
                                    <lable htmlFor='category'>Category</lable>
                                    <input type='text' id='category' value={category} onChange={(e)=>setCategory(e.target.value)}/>
                                </div>
                                <div className='formGroup'>
                                    <lable htmlFor='body'>Body</lable>
                                    <textarea id='body' value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
                                </div>
                                <button type='submit'>Create</button>
                            </form>
            </div>
                
        </div>
    )
}

export default Edit
