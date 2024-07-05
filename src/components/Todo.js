import React, { useRef, useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [tasks, addTasks] = useState([]);
  const taskRef = useRef(null)

  const TaskHandler = (e) => {
    setTask(e.target.value);
  };
  const AddHandler = () => {
    addTasks((prevTask) => [...prevTask, task]);
    setTask("");
  };
  const DeleteHandler = (task) => {
    const newTsks = tasks.filter((t) => t !== task);
    addTasks(newTsks);
  };
  const CompleteHandler = (index) => {
    taskRef.current.children[index].style.color = "green";
    const newTsks = tasks.slice();
    newTsks[index] = <s>{newTsks[index]}</s>;
    addTasks(newTsks)

  };

  return (
    <div>
      <input type="text" onChange={TaskHandler} value={task} />
      <button onClick={AddHandler}>Add</button>
      <ul ref={taskRef}>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => DeleteHandler(task)}>Delete</button> <span>---</span>
            <button onClick={() => CompleteHandler(index)}>Completed</button>
          </li>
          
        ))}
        { console.log(task)}
      </ul>
    </div>
  );
}

export default Todo;
