import React, { useState } from 'react'

const Todo = () => {
  const [inp,setinp]=useState("")
  const [list,setlist]=useState([])

  const handleAddTask=(e)=>{
    
      setlist((prev)=>[...prev,inp])
      setinp("")
  }


  return (
  <div>

    <input 
    type="text"
    placeholder='Enter Task'
    onChange={(e)=>setinp(e.target.value)}
    value={inp}/>
    <button onClick={handleAddTask}>Add Task</button>
    <p>
     { list.map((l)=>{
      return<li style={{display:"flex",    justifyContent: "space-between",
        alignItems: "center"}}>
        {l} 
        <span style={{display:"flex"}}><button>DONE</button><button>Delete</button></span>
        
        
        </li>})}
    </p>



  </div>
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
