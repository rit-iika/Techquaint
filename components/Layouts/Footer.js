import React, { Component } from "react";
import Link from "next/link";

class Footer extends Component {
  render() {
    let currentYear = new Date().getFullYear();
    return (
      <>
        {/* Top Footer Section */}
        <footer className="footer-section ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-footer-widget">
                  <div className="footer-heading">
                    <h3>About Us</h3>
                  </div>
                  <p>
                    We at Intelligence, can confidently say that our services
                    improve your business and prove to be stepping stones in
                    it's growth. We help you with your data so that when you
                    dive into the ocean of business , you already are equipped !
                    <br></br>
                    <br></br>
                    We are committed to improve the performance of B2B clients
                    by helping identify redundancies and process gaps that
                    otherwise would have boosted their profits.
                    <br></br>
                  </p>

                  <ul className="footer-social">
                    <li>
                      <Link href="/#">
                        <a target="_blank">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </Link>
                    </li>

                    <li>
                      <Link href="/#">
                        <a target="_blank">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </Link>
                    </li>

                    <li>
                      <Link href="/#">
                        <a target="_blank">
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="single-footer-widget">
                  <div className="footer-heading">
                    <h3>Important Links</h3>
                  </div>

                  <ul className="footer-quick-links">
                    <li>
                      <Link href="/">
                        <a>Home</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about-us">
                        <a>About us</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services">
                        <a>Services</a>
                      </Link>
                    </li>
                    
                    <li>
                      <Link href="/contact">
                        <a>Contact</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="single-footer-widget">
                  <div className="footer-heading">
                    <h3>Featured Service</h3>
                  </div>

                  <ul className="footer-quick-links">
                    <li>
                      <Link href="/">
                        <a>Services</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog">
                        <a>Blogs</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services">
                        <a>Clients</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/partner">
                        <a>Privacy Policy</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq">
                        <a>FAQs</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-footer-widget">
                  <div className="footer-heading">
                    <h3>Contact Info</h3>
                  </div>

                  <div className="footer-info-contact">
                    <i className="flaticon-call-answer"></i>
                    <h3>Phone</h3>
                    <span>097-556-34369</span>
                  </div>

                  <div className="footer-info-contact">
                    <i className="flaticon-envelope"></i>
                    <h3>Email</h3>
                    <span>info@techquaint.com</span>
                  </div>

                  <div className="footer-info-contact">
                    <i className="flaticon-maps-and-flags"></i>
                    <h3>Address</h3>
                    <span>509 Apollo Premier, Indore ,India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lines">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>

          <div className="partner-shape-img1">
            <img src="/images/shape/partnar-shape-2.png" alt="image" />
          </div>
        </footer>
        {/* End Top Footer Section */}

        {/* Bottom Footer Section */}
        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <p>
                  &copy; INTELLEGIANCE SOFTWARE, A TECHQUAINT COMPANY. ALL
                  RIGHTS RESERVED
                  <br></br>
                  <a href="https://envytheme.com/" target="_blank">
                    Techquaint
                  </a>
                </p>
              </div>

              <div className="col-lg-6 col-md-6">
                <ul>
                  <li>
                    <Link href="/terms-condition">
                      <a>Terms & Conditions</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* End Bottom Footer Section */}
      </>
    );
  }
}

export default Footer;
