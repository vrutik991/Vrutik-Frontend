import styles from './aboutProfile.module.css'
import Profile from '/aboutProfile.jpg'; 

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