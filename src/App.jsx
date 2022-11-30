import React from 'react'
import { Route, Router, Routes, BrowserRouter } from 'react-router-dom'
import Contact from './contact/contact'
import Home from './home/Home'
import About from './about/about'
// import { FaSitemap } from 'react-icons/fa'

function App() {
 return(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="" element={ <Home /> }/>
        <Route path='/about' element={ <About />} />
        <Route path='/contact' element={ <Contact />} />
        <Route path='*' element={ <Page_Not_Found />} />
      </Routes>
    </BrowserRouter>
  </>
 )
}
export default App

// my FaSitemap