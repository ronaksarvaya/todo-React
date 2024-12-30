import React, { useState } from 'react'
// Develop a controlled input field where the user can type and see their input updated in real time.
const Input = () => {
    const [text,setText]=useState("")
  return (
    <div>
      <input type="text" name="" id="" onChange={(event)=>{setText(event.target.value)}} />
      <p>{text}</p>
    </div>
  )
}

export default Input
