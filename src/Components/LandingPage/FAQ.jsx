import React from 'react'

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
                                <img src="../../assets/img/front-pages/landing-page/faq-boy-with-logos.png" alt="faq boy with logos" className="faq-image" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="accordion" id="accordionExample">
                                <div className="card accordion-item active">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button type="button" className="accordion-button" data-bs-toggle="collapse" data-bs-target="#accordionOne" aria-expanded="true" aria-controls="accordionOne">
                                            Do you charge for each upgrade?
                                        </button>
                                    </h2>
                                    <div id="accordionOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Lemon drops chocolate cake gummies carrot cake chupa chups muffin topping. Sesame snaps icing
                                            marzipan gummi bears macaroon dragée danish caramels powder. Bear claw dragée pastry topping
                                            soufflé. Wafer gummi bears marshmallow pastry pie.
                                        </div>
                                    </div>
                                </div>
                                <div className="card accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#accordionTwo" aria-expanded="false" aria-controls="accordionTwo">
                                            Do I need to purchase a license for each website?
                                        </button>
                                    </h2>
                                    <div id="accordionTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Dessert ice cream donut oat cake jelly-o pie sugar plum cheesecake. Bear claw dragée oat cake
                                            dragée ice cream halvah tootsie roll. Danish cake oat cake pie macaroon tart donut gummies. Jelly
                                            beans candy canes carrot cake. Fruitcake chocolate chupa chups.
                                        </div>
                                    </div>
                                </div>
                                <div className="card accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#accordionThree" aria-expanded="false" aria-controls="accordionThree">
                                            What is regular license?
                                        </button>
                                    </h2>
                                    <div id="accordionThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Regular license can be used for end products that do not charge users for access or service(access
                                            is free and there will be no monthly subscription fee). Single regular license can be used for
                                            single end product and end product can be used by you or your client. If you want to sell end
                                            product to multiple clients then you will need to purchase separate license for each client. The
                                            same rule applies if you want to use the same end product on multiple domains(unique setup). For
                                            more info on regular license you can check official description.
                                        </div>
                                    </div>
                                </div>
                                <div className="card accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#accordionFour" aria-expanded="false" aria-controls="accordionFour">
                                            What is extended license?
                                        </button>
                                    </h2>
                                    <div id="accordionFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis et aliquid quaerat possimus maxime!
                                            Mollitia reprehenderit neque repellat deleniti delectus architecto dolorum maxime, blanditiis
                                            earum ea, incidunt quam possimus cumque.
                                        </div>
                                    </div>
                                </div>
                                <div className="card accordion-item">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#accordionFive" aria-expanded="false" aria-controls="accordionFive">
                                            Which license is applicable for SASS application?
                                        </button>
                                    </h2>
                                    <div id="accordionFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi molestias exercitationem ab cum
                                            nemo facere voluptates veritatis quia, eveniet veniam at et repudiandae mollitia ipsam quasi
                                            labore enim architecto non!
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
