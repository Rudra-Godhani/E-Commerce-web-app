/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Counter from './components/Counter'
import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
// import './App.css'

function App() {

  return (

    //counter App code

    // <div>
    //   <Counter />
    // </div>

    <div className='h-full'>
      <div className='bg-slate-900'>
        <Navbar />
      </div>

      <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='/cart'  element={<Cart />}/>
      </Routes>
    </div>
  )
}

export default App
