
import style from "./Todolist.module.css"
export default function Todolist({items, todos, setTodos }){
    function handleDelete(items){
        setTodos(todos.filter((todo)=> todo !== items))
        // console.log("this item is being deleted =>", items)
        
    }
    function handleComplete(name){

        setTodos(todos.map((todo)=>todo.name === name ? {...todo, done : !todo.done}:todo))
    }
    const completed = items.done ? style.completed : " "
    return <div className={style.todolist}>
        <div className={style.header}>
            <span className={completed} onClick={()=>handleComplete(items.name)}>{items.name}</span> 
            <span>
                <button onClick={() => handleDelete(items)} className={style.deleteButton}>x</button>
            </span></div>
        <hr className={style.line}/> 
    </div>
     
}

