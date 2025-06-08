import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Receive addTodo function as a prop
function Todo({ addTodo }) {
  const [todo, setTodo] = useState('');
  const [completed, setCompleted] = useState(false); // Use boolean for status
  const [userId, setUserId] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.trim() || !userId.trim()) {
      alert("Please fill out all fields.");
      return;
    }

    // Create a new todo object that matches the structure in Home.jsx
    const newTodo = {
      id: Date.now(), // Generate a unique ID
      todo: todo,
      completed: completed,
      userId: Number(userId),
    };

    addTodo(newTodo); // Call the function from App.jsx to update the state
    navigate('/'); // Navigate back to the homepage
  };

  return (
    <>
    <head>
      <title>Add Todo</title>
    </head>
    <div className='min-h-screen flex items-start justify-center py-12 px-4'>
      <div className='max-w-md mx-auto w-screen bg-amber-50 border border-amber-950 rounded-2xl shadow-xl p-8 space-y-8'>
        <div>
          <h2 className='text-center text-4xl font-bold text-blue-950'>
            Add a New Task
          </h2>
        </div>
        <form className='grid gap-5' onSubmit={handleSubmit}>
          <div className='text-2xl font-medium'>Todo Item Description</div>
          <TextField
            label="Todo Description"
            variant="outlined"
            value={todo}
            onChange={e => setTodo(e.target.value)}
            fullWidth
            required
          />
          <div className='text-2xl font-medium'>Completion Status</div>
          <FormControl fullWidth required>
            <InputLabel id="status-select-label">Completion Status</InputLabel>
            <Select
              labelId="status-select-label"
              value={completed}
              label="Completion Status"
              onChange={e => setCompleted(e.target.value)}
            >
              <MenuItem value={false}>Pending</MenuItem>
              <MenuItem value={true}>Completed</MenuItem>
            </Select>
          </FormControl>
          <div className='text-2xl font-medium'>UserId</div>
          <TextField
            label="User ID (e.g., 1, 5, 57)"
            variant="outlined"
            type="number" // Use type="number" for numeric input
            value={userId}
            onChange={e => setUserId(e.target.value)}
            fullWidth
            required
          />
          <div>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                padding: '12px',
                fontSize: '16px',
                backgroundColor: '#21130d',
                '&:hover': { backgroundColor: '#3B3B1A' }
              }}
            >
              Add ToDo
            </Button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default Todo;
