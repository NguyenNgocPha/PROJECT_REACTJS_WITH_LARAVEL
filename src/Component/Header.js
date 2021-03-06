import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                {/*====== PRELOADER PART START ======*/}
                <div className="preloader">
                <div className="loader">
                    <div className="ytp-spinner">
                    <div className="ytp-spinner-container">
                        <div className="ytp-spinner-rotator">
                        <div className="ytp-spinner-left">
                            <div className="ytp-spinner-circle" />
                        </div>
                        <div className="ytp-spinner-right">
                            <div className="ytp-spinner-circle" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/*====== PRELOADER PART ENDS ======*/}

                {/*====== NAVBAR PART START ======*/}
                <section className="header-area">

                    <div className="navbar-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                <nav className="navbar navbar-expand-lg">
                                    <a className="navbar-brand" href="#">
                                    <img src="assets/images/logo/logo-en.png" alt="Logo" className="logo" />
                                    </a>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarEight" aria-controls="navbarEight" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="toggler-icon" />
                                    <span className="toggler-icon" />
                                    <span className="toggler-icon" />
                                    </button>
                                    <div className="collapse navbar-collapse sub-menu-bar" id="navbarEight">
                                    <ul className="navbar-nav ml-auto">
                                        <li>
                                            <a href="#"><img src="assets/images/flag/Vietnam.png" alt="Logo" className="flag" /></a>
                                        </li>
                                        <li >
                                            <a href="#"><img src="assets/images/flag/American.png" alt="Logo" className="flag" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><img src="assets/images/flag/English.png" alt="Logo" className="flag" /></a>
                                        </li>

                                        {/* <li className="nav-item">
                                        <a className="page-scroll" href="#ITRaisesIT">ITRaisesIT</a>
                                        </li>
                                        <li className="nav-item">
                                        <a className="page-scroll" href="#testimonial">Testimonials</a>
                                        </li>
                                        <li className="nav-item">
                                        <a className="page-scroll" href="#leadership">Leadership</a>
                                        </li>
                                        <li className="nav-item">
                                        <a className="page-scroll" href="#client">Partners</a>
                                        </li> */}
                                    </ul>
                                    </div>
                                    <div className="navbar-btn d-none mt-15 d-lg-inline-block">
                                    <a className="menu-bar" href="#side-menu-right"><i className="lni-menu" /></a>
                                    </div>
                                </nav>
                                </div>
                            </div>
                        </div> 
                    </div> 

                    {/*============ SLIDER START ===========*/}
                    <div id="home" className="slider-area">
                        <div className="bd-example">
                        <div id="carouselOne" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                            <li data-target="#carouselOne" data-slide-to={0} className="active" />
                            <li data-target="#carouselOne" data-slide-to={1} />
                            <li data-target="#carouselOne" data-slide-to={2} />
                            </ol>
                            <div className="carousel-inner">
                            <div className="carousel-item bg_cover active" style={{backgroundImage: 'url(assets/images/Slide/slide1.jpg)'}}>
                                <div className="carousel-caption">
                                <div className="container">
                                    <div className="row justify-content-center">
                                    <div className="col-xl-6 col-lg-7 col-sm-10 pd-50">
                                        <ul className="carousel-btn rounded-buttons">
                                        <li><a className="main-btn rounded-three" href="#">DONATE</a></li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="carousel-item bg_cover" style={{backgroundImage: 'url(assets/images/Slide/student_TN.JPG)'}}>
                                <div className="carousel-caption">
                                <div className="container">
                                    <div className="row justify-content-center">
                                    <div className="col-xl-6 col-lg-7 col-sm-10 pd-50">
                                        <ul className="carousel-btn rounded-buttons">
                                        <li><a className="main-btn rounded-three" href="#">DONATE</a></li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="carousel-item bg_cover" style={{backgroundImage: 'url(assets/images/Slide/learningLo.JPG)'}}>
                                <div className="carousel-caption">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-xl-6 col-lg-7 col-sm-10 pd-50">
                                            <ul className="carousel-btn rounded-buttons">
                                            <li><a className="main-btn rounded-three" href="#">DONATE</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselOne" role="button" data-slide="prev">
                            <i className="fa fa-angle-left" />
                            </a>
                            <a className="carousel-control-next" href="#carouselOne" role="button" data-slide="next">
                            <i className="fa fa-angle-right" />
                            </a>
                        </div>
                        </div>
                    </div>
                    {/*=========== SLIDER END ==================  */}
                    <div className="d-block d-md-flex intro-engage">
                        <div className="">
                            <h2>Equality between genders</h2>
                            <p>PN strives to enrol a ratio of at least 50% girls (or a maximum of two thirds) at each of our centers.</p>
                        </div>
                        <div className="">
                            <h2>No Poverty</h2>
                            <p>At least 90% of the students enrolled in our programs can escape poverty, be
                            professionally more successful relatively to the national average, and take advantage of a ???Gateway for Life???.</p>
                        </div>
                        <div className="">
                            <h2>Free Education</h2>
                            <p>Our students stay together in Danang for 3 years for their studies, with all academic and daily expenses 
                            covered by PNV. </p>
                        </div>
                    </div>
                </section>
                {/*====== NAVBAR PART ENDS ======*/}

                {/*====== SAIDEBAR PART START ======*/}
                <div className="sidebar-right">
                <div className="sidebar-close">
                    <a className="close" href="#close"><i className="lni-close" /></a>
                </div>
                <div className="sidebar-content">
                    <div className="sidebar-logo text-center">
                    <a href="#"><img src="assets/images/logo-alt.png" alt="Logo" /></a>
                    </div> 
                    <div className="sidebar-menu">
                    <ul>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">SERVICES</a></li>
                        <li><a href="#">RESOURCES</a></li>
                        <li><a href="#">CONTACT</a></li>
                    </ul>
                    </div>
                    <div className="sidebar-social d-flex align-items-center justify-content-center">
                    <span>FOLLOW US</span>
                    <ul>
                        <li><a href="#"><i className="lni-twitter-original" /></a></li>
                        <li><a href="#"><i className="lni-facebook-filled" /></a></li>
                    </ul>
                    </div>
                </div> 
                </div>
                <div className="overlay-right" />
            </div>
        )
    }
}
