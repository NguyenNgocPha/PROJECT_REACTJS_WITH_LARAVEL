import React, { Component } from 'react';
import axios from 'axios';

export default class Managers extends Component {
    state = {
        leaders: []
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/api/leader`)
            .then(res => {
                const leaders = res.data;
                this.setState({ leaders });
            })
            .catch(error => console.log(error));
    }
    render() {
        return (
            <div>
                <section id="leadership" className="testimonial-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <div className="section-title text-center pb-20">
                                    <h3 className="title"><b>OUR LEADERSHIP</b></h3>
                                    <p className="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">  
                            <div className="col-lg-12">
                                <div className="row testimonial-active">
                                { this.state.leaders.map(leader => 
                                    <div key={leader.id} className="col-lg-4">
                                        <div className="single-testimonial mt-30 mb-30 text-center">
                                            <div className="testimonial-image">
                                                <img src={"assets/images/My Teacher/"+leader.image} alt="Author" className="coNgoc" />
                                            </div>
                                            <div className="testimonial-content">
                                                <h6 className="author-name">{leader.name}</h6>
                                                <span className="sub-title">{leader.job}</span>
                                            </div>
                                        </div>
                                    </div>
                                    )}
                                    
                                </div>
                            </div>
                    
                        </div>
                        
                    </div>
                </section>
            </div>
        )
    }
}
