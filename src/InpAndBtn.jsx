import React, { useState } from 'react'
const InpAndBtn = ({inp,setinp,list,setlist}) => {
    
  const handleAddTask=(e)=>{
    
    if (!inp.trim()) {//empty string check
      // Check for empty input
      alert("Task cannot be empty!");
      return;
    }
    if (list.includes(inp.trim())) {
      // Check for duplicate tasks
      alert(`${inp} already exists!`);
      return;
    }
      setlist((prev)=>[...prev,inp])
      setinp("")
      setError("");// Clear error after successful addition
  }
 
  return (
   
    <div className='input-wrapper'>
    <input 
    type="text"
    placeholder='Enter Task'
    onChange={(e)=>setinp(e.target.value)}
    value={inp}/>
    <button onClick={handleAddTask}>Add Task</button>
    </div>
  )
}

export default InpAndBtn
