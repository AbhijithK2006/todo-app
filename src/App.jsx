<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Todo from './Todo';
=======
<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Nav'
import Home from './Home'
import Todo from './Todo'
import { Link, Route, Routes } from 'react-router-dom'
import Home2 from './Home2'
>>>>>>> 679f1682313e1befb2e30d43e0f36e73eebcafc0

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch initial todos when the app loads
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('https://dummyjson.com/todos');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data && Array.isArray(data.todos)) {
          setTodos(data.todos);
        } else {
          setError(new Error("Unexpected data format from API."));
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTodos();
  }, []);

  // Function to add a new todo to the list
  const addTodo = (newTodo) => {
    // Adds the new todo to the beginning of the array
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  return (
    <Router>
      <Nav />
      <Routes>
        {/* Pass todos data down to Home */}
        <Route
          path="/"
          element={<Home todos={todos} loading={loading} error={error} />}
        />
        {/* Pass the addTodo function down to Todo */}
        <Route path="/Todo" element={<Todo addTodo={addTodo} />} />
      </Routes>
    </Router>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App
=======
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Todo from './Todo';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch initial todos when the app loads
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('https://dummyjson.com/todos');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data && Array.isArray(data.todos)) {
          setTodos(data.todos);
        } else {
          setError(new Error("Unexpected data format from API."));
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTodos();
  }, []);

  // Function to add a new todo to the list
  const addTodo = (newTodo) => {
    // Adds the new todo to the beginning of the array
    setTodos([newTodo, ...todos]);
  };

  return (
    <Router>
      <Nav />
      <Routes>
        {/* Pass todos data down to Home */}
        <Route
          path="/"
          element={<Home todos={todos} loading={loading} error={error} />}
        />
        {/* Pass the addTodo function down to Todo */}
        <Route path="/Todo" element={<Todo addTodo={addTodo} />} />
      </Routes>
    </Router>
  );
}

export default App;
>>>>>>> b064fdb (Initial commit)
>>>>>>> 679f1682313e1befb2e30d43e0f36e73eebcafc0
