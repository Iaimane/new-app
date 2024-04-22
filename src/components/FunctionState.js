import React, { useState } from 'react'

const FunctionState = () => {
    const [counter, setCounter] = useState(0)
    // const addOne = () =>{
        //setCounter(counter +1) instead of using addOne we use the setCounter directly in the button 
        
 return (
    <div>
        <p>Function State:{counter}</p>
        <button onClick={ () =>setCounter(prevCounter=> prevCounter+1 )}>State dans function</button>
      
    </div>
  )
}

 

export default FunctionState
