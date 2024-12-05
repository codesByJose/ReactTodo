import Todo from "./components/todo";
import Header from "./components/Header";
import style from "./App.module.css"


export default function App() {
  return <div className={style.body}>
    <Header/>
    <Todo/>
  </div>
}


