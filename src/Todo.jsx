import React, { useState } from 'react'
import  './Todo.css'
const Todo = () => {
  const [inp,setinp]=useState("")
  const [list,setlist]=useState([])
  const [date_time,setDt]=useState("");
  const [error, setError] = useState("");

  const handleAddTask=(e)=>{
    
    if (!inp.trim()) {//empty string check
      // Check for empty input
      setError("Task cannot be empty!");
      return;
    }
    if (list.includes(inp.trim())) {
      // Check for duplicate tasks
      setError("Task already exists!");
      return;
    }
      setlist((prev)=>[...prev,inp])
      setinp("")
      setError("");// Clear error after successful addition

  }


  setInterval(() => {
    getCurrentDateTime();
  }, 1000);
  const getCurrentDateTime = () => {
    const date = new Date();
  
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
  
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
  
    setDt(`Date : ${day}-${month}-${year} Time: ${hours}  ${minutes}:${seconds}`);
  };
  
  // Example: 31-12-24 14:35:50
  
 

  return (<>
  <div className='input-container'>
   
    <div className='input-wrapper'>
    <input 
    type="text"
    placeholder='Enter Task'
    onChange={(e)=>setinp(e.target.value)}
    value={inp}/>
    <button onClick={handleAddTask}>Add Task</button>
    </div>
    <div className="date-time">{date_time} </div>
    </div>
   <div className='tasks-container'> <p>
     { list.map((l)=>{
      return<li style={{display:"flex",    justifyContent: "space-between",
        alignItems: "center"}}>
        {l} 
        <span style={{display:"flex"}}><button>DONE</button><button>Delete</button></span>
        
        
        </li>})}
    </p>
    </div>



  
  </>
  )
}

export default Todo






// import { useState } from 'react';

// export default function Todo() {
//   const [task, setTask] = useState(['first task']);
//   const [newtask, setNewTask] = useState('');

//   const updateList = () => {
//     console.log('hi');
//     setTask((prev) => [...prev, newtask]);
//     setNewTask('');
//   };
//   const getNewTask = (e) => {
//     console.log(newtask);
//     setNewTask(() => e.target.value);
//   };

//   return (
//     <div>
//       <input type="text" onChange={getNewTask} />
//       <button onClick={updateList}>Add task</button>

//       <ul>
//         {task.map((t) => (
//           <li>{t}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
