import React from 'react'
import {
    useParams,
    useHistory
} from "react-router-dom";

export default function UsersDetail() {
    
    const [user, setUser] = React.useState()
    const {id} = useParams()
    const history = useHistory() 
            
    const fetchData = async () => {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const json = await resp.json()
    setUser(json)
        }

    React.useEffect(()=>{
        fetchData()
    }, [id])

    return (
        <div>
         <h1>User details</h1>
         {user && (
         <> 
         <h3>{user.name}</h3> 
         <h3>{user.username}</h3>
         <h3>{user.email}</h3>
         <h3></h3>
         </>
         )}
         <button onClick={() => history.push(`/users/${+id +1}`)}>Go to next user</button>
        </div>
    )
    
}
