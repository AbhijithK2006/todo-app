import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Nav'
import Home from './Home'
import Todo from './Todo'
import { Link, Route, Routes } from 'react-router-dom'
import Home2 from './Home2'

function App() {
  

  return (
    <>
      <Nav />
      <Home />
      <Home2 />
      <Todo />
    </>
  )
}

export default App
