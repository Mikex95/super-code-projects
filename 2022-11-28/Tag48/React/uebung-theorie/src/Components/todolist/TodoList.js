import { useState } from "react";
import TodoItem from "../todoitem/TodoItem";
import "./TodoList.css";

let todos = [
    {
        todo: "Learn HTML/CSS",
        isComplete: true,
        important: 1
    },
    {
        todo: "Learn React",
        isComplete: false,
        important: 3 
    },
    {
        todo: "Learn Node",
        isComplete: false,
        important: 2
    },
];

function TodoList() {

    // Referenziert den todos array
   const [myTodos, setMyTodos] = useState(todos);


   // Sortiere nach der zahl "Important"
    const handleSortByImportance = () => {

        // Erstelle eine Kopie vom Array
        const MyTodosCopy = [...myTodos]

        MyTodosCopy.sort((a, b) => a.important - b.important);

        // Ersetze den state durh den sortieren Array
        setMyTodos(MyTodosCopy);
    }

   return (
    <section>
        {myTodos.map((myTodo, index) => {
            //? return (
            //?  <div key={index}>
            //?     <span>{myTodo.todo}</span>
            //?     <input type="checkbox" checked={myTodo.isComplete} />
            //?     <span>: {myTodo.important}</span>
            //? </div>
            //? )  

            return (
                <TodoItem description={myTodo.todo} done={myTodo.isComplete}/>
            )
        })}
        <button onClick={handleSortByImportance}>Sort by Importance</button>
    </section>
   );
}

export default TodoList;