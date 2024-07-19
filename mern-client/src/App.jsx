
import { Link, Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import MyFotter from './components/MyFotter'



function App() {
 
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
    <Outlet/>
    </div>
     
     <MyFotter/>
    </>
  )
}

export default App
