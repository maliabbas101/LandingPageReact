import React from 'react'
import logo from '../../src/assets/img/pages/logo.png'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

const Navbar = (props) => {
    return (
        <>
            {props.isLoggedIn ? (
                <nav className="layout-navbar navbar navbar-expand-xl align-items-center bg-navbar-theme" id="layout-navbar">
                    <div className="container-xxl">

                        <a href="index.html" className="app-brand-link gap-2">
                            <span className="app-brand-logo demo">
                                <img src={logo} width={200} height={35} alt="" />
                            </span>
                        </a>

                        <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                            <ul className="navbar-nav flex-row justify-content-center ms-auto">
                                <li className="nav-item me-2 me-xl-3">
                                    <Link className="nav-link" to="/notes">
                                        <i class="fa-regular fa-clipboard fa-lg" title='Notes'></i>
                                    </Link>
                                </li>
                                <li className="nav-item me-2 me-xl-3">
                                    <a className="nav-link" href="javascript:void(0);" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">

                                        <i class="fa-solid fa-microphone fa-fade fa-lg"></i>
                                    </a>
                                </li>

                                <li className="nav-item  me-2 me-xl-3">
                                    <a className="nav-link" href="javascript:void(0);" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                        <i class="fa-solid fa-user fa-lg"></i>
                                    </a>
                                </li>
                            </ul>
                            <button className="btn btn-sm btn-primary me-2 mt-2 float-end">Logout</button>
                        </div>
                    </div>
                </nav>
            ) : (
                <nav className="layout-navbar shadow-none py-0">
                    <div className="container">
                        <div className="navbar navbar-expand-lg landing-navbar px-3 px-md-4">
                            {/* Menu logo wrapper: Start */}
                            <div className="navbar-brand app-brand demo d-flex py-0 py-lg-2 me-4">
                                {/* Mobile menu toggle: Start*/}
                                <button
                                    className="navbar-toggler border-0 px-0 me-2"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <i className="ti ti-menu-2 ti-sm align-middle"></i>
                                </button>
                                {/* Mobile menu toggle: End*/}
                                <Link to="/" className="app-brand-link">
                                    <span className="app-brand-logo demo">
                                        <img src={logo} width={200} height={35} alt="" />
                                    </span>
                                    <span className="app-brand-text demo menu-text fw-bold ms-2 ps-1"></span>
                                </Link>
                            </div>
                            {/* Menu logo wrapper: End */}
                            {/* Menu wrapper: Start */}
                            <div className="collapse navbar-collapse landing-nav-menu" id="navbarSupportedContent">
                                <button className="navbar-toggler border-0 text-heading position-absolute end-0 top-0 scaleX-n1-rtl" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <i className="ti ti-x ti-sm" />
                                </button>
                                <ul className="navbar-nav me-auto">
                                    <li className="nav-item">
                                        <HashLink className="nav-link fw-medium" aria-current="page" smooth to="#landingHero">Home</HashLink>
                                    </li>
                                    <li className="nav-item">
                                        <HashLink className="nav-link fw-medium" smooth to="#landingFeatures">Features</HashLink>
                                    </li>
                                    <li className="nav-item">
                                        <HashLink className="nav-link fw-medium" smooth to="#howItWorks">How It Works</HashLink>
                                    </li>
                                    <li className="nav-item">
                                        <HashLink className="nav-link fw-medium" smooth to="#landingFAQ">FAQ</HashLink>
                                    </li>
                                    <li className="nav-item">
                                        <HashLink className="nav-link fw-medium" smooth to="#landingContact">Contact us</HashLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="landing-menu-overlay d-lg-none" />
                            {/* Menu wrapper: End */}
                            {/* Toolbar: Start */}
                            <ul className="navbar-nav flex-row align-items-center ms-auto">
                                {/* navbar button: Start */}
                                <li>
                                    <Link to="/login" className="btn btn-primary"><span className="tf-icons ti ti-login scaleX-n1-rtl me-md-1" /><span className="d-none d-md-block">Login/Register</span></Link>
                                </li>
                                {/* navbar button: End */}
                            </ul>
                            {/* Toolbar: End */}
                        </div>
                    </div>
                </nav>
            )}
        </>

    );
}

export default Navbar
