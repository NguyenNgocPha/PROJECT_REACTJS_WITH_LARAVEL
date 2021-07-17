import React, { Component } from 'react';
import axios from 'axios';

export default class ITRaisesIT extends Component {
    state = {
        campaigns: []
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/api/campaign`)
            .then(res => {
                const campaigns = res.data;
                this.setState({ campaigns });
            })
            .catch(error => console.log(error));
    }
    render() {
        return (
            <section id="ITRaisesIT" className="testimonial-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center pb-50">
                                <h3 className="title">Join our #ITraisesIT campaign</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {this.state.campaigns.map(campaign =>
                            <div className="col-sm-6">
                                <h6>Campaign #{campaign.id}</h6><br />
                                <h3>{campaign.name}</h3><br />
                                <p>
                                    {campaign.content}
                                </p>
                            </div>
                        )}

                        {/*  style={{backgroundColor: '#bbb'}} */}
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm-1">
                                    <img src="assets/images/footer_icon/email.png" className="ItRaises" alt="Logo" />
                                </div>
                                <div className="col-sm-8">
                                    Monthly transfer information update letter
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-1">
                                    <img src="assets/images/footer_icon/user.png" className="ItRaises" alt="Logo" />
                                </div>
                                <div className="col-sm-8">
                                    Visiting PNV school and students
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-1">
                                    <img src="assets/images/footer_icon/certificate.png" className="ItRaises" alt="Logo" />
                                </div>
                                <div className="col-sm-">
                                    Certificate of participation in IT raising IT program
                                </div>
                            </div>
                            <div className="form-input rounded-buttons mt-20">
                                <button type="submit" className="ITRaisesIT-btn">Join the campaign</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}