import React from 'react'
import howItWorks from '../../../src/assets/videos/HowItWorks.mp4'
const HowItWorks = () => {
    return (
        <section id="howItWorks" className="section-py bg-body how-it-works">
            <div className="container">
                <div className="text-center mb-3 pb-1">
                    <span className="badge bg-label-primary">How it works</span>
                </div>
                <h3 className="text-center mb-1">Ease of <span className="section-title">use</span></h3>
                <p className="text-center mb-5 pb-3">This is how easy this application can be used.</p>
                <div className="row gy-5">
                    <div className="col-lg-12">
                        <div className="text-center">
                            <video controls width="75%">
                                <source src={howItWorks} type="video/mp4"
                                />
                                Sorry, your browser doesn't support videos.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
