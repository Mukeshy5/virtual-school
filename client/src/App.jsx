import React from 'react'
import { Button } from './components/ui/button'
import Login from './pages/Login'

import Navbar from './components/Navbar'


import HeroSection from './pages/admin/student/HeroSection'


const App = () => {
  return (
    <>

    <Navbar/>

    <HeroSection/>

<Login/>
    {/* <Login/> */}
    </>
  )
}

export default App 