import "./Join.css";
import { BrowserView, MobileView, isMobile } from "react-device-detect"
import backgroundImg from "../common/ac2024.jpg"
import discordIcon from "../common/discord-icon.png"
import twitterIcon from "../common/twitter-icon.svg"
import ActionButton from "../common/ActionButton"

export default function FurriesView(): JSX.Element {
    const openInNewTab = (url: string) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <div id="join" className="view-section-container">
            <div className="view-content-container">
                <h1 className="view-content-title">Join the club!</h1>
                <p className="view-content-subtitle">We can't wait to have you here.</p>

                <img src={backgroundImg} className="full-image" alt="5 fursuiters at Anthrocon" />

                <div className={isMobile ? "view-content-2-col-mobile" : "view-content-2-col-equal"}>
                    <div className="view-content-block">
                        <h2>Who can join?</h2>
                        <p>
                            <b><i>Anyone</i></b> affliated with the University of Michigan (students, alumni, faculty/staff) with interests in anthromorphic characters can join! No fursuit required, no need to be an artist or fursuit maker.
                        </p>
                        <p>
                            If you are not a current student at the Ann Arbor campus, please <a href="#admin">contact the club admin</a> to join.
                        </p>
                        <p>
                            Any questions? Check out the <a href="#faq">FAQ section</a>.
                        </p>
                    </div>
                    <div className="view-content-block">
                        <h2>How do I join?</h2>
                        <p>
                            Three easy ways to join for current students:
                        </p>
                        <ul>
                            <li>
                                Join our <a href="https://discord.gg/TteNpmmj" target="_blank">Discord server</a>. You will receive updates and get the link to the Telegram group chat.
                            </li>
                            <li>
                                DM us on <a href="https://www.instagram.com/furriesatumich/" target="_blank">Instagram</a> or <a href="#admin">email us</a>.
                            </li>
                            <li>
                                Know someone in the club? Ask them for an invite.
                            </li>
                        </ul>
                    </div>
                </div>
                <ActionButton img={discordIcon} text="Join our Discord server!" color="white" backgroundColor="#5865F2" invertIconColor={true} onClick={() => openInNewTab("https://discord.gg/TteNpmmj")} alt="Discord Icon"/>
                <ActionButton img={twitterIcon} text="Follow our Twitter!" color="white" backgroundColor="#1DA1F2" invertIconColor={true} smallerIcon={true} onClick={() => openInNewTab("https://x.com/FurriesAtUMich")} alt="Twitter Icon/>
            </div>
        </div>
    )
}