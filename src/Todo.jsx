import React, { useState } from 'react'
import  './Todo.css'
import DateTime from './DateTime'
import InpAndBtn  from "./InpAndBtn";
import TaskList from "./TaskList";
const Todo = () => {
  const [inp,setinp]=useState("")
  const [list,setlist]=useState([]) 
  return (<>  
  <div className='input-container'>
   <InpAndBtn inp={inp} setinp={setinp} list={list} setlist={setlist}/>
    <DateTime/>
  </div>
   <TaskList list={list} setlist={setlist}/>
    <button className='clearAll' onClick={()=>setlist([])} >Clear All</button>
  </>
  )
}

export default Todo
