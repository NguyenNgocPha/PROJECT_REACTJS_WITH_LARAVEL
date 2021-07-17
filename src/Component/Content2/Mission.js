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
                                <center><h4>Our mission</h4></center><br />
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
                                <center><h4>Our objectives</h4></center> <br />
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
                </div>
        )
    }
}
