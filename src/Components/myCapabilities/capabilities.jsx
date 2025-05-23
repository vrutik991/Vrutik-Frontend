import React from 'react'
import styles from './capabilities.module.css'
import { Link } from 'react-router'


const capabilities = () => {
    return (
        <div>
            <div className={styles.aboutContainer}>
                <div className="row">
                    <div className="col-lg-6"><div className={styles.aboutLeft}>
                        <h2>Capabilites</h2>
                    </div></div>
                    <div className="col-lg-6"><div className={styles.aboutRight}>
                        <p className={styles.aboutTitle}>I am a front-end developer and always looking to learn new skills. And always eager for good opportunities  </p>
                        <br />
                        <div className={styles.skills}>
                            <h2>Frontend</h2>
                            <br />
                            <ul className='Frontend'>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>JQuery</li>
                                <li>BootStrap</li>
                                <li>React.js</li>
                            </ul>
                            <h2>Backend</h2>
                            <br />
                            <ul>
                                <li>Node.js</li>
                                <li>Express</li>
                                <li>Passport</li>
                                <li>JWT</li>
                                <li>Git/Github</li>
                            </ul>
                            <h2>Databases</h2>
                            <br />
                            <ul>
                                <li>SQL</li>
                                <li>MongoDB</li>
                                <li>Mongoose</li>
                                <li>Mongo Compass</li>
                            </ul>
                        </div>
                    </div></div>
                </div>
            </div>
        </div>
    )
}

export default capabilities