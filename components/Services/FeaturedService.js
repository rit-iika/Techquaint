import React, { Component } from "react";

class FeaturedService extends Component {
  render() {
    return (
      <section className="software-section pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="software-content">
                <span>Our Featured Services</span>
                <h2>Business Services</h2>
                <p id="text">
                  Our data management & analytics capabilities and research
                  skills bring together context and data to generate meaningful
                  business insights. We are one of the leading data analytics
                  consulting services companies offering marketing analytics,
                  customer analytics, research analytics, sales analytics, and
                  other data analytics services under one umbrella
                </p>

                <ul className="features-list">
                  <li>
                    <span>Web Data Scraping</span>
                    <p id="text-1">Web scraping enables businesses to take unstructured data on the world wide web and turn it into structured data so that it can be consumed by their applications, providing significant business value</p>
                  </li>
                  
                  <li>
                    <span>Omnichannel Platforms</span>
                    <p id="text-1">Create channel-agnostic custom experiences based on your user’s needs, 
journeys, and behaviours in real-time.</p>
                  </li>
                  <li>
                    <span>Data Engineering</span>
                    <p id="text-1">Build tailor-made data integration, analytics, and consumption platforms and 
solutions.</p>
                  </li>
                  <li>
                    <span>Data Visualization Platforms</span>
                    <p id="text-1">Design and develop intuitive, scalable, and extendable data visualization 
platforms for graph, geo, and visual data exploration.</p>
                  </li>
                  <li>
                    <span>IoT & Machine Analytics</span>
                    <p id="text-1">Build real-time and scalable automation and data-driven products with IoT 
devices and events data.</p>
                  </li>
                  <li>
                    <span>Image, Text & Voice Analytics</span>
                    <p id="text-1">Uncover the hidden insights from unstructured semi-structured data using 
computer vision and deep learning.</p>
                  </li>
                </ul>
              </div>
            </div>


          














            <div className="col-lg-6">
              <div className="software-image">
                <img src="/images/software.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FeaturedService;
