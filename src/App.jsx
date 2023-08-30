import { useState } from 'react'
import './components/Style.css'
import './components/Pictures.css'
import Navbar from './components/Navbar'
import Greeting from './components/Greeting'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
  <div className='site-layout'>
    <Navbar/>
    <Greeting/>
    <AboutMe/>
    <Skills/>
    <Portfolio/>
    <Contact/>
    <Footer/>
  </div>
  )
}

export default App
