import React from 'react'
import { Footer } from './Footer'
import { Topnav } from './Topnav'

export const Layout = ({children, changeTheme}) => {
  return (
    <div>
      <Topnav changeTheme={changeTheme}/>
      <div className="layout">

      {children}
      </div>

      
       <Footer/>

    </div>
  )
}
