import React, { Component } from "react";

class GetStartedProject extends Component {
  render() {
    return (
      <section className="productive-section pt-100">
        <div className="container">
          <div className="row align-items-center">
            
            <div className="col-lg-6">
              <div className="productive-content">
              
                <h3>Understanding the role of data science in business </h3>
               
                <p>
                  While it is true that technology continues to produce
                  unprecedented advancements at a rapid pace, digital
                  transformation can only deliver its full potential if we
                  harness the power of the data it brings. Today, 90% of
                  business leaders cite data as one of the key resources and a
                  fundamental distinguishing factor for companies, at par with
                  basic resources such as land, labor, and capital. It is
                  crucial that companies that want to make the best out of the
                  business data, understand the importance of data science, have
                  a data scientist on the team to customize algorithms, make the
                  most of the data, and make data-centric decisions.{" "}
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

            <div className="col-lg-6">
              <div className="productive-image">
                <img src="/images/productive.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default GetStartedProject;
