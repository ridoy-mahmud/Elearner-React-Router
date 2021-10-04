import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="py-5 contact-style">
            <section>
                <div className="container">
                    <div className="section-title">
                        <h2>Contact</h2>
                        <hr className="w-25 mx-auto" />
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <div className="info">
                                <div className="address">
                                    <h4>Location:</h4>
                                    <p>A108 Adam Street, New York, NY 535022</p>
                                </div>

                                <div className="email">
                                    <h4>Email:</h4>
                                    <p>info@example.com</p>
                                </div>

                                <div className="phone">
                                    <h4>Call:</h4>
                                    <p>+1 5589 55488 55s</p>
                                </div>

                            </div>

                        </div>

                        <div className="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left">

                            <form action="#" method="post" role="form">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required></input>
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required></input>
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required></input>
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                </div>
                                <div className="mt-3 d-flex"><button className="btn btn-danger" type="submit">Send Message</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;