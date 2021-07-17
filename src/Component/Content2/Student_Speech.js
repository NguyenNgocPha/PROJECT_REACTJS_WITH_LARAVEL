import React, { Component } from 'react';
import axios from "axios";

export default class Student_Speech extends Component {
    state = {
        discovers: []
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/api/discover`)
            .then(res => {
                const discovers = res.data;
                this.setState({ discovers });
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                <section id="portfolio" className="portfolio-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="section-title text-center pb-20">
                                    <h3 className="title"><b>DISCOVER</b></h3>
                                    <p className="text">Launched in 2010 in Danang, Passerelles numériques Vietnam (PNV) offers full
                                        scholarships to our 3-year, high-quality IT training program in: Web Development, Mobile Development
                                        and Automated Testing. Each of these specializations is taught holistically, including both technical
                                        and soft skills alongside a robust personal development program.</p>
                                </div> {/* row */}
                            </div>
                        </div> {/* row */}
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="portfolio-menu pt-30 text-center">
                                    <ul>
                                        <li data-filter="*" className="active">All</li>
                                        <li data-filter=".branding-3">Image</li>
                                        <li data-filter=".planning-3">Information 1</li>
                                        <li data-filter=".marketing-3">Information 2</li>
                                        <li data-filter=".research-3">Content</li>
                                    </ul>
                                </div> {/* portfolio menu */}
                            </div>
                        </div> {/* row */}
                        { this.state.discovers.map(discover => 
                        <div className="row grid">
                            <div className="col-lg-6 col-sm-8 branding-3 planning-3">
                                <div className="single-portfolio mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.2s">
                                    <div className="portfolio-image">
                                        <img src="assets/images/Students/huou.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-sm-5 marketing-3 research-3">
                                <div className="single-portfolio mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.4s">
                                    <div className="portfolio-image">
                                        <h6>“{discover.title}”</h6><br />
                                        <p>{discover.day}</p><br />
                                        <p>{discover.content}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )}
                        {/* row */}
                    </div> {/* container */}
                </section>
            </div>
        )
    }
}
