import React, { Component } from 'react'
import axios from 'axios';

export default class DonateForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            campaigns: [],
            name: '',
            email: '',
            phone: '',
            errors: {
                name: [''],
                email: [''],
                phone: ['']
            },
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/api/campaign`)
            .then(res => {
                const campaigns = res.data;
                this.setState({ campaigns });
            })
            .catch(error => console.log(error));
    }
    
    onChangeName = (e) => {
        this.setState({ name: e.target.value });
    }

    onChangeEmail = (e) => {
        this.setState({ email: e.target.value });
    }

    onChangePhone = (e) => {
        this.setState({ phone: e.target.value });
    }

    handleAddSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('email', this.state.email);
        formData.append('name', this.state.name);
        formData.append('phone', this.state.phone);

        axios({
            method: 'POST',
            data: formData,
            url: 'http://127.0.0.1:8000/api/donater',
        })
            .then(response => {
                if (response.status === 200) {
                    alert('Tham gia thanh cong');
                }
            });
        console.log();
    }

    render() {
        return (
            <div>
                {/*====== DONATE FORM START ======*/}
                <section id="ITRaisesIT" className="portfolio-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="section-title text-center pb-20">
                                    <h3 className="title"><b>JOIN WITH CAMPAIGNS</b></h3>
                                    <p>To receive the support code for students, please follow the instructions below.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                        {this.state.campaigns.map(campaign =>
                                <div className="col-lg-6">
                                    <div className="contact-two mt-50 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.2s">
                                        <h5>Campaign {campaign.id}</h5><br />
                                        <h3 className="contact-title">{campaign.name}</h3>
                                        <div className="text">
                                            {campaign.content}
                                        </div>
                                        <div>
                                            <ul className="contact-info">
                                                <h6>Benefits of joining</h6>
                                                <li className="fa fa-envelope" style={{ fontSize: '14px', color: '#18A0FB' }}></li><span className="benifit">Monthly transfer information update letter</span><br />
                                                <li className="fas fa-users" style={{ fontSize: '14px', color: '#18A0FB' }}></li><span className="benifit">Visiting PNV school and students</span><br />
                                                <li className="fa fa-certificate" style={{ fontSize: '14px', color: '#18A0FB' }}></li><span className="benifit">Certificate of participation in IT raising IT program</span>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div className="col-lg-6">
                                <div className="contact-form form-style-one mt-35 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.5s">
                                    <form id="contact-form" onSubmit={this.handleAddSubmit} encType="multipart/form-data" method="post">
                                        <div className="form-input mt-15">
                                            <h5>Name</h5>
                                            <div className="input-items default">
                                                <input type="text" placeholder="Name" name="name" onChange={this.onChangeName} />
                                                <i className="lni-user" />
                                            </div>
                                        </div>
                                        <div className="form-input mt-15">
                                            <h5>Email</h5>
                                            <div className="input-items default">
                                                <input type="email" placeholder="Email" name="email" onChange={this.onChangeEmail} />
                                                <i className="lni-envelope" />
                                            </div>
                                        </div>
                                        <div className="form-input mt-15">
                                            <h5>Phone</h5>
                                            <div className="input-items default">
                                                <input type="phone" placeholder="Phone" name="phone" onChange={this.onChangePhone} />
                                                <i className="fa fa-phone" />
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
