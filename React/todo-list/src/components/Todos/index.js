import { useState } from "react";
import TodoList from "./TodoList";
import Form from "./Form";

function Todos() {
  const [todos, setTodos] = useState([
    {
      text: "Default Todo",
      isCompleted: false,
    },
    {
      text: "Default Todo 1",
      isCompleted: true,
    },
    {
      text: "Default Todo 2",
      isCompleted: false,
    },
  ]);

  return (
    <div>
      <Form addTodo={setTodos} todos={todos}/>
      <TodoList todos={todos}/>

    </div>
  );
}

export default Todos;
