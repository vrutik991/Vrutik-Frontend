import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import HeroContent from './Components/HeroContent'
import Projects from './Components/Projects/Projects'
import AboutMe from './Components/aboutMe'
import ContactMe from './Components/contactMe'
// import {createBrowserRouter , Route, RouterProvider} from 'react-router'
// import About from './pages/About'

function App() {

  return (
    <>
      <div className="container">
        <Navbar></Navbar>
        <section className='hero-content'>
          <HeroContent></HeroContent>
        </section>
        <hr />
        <section className='projects'>
          <Projects></Projects>
        </section>
        <hr />
        <section className='aboutMe'>
          <AboutMe></AboutMe>
        </section>
        <hr />
        <section className='contaceMe' id='contactMe'>
          <ContactMe></ContactMe>
        </section>
      </div>

    </>
  )
}

export default App
