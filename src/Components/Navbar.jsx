import React from 'react'
import "../styles/navbar.css"
import { Link } from 'react-router'
import { useNavigate } from 'react-router-dom'
import About from '../pages/About'
import App from '../App.jsx';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar ">
                <div className="start">
                    <h4 className='vrutik'>VRUTIK RATHOD</h4>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Vrutik Rathod</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about" >About</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
            </nav>
            <br />
        </div>
    )
}

export default Navbar