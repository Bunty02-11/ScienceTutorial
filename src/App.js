import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Aboutus from './Components/About/Aboutus'
import Course from './Components/Courses/Course'
import Contact from './Components/Contact/Contact'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<Aboutus/>} />
          <Route exact path='/course' element={<Course/>} />
          <Route exact path='/contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
