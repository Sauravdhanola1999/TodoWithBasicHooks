import React, { useState } from "react";

const TodoList = () => {
  const [task, setTask] = useState([]);
  const [newTask, setAddNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [edit, setEdit] = useState("");

  const inputChange = (e) => {
    setAddNewTask(e.target.value);
  };

  const addTasks = () => {
    if (newTask.trim() != "") {
      setTask((t) => [...t, newTask]);
      setAddNewTask("");
    }
  };

  const editTask = (index) => {
    setEditIndex(index);
    setEdit(task[index]);
  };

  const saveTask = (index) => {
    const updateTask = [...task];
    updateTask[index] = edit;
    setTask(updateTask);
    setEditIndex(null);
    setEdit("");
  };

  const deleteTasks = (index) => {
    const updateTask = task.filter((_, i) => i !== index);
    setTask(updateTask);
  };

  const cancelEdit = () => {
    setEditIndex(null);
    setEdit("");
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
            value={newTask}
            onChange={inputChange}
          />
          <button className="add-button" onClick={addTasks}>
            Add Task
          </button>
          <ol>
            {task.map((item, index) => {
              return (
                <li key={index}>
                  {editIndex === index ? (
                    <div>
                      <input
                        type="text"
                        name="text"
                        onChange={(e) => setEdit(e.target.value)}
                        value={edit}
                      />
                      <button
                        className="save-button"
                        onClick={() => saveTask(index)}
                      >
                        ✅
                      </button>
                      <button className="cancel-button" onClick={cancelEdit}>
                        ❎
                      </button>
                    </div>
                  ) : (
                    <div>
                      <span>{item}</span>
                      <button
                        className="edit-button"
                        onClick={() => editTask(index)}
                      >
                        📝
                      </button>
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
                    </div>
                  )}
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
