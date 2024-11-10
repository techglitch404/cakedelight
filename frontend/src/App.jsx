import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import About from './pages/About'
import Contact from './pages/Contact'
import Cake from './pages/Cake'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/cart' element={<Cart />} />
           <Route path='/about' element={<About />} />
           <Route path='/contact' element={<Contact />} />
           <Route path='/cake' element={<Cake />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App