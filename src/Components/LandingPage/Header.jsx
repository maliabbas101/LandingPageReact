import React from 'react'
import arrow from '../../../src/assets/img/front-pages/icons/Join-community-arrow.png'
import dashboardImg from '../../../src/assets/img/front-pages/landing-page/hero-dashboard-light.png'

const Header = () => {
    return (
        <div data-bs-spy="scroll" className="scrollspy-example">
            <section id="hero-animation">
                <div id="landingHero" className="section-py landing-hero position-relative">
                    <div className="container">
                        <div className="hero-text-box text-center">
                            <h1 className="text-primary hero-title display-6 fw-bold">One dashboard to manage all your businesses</h1>
                            <h2 className="hero-sub-title h6 mb-4 pb-1">
                                Production-ready &amp; easy to use Admin Template<br className="d-none d-lg-block" />
                                for Reliability and Customizability.
                            </h2>
                            <div className="landing-hero-btn d-inline-block position-relative">
                                <span className="hero-btn-item position-absolute d-none d-md-flex text-heading">Join community
                                    <img src={arrow} alt="Join community arrow" className="scaleX-n1-rtl" /></span>
                                <a href="#landingPricing" className="btn btn-primary btn-lg">Get early access</a>
                            </div>
                        </div>
                        <div id="heroDashboardAnimation" className="hero-animation-img">
                            <a href="../vertical-menu-template/app-ecommerce-dashboard.html" target="_blank">
                                <div id="heroAnimationImg" className="position-relative hero-dashboard-img">
                                    <img src={dashboardImg} alt="hero dashboard" className="animation-img" data-app-light-img="front-pages/landing-page/hero-dashboard-light.png" data-app-dark-img="front-pages/landing-page/hero-dashboard-dark.png" />
                                    <img src="../../assets/img/front-pages/landing-page/hero-elements-light.png" alt="hero elements" className="position-absolute hero-elements-img animation-img top-0 start-0" data-app-light-img="front-pages/landing-page/hero-elements-light.png" data-app-dark-img="front-pages/landing-page/hero-elements-dark.png" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="landing-hero-blank" />
            </section>
        </div>
    )
}

export default Header
