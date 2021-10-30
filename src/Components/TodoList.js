import React ,{useState} from 'react';
import TodoForm from './TodoForm';

 function TodoList (){
   const [todos,setTodos]=useState([]);
   
   return (
     <div>
       <h1> Faisal Front End Web Developer </h1>
       <TodoForm/>
        
       </div>
   )
 }
 export default TodoList;