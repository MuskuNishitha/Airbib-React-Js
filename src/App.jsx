import React from 'react'
import { Navbar } from './Navbar'
import './index.css'
import { Navba } from './Navba'
import { Webpagenav } from './Webpagenav'
// import { Footer } from './Footer'
export const App = () => {
  return (
<>
<div id="topnav">
    <Navbar />
</div>
<div id="navabara">
  <Navba />
  </div>



<div id="navigatiopn">
<Webpagenav />
  </div>

{/* 
<Footer /> */}
</>
  )
}
