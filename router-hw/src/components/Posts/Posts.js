import React from 'react'
import {Route, NavLink} from "react-router-dom";
import PostDetail from './PostDetail';

export default function Posts() {

    const [posts, setPosts] = React.useState([])

    const fetchData = async () => {
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
        const json = await resp.json()
        setPosts(json)
    }

    React.useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <Route path="/posts/:id" component={PostDetail}/>
            <ul>
                {posts.map(el => <NavLink to={`/posts/${el.id}`}>
                    <li>{el.title} - {el.id}</li>
                </NavLink>)}
            </ul>
        </div>
    )
}
