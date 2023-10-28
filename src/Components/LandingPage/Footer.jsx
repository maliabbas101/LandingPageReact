import React from 'react'
import logo from '../../../src/assets/img/front-pages/landing-page/logo.png'
import githubIcon from '../../../src/assets/img/front-pages/icons/github-light.png'
import facebookIcon from '../../../src/assets/img/front-pages/icons/facebook-light.png'
import twitterIcon from '../../../src/assets/img/front-pages/icons/twitter-light.png'
import instagramIcon from '../../../src/assets/img/front-pages/icons/instagram-light.png'

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
                                        <img src={logo} height={32} width={32} alt="logo" />
                                    </span>
                                    <span className="app-brand-text demo footer-link fw-bold ms-2 ps-1">AlcuraScribe</span>
                                </a>
                                <p className="footer-text footer-logo-description mb-4">
                                    Most developer friendly &amp; highly customisable Admin Dashboard Template.
                                </p>
                                <form className="footer-form">
                                    <label htmlFor="footer-email" className="small">Subscribe to newsletter</label>
                                    <div className="d-flex mt-1">
                                        <input type="email" className="form-control rounded-0 rounded-start-bottom rounded-start-top" id="footer-email" placeholder="Your email" />
                                        <button type="submit" className="btn btn-primary shadow-none rounded-0 rounded-end-bottom rounded-end-top">
                                            Subscribe
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6">
                                <h6 className="footer-title mb-4">Pages</h6>
                                <ul className="list-unstyled">
                                    <li className="mb-3">
                                        <a href="pricing-page.html" className="footer-link">Pricing</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="payment-page.html" className="footer-link">Payment<span className="badge rounded bg-primary ms-2">New</span></a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="checkout-page.html" className="footer-link">Checkout</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="help-center-landing.html" className="footer-link">Help Center</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="../vertical-menu-template/auth-login-cover.html" target="_blank" className="footer-link">Login/Register</a>
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
                        <div>
                            <a href="" className="footer-link me-3" target="_blank">
                                <img src={githubIcon} alt="github icon" data-app-light-img="front-pages/icons/github-light.png" data-app-dark-img="front-pages/icons/github-dark.png" />
                            </a>
                            <a href="" className="footer-link me-3" target="_blank">
                                <img src={facebookIcon} alt="facebook icon" data-app-light-img="front-pages/icons/facebook-light.png" data-app-dark-img="front-pages/icons/facebook-dark.png" />
                            </a>
                            <a href="" className="footer-link me-3" target="_blank">
                                <img src={twitterIcon} alt="twitter icon" data-app-light-img="front-pages/icons/twitter-light.png" data-app-dark-img="front-pages/icons/twitter-dark.png" />
                            </a>
                            <a href="" className="footer-link" target="_blank">
                                <img src={instagramIcon} alt="google icon" data-app-light-img="front-pages/icons/instagram-light.png" data-app-dark-img="front-pages/icons/instagram-dark.png" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
