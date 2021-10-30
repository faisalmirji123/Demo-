import React,{ useState } from 'react';

function Todo () {
  const [value,setValue]=useState('');

};
return(
  <form className="todo">
  <value 
        type="text"
        placeholder="add a todo"
        value={input}
        name="text"
        className="todo-value"
        />
        </form>


)
export default Todo;
