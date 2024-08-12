import "./Landing.css";
import "../App.css"

import backgroundImg from "../common/aaa-background.jpg"
import twitterIcon from "../common/twitter-icon.svg"
import instagramIcon from "../common/instagram-icon.svg"
import discordIcon from "../common/discord-icon.png"
import clubLogo from "../common/club-logo.png"
import calendarIcon from "../common/calendar-icon.svg"

import { BrowserView, MobileView } from "react-device-detect"

const sampleUpcomingEvents = [
    { 
        name: "Festifall 2024",
        location: "TBD",
        timeLine1: "2:30 PM - 5:00 PM",
        timeLine2: "Wednesday, Aug 28, 2024"
    },
    { 
        name: "Weekly Club meeting",
        location: "Mason Hall 3427",
        timeLine1: "4:00 PM - 6:00 PM",
        timeLine2: "Sunday, Sep 1, 2024"
    }
]

export default function LandingView(): JSX.Element {
    let upcomingEvents = sampleUpcomingEvents; // TODO

    const openInNewTab = (url: string) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <div id="landing" className="view-section-container">
            <div className="view-content-container">
                {/* Top icons and social media buttons */}
                <div id="top-buttons-container" className="top-icons">
                    <div className="left-icons">
                        <img src={clubLogo} alt="AAA Logo" className="top-logo"/>
                    </div>
                    <div className="right-icons">
                        <button className="icon-button-invert"
                                onClick={() => openInNewTab("https://x.com/FurriesAtUMich")}>
                            <img src={twitterIcon} alt="Twitter"/>
                        </button>
                        <button className="icon-button-invert"
                                onClick={() => openInNewTab("https://www.instagram.com/furriesatumich/")}>
                            <img src={instagramIcon} alt="Instagram"/>
                        </button>
                        <button className="icon-button-invert"
                                onClick={() => openInNewTab("https://discord.gg/TteNpmmj")}>
                            <img src={discordIcon} alt="Discord"/>
                        </button>
                    </div>
                </div>

                {/* Landing intro */}
                <div className="invert-content">
                    <h1 className="landing-main-text">
                        Furries at UMich
                    </h1>
                    <p className="landing-main-description">
                    We are the Anthro Art Association, a registered voluntary student organization  at the University of Michigan - Ann Arbor, providing a safe space for individuals interested in anthropomorphic characters and subculture.
                    </p>
                    <a className="landing-main-button" href="#about">
                        Learn More
                    </a>
                </div>

                <div style={{height: "100px"}}></div>
                
                {/* Upcoming Events */}
                <div className="invert-content">
                    <h2>Upcoming Events</h2>
                    <BrowserView>
                        { upcomingEvents.map((event, index) => {
                            return (
                                <div className="upcoming-event-container-desktop" key={index}>
                                    <h4 className="upcoming-event-name">
                                        {event.name}
                                    </h4>
                                    <p className="upcoming-event-location">
                                        {event.location}
                                    </p>
                                    <p className="upcoming-event-time">
                                        {event.timeLine1}
                                    </p>
                                    <p className="upcoming-event-time">
                                        {event.timeLine2}
                                    </p>
                                </div>
                            )
                        })}
                        <div className="upcoming-event-container-desktop">
                            <p className="upcoming-event-single-text">
                                Join our Discord channel or Telegram group chat, or follow our Twitter (X) and Instagram for updates!
                            </p>
                            <img src={twitterIcon} className="upcoming-event-icon"
                                alt="Twitter Icon"
                                onClick={() => openInNewTab("https://x.com/FurriesAtUMich")}/>
                            <img src={instagramIcon} className="upcoming-event-icon"
                                alt="Instagram Icon"
                                onClick={() => openInNewTab("https://www.instagram.com/furriesatumich/")}/>
                            <img src={discordIcon} className="upcoming-event-icon"
                                alt="Discord Icon"
                                onClick={() => openInNewTab("https://discord.gg/TteNpmmj")}/>
                            <img src={calendarIcon} className="upcoming-event-icon"
                                    alt="Calendar Icon"
                                    onClick={() => openInNewTab("https://calendar.google.com/calendar/u/1?cid=Y185YjdlNTcxZmYwNzk0NzI2MjgzYzI4NTE5MzUzOWIwZDAzNWYzMGIwNmEyMTJiM2ZhYjlmZTNmMjQ3NzE5Zjc0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20")}/>
                        </div>
                    </BrowserView>
                    <MobileView>
                        <div className="upcoming-event-container-mobile">
                            <h4 className="upcoming-event-name">
                                {upcomingEvents[0].name}
                            </h4>
                            <p className="upcoming-event-location">
                                {upcomingEvents[0].location}
                            </p>
                            <p className="upcoming-event-time">
                                {upcomingEvents[0].timeLine1}
                            </p>
                            <p className="upcoming-event-time">
                                {upcomingEvents[0].timeLine2}
                            </p>
                        </div>
                        <button className="upcoming-event-more-button-mobile"
                            onClick={() => openInNewTab("https://calendar.google.com/calendar/u/1?cid=Y185YjdlNTcxZmYwNzk0NzI2MjgzYzI4NTE5MzUzOWIwZDAzNWYzMGIwNmEyMTJiM2ZhYjlmZTNmMjQ3NzE5Zjc0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20")}>
                            +
                        </button>


                        <div className="upcoming-event-container-mobile-small">
                            <span>Follow for updates!</span>
                            <div className="right-icons">
                            <img src={twitterIcon} className="upcoming-event-icon"
                                alt="Twitter Icon"
                                onClick={() => openInNewTab("https://x.com/FurriesAtUMich")}/>
                            <img src={instagramIcon} className="upcoming-event-icon"
                                alt="InstagramIcon"
                                onClick={() => openInNewTab("https://www.instagram.com/furriesatumich/")}/>
                            <img src={discordIcon} className="upcoming-event-icon"
                                alt="Discord Icon"
                                onClick={() => openInNewTab("https://discord.gg/TteNpmmj")}/>
                            </div>
                            
                        </div>
                    </MobileView>
                </div>
            </div>

            {/* Bakground */}
            <div className="color-overlay-blue"></div>
            <img src={backgroundImg} id="landing-background-img" alt="7 fursuiters at Festifall 2023"/>
        </div>
    );
        
}