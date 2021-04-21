import React from 'react'


export default function Users({users, singleItems}) {
    return (
        <>
        {users.map(user =>(
            <div>
            {user.name}
           <br/>
           {user.email}
           <br/>
           <br/>
            
            </div>
        ))}

        {
             <div>
           {singleItems.name}
           <br/>
           {singleItems.email}
           <br/>
           <br/>
            
            </div>
        }
           
        </>
    )
}