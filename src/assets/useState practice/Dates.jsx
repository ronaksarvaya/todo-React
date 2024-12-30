// Create a component that displays the random word and updates it to the current  date when a button is clicked.

import React, { useState } from 'react'

const Dates = () => {
    const [date,setDate]=useState("random word")

    let getDate= ()=>{
        const currentDate = new Date();

        
        return currentDate.toLocaleDateString();
        
    }
  return (
    <div>
  
      <button onClick={()=>{setDate(getDate)}}>{date}</button>
    </div>
  )
}

export default Dates
