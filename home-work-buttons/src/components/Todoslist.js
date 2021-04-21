import React from 'react'


export default function Users({todos}) {
    return (
        <>
        {todos.map(todo =>(
            <div>
           {'ID: '} {todo.id}
           <br/>
           {'Title: '} {todo.title}
            <br/>
           {'completed: '}{todo.completed.toString()}
           <br/>
           <br/>
            
            </div>
        ))}
           
        </>
    )
}