import React from 'react'
import { Route, Router, Routes, BrowserRouter } from 'react-router-dom'
import Contact from './contact/contact'
import Home from './home/Home'
import Works from './works/works'
import About from './about/about'

function App() {
 return(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="" element={ <Home /> }/>
        <Route path='/about' element={ <About />} />
        <Route path='/contact' element={ <Contact />} />
      </Routes>
    </BrowserRouter>
  </>
 )
}
export default App