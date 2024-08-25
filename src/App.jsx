import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const editTask = (index) => {
    const updatedTask = prompt("Edit your task:", tasks[index]);
    if (updatedTask !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[index] = updatedTask;
      setTasks(updatedTasks);
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">To-Do List</h1>
      <div className="input-group mb-3">
        <input 
          type="text" 
          className="form-control" 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
          placeholder="Add a new task"
        />
        <button className="btn btn-primary" onClick={addTask}>Add Task</button>
      </div>
      
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
            {task}
            <div>
              <button className="btn btn-warning btn-sm me-2" onClick={() => editTask(index)}>Edit</button>
              <button className="btn btn-danger btn-sm" onClick={() => deleteTask(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
