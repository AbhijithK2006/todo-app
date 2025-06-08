import React from 'react';
import { Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className='flex justify-between items-center p-4 bg-[#FFD6BA]'>
      <div className='text-4xl font-bold text-[#3B3B1A]'>
        ToDo
      </div>
      <div>
        <Button component={RouterLink} to="/" style={{ textDecoration: 'none', color: '#333' }}>
          Home
        </Button>
        <Button component={RouterLink} to="/Todo" style={{ textDecoration: 'none', color: '#333' }}>
          Todo
        </Button>
      </div>
    </nav>
  );
}

export default Nav;
