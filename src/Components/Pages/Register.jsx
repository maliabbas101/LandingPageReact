import React from 'react'
import logo from '../../../src/assets/img/pages/logo.png'
import { Link } from 'react-router-dom'
const Register = () => {
    return (
        <div className="container-xxl">
            <div className="authentication-wrapper authentication-basic container-p-y">
                <div className="authentication-inner py-4">
                    {/* Register Card */}
                    <div className="card">
                        <div className="card-body">
                            {/* Logo */}
                            <div className="app-brand justify-content-center mb-4 mt-2">
                                <Link to="/" className="app-brand-link gap-2">
                                    <span className="app-brand-logo demo">
                                        <img src={logo} width={250} height={52} alt="" />
                                    </span>
                                </Link>
                            </div>
                            <p className="mb-4">Make your medical notes management easy 🚀</p>
                            <form id="formAuthentication" className="mb-3" action="index.html" method="POST">
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="username" name="username" placeholder="Enter your username" autofocus />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="text" className="form-control" id="email" name="email" placeholder="Enter your email" />
                                </div>
                                <div className="mb-3 form-password-toggle">
                                    <label className="form-label" htmlFor="password">Password</label>
                                    <div className="input-group input-group-merge">
                                        <input type="password" id="password" className="form-control" name="password" placeholder="············" aria-describedby="password" />
                                        <span className="input-group-text cursor-pointer"><i className="ti ti-eye-off" /></span>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="terms-conditions" name="terms" />
                                        <label className="form-check-label" htmlFor="terms-conditions">
                                            I agree to
                                            <a href="javascript:void(0);">privacy policy &amp; terms</a>
                                        </label>
                                    </div>
                                </div>
                                <button className="btn btn-primary d-grid w-100">Sign up</button>
                            </form>
                            <p className="text-center">
                                <span>Already have an account?</span>
                                <Link to="/login">
                                    <span>Sign in instead</span>
                                </Link>
                            </p>
                        </div>
                    </div>
                    {/* Register Card */}
                </div>
            </div>
        </div>
    )
}

export default Register

