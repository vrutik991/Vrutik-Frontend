import React, { useState } from 'react'
import "./contactMe.css"
import axios from 'axios'

const contactMe = () => {

    const handleChange = (event) => {
        setformData((currData) => {
            return { ...currData, [event.target.name]: event.target.value };
        }
        )
    }

    const sendNotification = async () => {
        console.log("In send Notification");
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/send-notification`,formData)
    }

    const handleSubmit = (event) => {
        sendNotification();
        event.preventDefault();
        setformData({
            name: "",
            email: "",
            subject: "",
            message: "",
        })
    }
    const [formData, setformData] = useState(
        {
            name: "",
            email: "",
            subject: "",
            message: ""
        })

    return (
        <div>
            <div className="contactContainer">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="contactLeft">
                            <div className='upper'>
                                <h1>LET'S CONNECT</h1>
                                <p>Say hello at <b><a href="mailto:rathodvrutik123@gmail.com" >rathodvrutik123@gmail.com</a></b></p>
                                <br />
                                <p>For more info here's <a className='resume' href="/Vrutik_Resume_Latest.pdf" download>my resume</a></p>
                                <br />
                                <div className="contactIcons">
                                    <div className="linkedin"><a href="www.linkedin.com/in/vrutik-rathod"><i class="fa-brands fa-linkedin-in"></i></a></div>
                                    <div className="githubIcon"><a href="https://github.com/vrutik991"><i class="fa-brands fa-github"></i></a></div>
                                    <div className="twitter"><a href=""><i class="fa-brands fa-twitter"></i></a></div>
                                    <div className="instagram"><a href="https://www.instagram.com/vrutik_991_/"><i class="fa-brands fa-instagram"></i></a></div>
                                </div>
                                <br />
                            </div>
                            <div className="leftLower">
                                &#169;2025 Vrutik Rathod
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="contactRight">
                            <form action="" className='contactForm' onSubmit={handleSubmit} method='POST'>
                                <label htmlFor="name">Name</label>
                                <br />
                                <br />
                                <input type="text" id='name' name='name' value={formData.name} onChange={handleChange} />
                                <br /><br />
                                <label htmlFor="name">Email</label>
                                <br />
                                <br />
                                <input type="text" id='email' name='email' value={formData.email} onChange={handleChange} />
                                <br /><br />
                                <label htmlFor="subject">Subject</label>
                                <br />
                                <br />
                                <input type="text" id='subject' name='subject' value={formData.subject} onChange={handleChange} />
                                <br /><br />
                                <label htmlFor="message">Message</label>
                                <br />
                                <br />
                                <textarea name="message" id="message" value={formData.message} onChange={handleChange}></textarea>
                                <br />
                                <br />
                                <button>Submit</button>
                            </form>
                            <br /><br />
                            <div className="rightLower">
                                &#169;2025 Vrutik Rathod
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default contactMe