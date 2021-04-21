import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import TodoContext from "./TodoContext";


const Header = () =>{
    const {todos, doneTodos} = useContext(TodoContext)
    console.log(doneTodos)
    return (
        <header>
            <Link to='/'>List</Link>
            <Link to='/create-todo'>Add new todo</Link>
            <div style={{flex: 1}}/>
            <h3>Total todos: {todos.length}</h3>
            <div style={{flex: 1}}/>
            <h3>Active todos: {todos.length - doneTodos.length}</h3>
            <div style={{flex: 1}}/>
            <h3>Done todos: {doneTodos.length}</h3>
        </header>
    )
}



export default Header;