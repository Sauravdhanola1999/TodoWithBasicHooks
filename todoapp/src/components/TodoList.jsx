import React, { useState } from "react";

const TodoList = () => {
  const [task, setTask] = useState(["ahahah", "jkjkj", "asaasas"]);
  const [addTask, SetAddTask] = useState("");

  const inputChange = (e) => {
    SetAddTask(e.target.value);
  };

  const addTasks = () => {

  };

  const deleteTasks = (index) => {};

  const moveTaskUp = (index) => {};

  const moveTaskDown = (index) => {};

  return (
    <>
      <div>
        <h1>Todo List</h1>
        <input type="text" placeholder="Enter a Task" value={addTask} onChange={inputChange} />
        <button onClick={()=>addTasks(addTask)}>Add Task</button>
        <button>Delete</button>
        <ul>
            {task.map((item, index)=>{
                return (
                    <li key={index}>{item}</li>
                )
            })}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
