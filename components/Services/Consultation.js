import React, { Component } from "react";
import Link from "next/link";

class Consultation extends Component {
  render() {
    return (
      <section className="services-details-area ptb-100">
        <div className="container">
          <div className="services-details-overview">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="services-details-desc">
                  <h2>Our Consultation Services </h2>

                  <p>
                    Our business consultancy services are highly efficient, and
                    we have been helping the organizations from multiple
                    industry over many years.{" "}
                  </p>
                  <p id="text">
                    Empower your organization with greater access to data and
                    insights. Create a unified view of enterprisewide data to
                    build analytical and operational views for decision-making,
                    and to automate end-to-end intelligent workflows.
                    Intelligent workflows transform the way work gets done by
                    providing employees with insights that improve
                    responsiveness, quality and accuracy.
                    <br></br>
                    <br></br>Our analytics consulting services help
                    organizations integrate enterprise data for operational,
                    analytical, data science and AI models to build an
                    insights-driven organization.
                  </p>
                  <p >
                    Data analytics consulting company can help you improve
                    various aspects of your business, such as:
                  </p>
                  <ul id="text">
                    <li>
                      Risk detection
                      <p>
                        This data analytics application uses data and analytics
                        to calculate a probability of a customer defaulting.
                        Such information enables businesses to take up action in
                        advance and decrease the level of fraud.
                      </p>
                    </li>
                    <li>
                      Delivery
                      <p>
                        Data and analytics are critical if it comes to examining
                        collected data and improving a company’s overall
                        efficiency. Businesses offering delivery services are
                        now able to find the best shipping routes, improve
                        delivery time, as well as choose the most cost-efficient
                        means of transport.
                      </p>
                    </li>
                    <li>
                      Digital advertisement
                      <p>
                        Digital advertising has been revolutionized by data and
                        analytics. Data analytics applications are widely used
                        in digital billboards and website banners.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <hr></hr>

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

export default Consultation;
