import React from 'react'
import { Footer } from './Footer'
import { Topnav } from './Topnav'

export const Layout = ({children}) => {
  return (
    <div>
        <Topnav/>
      <div className="layout">

      {children}
      </div>

      
       <Footer/>

    </div>
  )
}
