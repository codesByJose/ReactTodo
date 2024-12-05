
import { useState } from "react"
import Form from "./Form";
import Todoitem from "./Todoitem";
import Completedtodos from "./Completedtodos";



export default function Todo () {
    const [todos, setTodos] = useState([]) ///cos this is a list/
     const completedTodos = todos.filter((todos)=>todos.done).length
     const totalTodos = todos.length
    return <div>
        <Form todos={todos} setTodos={setTodos}/>
        <Todoitem todos={todos} setTodos={setTodos}/>
        <Completedtodos completedTodos={completedTodos} totalTodos={totalTodos}/>
    </div>
}