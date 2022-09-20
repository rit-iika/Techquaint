import React, { Component } from "react";
import Link from "next/link";

class ServicesContent extends Component {
  render() {
    return (
      <section className="services-section pt-100 pb-70">
        <div className="container">
          <div className="section-title">
           
            <h2>Explore Our Data Services</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-big-data"></i>
                </div>

                <h3>Web Scraping </h3>
                <p>
                  A full-service provider of data - you don't need software,
                  hardware, scraping tools or scraping skills - we do it all for
                  you - simple.<br></br>
                  Web scraping has become a crucial part of the big data
                  industry since it gives access to information which can be
                  used by business organizations.
                </p>

                <Link href="/service-details">
                  <a className="service-btn">
                    Read More
                    <i className="flaticon-right"></i>
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-data-analytics"></i>
                </div>

                <h3>Data Analytics</h3>
                <p>
                  The rich variety of data that enterprises generate contains
                  valuable insights, and data analytics is the way to unlock
                  them. Data analytics can help an organization with everything
                  from personalizing a marketing pitch for an individual
                  customer to identifying and mitigating risks to its business.{" "}
                </p>

                <Link href="/service-details">
                  <a className="service-btn">
                    Read More
                    <i className="flaticon-right"></i>
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-document"></i>
                </div>
                <h3>Consultancy Services</h3>
                <p>
                  Our business consultancy services are highly efficient, and we have been helping the organizations from multiple industry over many years. 


                  
                </p>

                <Link href="/service-details">
                  <a className="service-btn">
                    Read More
                    <i className="flaticon-right"></i>
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

export default ServicesContent;
