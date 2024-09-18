// import { Home } from '@mui/icons-material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CreateUser from './components/CreateUser'
import EditUser from './pages/Edit'

const App = () => {
  return (
    <div> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/createuser' element={<CreateUser />} />
        <Route path='/edit' element={<EditUser />} />
      </Routes>
    </div>
  )
}
//json server npm
//json-server --watch
//see here
//json-server --watch db.json --port 5210
export default App