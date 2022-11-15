import React from 'react'
import { Route, Router, Routes, BrowserRouter } from 'react-router-dom'
import About from './about/About'
import Api from './api/apis'
import Photos from './api/photos'
import Home from './home/Home'
import Page_Not_Found from './page_not/Page_not_found'
import PortFolio from './portfolio/Portfolio';
import HamSinf from './hamsinf/lists'


function App() {
 return(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="" element={ <Home /> }/>
        <Route path='/my_images' element= { <PortFolio />} />
        <Route path='/about' element={ <About />} />
        <Route path='/api' element={ <Api />} />
        <Route path='/api/photos' element={<Photos />} />
        <Route path='/lists' element={ <HamSinf />} />
        <Route path='*' element={ <Page_Not_Found />} />
        {/* <Route path='/loader/' element={ <Loader />} /> */}
      </Routes>
    </BrowserRouter>
  </>
 )
}
export default App