import React from 'react'
import "../styles/herocontent.css"
import heroImage from '../assets/profile-1.jpg';

const HeroContent = () => {
    return (
        <div>
            <div className="hero-container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="left">
                            <div className='profile-heading'>
                                <h1>hi, i am <br />
                                    vrutik rathod</h1>
                                <p>Front-end developer passionate about building accessible and user friendly websites.</p>
                                <div className="heading-buttons">
                                    <div className="green-button">
                                        <a href="#contactMe"><b>CONTACT ME</b></a>
                                        <div className='black-effect'><span className="material-symbols-outlined">north_east</span></div>
                                    </div>
                                    <a href="www.linkedin.com/in/vrutik-rathod" className='heroLinkdin'><div className="black-button"><i className="fa-brands fa-linkedin-in"></i></div></a>
                                    <a href="https://github.com/vrutik991" className='heroGithub'><div className="black-button"><i className="fa-brands fa-github"></i></div></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="right">
                            <img src={heroImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroContent