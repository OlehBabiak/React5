import React from 'react'


export default function Users({users}) {
    return (
        <>
        {users.map(user =>(
            <div>
           {'Name: '} {user.name}
           <br/>
           {'email: '} {user.email}
           <br/>
           <br/>
            
            </div>
        ))}
           
        </>
    )
}