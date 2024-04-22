import React, {useState} from 'react'

const AddToDoForm = ({addNewTodo} ) =>{

  const [ addTodo, setAddTodo ] = useState('')
  // Function to handle the form submission
 
  const handleToDo = (e) => {
    e.preventDefault()
    addNewTodo(addTodo)
    setAddTodo('') //remet a jour le state de l'input à vide
  }

  return (
    <form className='mt-4' onSubmit={handleToDo}>
        <div className='card card-body'>
            <div className='form-group'>
                <label>Ajouter</label>
                <input className="form-control" value= {addTodo} type="text" onChange={(e) => setAddTodo(e.target.value)} />
                <input className="btn btn-success mt-4" type="submit" />
            </div>
        </div>
    </form>
    
  )
}

export default AddToDoForm

