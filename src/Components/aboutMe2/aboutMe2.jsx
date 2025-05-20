import React from 'react'
import styles from './aboutMe2.module.css'
import { Link } from 'react-router'

const aboutMe2 = () => {
  return (
    <div>
      <div className={styles.aboutContainer}>
        <div className="row">
          <div className="col-lg-6"><div className={styles.aboutLeft}>
            <h2>ABOUT ME</h2>
          </div></div>
          <div className="col-lg-6"><div className={styles.aboutRight}>
            <p className={styles.aboutTitle}>I am a front-end developer in India. Has a Computer Science Engineering background.</p>
            <br />
            <p className={styles.aboutDescription}>I am a front-end developer based in India looking for exciting opportunities. Has Computer Science Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Machine Learning and a bit of Designing. While I am not programming, I enjoy playing Chess, Volleyball and playing PC Games. Learning more to improve skill.</p>
            <br />
            <p className={styles.aboutLink}><a href="/Vrutik_Resume_Latest.pdf" download>Download Resume</a></p>
          </div></div>
        </div>
      </div>
    </div>
  )
}

export default aboutMe2