import React ,{useState} from 'react';
import TodoForm from './TodoForm';
 function TodoList (){
   const [tdos,setTodos]=useState([]);
   return (
     <div>
       <h1> Faisal Mirji Front End Web Developer </h1>
       <TodoForm/>

       </div>
   )
 }
 export default TodoList;