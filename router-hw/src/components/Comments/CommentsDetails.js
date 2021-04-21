import React from 'react'
import {
    useParams,
    useHistory
} from "react-router-dom";

export default function CommentDetail() {
    
    const [comment, setComment] = React.useState()
    const {id} = useParams()
    const history = useHistory() 
            
    const fetchData = async () => {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
    const json = await resp.json()
    setComment(json)
        }

    React.useEffect(()=>{
        fetchData()
    }, [id])

    return (
        <div>
         <h1>Comments details</h1>
         {comment && (<> <h3>{comment.id}</h3> <h3>{comment.name}</h3> <p>{comment.body}</p></>)}
         <button onClick={() => history.push(`/comments/${+id +1}`)}>Go to next comment</button>
        </div>
    )
    
}
