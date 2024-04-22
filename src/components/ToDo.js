import React, {useState} from 'react'
import {v4 as uuidv4} from "uuid";
import AddToDoForm from './AddToDoForm';

const ToDo = () => {
      const [warning, setWarning] =  useState(false)  // warning message for empty input field

    const [todos, setTodos] = useState([
        {id: 1, todo:'Acheter du lait'},
        {id: 2, todo: 'Acheter du pain'},
        {id: 3, todo: "Ne pas oublier l'eau"}
    ])

        console.log (todos)

    const myTodos = todos.map( todo => {
      return( 
      <li className="list-group-item" key= {todo.id}>{todo.todo}</li>
      )
    })

    const addNewTodo = (newTodo) => {
      // On crée un id unique pour notre nouveau Todo
      const newid = uuidv4();
      if(newTodo !== ''){

          warning && setWarning(false)

          setTodos([...todos, {
            id : newid,
            todo : newTodo
          }])
      } else {
         setWarning(true);
      }
  
    }

   const warningMsg = warning && <div class="alert alert-danger" role="alert">Vous devez saisir quelque chose !</div>



      
  return (
    <div>
      <h1 className='text-center'> {todos.length} Things to-do </h1>
        <ul className='list-group'>
          {myTodos}
          {warningMsg}
        </ul>
        <AddToDoForm addNewTodo=  {addNewTodo} />
    </div>
  )
}

export default ToDo

