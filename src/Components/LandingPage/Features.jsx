import React from 'react'
import mic from '../../../src/assets/img/front-pages/icons/mic.svg'
import check from '../../../src/assets/img/front-pages/icons/check-box.svg'
import calc from '../../../src/assets/img/front-pages/icons/calculator.svg'
import notes from '../../../src/assets/img/front-pages/icons/notepad.svg'
import secure from '../../../src/assets/img/front-pages/icons/shield.svg'
import ease from '../../../src/assets/img/front-pages/icons/happy.svg'
const Features = () => {
    return (
        <div>
            <section id="landingFeatures" className="section-py landing-features">
                <div className="container">
                    <div className="text-center mb-3 pb-1">
                        <span className="badge bg-label-primary">Useful Features</span>
                    </div>
                    <div className="features-icon-wrapper row gx-0 gy-4 g-sm-5">
                        <div className="col-lg-4 col-sm-6 text-center features-icon-box">
                            <div className="text-center mb-3">
                                <img src={mic} alt="Microphone" />
                            </div>
                            <h5 className="mb-3">Easy Dictation</h5>
                            <p className="features-icon-description">
                                Natural dictation input using mobile or desktop.                            </p>
                        </div>
                        <div className="col-lg-4 col-sm-6 text-center features-icon-box">
                            <div className="text-center mb-3">
                                <img src={check} alt="High Accuracy" />
                            </div>
                            <h5 className="mb-3">High Accuracy</h5>
                            <p className="features-icon-description">
                                High accuracy cloud speech to text recognitions.
                            </p>
                        </div>
                        <div className="col-lg-4 col-sm-6 text-center features-icon-box">
                            <div className="text-center mb-3">
                                <img src={calc} alt="AI Magic" />
                            </div>
                            <h5 className="mb-3">AI Magic</h5>
                            <p className="features-icon-description">
                                AI processing using specialized prompt engineering.                            </p>
                        </div>
                        <div className="col-lg-4 col-sm-6 text-center features-icon-box">
                            <div className="text-center mb-3">
                                <img src={notes} alt="3d select solid" />
                            </div>
                            <h5 className="mb-3">Beautiful Notes</h5>
                            <p className="features-icon-description">
                                Well structured notes with one-click copy function.                            </p>
                        </div>
                        <div className="col-lg-4 col-sm-6 text-center features-icon-box">
                            <div className="text-center mb-3">
                                <img src={secure} alt="Secure and Safe" />
                            </div>
                            <h5 className="mb-3">Secured</h5>
                            <p className="features-icon-description">Secure and Encrypted.</p>
                        </div>
                        <div className="col-lg-4 col-sm-6 text-center features-icon-box">
                            <div className="text-center mb-3">
                                <img src={ease} alt="Easy to use" />
                            </div>
                            <h5 className="mb-3">Easy to use</h5>
                            <p className="features-icon-description">An easy-to-follow interface.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Features
