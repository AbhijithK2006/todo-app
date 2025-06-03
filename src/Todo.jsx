import { Button, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Todo() {
  return (
    <>
    <div className='max-w-md mx-auto'>
    <div className='grid gap-5 p-5 m-5 '>
    <div className='text-3xl text-blue-950 font-bold'>Add Your ToDo</div>
    <div className='text-2xl font-medium'>Todo Item Description</div>
    <TextField id="outlined-basic" label="Add your item description" variant="outlined" />
    <div className='text-2xl font-medium'>Completion Status</div>
    <TextField id="outlined-basic" label="Completed/Pending" variant="outlined" />
    <div className='text-2xl font-medium'>UserId</div>
   <TextField id="outlined-basic" label="Eg:(1,5,57)" variant="outlined" />
    </div>
    <div className='grid p-5 m-5'>
    <Button variant="contained">SUBMIT</Button>
    </div>
    </div>
    </>
  )
}

export default Todo