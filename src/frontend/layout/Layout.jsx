import React from 'react'
import Navbar from '../containers/Navbar'
import Footer from '../containers/Footer'

function Layout({children}) {
  return (
<div className="contenedor__Layout">
    <Navbar/>
    {children}
    <Footer/>
</div>    
 )
}

export default Layout