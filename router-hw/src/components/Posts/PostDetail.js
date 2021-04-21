import React from 'react'
import {
    useParams,
    useHistory
} from "react-router-dom";

export default function PostDetail() {

    const [post, setPost] = React.useState()
    const {id} = useParams()
    const history = useHistory()

    const fetchData = async () => {
        const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const json = await resp.json()
        setPost(json)
    }

    React.useEffect(() => {
        fetchData()
    }, [id])

    return (
        <div>
            <h1>Post details</h1>
            {post && (<> <h3>{post.title}</h3> <p>{post.body}</p></>)}
            <button onClick={() => history.push(`/posts/${+id + 1}`)}>Go to next post</button>
        </div>
    )

}
