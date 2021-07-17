import React, { Component } from 'react';
import axios from 'axios';

export default class Partners extends Component {
    state = {
        partners: []
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/api/partner`)
            .then(res => {
                const partners = res.data;
                this.setState({ partners });
            })
            .catch(error => console.log(error));
    }
    render() {
        return (
            <div>
                <section id="client" className="client-logo-area">
                    <div className="container">
                        <div className="row client-active">
                            {this.state.partners.map(partner =>
                                <div className="col-lg-3">
                                    <div className="single-client text-center">
                                        <img src={"assets/images/Partners/" + partner.image} className="imagepartners" alt="Logo" />
                                    </div>
                                </div>
                            )}
                        </div> {/* row */}
                    </div> {/* container */}
                </section>
            </div>
        )
    }
}
