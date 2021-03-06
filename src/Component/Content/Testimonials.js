import React, { Component } from 'react'

export default class Testimonials extends Component {
    render() {
        return (
            <div>
                <section id="testimonial" className="pricing-area">
                    <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                        <div className="section-title text-center pb-20">
                            <h3 className="title"><b>TESTIMONIALS</b></h3>
                        </div>
                        </div>
                    </div> {/* row */}
                    <div className="row justify-content-center">                
                        <div className="col-md-4">
                            <div className="pricing-style-one mt-40 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.2s">
                                <div className="test-image text-center">
                                    <img src="assets/images/Students/hoai.PNG" alt="" />
                                </div>
                                <div className="pricing-header text-center">
                                    <h5 className="sub-title">Ngo Thi My Hoai</h5>
                                    <p>Student, class 2022, PN Vietnam</p>
                                </div>
                                <div className="pricing-list">
                                    <p>
                                        As a girl, many people once questioned my choice to pursue an IT major. 
                                        They said I should choose other career paths, like becoming a teacher or 
                                        a tour guide, that I would never be as good as boys in IT. At that time, 
                                        I did not know how to answer. I just knew that I wanted to follow this dream 
                                        no matter what. I believed that if I tried, I could do it. I chose PN as 
                                        the place to nurture that dream.
                                    </p>   
                                </div>                            
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="pricing-style-one mt-40 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.5s">
                                <div className="test-image text-center">
                                    <img src="assets/images/My Teacher/Lucas.PNG" alt="" />
                                </div>
                                <div className="pricing-header text-center">
                                    <h5 className="sub-title">Lucas SINROD</h5>
                                    <p>IT and Training Manager, PN Vietnam</p>
                                </div>
                                <div className="pricing-list">
                                    <p>
                                        The IT world is full of machines and AI, and so can be characteristically cold. 
                                        Through PN I have rediscovered the human side of technology. With every smiling 
                                        face or curious question, PN students remind me why I learned to code. 
                                        Computers are fascinating! Tech progress is exciting! Here at our campus in Vietnam, 
                                        we are turning students who grew up on farms???some having never touched a computer in 
                                        their lives before joining us???into engineers. And we???re having fun doing it, why not?
                                    </p>
                                </div>                          
                            </div> 
                        </div>

                        <div className="col-md-4">
                            <div className="pricing-style-one mt-40 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.8s">
                                <div className="test-image text-center">
                                    <img src="assets/images/My Teacher/cuong.png" alt="" />
                                </div>
                                <div className="pricing-header text-center">
                                    <h5 className="sub-title">Nguyen Huu Cuong</h5>
                                    <p>PNV alumna, class 2019, Full stack Developer,<span className="price">mgm technology partners</span></p>
                                </div>
                                <div className="pricing-list">
                                    <p>
                                        We were the first batch in the expansion to a full three-year training program. 
                                        We had more time to learn the cutting-edge technologies that companies need.
                                        We developed our soft skills that helped us in our career paths. 
                                        Moreover, the Specialization module and the final internship boosted my employability. 
                                        Now, I???m proud to say that I can provide for myself and my family. I feel more 
                                        motivated to give back to the community through the PN Vietnam Alumni Association.
                                    </p>
                                </div>
                            </div> 
                        </div>
                    </div> 
                    </div> 
                </section>
            </div>
        )
    }
}
