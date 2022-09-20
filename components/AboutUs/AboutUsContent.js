import React, { Component } from "react";
import Link from "next/link";

class AboutUsContent extends Component {
  render() {
    return (
      <section className="about-section ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-image">
                <img src="/images/about.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                {/* <span>About Us</span> */}
                <h2>Why Choose Us !</h2>

                <h5>
                  We are one of the Top data scraping companies in the country
                  providing custom data gathering and data analysis solutions to
                  customers ranging from startups to Fortune 50 companies
                </h5>
                <br></br>
                <p id="text">
                  Optimise your data assets. Make faster and better decisions.
                  Work more efficiently and save money. Capitalise on the
                  untapped business intelligence you already own.
                </p>
                <br></br>
                <p id="text">
                  We bring intelligence to metadata management by providing a
                  world-class, data lineage platform that automatically scans
                  your data environment to build a powerful map of all data
                  flows and deliver it through a native UI and other channels to
                  both technical and non-technical users.{" "}
                </p>

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
                    Dedicated priority support
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Tailored solutions for specific needs
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Proactive consultation (giving extra services to the client
                    - to be updated)
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Usage of industry-led resources
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr></hr>
        
        {/* <div className="container">
          <div className="col-lg-6">
            <div className="productive-content">
              <h3>Understanding the role of data science in business </h3>
              <br></br>
              <p>
                While it is true that technology continues to produce
                unprecedented advancements at a rapid pace, digital
                transformation can only deliver its full potential if we harness
                the power of the data it brings. Today, 90% of business leaders
                cite data as one of the key resources and a fundamental
                distinguishing factor for companies, at par with basic resources
                such as land, labor, and capital. It is crucial that companies
                that want to make the best out of the business data, understand
                the importance of data science, have a data scientist on the
                team to customize algorithms, make the most of the data, and
                make data-centric decisions.{" "}
              </p>
              <br></br>
              <h4>How Does Data Science Work?</h4>
              <br></br>
              <p>
                Data science executes the process of converting data into
                information and this knowledge through technical, statistical,
                mathematical, analytical, and computational calculations. Data
                Science combines a series of analytical tools from statistics,
                numerical analysis, predictive analysis, and other scientific
                methods, to extract value from the data captured through the
                web, mobile devices, IoT objects, smart sensors, and other
                sources of actionable data.
              </p>
              <br></br>
              <p>
                From statistics and insights across workflows and hiring new
                candidates, to helping senior staff make better-informed
                decisions, data science is valuable to any company in any
                industry.
              </p>

              <div className="productive-btn">
                <a className="productive-btn" href="/projects">
                  Get Started with Intellegiance
                  <span></span>
                </a>
              </div>
            </div>
          </div> 
        </div> */}
      </section>
    );
  }
}

export default AboutUsContent;
