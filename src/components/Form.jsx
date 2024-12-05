import style from "./Form.module.css"
import { useState } from "react"
export default function Form ({todos, setTodos}) {
    const [todo, setTodo] = useState({name: "", status:false})
    
    function handleCLick(e){
        e.preventDefault()
        if (todo.name !== "") { 
            setTodos([...todos, todo]);
            setTodo({name: "", status:false})
          }
     }
    return  <div >
                <form onSubmit={handleCLick} className={style.todoform}>
                    <div className={style.flex}>
                    <input className={style.input}type="text" placeholder="Enter to-do item..." onChange={(e)=>setTodo({name:e.target.value,done:false})} value={todo.name}/>
                    <button type="submit" className={style.button}>Add</button>
                    </div>
                </form>
                
            </div>
}