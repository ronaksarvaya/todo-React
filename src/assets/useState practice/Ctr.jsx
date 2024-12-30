import React, { useState } from 'react'

// Create a simple counter component that increments and decrements a value using useState.
const Ctr = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
        Count : {count}

        <div>
            <button onClick={()=>{setCount(count+1)}}>Increment</button>
            <button onClick={()=>{setCount(count-1)}}>Decrement</button>
        </div>
    </div>
  )
}

export default Ctr
