import React from 'react'
import Navbar from '../components/Navbar'
const MainPanel = ({children}) => {
  return (
    <>
    <Navbar/>
    {children}
    </>
  )
}

export default MainPanel