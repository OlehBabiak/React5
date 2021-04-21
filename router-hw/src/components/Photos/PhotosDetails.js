import React from 'react'
import {
    useParams,
    useHistory
} from "react-router-dom";

export default function PhotoDetail() {
    
    const [photo, setPhoto] = React.useState()
    const {id} = useParams()
    const history = useHistory() 
            
    const fetchData = async () => {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
    const json = await resp.json()
    setPhoto(json)
        }

    React.useEffect(()=>{
        fetchData()
    }, [id])

    return (
        <div>
         <h1>Photo details</h1>
         {photo && (<> <h3>{photo.id}</h3> <h3>{photo.title}</h3> <h3>{photo.url}</h3></>)}
         <button onClick={() => history.push(`/photos/${+id +1}`)}>Go to next photo</button>
        </div>
    )
    
}
