import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Screens/Home'
import About from './Screens/About'
import Contact from './Screens/Contact'
import NavbarApp from './components/Navbaar'
import Product from './Screens/Product'
import AppHome from './Screens/AppHome'

const App = () => {
  return (  
    <Routes>
    <Route path='products' element={<Product />} />
    <Route index element={<AppHome />} />

    </Routes>
  )
}

export default App;