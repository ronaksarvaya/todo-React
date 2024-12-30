// Build a toggle button that switches between "ON" and "OFF" states.
import React, { useState } from 'react'

const Toggle = () => {
    const [state, setState] = useState(false); // false = "OFF", true = "ON"

    const styles={
        height:"100px",
        width:"100px",
        border:"2px solid red",
        borderRadius:"50%",
       backgroundColor: state ? "yellow" : "black"
        
    }
  return (
    <div>
      <div style={styles}>hi</div>
     <button onClick={()=>{setState(!state)}}>{state?"OFF":"ON"}</button>
    </div>
  )
}

export default Toggle
