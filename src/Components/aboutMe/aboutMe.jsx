import React from 'react'
import './aboutMe.css'
import { Link } from 'react-router'

const aboutMe = () => {
  return (
    <div>
      <div className="aboutContainer">
        <div className="row">
          <div className="col-lg-6"><div className="aboutLeft">
          <h2>ABOUT ME</h2>
        </div></div>
          <div className="col-lg-6"><div className="aboutRight">
          <p className='aboutTitle'>I am a front-end developer in India. Has a Computer Science Engineering background.</p>
          <br />
          <p className='aboutDescription'>I am a front-end developer based in India looking for exciting opportunities. Has Computer Science Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Machine Learning & Data Science and a bit of Designing. While I am not programming, I enjoy playing Chess , Volleyball and playing Games. Learning more to improve skill.</p>
          <br />
          <p className='aboutLink'><Link to="/about">MORE ABOUT ME</Link></p>
        </div></div>
        </div>
      </div>
    </div>
  )
}

export default aboutMe