import React, { useState } from 'react';
import TodoList from './TodoList';
import Button from './Button';

// Main component for the to-do app
const TodoApp = () => {
  // TODO: Initialize state for tasks and new task input

  // TODO: Function to handle adding a new task

  // TODO: Function to handle marking a task as complete

  // TODO: Function to handle deleting a task

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={/* TODO: Add handleAddTask function */}>
        <input
          type="text"
          value={/* TODO: Bind value to newTask state */}
          onChange={/* TODO: Update newTask state on input change */}
          placeholder="Enter a new task"
        />
        <Button text="Add Task" onClick={/* TODO: Add handleAddTask function */} />
      </form>
      {/* TODO: Conditionally render a message if there are no tasks */}
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <TodoList
          tasks={/* TODO: Pass tasks state as a prop */}
          onComplete={/* TODO: Add handleCompleteTask function */}
          onDelete={/* TODO: Add handleDeleteTask function */}
        />
      )}
    </div>
  );
};

export default TodoApp;
