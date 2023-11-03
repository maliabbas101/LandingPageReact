import React from 'react'
import customerService from '../../../src/assets/img/front-pages/icons/Contact Us.svg'
const ContactUs = () => {
    return (
        <div>
            <section id="landingContact" className="section-py bg-body landing-contact">
                <div className="container">
                    <div className="text-center mb-3 pb-1">
                        <span className="badge bg-label-primary">Contact US</span>
                    </div>
                    <h3 className="text-center mb-1"><span className="section-title">Let's work</span> together</h3>
                    <p className="text-center mb-4 mb-lg-5 pb-md-3">Any question or remark? just write us a message</p>
                    <div className="row gy-4">
                        <div className="col-lg-5">
                            <div className="contact-img-box position-relative border p-2 h-100">
                                <img src={customerService} alt="contact customer service" className="contact-img w-100 scaleX-n1-rtl" />
                                <div className="pt-3 px-4 pb-1">
                                    <div className="row gy-3 gx-md-4">
                                        <div className="col-md-12 col-lg-12 col-xl-12">
                                            <div className="d-flex justify-content-center mt-2">
                                                <div className="badge bg-label-primary rounded p-2 me-2"><i className="ti ti-mail ti-sm" /></div>
                                                <div>
                                                    <p className="mb-0">Email</p>
                                                    <h5 className="mb-0">
                                                        <a href="support@alcurascribe.com" className="text-heading">support@alcurascribe.com</a>
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="mb-1">Send a message</h4>
                                    <p className="mb-4">
                                        If you want to discuss anything related to your account,<br className="d-none d-lg-block" />
                                        or our product, send us a message.
                                    </p>
                                    <form>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <label className="form-label" htmlFor="contact-form-fullname">Full Name</label>
                                                <input type="text" className="form-control" id="contact-form-fullname" placeholder="john" />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label" htmlFor="contact-form-email">Email</label>
                                                <input type="text" id="contact-form-email" className="form-control" placeholder="johndoe@gmail.com" />
                                            </div>
                                            <div className="col-12">
                                                <label className="form-label" htmlFor="contact-form-message">Message</label>
                                                <textarea id="contact-form-message" className="form-control" rows={8} placeholder="Write a message" defaultValue={""} />
                                            </div>
                                            <div className="col-12">
                                                <button type="submit" className="btn btn-primary">Send inquiry</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactUs
