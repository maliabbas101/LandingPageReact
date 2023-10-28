import React from 'react'

const Features = () => {
    return (
        <div>
            <section id="landingFeatures" className="section-py landing-features">
                <div className="container">
                    <div className="text-center mb-3 pb-1">
                        <span className="badge bg-label-primary">Useful Features</span>
                    </div>
                    <h3 className="text-center mb-1">
                        <span className="section-title">Everything you need</span> to start your next project
                    </h3>
                    <p className="text-center mb-3 mb-md-5 pb-3">
                        Not just a set of tools, the package includes ready-to-deploy conceptual application.
                    </p>
                    <div className="features-icon-wrapper row gx-0 gy-4 g-sm-5">
                        <div className="col-lg-4 col-sm-6 text-center features-icon-box">
                            <div className="text-center mb-3">
                                <img src="../../assets/img/front-pages/icons/laptop.png" alt="laptop charging" />
                            </div>
                            <h5 className="mb-3">Quality Code</h5>
                            <p className="features-icon-description">
                                Code structure that all developers will easily understand and fall in love with.
                            </p>
                        </div>
                        <div className="col-lg-4 col-sm-6 text-center features-icon-box">
                            <div className="text-center mb-3">
                                <img src="../../assets/img/front-pages/icons/rocket.png" alt="transition up" />
                            </div>
                            <h5 className="mb-3">Continuous Updates</h5>
                            <p className="features-icon-description">
                                Free updates for the next 12 months, including new demos and features.
                            </p>
                        </div>
                        <div className="col-lg-4 col-sm-6 text-center features-icon-box">
                            <div className="text-center mb-3">
                                <img src="../../assets/img/front-pages/icons/paper.png" alt="edit" />
                            </div>
                            <h5 className="mb-3">Stater-Kit</h5>
                            <p className="features-icon-description">
                                Start your project quickly without having to remove unnecessary features.
                            </p>
                        </div>
                        <div className="col-lg-4 col-sm-6 text-center features-icon-box">
                            <div className="text-center mb-3">
                                <img src="../../assets/img/front-pages/icons/check.png" alt="3d select solid" />
                            </div>
                            <h5 className="mb-3">API Ready</h5>
                            <p className="features-icon-description">
                                Just change the endpoint and see your own data loaded within seconds.
                            </p>
                        </div>
                        <div className="col-lg-4 col-sm-6 text-center features-icon-box">
                            <div className="text-center mb-3">
                                <img src="../../assets/img/front-pages/icons/user.png" alt="lifebelt" />
                            </div>
                            <h5 className="mb-3">Excellent Support</h5>
                            <p className="features-icon-description">An easy-to-follow doc with lots of references and code examples.</p>
                        </div>
                        <div className="col-lg-4 col-sm-6 text-center features-icon-box">
                            <div className="text-center mb-3">
                                <img src="../../assets/img/front-pages/icons/keyboard.png" alt="google docs" />
                            </div>
                            <h5 className="mb-3">Well Documented</h5>
                            <p className="features-icon-description">An easy-to-follow doc with lots of references and code examples.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Features
