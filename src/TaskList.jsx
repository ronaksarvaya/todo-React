import React, { useState } from 'react'

const TaskList = ({list,setlist}) => {
  
     const handleDelete= (l) => {
    const newl=list.filter((curr)=>curr!==l)
      setlist(newl)
      
  }

  
  return (
    <div className='tasks-container'> 
     { list.map((l,i)=>{
    return <li key={l} style={{display:"flex",justifyContent: "space-between",alignItems: "center"}}>
      {l} 
      <span style={{display:"flex"}}>
      <button>DONE</button>
      <button onClick={()=>handleDelete(l)}>Delete</button></span>     
      </li>})
}
   </div>

  )
}

export default TaskList
