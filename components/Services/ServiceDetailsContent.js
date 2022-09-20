import React, { Component } from "react";

class ServiceDetailsContent extends Component {
  render() {
    return (
      <section className="services-details-area ptb-100">
        <div className="container">
          <div className="services-details-overview">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="services-details-desc">
                  <div className="col-lg-6 col-md-12"></div>
                </div>
              </div>
            </div>

            <div className="services-details-overview">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="services-details-image">
                    <img
                      src="/images/service-details/service-details2.jpg"
                      alt="image"
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="services-details-desc">
                    <div className="features-text">
                      <h3>WHAT SETS OUR SERVICE APART</h3>
                      <ul>
                        <li> WIDE INDUSTRY COVERAGE</li>
                        <p id="text">
                          Our service caters to plethora of industries and
                          sectors: Automotives and Auto-Parts, e-Commerce,
                          Industrial Supply, Finance, Banking, Legal, Health,
                          Food, Electronics....the list is endless.
                        </p>
                        <li>SIMPLE, SCALABLE AND COANSISTENT SERVICE</li>
                        <p id="text">
                          Value our commitments & principles , Provide accurate
                          project reporting , Strive for highest ethical
                          standards
                        </p>
                        <li>CUSTOMER CENTRIC PHILOSOPHY</li>
                        <p id="text">
                          Project focused to provide top notch result , Offer
                          best recommendation for Project , Deliver Project
                          which brings triumph
                        </p>
                        <li>PROMPT AND RELIABLE SUPPORT</li>
                        <p id="text">
                          Believe in clear client communication , Value the
                          rights & interest of Clients , Value the rights &
                          interest of Employees
                        </p>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ServiceDetailsContent;
