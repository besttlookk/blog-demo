import React, {useState} from 'react'
import { useDispatch} from 'react-redux'
import Card from '../../components/UI/Card'
import './style.css'

import {blogCreateAction} from '../../actions/blogActions'

const CreateBlog = ({history}) => {

    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [body, setBody] = useState('')

    // const {loading, error, blog} = useSelector(state => state.blogCreate)

    const redirect = '/'

   
    const handleSubmit =(e) =>{
        e.preventDefault()
        dispatch(blogCreateAction(title, category, body))


       
        history.push(redirect)

    
    }
    return (
        <div className='createContainer'>
            <section className='createLeftMenu'>
                <Card style={{marginBottom: "20px", height:'100%'}} >
                        <form onSubmit={handleSubmit}>
                            <h1>Create Blog</h1>
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
                </Card>
            </section>
            <aside className='rightMenu'>
                right
            </aside>
            
        </div>
    )
}

export default CreateBlog
