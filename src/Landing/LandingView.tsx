import "./Landing.css";
import "../App.css"

import backgroundImg from "../common/aaa-background.jpg"
import twitterIcon from "../common/twitter-icon.svg"
import instagramIcon from "../common/instagram-icon.svg"
import discordIcon from "../common/discord-icon.png"
import clubLogo from "../common/club-logo.png"
import calendarIcon from "../common/calendar-icon.svg"
import { gapi } from 'gapi-script'
import date from 'date-and-time';

import { BrowserView, MobileView } from "react-device-detect"
import { useEffect, useState } from "react";
import moment from "moment";

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

    const calendarID = process.env.REACT_APP_CALENDAR_ID
    const apiKey = process.env.REACT_APP_GOOGLE_API_KEY
    const accessToken = process.env.REACT_APP_GOOGLE_ACCESS_TOKEN
    
    const [events, setEvents] = useState<any[]>([])

    const generateCalendar = (calendarID: string | undefined, apiKey: string | undefined): any => {
        function initiate() {
          gapi.client
              .init({
                  apiKey: apiKey,
              })
              .then(function () {
                  return gapi.client.request({
                      path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
                  })
              })
              .then(
                  (response) => {
                      let gotEvents = response.result.items
                      setEvents(gotEvents);
                  },
                  function (err) {
                      return [false, err]
                  }
              )
        }
        gapi.load('client', initiate);
    }
    useEffect( () => {
        generateCalendar(calendarID, apiKey)
    }, []);
    return (

        <div id="landing" className="view-section-container">
            <div className="view-content-container">
                {/* Top icons and social media buttons */}
                <div id="top-buttons-container" className="top-icons">
                    <div className="left-icons">
                        <a href='/'>
                            <img src={clubLogo} alt="AAA Logo" className="top-logo"/>
                        </a>
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
                        { events.sort((a,b) => Date.parse(a.start.dateTime)-Date.parse(b.start.dateTime)).slice(0,2).map((event) => {
                            return (
                                <div className="upcoming-event-container-desktop" key={event.sequence}>
                                    <h4 className="upcoming-event-name">
                                        {event.summary ? event.summary : ""}
                                    </h4>
                                    <p className="upcoming-event-location">
                                        {event.location ? event.location.includes("Sample Location") ? "TBD" : event.location : ""}
                                    </p>
                                    <p className="upcoming-event-time">
                                        {event.start.dateTime && event.end.dateTime ? moment(event.start.dateTime).format("h:mm a").toString() + " - " + moment(event.end.dateTime).format("h:mm a").toString() : ""}
                                    </p>
                                    <p className="upcoming-event-time">
                                        {event.start.dateTime ? moment(event.start.dateTime).format("dddd, LL").toString() : ""}
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
                    { events.sort((a,b) => Date.parse(a.start.dateTime)-Date.parse(b.start.dateTime)).slice(0,1).map((event) => {
                            return (
                                <div className="upcoming-event-container-desktop" key={event.sequence}>
                                    <h4 className="upcoming-event-name">
                                        {event.summary ? event.summary : ""}
                                    </h4>
                                    <p className="upcoming-event-location">
                                        {event.location ? event.location.includes("Sample Location") ? "TBD" : event.location : ""}
                                    </p>
                                    <p className="upcoming-event-time">
                                        {event.start.dateTime && event.end.dateTime ? moment(event.start.dateTime).format("h:mm a").toString() + " - " + moment(event.end.dateTime).format("h:mm a").toString() : ""}
                                    </p>
                                    <p className="upcoming-event-time">
                                        {event.start.dateTime ? moment(event.start.dateTime).format("dddd, LL").toString() : ""}
                                    </p>
                                </div>
                            )
                        })}



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