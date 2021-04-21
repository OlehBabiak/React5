import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useParams,
} from "react-router-dom";
import AlbumsDetail from './AlbumsDetails';

export default function Albums() {
    const [albums, setAlbums] = React.useState([])

const fetchData = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/albums')
    const json = await resp.json()
    setAlbums(json)
}


    React.useEffect(()=>{
        fetchData()
    }, [])

    return (
        <div>
        <Switch>
            
          <Route path="/albums/:id">
            <AlbumsDetail/>
          </Route>

          <Route >
            <Redirect to="/albums"/>
          </Route>
        
        </Switch> 
            <ul>
                {albums.map(el => <Link to={`/albums/${el.id}`}><li>{el.title} - {el.id}</li></Link>)}          
            </ul>
        </div>
    )
}
