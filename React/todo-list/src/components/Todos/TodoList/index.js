import {useState} from "react";

function TodoList({ todos }) {
  const [filterText, setFilterText] = useState("");
  const ActiveTodos = todos.filter((item) => item.isCompleted === false );
  const CompletedTodos = todos.filter((item) => item.isCompleted === true );

  const CompletedCheck  = () => {
  
  }

  console.log(ActiveTodos);
  return (
    <div>
      <ul className="list">
        {todos.map((todo, i) => (
          <li key={i}>
            <input type="radio" checked={todo.isCompleted === true} onChange={CompletedCheck}></input>
            <span>{todo.text}</span>

          </li>
        ))}
      </ul>
      <div>
        <label>{ActiveTodos.length} items left</label>
        <span>
            <button >All</button>
            <button onClick={() => setFilterText(ActiveTodos)}>Active</button>
            <button onClick={() => setFilterText(CompletedTodos)}>Completed</button>
        </span>
        <label>Clear completed</label>
      </div>
    </div>
  );
}

export default TodoList;
