import React, { Component } from "react";
import Link from "next/link";

class Analytics extends Component {
  render() {
    return (
      <section className="software-section pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="software-content">
                <h2>Our Data Analytics Services</h2>

                <p id="text">
                  Business data analysis includes the activities to help
                  managers make strategic decisions, achieve major goals and
                  solve complex problems, by collecting, analyzing and reporting
                  the most useful information relevant to managers’ needs.
                  Information could be about the causes of the current
                  situation, the most likely trends to occur, and what should be
                  done as a result.
                </p>
                <br></br>

                <p>Explore the features:</p>

                <ul className="features-list">
                  <li>
                    <span>Omnichannel Platforms</span>
                    <p id="text-1">
                      Create channel-agnostic custom experiences based on your
                      user’s needs, journeys, and behaviours in real-time.
                    </p>
                  </li>
                  <li>
                    <span>Data Engineering</span>
                    <p id="text-1">
                      Build tailor-made data integration, analytics, and
                      consumption platforms and solutions.
                    </p>
                  </li>
                  <li>
                    <span>Data Visualization Platforms</span>
                    <p id="text-1">
                      Design and develop intuitive, scalable, and extendable
                      data visualization platforms for graph, geo, and visual
                      data exploration.
                    </p>
                  </li>
                  <li>
                    <span>IoT & Machine Analytics</span>
                    <p id="text-1">
                      Build real-time and scalable automation and data-driven
                      products with IoT devices and events data.
                    </p>
                  </li>
                  <li>
                    <span>Image, Text & Voice Analytics</span>
                    <p id="text-1">
                      Uncover the hidden insights from unstructured
                      semi-structured data using computer vision and deep
                      learning.
                    </p>
                  </li>
                </ul>
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

export default Analytics;
