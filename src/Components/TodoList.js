import React ,{useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo'
 function TodoList (){
   const [todos,setTodos]=useState([]);
   
   return (
     <div>
       <h1> Faisal Front End Web Developer </h1>
       <TodoForm/>
       <Todo/>
        Hello
       </div>
   )
 }
 export default TodoList;