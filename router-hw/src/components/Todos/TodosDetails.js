import React from 'react'
import {
    useParams,
    useHistory
} from "react-router-dom";

export default function TodoDetail() {
    
    const [todo, setTodo] = React.useState()
    const {id} = useParams()
    const history = useHistory() 
            
    const fetchData = async () => {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    const json = await resp.json()
    setTodo(json)
        }

    React.useEffect(()=>{
        fetchData()
    }, [id])

    return (
        <div>
         <h1>Todo details</h1>
         {todo && (<> <h3>{todo.title}</h3> <p>{todo.completed.toString()}</p></>)}
         <button onClick={() => history.push(`/todos/${+id +1}`)}>Go to next todo</button>
        </div>
    )
    
}
