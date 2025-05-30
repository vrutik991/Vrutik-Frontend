import React from 'react'
import AboutMe2 from '../Components/aboutMe2/aboutMe2'
import Navbar from '../Components/Navbar'
import AboutProfile from '../Components/aboutProfile/aboutProfile'
import Capabilities from '../Components/myCapabilities/capabilities'
import Experience from '../Components/Experience/experience'
import ContactMe from '../Components/contactMe/contactMe'
import ScrollToTop from '../services/ScrollToTop'
import FixBootstrapScrollLock from '../services/FixBootstrapScrollLock'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const About = () => {
    return (
        <div>
            <FixBootstrapScrollLock></FixBootstrapScrollLock>
            <div className="container">
                <Navbar></Navbar>
                <section className='aboutMe'><AboutMe2></AboutMe2></section>
                {/* <section className='profile'>
                    <AboutProfile></AboutProfile>
                </section> */}
                <section className='capabilities'>
                    <Capabilities></Capabilities>
                </section>
                <hr />
                <section className='experience'>
                    <Experience></Experience>
                </section>
                <hr />
                <section className='contactVrutik'>
                    <ContactMe></ContactMe>
                    <ToastContainer />
                </section>
            </div>
        </div>
    )
}

export default About