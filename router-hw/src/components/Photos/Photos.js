import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useParams,
} from "react-router-dom";
import PhotoDetail from './PhotosDetails';


export default function Photos() {
    const [photos, setPhotos] = React.useState([])

const fetchData = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/photos')
    const json = await resp.json()
    setPhotos(json)
}


    React.useEffect(()=>{
        fetchData()
    }, [])

    return (
        <div>
        <Switch>
            
          <Route path="/photos/:id">
            <PhotoDetail/>
          </Route>

          <Route >
            <Redirect to="/photos"/>
          </Route>
        
        </Switch> 
            <ul>
                {photos.map(el => <Link to={`/photos/${el.id}`}><li>{el.title} - {el.id}</li></Link>)}          
            </ul>
        </div>
    )
}
