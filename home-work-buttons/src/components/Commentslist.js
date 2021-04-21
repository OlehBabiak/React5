import React from 'react'


export default function Comments({comments}) {
    return (
        <>
        {comments.map(comment =>(
            <div>
           {'Name: '} {comment.name}
           <br/>
           {'Body: '} {comment.body}
           <br/>
           <br/>
            
            </div>
        ))}
           
        </>
    )
}