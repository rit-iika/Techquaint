import React, { Component } from 'react';
import Link from 'next/link';

class AboutUs extends Component {
    render() {
        return (
            <section className="about-section pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-image">
                                <img src="/images/about.png" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6"> 
                         <div className="about-content">
                                <span>About Us</span>
                                <p>kjdhjskad jkhcnsj sjkd</p>
                                 <h2>Focused On Actionable Insights</h2> 
                              
                                <p>Optimise your data assets. Make faster and better decisions. Work more efficiently and save money. 
                                    Find new sources of revenue.
                                    Capitalise on the untapped business intelligence you already own.</p>
                                <p>Optimise your data assets. Make faster and better decisions. Work more efficiently and save money. 
                                    Find new sources of revenue.
                                    Capitalise on the untapped business intelligence you already own.</p>

                                <ul className="about-list">
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Over 15 years of experience in data sciences
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Robust and agile talent
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Custom Service & Operation
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Advanced Advisory Team
                                    </li>
                                </ul>
                                
                                <Link href="/about-us">
                                    <a className="default-btn">
                                        Read More <span></span>
                                    </a>
                                </Link>
                            </div> 
                         </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutUs;