import React from 'react'
import { TopNav } from './main/topNav'

const Layout = ({ children }) => {
  return (
    <div>
      <TopNav />
      {children}
    </div>
  )
}

export default Layout
