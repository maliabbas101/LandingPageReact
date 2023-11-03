import React from 'react'
import logo from '../../../src/assets/img/pages/logo.png'
const EmailVerification = () => {
    return (
        <div className="authentication-wrapper authentication-basic px-4">
            <div className="authentication-inner py-4">
                <div className="card">
                    <div className="card-body">
                        {/* Logo */}
                        <div className="app-brand justify-content-center mb-4 mt-2">
                            <a href="index.html" className="app-brand-link gap-2">
                                <span className="app-brand-logo demo">
                                <img src={logo} width={250} height={52} alt="" />
                                </span>
                            </a>
                        </div>
                        {/* /Logo */}
                        <h4 className="mb-1 pt-2">Verify your email ✉️</h4>
                        <p className="text-start mb-4">
                            Account activation link sent to your email address: hello@example.com Please follow the link inside to
                            continue.
                        </p>
                        <a className="btn btn-primary w-100 mb-3" href="index.html"> Skip for now </a>
                        <p className="text-center mb-0">
                            Didn't get the mail?
                            <a href="javascript:void(0);"> Resend </a>
                        </p>
                    </div>
                </div>
                {/* /Verify Email */}
            </div>
        </div>
    )
}

export default EmailVerification

