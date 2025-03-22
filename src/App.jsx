import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { AuthProvider } from '../src/Context/AuthContext'
function App(){
  const [count, setCount] = useState(0)
  return (
    <>
        <AuthProvider>
        <Navbar/>
        
        <main className='min-h-screen mx-auto px-4 py-6 font-sans'>
        <Outlet/>

        </main>
        </AuthProvider>
       
    </>
  )
}

export default App
