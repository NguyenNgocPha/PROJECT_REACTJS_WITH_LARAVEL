import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <>
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
        {/*Start Page loader */}
        {/* <div id="pageloader">
          <div className="loader">
            <img src="assets/images/progress.gif" alt="loader" />
          </div>
        </div> */}
        {/*End Page loader */}

        {/*====== PRELOADER PART ENDS ======*/}

        {/*Start Navigation*/}
        <header id="header" >
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                {/*Start Logo */}
                <div className="logo-nav">
                  <a href="index.html">
                    <img
                      src="/assets/images/logo/logo-en.png"
                      alt="Company logo"
                      className="logo"
                    />
                  </a>
                </div>
                {/*End Logo */}
                {/* end main-menu */}
              </div>
            </div>
          </div>
        </header>
        {/*End Navigation*/}
        {/* Start Slider  */}
        <section id="home" className="home">
          <div className="slider-overlay" />
          <div className="flexslider">
            <ul className="slides scroll">
              <li className="first">
                <div className="slider-text-wrapper">
                  <div className="container">
                    <div className="big">Free Responsive Template </div>
                    <div className="small">Are you ready to buy this theme</div>
                    <a href="#works" className="middle btn btn-white">
                      VIEW PORTFOLIO
                    </a>
                  </div>
                </div>
                <img src="/assets/images/Slide/slide1.jpg" alt="hhh"/>
              </li>
              <li className="secondary">
                <div className="slider-text-wrapper">
                  <div className="container">
                    <div className="big">Free Responsive Template </div>
                    <div className="small">Are you ready to buy this theme</div>
                    <a href="#works" className=" middle btn btn-white">
                      VIEW PORTFOLIO
                    </a>
                  </div>
                </div>
                <img src="/assets/images/Slide/slide2.jpg" alt="hh" />
              </li>
              <li className="third">
                <div className="slider-text-wrapper">
                  <div className="container">
                    <div className="big">Free Responsive Template </div>
                    <div className="small">Are you ready to buy this theme</div>
                    <a href="#works" className="middle btn btn-white">
                      VIEW PORTFOLIO
                    </a>
                  </div>
                </div>
                <img src="/assets/images/Slide/slide4.jpg" alt="hhhh" />
              </li>
            </ul>
          </div>
        </section>
        {/* End Slider  */}
      </>
    );
  }
}
