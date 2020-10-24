import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import './style.css'
// import { FaTimesCircle} from 'react-icons/fa'
import {deleteUserBlog, editUserBlog} from '../../actions/blogActions'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const Create = () => {
    const dispatch = useDispatch()

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const handleEdit = () => {
        dispatch(editUserBlog())
    }

    return (
        <div>
            <button onClick={()=> setModalIsOpen(true)} id="editIcon">Create Post</button>
            
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} shouldCloseOnOverlayClick={false} style={modalStyle}>
                <div id="modalBody">
                <h2>Confirm</h2>
                <p>Are sure you want to delete this post</p>
                </div>
                <hr id='hr'/>
                <div id="modalBtn">
                    <button onClick={()=>{
                        setModalIsOpen(false)
                        handleDelete()
                    }} className='btn' id='confirm'>Confirm</button>
            
                    <button onClick={() => setModalIsOpen(false)} className='btn' id='cancle'>Close</button>
                
                </div>
            
            </Modal>

        </div>
    )
}

export default Create


const modalStyle = {
    overlay: {
        backgroundColor: '#333'
    },
    content: {
        position: 'absolute',
        top: '100px',
        left: '520px',
        right: '520px',
        bottom: '360px',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        outline: 'none',
        padding: '20px',
    }
}