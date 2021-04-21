import React from 'react'


export default function Albums({albums}) {
    return (
        <>
        {albums.map(album =>(
            <div>
           {'ID: '} {album.id}
           <br/>
           {'Title: '} {album.title}
           <br/>
           <br/>
            
            </div>
        ))}
           
        </>
    )
}