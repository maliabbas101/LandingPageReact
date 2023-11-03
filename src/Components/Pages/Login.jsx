import React from 'react'
import logo from '../../../src/assets/img/pages/logo.png'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <div>
            <div className="container-xxl">
                <div className="authentication-wrapper authentication-basic container-p-y">
                    <div className="authentication-inner py-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="app-brand justify-content-center mb-4 mt-2">
                                    <Link to="/" className="app-brand-link gap-2">
                                        <span className="app-brand-logo demo">
                                            <img src={logo} width={250} height={52} alt="" />
                                        </span>
                                    </Link>
                                </div>
                                <h4 className="mb-1 pt-2">Welcome to AlcuraScribe 👋</h4>
                                <p className="mb-4">Please sign-in to your account</p>
                                <form id="formAuthentication" className="mb-3" action="index.html" method="POST">
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email or Username</label>
                                        <input type="text" className="form-control" id="email" name="email-username" placeholder="Enter your email or username" autofocus />
                                    </div>
                                    <div className="mb-3 form-password-toggle">
                                        <div className="d-flex justify-content-between">
                                            <label className="form-label" htmlFor="password">Password</label>
                                            <a href="auth-forgot-password-basic.html">
                                                <small>Forgot Password?</small>
                                            </a>
                                        </div>
                                        <div className="input-group input-group-merge">
                                            <input type="password" id="password" className="form-control" name="password" placeholder="············" aria-describedby="password" />
                                            <span className="input-group-text cursor-pointer"><i className="ti ti-eye-off" /></span>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="remember-me" />
                                            <label className="form-check-label" htmlFor="remember-me"> Remember Me </label>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <button className="btn btn-primary d-grid w-100" type="submit">Sign in</button>
                                    </div>
                                </form>
                                <p className="text-center">
                                    <span>New on our platform?</span>
                                    <Link to="/register">
                                        <span>Create an account</span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login






