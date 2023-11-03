import React from 'react'
import logo from '../../../src/assets/img/pages/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <footer className="landing-footer bg-body footer-text">
                <div className="footer-top">
                    <div className="container">
                        <div className="row gx-0 gy-4 g-md-5">
                            <div className="col-lg-5">
                                <a href="landing-page.html" className="app-brand-link mb-4">
                                    <span className="app-brand-logo demo">
                                        <img src={logo} height={32} width={200} alt="logo" />
                                    </span>
                                </a>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6">
                                <h6 className="footer-title mb-4">Pages</h6>
                                <ul className="list-unstyled">
                                    <li className="mb-3">
                                        <Link to="/login" className="footer-link">Login</Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="/register" className="footer-link">Register</Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="/" className="footer-link">Privacy Policy</Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="/" className="footer-link">Terms and Conditions</Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link href="/" target="_blank" className="footer-link">Cookies Policy</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom py-3">
                    <div className="container d-flex flex-wrap justify-content-between flex-md-row flex-column text-center text-md-start">
                        <div className="mb-2 mb-md-0">
                            <span className="footer-text">©
                            </span>
                            <a href="https://pixinvent.com" target="_blank" className="fw-medium text-white footer-link">AlcuraScribe,</a>
                            <span className="footer-text"> All Rights Reserved.</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
