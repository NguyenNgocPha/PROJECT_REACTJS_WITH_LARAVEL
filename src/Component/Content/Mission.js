import React, { Component } from 'react'

export default class Mission extends Component {
    render() {
        return (
            <div id="Mission">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title text-center pb-20">
                                <h3 className="title"><b> MISSION - OBJECTIVES</b></h3>
                            </div>
                        </div>
                    </div>
                    <div className="mission">
                        <div className="col-md-6">
                            <div className="single-testimonial mt-30 mb-30">
                                <center><h3><strong>Our mission</strong></h3></center><br />
                                <div>
                                    <p>Our mission is to provide education, technical and professional
                                    training in the digital sector to young underprivileged people 
                                    by leveraging their potential and willpower. We endeavour to truly 
                                    develop their employability which will allow them and their families 
                                    to escape poverty in a sustainable way, and contribute to the social 
                                    and economic development of their countries.</p>

                                    <p>Our beneficiaries are typically underprivileged or disadvantaged, 
                                    in extremely precarious situations, according to the criteria PN has 
                                    defined/specified for each of the countries in which it operates.</p>
                                </div>
                            </div>
                        </div>
                
                        <div className="col-md-6">
                            <div className="single-testimonial mt-30 mb-30">
                                <center><h3><strong>Our objectives</strong></h3></center> <br />
                                <div>
                                    <p>PN’s objective is that at least 90% of the students enrolled 
                                    in our programs can escape poverty, be professionally more successful
                                    relatively to the national average, and take advantage of a ‘Gateway for Life’.</p>

                                    <p>PN’s additional objective is to reduce inequality between genders. 
                                    Therefore, PN strives to enrol a ratio of at least 50% girls 
                                    (or a maximum of two thirds) at each of our centers.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Value */}


                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="trust">
                                            <img src="assets/images/Value_PNV/icon-trust.png" alt="Avatar" style={{width: '400px'}} />
                                        </div>                            
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-2">
                                        <div className="approach">
                                            <img src="assets/images/Value_PNV/approach-icon.png" alt="Avatar" style={{width: '400px'}} />
                                        </div>                            
                                    </div>

                                    <div className="col-md-2">
                                        <div className="solidarity">
                                            <img src="assets/images/Value_PNV/solidarity-icon.png" alt="Avatar" style={{width: '400px'}} />
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="responsibility">
                                            <img src="assets/images/Value_PNV/responsibility-icon.png" alt="Avatar" style={{width: '400px'}} />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="respect">
                                            <img src="assets/images/Value_PNV/Respect.png" alt="Avatar" style={{width: '400px'}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">           
                                <ul className="five-value">
                                    <li><h2 className="trust-text">Trust</h2></li>
                                    <li><h2 >Responsibility</h2></li>
                                    <li><h2 className="solidarity-text">Solidarity</h2></li>
                                    <li><h2>Respect</h2></li>
                                    <li><h2 className="approach-text">Demanding approach</h2></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
        )
    }
}
