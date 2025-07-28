import React from 'react'
import styles from './aboutMe2.module.css'
import { Link } from 'react-router'

const aboutMe2 = () => {
  return (
    <div>
      <div className={styles.aboutContainer}>
        <div className="row">
          <label htmlFor=""></label>
          <div className="col-lg-6"><div className={styles.aboutLeft}>
            <h2> ABOUT ME</h2>
          </div></div>
          <div className="col-lg-6"><div className={styles.aboutRight}>
            <p className={styles.aboutTitle}>I'm passionate about continuous learning and enjoy diving into new technologies and creative challenges. </p>
            <br />
            <p className={styles.aboutDescription}>Outside of tech, I enjoy playing chess , traveling, which keeps me inspired and balanced. I believe that curiosity, consistency, and collaboration are key to growth — and I’m excited to bring that mindset into every opportunity I pursue. I’m currently open to internships, freelance projects, or entry-level roles where I can learn, contribute, and grow.</p>
            <br />
            <p className={styles.aboutLink}><a href="/Vrutik_Resume_Latest.pdf" download>Download Resume</a></p>
          </div></div>
        </div>
      </div>
    </div>
    
  )
}

export default aboutMe2