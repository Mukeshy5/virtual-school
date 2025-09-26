import React from 'react'
import Login from './pages/Login'
import HeroSection from './pages/admin/student/HeroSection'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Login/>
    </>
  );
};

export default App