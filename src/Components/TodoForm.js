import React, { useState } from "react";

function TodoForm() {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      style={{ textAlign: "center" }}
      className="todo-form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Hello"
        value={input}
        name="text"
        className="todo-input"
      />
      <button className="todo-button">Todo</button>
    </form>
  );
}
export default TodoForm;
