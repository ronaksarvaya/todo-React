import React from 'react';

const TaskList = ({ list, setlist }) => {
  const handleDelete = (task) => {
    const newList = list.filter(curr => curr.id !== task.id);
    setlist(newList);
    localStorage.setItem("mytodo", JSON.stringify(newList));
  };

  const handleDone = (id) => {
    setlist(prevList =>
      prevList.map(curr => 
        curr.id === id ? { ...curr, checked: !curr.checked } : curr
      )
    );
  };

  return (
    <div className="tasks-container">
      {list.map((task) => (
        <li
          key={task.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span className={task.checked ? "check" : "notcheck"}>
            {task.text}
          </span>

          <span style={{ display: "flex" }}>
            <button onClick={() => handleDone(task.id)}>DONE</button>
            <button onClick={() => {
              handleDelete(task)
            }}>Delete</button>
          </span>
        </li>
      ))}
    </div>
  );
};

export default TaskList;
