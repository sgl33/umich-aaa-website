import "./Stickerboard.css";
import "../App.css"

import React, { Component, FC, useState } from "react";

import backgroundImg from "../common/aaa-background.jpg"
import twitterIcon from "../common/twitter-icon.svg"
import instagramIcon from "../common/instagram-icon.svg"
import discordIcon from "../common/discord-icon.png"
import clubLogo from "../common/club-logo-transparent.png"
import calendarIcon from "../common/calendar-icon.svg"
import stickerConfig from './stickers.json';

interface IProps{}

const Stickerboard:FC<IProps> = () => {
    const openInNewTab = (url: string) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    const mapStickers = () => {
        let i = 0;
        return(
            <>
            {stickerConfig.stickers.map( (element) => {
                return(
                    <>
                        <div id={element["name"] + "_container"}className={element["container-class"]} style={element["style"]} key={element["display-name"]}>
                            <img
                                onMouseOver={() => {
                                    const sticks = document.querySelectorAll("." + element["class"]) as unknown as HTMLCollectionOf<HTMLElement>;
                                    for (let i = 0; i < sticks.length; i++) {
                                        sticks[i].classList.add("sticker-faded")
                                    }
                                    const thisstick = document.getElementById(element["name"]);
                                    thisstick!.classList.remove("sticker-faded")
                                    const blurb = document.getElementById(element["name"] + "_blurb"); 
                                    blurb!.style.opacity = "100"; 
                                    const cont = document.getElementById(element["name"] + "_container");
                                    cont!.style.zIndex = "10";}}
                                onMouseLeave={() => {
                                    const sticks = document.querySelectorAll("." + element["class"]) as unknown as HTMLCollectionOf<HTMLElement>;
                                    for (let i = 0; i < sticks.length; i++) {
                                        sticks[i].classList.remove("sticker-faded")
                                    }
                                    const blurb = document.getElementById(element["name"] + "_blurb"); 
                                    blurb!.style.opacity = "0"; 
                                    const cont = document.getElementById(element["name"] + "_container");
                                    cont!.style.zIndex = "0";}}
                                src={element["src"]}
                                id={element["name"]}
                                alt={element["display-name"]}
                                className={element["class"]}
                            />
                            <div className="info-blurb" id={element["name"] + "_blurb"}>
                                <h3>{element["display-name"]}</h3>
                                <p>{element["desc"]}</p>
                            </div>
                        </div>
                    </>

                )
            })}
            </>
        )
    }

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