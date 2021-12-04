import React from "react";
import "./style.css";
// import TodoForm from './Components/TodoForm';
import TodoList from "./Components/TodoList";
// import Todo from './Components/Todo';

function App() {
  return (
    <div className="todo-App">
      <TodoList />
      <TodoList />
    </div>
  );
}
export default App;
