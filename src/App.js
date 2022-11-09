
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Registration from './Component/Registration'
import Login from './Component/Login'
import Home from './Component/Home'
import Protected from './Component/Protected'
import './App.css'

const App = () => {
  return (
     <div className='container'>
       <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Protected Component={Home} />}/>
          <Route path='/' element={<Registration/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
       </BrowserRouter>
     </div>
  )
}

export default App