import React, { Component } from "react";
import Link from "next/link";

class BlogCard extends Component {
  render() {
    return (
      <section className="blog-section ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Recent Market Updates</span>
            <h2>Read the updates in data driven business industry here..</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="blog-item">
                <Link href="/blog-details">
                  <a>
                    <img src="/images/blog/blog1.png" alt="image" />
                  </a>
                </Link>

                <div className="blog-content">
                  <ul className="meta-tags">
                    <li>
                      <Link href="/blog">
                        <a>
                          <i className="fa fa-user-alt"></i>
                          Admin
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog">
                        <a>
                          <i className="fas fa-calendar-week"></i> 27 July 2022
                        </a>
                      </Link>
                    </li>
                    <li>
                      <i className="far fa-comments"></i>5 Comments
                    </li>
                  </ul>

                  <h3>
                    <Link href="/blog-details">
                      <a>How Web Scraping Brings Freedom to Research</a>
                    </Link>
                  </h3>

                  <p>
                    Data acquisition is the most financial constraining and
                    time-intensive process of research. Web scraping can solve
                    both issues.
                  </p>

                  <Link href="/blog-details">
                    <a className="read-more">
                      Read More
                      <i className="fa fa-chevron-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="blog-item">
                <Link href="/blog-details">
                  <a>
                    <img src="/images/blog/blog2.png" alt="image" />
                  </a>
                </Link>

                <div className="blog-content">
                  <ul className="meta-tags">
                    <li>
                      <Link href="/blog">
                        <a>
                          <i className="fa fa-user-alt"></i>
                          Admin
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog">
                        <a>
                          <i className="fas fa-calendar-week"></i>27 July 2022
                        </a>
                      </Link>
                    </li>
                    <li>
                      <i className="far fa-comments"></i>3 Comments
                    </li>
                  </ul>

                  <h3>
                    <Link href="/blog-details">
                      <a>
                        Web Scraping Services Market is Estimated to Expand at a
                        Robust CAGR over 2022-2028
                      </a>
                    </Link>
                  </h3>

                  <p>
                    Web Scraping Services Market: Global Industry Trends, Share,
                    Growth, and Forecast 2022-2028, offers a comprehensive
                    analysis of the industry, which comprises insights on the
                    global Web Scraping Services Market.
                  </p>

                  <Link href="/blog-details">
                    <a className="read-more">
                      Read More
                      <i className="fa fa-chevron-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="blog-item">
                <Link href="/blog-details">
                  <a>
                    <img src="/images/blog/blog3.png" alt="image" />
                  </a>
                </Link>

                <div className="blog-content">
                  <ul className="meta-tags">
                    <li>
                      <Link href="/blog">
                        <a>
                          <i className="fa fa-user-alt"></i>
                          Admin
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog">
                        <a>
                          <i className="fas fa-calendar-week"></i>21 Aug 2022
                        </a>
                      </Link>
                    </li>
                    <li>
                      <i className="far fa-comments"></i>3 Comments
                    </li>
                  </ul>

                  <h3>
                    <Link href="/blog-details">
                      <a>
                        Why is data analytics so important for business success
                        !
                      </a>
                    </Link>
                  </h3>

                  <p>
                    Organisations are managing the shift from big-data volumes
                    toward ingesting, storing, and analysing hyperscale data
                    sets, which include trillions of data records, and the
                    expected technical requirements and business results from
                    the process.
                  </p>

                  <Link href="/blog-details">
                    <a className="read-more">
                      Read More
                      <i className="fa fa-chevron-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="col-lg-12 col-md-12">
              <div className="pagination-area">
                <Link href="#">
                  <a className="prev page-numbers">
                    <i className="fas fa-angle-double-left"></i>
                  </a>
                </Link>

                <Link href="#">
                  <a className="page-numbers">1</a>
                </Link>

                <span className="page-numbers current">2</span>

                <Link href="#">
                  <a className="page-numbers">3</a>
                </Link>

                <Link href="#">
                  <a className="page-numbers">4</a>
                </Link>

                <Link href="#">
                  <a className="next page-numbers">
                    <i className="fas fa-angle-double-right"></i>
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

export default BlogCard;
