import React, { Component } from 'react';

class SubscribeStyleThree extends Component {
    render() {
        return (
            <section className="subscribe-section p-0">
                <div className="container">
                    <div className="subscribe-content-area mb-0">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="subscribe-image">
                                    <img src="/images/subscribe.png" alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="subscribe-content">
                                    <h2>Don't Miss Our News And Updates</h2>
                                    <p>Find answers to common questions, from order inquiries, to product keys, licensing inquiries, online site administration, and more.</p>
                                </div>

                                <form className="newsletter-form">
                                    <input type="email" className="input-newsletter" placeholder="Enter your email" name="email" />
                                    <button type="submit">Subscribe Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SubscribeStyleThree;