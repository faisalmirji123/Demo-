import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
function TodoList() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}> Faisal Front End Web Developer </h1>
      <TodoForm />
      <Todo />
      <p style={{ textAlign: "center" }}> Hello Code Daily</p>
    </div>
  );
}
export default TodoList;
