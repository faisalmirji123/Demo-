import React ,{useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
 function TodoList (){
   const [todos,setTodos]=useState([]);
   const [value,setValue]=useState([]);
   return (
     <div>
       <h1> Faisal Front End Web Developer </h1>
       <TodoForm/>
        <Todo/>
       </div>
   )
 }
 export default TodoList;