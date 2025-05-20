import styles from './aboutProfile.module.css'
import Profile from '/aboutProfile.jpg';

import React from 'react'

const aboutProfile = () => {
  return (
    <div>
        <div className={styles.profileImage}>
            <img src={Profile} alt="" />
        </div>
    </div>
  )
}

export default aboutProfile