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
                                <h3 className="title"><b>JOIN OUR #ITRAISESIT CAMPAIGN</b></h3>
                            </div> 
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="contact-two mt-50 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.2s">
                                    <h5>Campaign #</h5><br/>
                                    <h3 className="contact-title">IT Raises IT</h3>
                                    <div className="text">
                                        IT raises IT is a crowdfunding program to join forces with PNV so that 
                                        the project of building technology for future information technology 
                                        engineers can continue in the future.This is a very difficult part.
                                    </div>
                                <div>
                                <ul className="contact-info">
                                    <h6>Benefits of joining</h6>
                                    <li className="fa fa-envelope" style={{fontSize: '14px', color: '#18A0FB'}}></li><span className="benifit">Monthly transfer information update letter</span><br/>
                                    <li className="fas fa-users" style={{fontSize: '14px', color: '#18A0FB'}}></li><span className="benifit">Visiting PNV school and students</span><br/>
                                    <li className="fa fa-certificate" style={{fontSize: '14px', color: '#18A0FB'}}></li><span className="benifit">Certificate of participation in IT raising IT program</span>
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
                                <p className="form-message" />
                                <div className="form-input rounded-buttons mt-20">
                                    <button type="submit" className="main-btn rounded-three">Join</button>
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
