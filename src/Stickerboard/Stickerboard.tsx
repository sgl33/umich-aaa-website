import "./Stickerboard.css";
import "../App.css"

import React, { Component, FC } from "react";

import backgroundImg from "../common/aaa-background.jpg"
import twitterIcon from "../common/twitter-icon.svg"
import instagramIcon from "../common/instagram-icon.svg"
import discordIcon from "../common/discord-icon.png"
import clubLogo from "../common/club-logo-transparent.png"
import calendarIcon from "../common/calendar-icon.svg"
import stickerConfig from './stickers.json';
import { Tooltip } from 'react-tooltip'

interface IProps{
    
}
const Stickerboard:FC<IProps> = () => {
    const openInNewTab = (url: string) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    const mapStickers = () => {
        return(
            <>
            {stickerConfig.stickers.map( (element) => {
                return(
                    
                    <span style={{display: "flex"}}>
                        <a href={element["link"]}>
                                <img
                                src={element["src"]}
                                alt={element["display-name"]}
                                key={element["display-name"]}
                                style={element["style"]}
                                className={element["class"]}
                            />
                        </a>
                    </span>
                )
            })}
            </>
        )
    }
    mapStickers();
    return(
        <>
            <div id="stickerboard" className="view-section-container">
                <div className="view-content-container">
                    <div id="top-buttons-container-short-margin" className="top-icons">
                        <div className="left-icons">
                            <a href='/'>
                                <img src={clubLogo} alt="AAA Logo" className="top-logo"/>
                            </a>
                        </div>
                        <div className="right-icons">
                            <button className="icon-button-invert"
                                    onClick={() => openInNewTab("https://x.com/AnthroArtAssociation")}>
                                <img src={twitterIcon} alt="Twitter"/>
                            </button>
                            <button className="icon-button-invert"
                                    onClick={() => openInNewTab("https://www.instagram.com/anthroartassociation/")}>
                                <img src={instagramIcon} alt="Instagram"/>
                            </button>
                            <button className="icon-button-invert"
                                    onClick={() => openInNewTab("https://discord.gg/TteNpmmj")}>
                                <img src={discordIcon} alt="Discord"/>
                            </button>
                        </div>
                    </div>
                    <div className='stickerboard-container'>
                        <div className='stickerboard-content'>
                                {mapStickers()}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Stickerboard