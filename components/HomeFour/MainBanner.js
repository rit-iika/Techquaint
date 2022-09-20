import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

class MainBanner extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <div className="main-banner-four">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="main-banner-content">
                                        <h1>Intelligence</h1>
                                        <p>Unlock powerful insights by tapping into data you didn’t even know you had.</p>

                                        <div className="banner-btn">
                                            <Link href="/about-us">
                                                <a className="default-btn-one">
                                                    About Us <span></span>
                                                </a>
                                            </Link>

                                            <div
                                                onClick={e => {e.preventDefault(); this.openModal()}}
                                                className="video-btn popup-youtube"
                                            > 
                                                <i className="fa fa-play"></i>
                                                Watch Video
                                            </div> 
                                        </div>
                                    </div>
                                </div>

                                {/* If you want to change the video need to update below videoID */}
                                <ModalVideo 
                                    channel='youtube' 
                                    isOpen={this.state.isOpen} 
                                    videoId='_ysd-zHamjk' 
                                    onClose={() => this.setState({isOpen: false})} 
                                />

                                <div className="col-lg-6 col-md-12">
                                    <div className="banner-image">
                                        <img src="/images/home-four/main-image4.png" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="creative-shape">
                    <img src="/images/main-banner-shape/home-shape-4.png" alt="image" />
                </div>
                <div className="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
        );
    }
}

export default MainBanner;