import React from 'react'
import { Route, Router, Routes, BrowserRouter } from 'react-router-dom'
import About from './about/About'
import Home from './home/Home'
import Page_Not_Found from './page_not/Page_not_found'
import PortFolio from './portfolio/Portfolio'
import Login from './register/login'


function App() {
 return(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="" element={ <Home /> }/>
        <Route path='/my_images' element= { <PortFolio />} />
        <Route path='/about' element={ <About />} />
        {/* <Route path='*' element={ <Not_Found />}   /> */}
        <Route path='/login' element={ <Login />} />
        <Route path='*' element={ <Page_Not_Found />} />
      </Routes>
    </BrowserRouter>
  </>
 )
}
export default App