import React, { Component } from 'react';
import axios from 'axios';

export default class Testimonials extends Component {
    state = {
        sharing: []
      }
    
      componentDidMount() {
        axios.get(`http://localhost:8000/api/sharing`)
          .then(res => {
            const sharing = res.data;
            this.setState({ sharing });
          })
          .catch(error => console.log(error));
      }
    render() {
        return (
            <div>
                <section id="testimonial" className="pricing-area">
                    <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                        <div className="section-title text-center pb-20">
                            <h3 className="title"><b>TESTIMONIALS</b></h3>
                        </div>
                        </div>
                    </div> {/* row */}
                    <div className="row justify-content-center"> 
                    { this.state.sharing.map(sharing =>            
                        <div key={sharing.id} className="col-md-4">
                            <div className="pricing-style-one mt-40 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.2s">
                                <div className="test-image text-center">
                                    <img src={"assets/images/Students/" + sharing.image} alt="" />
                                </div>
                                <div className="pricing-header text-center">
                                    <h5 className="sub-title">{sharing.name}</h5>
                                    <p>{sharing.job}</p>
                                </div>
                                <div className="pricing-list">
                                    <p>
                                       {sharing.share}
                                    </p>   
                                </div>                            
                            </div>
                        </div>
                    ) }
                       
                    </div> 
                    </div> 
                </section>
            </div>
        )
    }
}
