import React from 'react';

const InpAndBtn = ({ inp, setinp, list, setlist }) => {
  const handleAddTask = () => {
    const text = inp.text;

    if (!text.trim()) {
      alert("Task cannot be empty!");
      return;
    }

    if (list.some(task => task.text === text.trim())) {
      alert(`${text} already exists!`);
      return;
    }

    const newTask = { id: Date.now(), text: text.trim(), checked: false };
    const updatedList = [...list, newTask];
    setlist(prev => [...prev, newTask]);
    setinp({ text: "", checked: false });

    localStorage.setItem("mytodo",JSON.stringify(updatedList))

  };


  return (
    <div className="input-wrapper">
      <input
        type="text"
        placeholder="Enter Task"
        onChange={(e) => setinp({ ...inp, text: e.target.value })}
        value={inp.text}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default InpAndBtn;
