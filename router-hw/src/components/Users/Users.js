import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useParams,
} from "react-router-dom";
import UsersDetail from './UsersDetails';


export default function Users() {
    const [users, setUsers] = React.useState([])

const fetchData = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await resp.json()
    setUsers(json)
}


    React.useEffect(()=>{
        fetchData()
    }, [])

    return (
        <div>
        <Switch>
            
          <Route path="/users/:id">
            <UsersDetail/>
          </Route>

          <Route >
            <Redirect to="/users"/>
          </Route>
        
        </Switch> 
            <ul>
                {users.map(el => <Link to={`/users/${el.id}`}><li>{el.name} - {el.id}</li></Link>)}          
            </ul>
        </div>
    )
}
