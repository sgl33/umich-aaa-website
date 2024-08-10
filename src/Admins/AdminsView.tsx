import "./Admins.css";

import takioProfileImg from "./takio-pfp.jpg"
import rixProfileImg from "./rix-pfp.png"

import emailIcon from "./email-icon.svg"
import twitterIcon from "../common/twitter-icon.svg"
import globeIcon from "../common/globe-icon.svg"
import { BrowserView, MobileView, isMobile } from "react-device-detect"
import ActionButton from "../common/ActionButton"

const openInNewTab = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

function AdminItem(props: {
    name: string, role: string, pfp: any, 
    socialIcon1?: any, socialName1?: string, socialLink1?: string, 
    socialIcon2?: any, socialName2?: string, socialLink2?: string,
}): JSX.Element {

    return (
        <div className="admin-item">
            <img src={props.pfp} className="admin-pfp" />
            <h3 className="admin-name-text">{props.name}</h3>
            <p className="admin-role-text">{props.role}</p>
            {
                (props.socialIcon1 && props.socialName1 && props.socialLink1) &&
                <img src={props.socialIcon1} alt={props.socialName1} 
                    onClick={() => {openInNewTab(props.socialLink1 ?? '')}}
                    className="admin-social-icon"/>
            }
            {
                (props.socialIcon2 && props.socialName2 && props.socialLink2) &&
                <img src={props.socialIcon2} alt={props.socialName2} 
                    onClick={() => {openInNewTab(props.socialLink2 ?? '')}}
                    className="admin-social-icon"/>
            }
        </div>
    )
}

export default function AdminsView(): JSX.Element {
    
    return (
        <div id="admin" className="view-section-container">
            <div className="view-content-container">
                <h2 className="view-content-title-small">Club Admins</h2>
                <p className="view-content-subtitle">for the 2024-25 school year</p>

                <div className={isMobile ? "admins-view-content-mobile" : "admins-view-content-desktop"}>
                    <AdminItem name="Stekuns" role="President" pfp={rixProfileImg}/>
                    <AdminItem name="Fern" role="Vice President" pfp={rixProfileImg}/>
                    <AdminItem name="Takio" role="Secretary" pfp={takioProfileImg}/>
                    <AdminItem name="Rix" role="Publicity Chair" pfp={rixProfileImg}
                        socialIcon1={twitterIcon} socialName1="Twitter" socialLink1="https://x.com/biteyrix"
                        socialIcon2={globeIcon} socialName2="Website" socialLink2="https://rix.dog"/>
                    <AdminItem name="Luca" role="Social Chair" pfp={rixProfileImg}/>
                </div>

                <ActionButton img={emailIcon} text="Send an email to admins" color="white" backgroundColor="#00274C" invertIconColor={true} smallerIcon={true} onClick={() => { openInNewTab("mailto:anthroartassociation@gmail.com") }} />
            </div>
            
        </div>
    )
}