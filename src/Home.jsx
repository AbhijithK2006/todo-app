import React, { useState } from 'react';

// Receive todos, loading, and error as props from App.jsx
function Home({ todos, loading, error }) {
  const [search, setSearch] = useState('');

  // Filter todos by search
  const filteredTodos = todos.filter(todo =>
    todo.todo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
        <head>
        <title>ToDo App</title>
        </head>
      <div className='flex justify-center items-center h-180 bg-amber-50'>
        <h1 className='text-5xl font-bold text-[#21130d]'>ToDo App</h1>
      </div>
      <div className='min-h-screen bg-[#FFD6BA] py-8 px-4 font-sans'>
        <div className='text-center mb-10'>
          <h2 className='text-5xl font-medium text-[#21130d]'>My ToDo List</h2>
          <br />
          <p className="text-lg text-[#3B3B1A] mb-4">Manage your tasks efficiently</p>
          <input
            type="text"
            placeholder="Search todos..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="px-4 py-2 rounded-lg border border-b-amber-950 focus:outline-none focus:ring-2 focus:ring-black transition w-80" />
        </div>

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

          {!loading && !error && filteredTodos.length === 0 && (
            <p className='text-center text-[#21130d] text-lg'>
              {search ? 'No todos match your search.' : 'No todos found. Try adding some!'}
            </p>
          )}

          {!loading && !error && filteredTodos.length > 0 && (
            <ul className='space-y-4'>
              {filteredTodos.map((todo) => (
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
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
