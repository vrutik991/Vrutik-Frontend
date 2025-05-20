import React from 'react'
import AboutMe2 from '../Components/aboutMe2/aboutMe2'
import Navbar from '../Components/Navbar'
import AboutProfile from '../Components/aboutProfile/aboutProfile'
import Capabilities from '../Components/myCapabilities/capabilities'
import Experience from '../Components/Experience/experience'
import ContactMe from '../Components/contactMe'
import { Link } from 'react-router'

const About = () => {
    return (
        <div>
            <div className="container">
                <Navbar></Navbar>
                <section className='aboutMe'><AboutMe2></AboutMe2></section>
                <section className='profile'>
                    <AboutProfile></AboutProfile>
                </section>
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
                </section>
            </div>
        </div>
    )
}

export default About