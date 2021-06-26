import React, { Component } from 'react'

export default class DonateForm extends Component {
    render() {
        return (
            <div>
                {/*====== DONATE FORM START ======*/}
                    <section id="contact" className="portfolio-area">
                        <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                            <div className="section-title text-center pb-20">
                                <h3 className="title"><b>DONATE</b></h3>
                                <p>To receive the support code for students, please follow the instructions below.</p>
                            </div> 
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                            <div className="contact-two mt-50 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.2s">
                                <h4 className="contact-title">How you can become our sponsor</h4>
                                <div className="text"><b>Step 1:</b> Fill your information in the box below to receive an email with a sponsorship code (sent within 24 hours)</div>
                                <div className="text"><b>Step 2:</b> After receiving the code, please kindly transfer the donation to PN Vietnam bank account with the syntax: ITraisesIT Support code (Ex: ITraisesIT DNTT001):</div>
                                <div>
                                <ul className="contact-info">
                                    <h6>TECHCOMBANK</h6>
                                    <li>Account’s name: PASSERELLES NUMERIQUES(PN)</li>
                                    <li>Account’s number: 19134608156019</li>
                                    <li>Swift code: VTCBVNVX</li>
                                    <li>Your donation transaction will be updated here.</li>
                                </ul>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-6">
                            <div className="contact-form form-style-one mt-35 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.5s">
                                <form id="contact-form" action="assets/contact.php" method="post">
                                <div className="form-input mt-15">
                                    <label>Name</label>
                                    <div className="input-items default">
                                    <input type="text" placeholder="Name" name="name" />
                                    <i className="lni-user" />
                                    </div>
                                </div>
                                <div className="form-input mt-15">
                                    <label>Email</label>
                                    <div className="input-items default">
                                    <input type="email" placeholder="Email" name="email" />
                                    <i className="lni-envelope" />
                                    </div>
                                </div>
                                <div className="form-input mt-15">
                                    <label>Phone</label>
                                    <div className="input-items default">
                                    <input type="phone" placeholder="Phone" name="phone" />
                                    <i className="fa fa-phone" />
                                    </div>
                                </div>
                                <div className="form-input mt-15">
                                    <label>Donation type</label>
                                    <div className="input-items default">
                                        <select className="optiontype" >
                                            <option value="Once time">Once time</option>
                                            <option value="Monthly">Monthly</option>
                                        </select>
                                        <i className="fas fa-hand-holding-usd" />
                                    </div>
                                </div>
                                <p className="form-message" />
                                <div className="form-input rounded-buttons mt-20">
                                    <button type="submit" className="main-btn rounded-three">Submit</button>
                                </div> 
                                </form>
                            </div> 
                            </div>
                        </div> 
                        </div> 
                    </section>
                    {/*====== DONATE FORM ENDS ======*/}
            </div>
        )
    }
}
