import React from 'react'
import Card from '../UI/Card'

const Comment = ({blog}) => {
    return (
        <div>
            {
                blog.comments.map(comment => (
                    <Card style={{marginBottom: "20px"}} key={comment._id}>
                        <h2>{comment.comment}</h2>
                    
                    </Card>
                ))
            }
        </div>
    )
}

export default Comment
