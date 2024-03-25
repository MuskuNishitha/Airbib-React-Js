import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { Navbar1 } from './Navbar1'
import { Home } from './Home'

export const Webpagenav = () => {
  return (
    <div id="comter">
    <BrowserRouter>
    <Navbar1/>
    <Routes>
    <Route extact path='/' element={<Home />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}
