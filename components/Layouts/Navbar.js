import React, { Component } from "react";
import Link from "../../utils/ActiveLink";

class Navbar extends Component {
  // Navbar
  _isMounted = false;
  state = {
    display: false,
    collapsed: true,
  };
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentDidMount() {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    return (
      <>
        <div id="navbar" className="navbar-area">
          <div className="main-nav">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link href="/">
                  <a className="navbar-brand">
                    <img
                      src="/images/logo-2.jpg"
                      className="new-logo"
                      alt="logo"
                    />
                    <p>visualize the business</p>
                    {/* <img src="/images/logo-white.png" className="white-logo" 
                                        alt="logo" />
                                        <img src="/images/logo-black.png" className="black-logo" alt="logo" /> */}
                  </a>
                </Link>

                <button
                  onClick={this.toggleNavbar}
                  className={classTwo}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar top-bar"></span>
                  <span className="icon-bar middle-bar"></span>
                  <span className="icon-bar bottom-bar"></span>
                </button>

                <div className={classOne} id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    {/* <li className="nav-item"> */}

                    {/* <Link href="/#"> */}
                    <li className="nav-item">
                      <Link href="/" activeClassName="active">
                        <a className="nav-link">Home</a>
                      </Link>
                    </li>
                    

                  

                    {/* <Link href="/#">
                        <a
                          className="nav-link"
                          onClick={(e) => e.preventDefault()}
                        >
                          Home <i className="fas fa-chevron-down"></i>
                        </a>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link href="/" activeClassName="active">
                            <a className="nav-link">Home One</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/index2" activeClassName="active">
                            <a className="nav-link">Home Two</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/index3" activeClassName="active">
                            <a className="nav-link">Home Three</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/index4" activeClassName="active">
                            <a className="nav-link">Home Four</a>
                          </Link>
                        </li>
                      </ul>
                    </li> */}

                    <li className="nav-item">
                      <Link href="/about-us" activeClassName="active">
                        <a className="nav-link">About us</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/#">
                        <a
                          className="nav-link"
                          onClick={(e) => e.preventDefault()}
                        >
                          Services <i className="fas fa-chevron-down"></i>
                        </a>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link href="/analytics" activeClassName="active">
                            <a className="nav-link">Data Analytics</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/scraping" activeClassName="active">
                            <a className="nav-link">Web Data Scraping</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/consultation" activeClassName="active">
                            <a className="nav-link">Consulation Services</a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link href="/pricing" activeClassName="active">
                        <a className="nav-link">
                          Pricing <i className="fas fa-chevron-down"></i>
                        </a>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link href="/about-us" activeClassName="active">
                            <a className="nav-link">Web Scraping Pricing</a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/about-us" activeClassName="active">
                            <a className="nav-link">Data Analytics Pricing</a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/about-us" activeClassName="active">
                            <a className="nav-link">Consulation Pricing</a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    {/* <li className="nav-item">
                                            <Link href="/#">
                                                <a className="nav-link" onClick={e => e.preventDefault()}>
                                                    Blog <i className="fas fa-chevron-down"></i>
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/blog" activeClassName="active">
                                                        <a className="nav-link">Blog Grid</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/blog2" activeClassName="active">
                                                        <a className="nav-link">Blog Right Sidebar</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/blog3" activeClassName="active">
                                                        <a className="nav-link">Blog Left Sidebar</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/blog-details" activeClassName="active">
                                                        <a className="nav-link">Blog Details</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li> */}

                    <li className="nav-item">
                      <Link href="/contact" activeClassName="active">
                        <a className="nav-link">Contact Us</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/contact" activeClassName="active">
                        <a className="nav-link">
                          Login <i className="fas fa-chevron-down"></i>
                        </a>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link href="/sign-in" activeClassName="active">
                            <a className="nav-link">Sign in</a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/new-user" activeClassName="active">
                            <a className="nav-link">New user ?</a>
                          </Link>
                        </li>
                        
                      </ul>
                      </li>
                      </ul>
                      









                  {/* <div className="others-options">
                    <Link href="/contact">
                      <a className="default-btn">
                        Login
                        <span></span>
                      </a>
                    </Link>
                  </div> */}
                  {/* <div className="others-options">
                    <Link href="/contact">
                      <a className="default-btn">
                        Sign up
                        <span></span>
                      </a>
                    </Link>
                  </div> */}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
