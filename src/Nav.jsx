import { Button, Link } from '@mui/material'
import React from 'react'
import Todo from './Todo'

function Nav() {
  return (
    <>
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
    </>
  )
}

export default Nav