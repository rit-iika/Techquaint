import React, { Component } from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';

class MainBanner extends Component {
    render() {
        return (
            <div className="main-banner-two">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="main-banner-content">
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                        <h1>Intellegiance</h1>
                                      
       
<p>Making all your organization’s processes truly data-driven with an understanding of how your data flows across your systems is now easier than ever.<br></br> 
<br></br>Let us show you how its done !
    </p>

                                        <div className="banner-btn">

                                            <Link href="/about-us">
                                                <a className="default-btn-one">
                                                Why Intellegiance ?
                                                   
                                                    <span></span>
                                                </a>
                                            </Link>

                                            <Link href="/about-us">
                                                <a className="default-btn" href="/contact">
                                                Try intellegiance for free
                                                    <span></span>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="banner-image"> 
                                        {/* Shape images */}
                                        <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                            <img src="/images/home-two/home-two-shape1.png" alt="image" />
                                        </ScrollAnimation>

                                        <ScrollAnimation animateIn="fadeInLeft" delay={50} animateOnce={true}>
                                            <img src="/images/home-two/home-two-shape2.png" alt="image" />
                                        </ScrollAnimation>

                                        <ScrollAnimation animateIn="fadeInRight" delay={50} animateOnce={true}>
                                            <img src="/images/home-two/home-two-shape3.png" alt="image" />
                                        </ScrollAnimation>

                                        <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                            <img src="/images/home-two/home-two-shape4.png" alt="image" />
                                        </ScrollAnimation>

                                        <ScrollAnimation animateIn="zoomIn" delay={50} animateOnce={true}>
                                            <img src="/images/home-two/home-two-shape5.png" alt="image" />
                                        </ScrollAnimation>

                                        {/* Main image */}
                                        <ScrollAnimation animateIn="zoomIn" delay={50} animateOnce={true}>
                                            <img src="/images/home-two/main-image2.png" alt="image" />
                                        </ScrollAnimation>
                                    </div>

                                    <div className="circle-img">
                                        <img src="/images/home-two/home-two-shape6.png" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="creative-shape">
                    <img src="/images/main-banner-shape/home-shape-2.png" alt="main-image" />
                </div>
                <div className="shape-dot">
                    <img src="/images/main-banner-shape/main-banner-dot.png" alt="main-image" />
                </div>
            </div>
        );
    }
}

export default MainBanner;