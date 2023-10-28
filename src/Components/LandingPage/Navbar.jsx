import React from 'react'
import logo from '../../../src/assets/img/front-pages/landing-page/logo.png'
const Navbar = () => {
    return (
        <nav className="layout-navbar shadow-none py-0">
            <div className="container">
                <div className="navbar navbar-expand-lg landing-navbar px-3 px-md-4">
                    {/* Menu logo wrapper: Start */}
                    <div className="navbar-brand app-brand demo d-flex py-0 py-lg-2 me-4">
                        {/* Mobile menu toggle: Start*/}
                        <button className="navbar-toggler border-0 px-0 me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="ti ti-menu-2 ti-sm align-middle" />
                        </button>
                        {/* Mobile menu toggle: End*/}
                        <a href="landing-page.html" className="app-brand-link">
                            <span className="app-brand-logo demo">
                                <img src={logo} width={32} height={32} alt="" />
                            </span>
                            <span className="app-brand-text demo menu-text fw-bold ms-2 ps-1">AlcuraScribe</span>
                        </a>
                    </div>
                    {/* Menu logo wrapper: End */}
                    {/* Menu wrapper: Start */}
                    <div className="collapse navbar-collapse landing-nav-menu" id="navbarSupportedContent">
                        <button className="navbar-toggler border-0 text-heading position-absolute end-0 top-0 scaleX-n1-rtl" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="ti ti-x ti-sm" />
                        </button>
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link fw-medium" aria-current="page" href="landing-page.html#landingHero">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-medium" href="landing-page.html#landingFeatures">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-medium" href="landing-page.html#landingTeam">Team</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-medium" href="landing-page.html#landingFAQ">FAQ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-medium" href="landing-page.html#landingContact">Contact us</a>
                            </li>
                            <li className="nav-item mega-dropdown">
                                <a href="javascript:void(0);" className="nav-link dropdown-toggle navbar-ex-14-mega-dropdown mega-dropdown fw-medium" aria-expanded="false" data-bs-toggle="mega-dropdown" data-trigger="hover">
                                    <span data-i18n="Pages">Pages</span>
                                </a>
                                <div className="dropdown-menu p-4">
                                    <div className="row gy-4">
                                        <div className="col-12 col-lg">
                                            <div className="h6 d-flex align-items-center mb-2 mb-lg-3">
                                                <div className="avatar avatar-sm flex-shrink-0 me-2">
                                                    <span className="avatar-initial rounded bg-label-primary"><i className="ti ti-layout-grid" /></span>
                                                </div>
                                                <span className="ps-1">Other</span>
                                            </div>
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link mega-dropdown-link" href="pricing-page.html">
                                                        <i className="ti ti-circle me-1" />
                                                        <span data-i18n="Pricing">Pricing</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link mega-dropdown-link" href="payment-page.html">
                                                        <i className="ti ti-circle me-1" />
                                                        <span data-i18n="Payment">Payment</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link mega-dropdown-link" href="checkout-page.html">
                                                        <i className="ti ti-circle me-1" />
                                                        <span data-i18n="Checkout">Checkout</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link mega-dropdown-link" href="help-center-landing.html">
                                                        <i className="ti ti-circle me-1" />
                                                        <span data-i18n="Help Center">Help Center</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-12 col-lg">
                                            <div className="h6 d-flex align-items-center mb-2 mb-lg-3">
                                                <div className="avatar avatar-sm flex-shrink-0 me-2">
                                                    <span className="avatar-initial rounded bg-label-primary"><i className="ti ti-lock-open" /></span>
                                                </div>
                                                <span className="ps-1">Auth Demo</span>
                                            </div>
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    {/*  
                                                        <a className="nav-link mega-dropdown-link" href="../vertical-menu-template/auth-login-basic.html" target="_blank">
                                                            <i className="ti ti-circle me-1" />
                                                            Login (Basic)
                                                        </a>
                                                        */}
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link mega-dropdown-link" href="../vertical-menu-template/auth-login-cover.html" target="_blank">
                                                        <i className="ti ti-circle me-1" />
                                                        Login (Cover)
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link mega-dropdown-link" href="../vertical-menu-template/auth-register-basic.html" target="_blank">
                                                        <i className="ti ti-circle me-1" />
                                                        Register (Basic)
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link mega-dropdown-link" href="../vertical-menu-template/auth-register-cover.html" target="_blank">
                                                        <i className="ti ti-circle me-1" />
                                                        Register (Cover)
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link mega-dropdown-link" href="../vertical-menu-template/auth-register-multisteps.html" target="_blank">
                                                        <i className="ti ti-circle me-1" />
                                                        Register (Multi-steps)
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link mega-dropdown-link" href="../vertical-menu-template/auth-forgot-password-basic.html" target="_blank">
                                                        <i className="ti ti-circle me-1" />
                                                        Forgot Password (Basic)
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link mega-dropdown-link" href="../vertical-menu-template/auth-forgot-password-cover.html" target="_blank">
                                                        <i className="ti ti-circle me-1" />
                                                        Forgot Password (Cover)
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link mega-dropdown-link" href="../vertical-menu-template/auth-reset-password-basic.html" target="_blank">
                                                        <i className="ti ti-circle me-1" />
                                                        Reset Password (Basic)
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link mega-dropdown-link" href="../vertical-menu-template/auth-reset-password-cover.html" target="_blank">
                                                        <i className="ti ti-circle me-1" />
                                                        Reset Password (Cover)
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-12 col-lg">
                                            <div className="h6 d-flex align-items-center mb-2 mb-lg-3">
                                                <div className="avatar avatar-sm flex-shrink-0 me-2">
                                                    <span className="avatar-initial rounded bg-label-primary"><i className="ti ti-file-analytics" /></span>
                                                </div>
                                                <span className="ps-1">Other</span>
                                            </div>
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link mega-dropdown-link" href="../vertical-menu-template/pages-misc-error.html" target="_blank">
                                                        <i className="ti ti-circle me-1" />
                                                        Error
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link mega-dropdown-link" href="../vertical-menu-template/pages-misc-under-maintenance.html" target="_blank">
                                                        <i className="ti ti-circle me-1" />
                                                        Under Maintenance
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link mega-dropdown-link" href="../vertical-menu-template/pages-misc-comingsoon.html" target="_blank">
                                                        <i className="ti ti-circle me-1" />
                                                        Coming Soon
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link mega-dropdown-link" href="../vertical-menu-template/pages-misc-not-authorized.html" target="_blank">
                                                        <i className="ti ti-circle me-1" />
                                                        Not Authorized
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link mega-dropdown-link" href="../vertical-menu-template/auth-verify-email-basic.html" target="_blank">
                                                        <i className="ti ti-circle me-1" />
                                                        Verify Email (Basic)
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link mega-dropdown-link" href="../vertical-menu-template/auth-verify-email-cover.html" target="_blank">
                                                        <i className="ti ti-circle me-1" />
                                                        Verify Email (Cover)
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link mega-dropdown-link" href="../vertical-menu-template/auth-two-steps-basic.html" target="_blank">
                                                        <i className="ti ti-circle me-1" />
                                                        Two Steps (Basic)
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link mega-dropdown-link" href="../vertical-menu-template/auth-two-steps-cover.html" target="_blank">
                                                        <i className="ti ti-circle me-1" />
                                                        Two Steps (Cover)
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-4 d-none d-lg-block">
                                            <div className="bg-body nav-img-col p-2">
                                                <img src="" alt="nav item col image" className="w-100" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-medium" href="../vertical-menu-template/index.html" target="_blank">Admin</a>
                            </li>
                        </ul>
                    </div>
                    <div className="landing-menu-overlay d-lg-none" />
                    {/* Menu wrapper: End */}
                    {/* Toolbar: Start */}
                    <ul className="navbar-nav flex-row align-items-center ms-auto">
                        {/* Style Switcher */}
                        <li className="nav-item dropdown-style-switcher dropdown me-2 me-xl-0">
                            <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                                <i className="ti ti-sm" />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-styles">
                                <li>
                                    <a className="dropdown-item" href="javascript:void(0);" data-theme="light">
                                        <span className="align-middle"><i className="ti ti-sun me-2" />Light</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="javascript:void(0);" data-theme="dark">
                                        <span className="align-middle"><i className="ti ti-moon me-2" />Dark</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="javascript:void(0);" data-theme="system">
                                        <span className="align-middle"><i className="ti ti-device-desktop me-2" />System</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        {/* / Style Switcher*/}
                        {/* navbar button: Start */}
                        <li>
                            <a href="../vertical-menu-template/auth-login-cover.html" className="btn btn-primary" target="_blank"><span className="tf-icons ti ti-login scaleX-n1-rtl me-md-1" /><span className="d-none d-md-block">Login/Register</span></a>
                        </li>
                        {/* navbar button: End */}
                    </ul>
                    {/* Toolbar: End */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
