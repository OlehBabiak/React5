import React from 'react'


export default function Posts({posts}) {
    return (
        <>
        {posts.map(post =>(
            <div>
           {'Title: '} {post.title}
           <br/>
           {'Body: '} {post.body}
           <br/>
           <br/>
            
            </div>
        ))}
           
        </>
    )
}