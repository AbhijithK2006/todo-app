import React, { useState, useEffect } from 'react';
// import Todo from './Todo'; // Assuming Todo component might be used later or for individual items

function Home2() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch todos
    const fetchTodos = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('https://dummyjson.com/todos');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // The API returns an object with a 'todos' array and other metadata
        if (data && Array.isArray(data.todos)) {
          setTodos(data.todos);
        } else {
          // Handle cases where the expected 'todos' array is not found
          console.error("Fetched data does not contain a 'todos' array:", data);
          setTodos([]); // Set to empty array or handle as an error
          setError(new Error("Unexpected data format from API."));
        }
      } catch (err) {
        console.error("Failed to fetch todos:", err);
        setError(err.message);
        setTodos([]); // Clear todos on error
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
      {/* Main container with background color and padding */}
      <div className='min-h-screen bg-[#FFD6BA] py-8 px-4 font-sans'>
        {/* App Title */}
       

        {/* My ToDo List Title */}
        <div className='text-center mb-10'>
          <h2 className='text-5xl font-medium text-[#21130d]'>My ToDo List</h2>
        </div>

        {/* Todos List Section */}
        <div className='max-w-2xl mx-auto'>
          {loading && (
            <p className='text-center text-[#21130d] text-lg'>Loading todos...</p>
          )}

          {error && (
            <div className='text-center text-red-600 bg-red-100 p-4 rounded-lg shadow-md'>
              <p className='font-semibold'>Error loading todos:</p>
              <p>{error}</p>
              <p>Please try refreshing the page.</p>
            </div>
          )}

          {!loading && !error && todos.length === 0 && (
            <p className='text-center text-[#21130d] text-lg'>No todos found. Try adding some!</p>
          )}

          {!loading && !error && todos.length > 0 && (
            <ul className='space-y-4'>
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  className={`p-5 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105
                              ${todo.completed ? 'bg-green-200 border-l-4 border-green-600' : 'bg-amber-100 border-l-4 border-amber-500'}
                              text-[#3d2c22]`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-lg ${todo.completed ? 'line-through text-gray-500' : 'font-medium'}`}>
                      {todo.todo}
                    </span>
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full
                                  ${todo.completed ? 'bg-green-500 text-white' : 'bg-amber-400 text-amber-900'}`}
                    >
                      {todo.completed ? 'Completed' : 'Pending'}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">User ID: {todo.userId}</p>
                </li>
                // If you have a Todo component for individual items, you could use it like:
                // <Todo key={todo.id} todo={todo.todo} completed={todo.completed} userId={todo.userId} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default Home2;
