import style from "./Todoitem.module.css"
import Todolist from "./Todolist"
export default function Todoitem ({todos, setTodos }) {
    const sortedTodo = todos.slice().sort((a,b)=> Number(a.done) - Number(b.done))
   return <div className={style.todoitem}>
    {sortedTodo.map(items =>
        <Todolist key={items.name} 
        items={items} 
        todos={todos} 
        setTodos={setTodos}/>
    )}
   </div> 
}