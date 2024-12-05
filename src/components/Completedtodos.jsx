import style from "./Completedtodos.module.css";

export default function Completedtodos ({completedTodos, totalTodos}){

    return <div className={style.completed}>
      <span >Completed todos : {completedTodos}</span> 
      <span className={style.total}>Total todos : {totalTodos}</span> 
    </div>
    
}