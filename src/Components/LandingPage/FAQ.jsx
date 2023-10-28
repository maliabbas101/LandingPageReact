import React from 'react'
import logoBoy from '../../../src/assets/img/front-pages/landing-page/faq-boy-with-logos.png'
const FAQ = () => {
    return (
        <div>
            <section id="landingFAQ" className="section-py bg-body landing-faq">
                <div className="container">
                    <div className="text-center mb-3 pb-1">
                        <span className="badge bg-label-primary">FAQ</span>
                    </div>
                    <h3 className="text-center mb-1">Frequently asked <span className="section-title">questions</span></h3>
                    <p className="text-center mb-5 pb-3">Browse through these FAQs to find answers to commonly asked questions.</p>
                    <div className="row gy-5">
                        <div className="col-lg-5">
                            <div className="text-center">
                                <img src={logoBoy} alt="faq boy with logos" className="faq-image" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="accordion" id="accordionExample">
                                <div className="card accordion-item active">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button type="button" className="accordion-button" data-bs-toggle="collapse" data-bs-target="#accordionOne" aria-expanded="true" aria-controls="accordionOne">
                                            How do I dictate my notes?
                                        </button>
                                    </h2>
                                    <div id="accordionOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            You can dictate naturally without worrying about punctuations or periods. Our software will take care of all the appropriate punctuations and formatting.
                                        </div>
                                    </div>
                                </div>
                                <div className="card accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#accordionTwo" aria-expanded="false" aria-controls="accordionTwo">
                                            Is your website secure?
                                        </button>
                                    </h2>
                                    <div id="accordionTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Yes, we use secure connection with encryption of data at rest as well as in transit.
                                        </div>
                                    </div>
                                </div>
                                <div className="card accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#accordionThree" aria-expanded="false" aria-controls="accordionThree">
                                            How do I transfer my notes to my EMR?
                                        </button>
                                    </h2>
                                    <div id="accordionThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            We provide a one-click copy function which will help you easily copy and paste your formatted note to EMR of your choice
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FAQ
