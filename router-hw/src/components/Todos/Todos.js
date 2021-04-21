import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useParams,
} from "react-router-dom";
import TodoDetail from './TodosDetails';


export default function Todos() {
    const [todos, setTodos] = React.useState([])

const fetchData = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos')
    const json = await resp.json()
    setTodos(json)
}


    React.useEffect(()=>{
        fetchData()
    }, [])

    return (
        <div>
        <Switch>
            
          <Route path="/todos/:id">
            <TodoDetail/>
          </Route>

          <Route >
            <Redirect to="/todos"/>
          </Route>
        
        </Switch> 
            <ul>
                {todos.map(el => <Link to={`/todos/${el.id}`}><li>{el.title} - {el.id}</li></Link>)}          
            </ul>
        </div>
    )
}
