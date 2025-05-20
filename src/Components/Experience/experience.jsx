import React from 'react'
import styles from './experience.module.css'
import { Link } from 'react-router'

const experience = () => {
  return (
    <div>
        <div className={styles.aboutContainer}>
        <div className="row">
          <div className="col-lg-6"><div className={styles.aboutLeft}>
            <h2>EXPERIENCE</h2>
          </div></div>
          <div className="col-lg-6"><div className={styles.aboutRight}>
            <p className={styles.aboutTitle}>MERN Stack Intern</p>
            <p className={styles.companyName}>Eliteware Solutions</p>
            <p className={styles.aboutDescription}>
                Gained Experience as an Frontend Developer creating Responsive Web Designs which helped me to gain knowledge about Frontend principles.
            </p>
            <p>Some Examples are as follows :</p>
            <p className={styles.projectPara}><a className={styles.projectName} href="https://mexant-project.onrender.com/">MEXANT</a></p>
            <p><a className={styles.projectName} href="https://leadgen-4vp4.onrender.com/">LEADGEN</a></p>
          </div></div>
        </div>
      </div>
    </div>
  )
}

export default experience