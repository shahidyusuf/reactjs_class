import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Screens/Home'
import About from './Screens/About'
import Contact from './Screens/Contact'
import NavbarApp from './components/Navbaar'

const App = () => {
  return (  
    <Routes>
      <Route path='/' element={<NavbarApp />} >
      <Route path='/home' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App;