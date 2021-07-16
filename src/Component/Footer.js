import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                {/*====== FOOTER START ======*/}
                <footer id="footer" className="footer-area">
                <div className="footer-widget">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-link">
                                <ul>
                                <li><a href="#"><img src="assets/images/logo/pn-logo.png" alt="" className="logo_footer" /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                        <div className="footer-link">
                            <h6 className="footer-title">OUR ACTIONS</h6>
                            <ul>
                            <li><a href="#">Cambodia</a></li>
                            <li><a href="#">Philipines</a></li>
                            <li><a href="#">Vietnam</a></li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                        <div className="footer-link">
                            <h6 className="footer-title">OUR PARTNERS </h6>
                            <ul>
                            <li><a href="#">They suppoert us</a></li>
                            <li><a href="#">Become a partner</a></li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                        <div className="footer-link">
                            <h6 className="footer-title">CONTACT US</h6>
                            <ul>
                            <li><a href="#">(239) 555-0108</a></li>
                            <li><a href="#">99 To Hien Thanh, Son Tra, Da Nang</a></li>
                            <li><a href="#"> info.vietnam@passerellesnumeriques.org</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                        <ul className="social text-center text-lg-right mt-10">
                            <li><a href="https://facebook.com/uideckHQ"><i className="lni-facebook-filled" /></a></li>
                            <li><a href="https://twitter.com/uideckHQ"><i className="lni-twitter-original" /></a></li>
                            <li><a href="https://instagram.com/uideckHQ"><i className="lni-instagram-original" /></a></li>
                            <li><a href="#"><i className="lni-linkedin-original" /></a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </footer>
                {/*====== FOOTER ENDS ======*/}

                <a href="#" className="back-to-top"><i className="lni-chevron-up" /></a>
            </div>
        )
    }
}
