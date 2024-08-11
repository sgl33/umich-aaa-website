import "./About.css"
import "../App.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import clubLogo from "../common/club-logo.jpg"
import { BrowserView, MobileView, isMobile } from "react-device-detect"
import sampleImage from "../common/aaa-background.jpg"
import takio05 from "../common/takio-05.jpg"
import festifall2023 from "../common/festifall2023.jpg"

export default function AboutView() {
    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        arrows: false,
        // centerMode: true
    }

    return (
        <>
        <div id="about" className="view-section-container">
            <div className="view-content-container">
                <h1 className="view-content-title">About AAA</h1>
                <p className="view-content-subtitle">Learn more about the club!</p>
                
                {/* What do we do? */}
                <BrowserView>
                    <div className="view-content-three-rows">
                        <img src={clubLogo} className="content-left" />
                        <div className="content-middle">
                            <h2>What is AAA?</h2>
                            <p>
                                Anthro Art Association (AAA) is a registered voluntary student organization (VSO) at the University of Michigan - Ann Arbor.
                            </p>
                            <p>
                                We are a member club of the Anthromorphic Animal Appreciation Association, a global network of university furry clubs including clubs at UC Berkley, UIUC, Georgia Tech, and more.
                            </p>
                        </div>
                        <div className="content-right">
                            <h2>What do we do?</h2>
                            <p>
                                We hold weekly meetings where furries can gather, socialize, and collaborate on artistic projects, as well as provide resources for artists and fursuit makers. Additionally, we occasionally host special events such as public fursuiting and field trips to nearby attractions!
                            </p>
                            <p className="action-link">
                                Interested?&nbsp;
                                <a href="#join">
                                    Join now!
                                </a>
                            </p>
                        </div>
                    </div>
                    {/* Carousel */}
                    <div className="carousel-desktop-container">
                        <Slider {...carouselSettings} className="carousel-desktop">
                            <img src={takio05} />
                            <img src={festifall2023} />
                        </Slider>
                    </div>
                    
                </BrowserView>
                <MobileView>
                    <div>
                        <img src={clubLogo} className="club-logo-mobile"/>
                        <div className="view-content-mobile">
                            <h2>What is AAA?</h2>
                            <p>
                                Anthro Art Association (AAA) is a registered voluntary student organization (VSO) at the University of Michigan - Ann Arbor.
                            </p>
                            <p>
                                We are a member club of the Anthromorphic Animal Appreciation Association, a global network of university furry clubs including clubs at UC Berkley, UIUC, Georgia Tech, and more.
                            </p>
                        </div>
                        <div className="view-content-mobile">
                            <h2>What do we do?</h2>
                            <p>
                                We hold weekly meetings where furries can gather, socialize, and collaborate on artistic projects, as well as provide resources for artists and fursuit makers. Additionally, we occasionally host special events such as public fursuiting and field trips to nearby attractions!
                            </p>
                            <p className="action-link">
                                Interested?&nbsp;
                                <a href="#join">
                                    Join now!
                                </a>
                            </p>
                        </div>
                    </div>
                    

                </MobileView>
                
            </div>

        </div>
        <MobileView>
            <div id="about-mobile" className="view-section-container">
                <div className="carousel-mobile-container">
                <Slider {...carouselSettings} className="carousel-desktop">
                    <img src={takio05} />
                    <img src={festifall2023} />
                </Slider>
                </div>
            </div>
        </MobileView>
        </>
    )
}