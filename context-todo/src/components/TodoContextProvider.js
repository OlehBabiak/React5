import React, {useState} from "react";
import TodoContext from "./TodoContext";

const TodoContextProvider = ({children}) =>{
    let [todos, setTodos] = useState([])

    const [doneTodos, setDoneTodos] = useState([])



    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !==id))
        setDoneTodos(doneTodos.filter(el => el !== id))
    }
    const doneTodoCounter = (todoId) => {
        const isTodoMarkedAsDone = doneTodos.includes(todoId)
        if(isTodoMarkedAsDone){
        return setDoneTodos(doneTodos.filter(id => id !==todoId))
        }
        setDoneTodos([...doneTodos, todoId])
    }

    const isDoneToggle = (id) => {
        setTodos(todos.map(todo => {
            if(todo.id === id) {
                todo.complited = !todo.complited
            }
            return todo
        }))
    }

    const onTodoCreate = (newTodo) =>{
if(!newTodo || !newTodo.title || !newTodo.description) {
    console.error('wrng arg for new todo, should be smth like {title: "...", description: "..."}')
    return
}
setTodos([newTodo,...todos])
    }

    return(
        <TodoContext.Provider value={{
        todos,
            doneTodos,
            onTodoCreate,
            removeTodo,
            isDoneToggle,
            doneTodoCounter
        }
        }>
        {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider