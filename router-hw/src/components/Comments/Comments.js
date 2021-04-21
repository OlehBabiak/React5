import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useParams,
} from "react-router-dom";
import CommentDetail from './CommentsDetails';

export default function Comments() {
    const [comments, setComments] = React.useState([])

const fetchData = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
    const json = await resp.json()
    setComments(json)
}


    React.useEffect(()=>{
        fetchData()
    }, [])

    return (
        <div>
        <Switch>
            
          <Route path="/comments/:id">
            <CommentDetail/>
          </Route>

          <Route >
            <Redirect to="/comments"/>
          </Route>
        
        </Switch> 
            <ul>
                {comments.map(el => <Link to={`/comments/${el.id}`}><li>{el.title} - {el.id}</li></Link>)}          
            </ul>
        </div>
    )
}
