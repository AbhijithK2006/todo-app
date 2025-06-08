<<<<<<< HEAD
import { Button, Link } from '@mui/material'
import React from 'react'
import Todo from './Todo'
=======
import { Button } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom' // 1. Import Link from react-router-dom
>>>>>>> b064fdb (Initial commit)

function Nav() {
  return (
    <>
<<<<<<< HEAD
    <nav className='bg-[#FFD6BA]'>
  <div class=" mx-auto p-4">
    <div>
      <ul class="font-medium flex md:space-x-8">
        <li className='text-4xl font-extrabold'>
          <a>ToDo</a>
        </li>
        <li className='text-2xl flex md:flex md:flex-grow flex-row justify-end space-x-1'>
          <a className='bg-[#FFE8CD]'><Button variant='text' color='brown'>HOME</Button></a>
        </li>
        <li className='text-2xl flex'>
          <a className='bg-[#FFE8CD]' href="/Todo"> {/* Link to the todo page */}
            <Button variant='text' color='brown'><Link to="/Todo">ToDo</Link></Button></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
=======
     <nav className='flex justify-between items-center p-4 bg-[#FFD6BA]'>
      <div className='text-4xl font-bold text-[#3B3B1A]'>
        ToDo
      </div>
      <div>
        {/* 2. Use the component prop on Button to integrate the RouterLink */}
        {/* 3. Correct the path for Home to "/" to match your Route in App.jsx */}
        <Button component={RouterLink} to="/" style={{ textDecoration: 'none', color: '#333' }}>Home</Button>
        <Button component={RouterLink} to="/Todo" style={{ textDecoration: 'none', color: '#333' }}>Todo</Button>
      </div>
    </nav>
>>>>>>> b064fdb (Initial commit)
    </>
  )
}

export default Nav