import React, { useState } from "react";

const TodoList = () => {
  const [task, setTask] = useState([]);
  const [addTask, SetAddTask] = useState("");

  const inputChange = (e) => {
    SetAddTask(e.target.value);
  };

  const addTasks = () => {
    if (addTask.trim() !== "") {
      setTask((task) => [...task, addTask]);
      SetAddTask("");
    }
  };

  const deleteTasks = (index) => {
    const updateTask = task.filter((_, i) => i !== index);
    setTask(updateTask);
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...task];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTask(updatedTasks);
    }
  };

  const moveTaskDown = (index) => {
    if (index < task.length - 1) {
      const updatedTasks = [...task];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTask(updatedTasks);
    }
  };

  return (
    <>
      <div className="to-do-list">
        <h1>Todo List</h1>
        <div>
          <input
            type="text"
            placeholder="Enter a Task"
            value={addTask}
            onChange={inputChange}
          />
          <button className="add-button" onClick={addTasks}>
            Add Task
          </button>

          <ol>
            {task.map((item, index) => {
              return (
                <li key={index}>
                  <span>{item}</span>
                  <button
                    className="move-button"
                    onClick={() => moveTaskUp(index)}
                  >
                    ⬆️
                  </button>
                  <button
                    className="move-button"
                    onClick={() => moveTaskDown(index)}
                  >
                    ⬇️
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => deleteTasks(index)}
                  >
                    ❎
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default TodoList;
