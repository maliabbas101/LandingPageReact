import React from 'react'

const Pricing = () => {
    return (
        <div>
            <section id="landingPricing" className="section-py bg-body landing-pricing">
                <div className="container">
                    <div className="text-center mb-3 pb-1">
                        <span className="badge bg-label-primary">Pricing Plans</span>
                    </div>
                    <h3 className="text-center mb-1"><span className="section-title">Tailored pricing plans</span> designed for you</h3>
                    <p className="text-center mb-4 pb-3">
                        All plans include 40+ advanced tools and features to boost your product.<br />Choose the best plan to fit
                        your needs.
                    </p>
                    <div className="text-center mb-5">
                        <div className="position-relative d-inline-block pt-3 pt-md-0">
                            <label className="switch switch-primary me-0">
                                <span className="switch-label">Pay Monthly</span>
                                <input type="checkbox" className="switch-input price-duration-toggler" defaultChecked />
                                <span className="switch-toggle-slider">
                                    <span className="switch-on" />
                                    <span className="switch-off" />
                                </span>
                                <span className="switch-label">Pay Annual</span>
                            </label>
                            <div className="pricing-plans-item position-absolute d-flex">
                                <img src="../../assets/img/front-pages/icons/pricing-plans-arrow.png" alt="pricing plans arrow" className="scaleX-n1-rtl" />
                                <span className="fw-semibold mt-2 ms-1"> Save 25%</span>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-4 pt-lg-3">
                        {/* Basic Plan: Start */}
                        <div className="col-xl-4 col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <div className="text-center">
                                        <img src="../../assets/img/front-pages/icons/paper-airplane.png" alt="paper airplane icon" className="mb-4 pb-2" />
                                        <h4 className="mb-1">Basic</h4>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <span className="price-monthly h1 text-primary fw-bold mb-0">$19</span>
                                            <span className="price-yearly h1 text-primary fw-bold mb-0 d-none">$14</span>
                                            <sub className="h6 text-muted mb-0 ms-1">/mo</sub>
                                        </div>
                                        <div className="position-relative pt-2">
                                            <div className="price-yearly text-muted price-yearly-toggle d-none">$ 168 / year</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <ul className="list-unstyled">
                                        <li>
                                            <h5>
                                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2"><i className="ti ti-check ti-xs" /></span>
                                                Timeline
                                            </h5>
                                        </li>
                                        <li>
                                            <h5>
                                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2"><i className="ti ti-check ti-xs" /></span>
                                                Basic search
                                            </h5>
                                        </li>
                                        <li>
                                            <h5>
                                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2"><i className="ti ti-check ti-xs" /></span>
                                                Live chat widget
                                            </h5>
                                        </li>
                                        <li>
                                            <h5>
                                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2"><i className="ti ti-check ti-xs" /></span>
                                                Email marketing
                                            </h5>
                                        </li>
                                        <li>
                                            <h5>
                                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2"><i className="ti ti-check ti-xs" /></span>
                                                Custom Forms
                                            </h5>
                                        </li>
                                        <li>
                                            <h5>
                                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2"><i className="ti ti-check ti-xs" /></span>
                                                Traffic analytics
                                            </h5>
                                        </li>
                                        <li>
                                            <h5>
                                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2"><i className="ti ti-check ti-xs" /></span>
                                                Basic Support
                                            </h5>
                                        </li>
                                    </ul>
                                    <div className="d-grid mt-4 pt-3">
                                        <a href="payment-page.html" className="btn btn-label-primary">Get Started</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Basic Plan: End */}
                        {/* Favourite Plan: Start */}
                        <div className="col-xl-4 col-lg-6">
                            <div className="card border border-primary shadow-lg">
                                <div className="card-header">
                                    <div className="text-center">
                                        <img src="../../assets/img/front-pages/icons/plane.png" alt="plane icon" className="mb-4 pb-2" />
                                        <h4 className="mb-1">Team</h4>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <span className="price-monthly h1 text-primary fw-bold mb-0">$29</span>
                                            <span className="price-yearly h1 text-primary fw-bold mb-0 d-none">$22</span>
                                            <sub className="h6 text-muted mb-0 ms-1">/mo</sub>
                                        </div>
                                        <div className="position-relative pt-2">
                                            <div className="price-yearly text-muted price-yearly-toggle d-none">$ 264 / year</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <ul className="list-unstyled">
                                        <li>
                                            <h5>
                                                <span className="badge badge-center rounded-pill bg-primary p-0 me-2"><i className="ti ti-check ti-xs" /></span>
                                                Everything in basic
                                            </h5>
                                        </li>
                                        <li>
                                            <h5>
                                                <span className="badge badge-center rounded-pill bg-primary p-0 me-2"><i className="ti ti-check ti-xs" /></span>
                                                Timeline with database
                                            </h5>
                                        </li>
                                        <li>
                                            <h5>
                                                <span className="badge badge-center rounded-pill bg-primary p-0 me-2"><i className="ti ti-check ti-xs" /></span>
                                                Advanced search
                                            </h5>
                                        </li>
                                        <li>
                                            <h5>
                                                <span className="badge badge-center rounded-pill bg-primary p-0 me-2"><i className="ti ti-check ti-xs" /></span>
                                                Marketing automation
                                            </h5>
                                        </li>
                                        <li>
                                            <h5>
                                                <span className="badge badge-center rounded-pill bg-primary p-0 me-2"><i className="ti ti-check ti-xs" /></span>
                                                Advanced chatbot
                                            </h5>
                                        </li>
                                        <li>
                                            <h5>
                                                <span className="badge badge-center rounded-pill bg-primary p-0 me-2"><i className="ti ti-check ti-xs" /></span>
                                                Campaign management
                                            </h5>
                                        </li>
                                        <li>
                                            <h5>
                                                <span className="badge badge-center rounded-pill bg-primary p-0 me-2"><i className="ti ti-check ti-xs" /></span>
                                                Collaboration tools
                                            </h5>
                                        </li>
                                    </ul>
                                    <div className="d-grid mt-4 pt-3">
                                        <a href="payment-page.html" className="btn btn-primary">Get Started</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Favourite Plan: End */}
                        {/* Standard Plan: Start */}
                        <div className="col-xl-4 col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <div className="text-center">
                                        <img src="../../assets/img/front-pages/icons/shuttle-rocket.png" alt="shuttle rocket icon" className="mb-4 pb-2" />
                                        <h4 className="mb-1">Enterprise</h4>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <span className="price-monthly h1 text-primary fw-bold mb-0">$49</span>
                                            <span className="price-yearly h1 text-primary fw-bold mb-0 d-none">$37</span>
                                            <sub className="h6 text-muted mb-0 ms-1">/mo</sub>
                                        </div>
                                        <div className="position-relative pt-2">
                                            <div className="price-yearly text-muted price-yearly-toggle d-none">$ 444 / year</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <ul className="list-unstyled">
                                        <li>
                                            <h5>
                                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2"><i className="ti ti-check ti-xs" /></span>
                                                Everything in premium
                                            </h5>
                                        </li>
                                        <li>
                                            <h5>
                                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2"><i className="ti ti-check ti-xs" /></span>
                                                Timeline with database
                                            </h5>
                                        </li>
                                        <li>
                                            <h5>
                                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2"><i className="ti ti-check ti-xs" /></span>
                                                Fuzzy search
                                            </h5>
                                        </li>
                                        <li>
                                            <h5>
                                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2"><i className="ti ti-check ti-xs" /></span>
                                                A/B testing sanbox
                                            </h5>
                                        </li>
                                        <li>
                                            <h5>
                                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2"><i className="ti ti-check ti-xs" /></span>
                                                Custom permissions
                                            </h5>
                                        </li>
                                        <li>
                                            <h5>
                                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2"><i className="ti ti-check ti-xs" /></span>
                                                Social media automation
                                            </h5>
                                        </li>
                                        <li>
                                            <h5>
                                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2"><i className="ti ti-check ti-xs" /></span>
                                                Sales automation tools
                                            </h5>
                                        </li>
                                    </ul>
                                    <div className="d-grid mt-4 pt-3">
                                        <a href="payment-page.html" className="btn btn-label-primary">Get Started</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Standard Plan: End */}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Pricing
