import React from 'react'
import "../styles/navbar.css"
import { Link } from 'react-router'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="start">
                    <h4 className='vrutik'>VRUTIK RATHOD</h4>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Vrutik Rathod</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/about">About</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                {/* <div className="end">
                    <ul className='nav-items'>
                        <li>Work</li>
                        <li><Link to="/about">About</Link></li>
                        <li>Contact</li>
                    </ul>
                </div> */}
            </nav>
            <br />


            {/* <nav class="navbar bg-body-tertiary fixed-top">
                <div class="container-fluid">
                    <h4><Link class="navbar-brand" to="/">RATHOD VRUTIK</Link></h4>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Vrutik Rathod</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/about">About</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav> */}
        </div>
    )
}

export default Navbar