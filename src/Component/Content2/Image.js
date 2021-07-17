import React, { Component } from 'react'

export default class Image extends Component {
    render() {
        return (
            <div>
                <section className="testimonial-area">
                    <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-3">
                            <div className="panel panel-primary">
                                <img src="assets/images/Students/thamnha.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-sm-3"> 
                            <div className="panel panel-primary">
                                <img src="assets/images/Students/nguyet23.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-sm-3"> 
                            <div className="panel panel-primary">
                                <img src="assets/images/Students/mom.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                </section>
            </div>
        )
    }
}
