import React from 'react'


export default function Photos({photos}) {
    return (
        <>
        {photos.map(photo =>(
            <div>
           {'Title: '} {photo.title}
           <br/>
           {'Url: '} {photo.url}
           <br/>
           <br/>
            
            </div>
        ))}
           
        </>
    )
}