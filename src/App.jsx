import './App.css'
import Navbar from './Components/Navbar'
import HeroContent from './Components/HeroContent'
import Projects from './Components/Projects/Projects'
import AboutMe from './Components/aboutMe/aboutMe'
import ContactMe from './Components/contactMe/ContactMe'
import ScrollToTop from './services/ScrollToTop'
import FixBootstrapScrollLock from './services/FixBootstrapScrollLock'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
    <FixBootstrapScrollLock></FixBootstrapScrollLock>
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
          <ToastContainer />
        </section>
      </div>

    </>
  )
}

export default App
