import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import USercontextprovider from './context/USercontextprovider'

function App() {

  return (
    <USercontextprovider>
      <h1 className='text-4xl text-amber-50'>React video for context API</h1>
      <Login />
      <Profile />
    </USercontextprovider>
  )
}

export default App
