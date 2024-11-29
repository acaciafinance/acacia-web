import React from 'react'
import TopNav from './TopNav'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div className=' relative bg-neutral-100 min-h-screen flex flex-col'>
      <div>
        <TopNav />
      </div>
      <div className=' flex-grow'>
        {children}
      </div>
      <div className=' mt-auto'>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
