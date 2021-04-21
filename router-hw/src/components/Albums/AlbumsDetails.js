import React from 'react'
import {
    useParams,
    useHistory
} from "react-router-dom";

export default function AlbumsDetail() {
    
    const [album, setAlbum] = React.useState()
    const {id} = useParams()
    const history = useHistory() 
            
    const fetchData = async () => {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
    const json = await resp.json()
    setAlbum(json)
        }

    React.useEffect(()=>{
        fetchData()
    }, [id])

    return (
        <div>
         <h1>Album details</h1>
         {album && (<><h3>{album.id}</h3> <h3>{album.title}</h3></>)}
         <button onClick={() => history.push(`/albums/${+id +1}`)}>Go to next album</button>
        </div>
    )
    
}
