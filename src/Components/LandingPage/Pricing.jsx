import React from 'react'
// import paperPlane from '../../../src/assets/img/front-pages/icons/'
import paperPlane from '../../../src/assets/img/front-pages/icons/paper-airplane.png'
import pricingPlans from '../../../src/assets/img/front-pages/icons/pricing-plans-arrow.png'
import rocket from '../../../src/assets/img/front-pages/icons/shuttle-rocket.png'
const Pricing = () => {
    return (
        <div>
            <section id="landingPricing" className="section-py bg-body landing-pricing">
                <div className="container">
                    <div className="text-center mb-3 pb-1">
                        <span className="badge bg-label-primary">Pricing Plans</span>
                    </div>
                    <h3 className="text-center mb-1"><span className="section-title">Transparent and flexible</span> monthly plan</h3>
                    <div className="row gy-4 pt-lg-3">
                        <div className="col-xl-6 col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <div className="text-center">
                                        <img src={paperPlane} alt="paper airplane icon" className="mb-4 pb-2" />
                                        <h4 className="mb-1">Free</h4>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <span className="price-monthly h1 text-primary fw-bold mb-0">$0</span>
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
                                                Free trial for 14 days
                                            </h5>
                                        </li>
                                        <li>
                                            <h5>
                                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2"><i className="ti ti-check ti-xs" /></span>
                                                10 dictations per day
                                            </h5>
                                        </li>
                                        <li>
                                            <h5>
                                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2"><i className="ti ti-check ti-xs" /></span>
                                                All features included
                                            </h5>
                                        </li>
                                        <li>
                                            <h5>
                                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2"><i className="ti ti-check ti-xs" /></span>
                                                No credit card required
                                            </h5>
                                        </li>
                                    </ul>
                                    <div className="d-grid mt-4 pt-3">
                                        <a href="payment-page.html" className="btn btn-label-primary">Get Started</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <div className="text-center">
                                        <img src={rocket} alt="shuttle rocket icon" className="mb-4 pb-2" />
                                        <h4 className="mb-1">Premium</h4>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <span className="price-monthly h1 text-primary fw-bold mb-0">Coming soon</span>
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
                                                Unlimited dictations
                                            </h5>
                                        </li>
                                        <li>
                                            <h5>
                                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2"><i className="ti ti-check ti-xs" /></span>
                                                All features included
                                            </h5>
                                        </li>
                                        <li>
                                            <h5>
                                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2"><i className="ti ti-check ti-xs" /></span>
                                                Monthly payments
                                            </h5>
                                        </li>
                                        <li>
                                            <h5>
                                                <span className="badge badge-center rounded-pill bg-label-primary p-0 me-2"><i className="ti ti-check ti-xs" /></span>
                                                No long term obligations
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
