import React from 'react'
import { Route, Router, Routes, BrowserRouter } from 'react-router-dom'
import Home from './home/Home'
import My__Skills from './skils/my__skills'
import About from './about/about'
import Page_Not_Found from './page_not/Page_not_found'
import Signup from './login/signup'
import Login from './login/login'
import Pass_Generator from './password/pas_generator'

function App() {
 return(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="" element={ <Home /> }/>
        <Route path='/my_skills' element={ <My__Skills />} />
        <Route path="/signup" element={ <Signup />} />
        <Route path="/login" element={ <Login />} />
        <Route path='/about' element={ <About />} />
        <Route path='/password_generator' element={ <Pass_Generator />} />
        {/* <Route path='*' element={ <Page_Not_Found />} /> */}
      </Routes>
    </BrowserRouter>
  </>
 )
}
export default App
