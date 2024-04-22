import React, { useState, useEffect } from 'react';

function FunctionCount() {
    const [counter, setCounter] = useState(0)

    useEffect(() => {

      setTimeout(() => {
        document.title = `You clicked ${counter} times`
      },5000) 
    })

  return (
    <div>
    <h1>{counter}</h1>
    <button className="btn btn-info mt-4" onClick={() => setCounter(counter +1)}>Increment with function</button>
    <button className="btn btn-warning mt-4" onClick={() => setCounter(counter -1)}>Decrement with function</button>
      
    </div>
  )
}

export default FunctionCount
