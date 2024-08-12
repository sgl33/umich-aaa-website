import "./Furries.css";
import "../App.css"
import { BrowserView, MobileView, isMobile } from "react-device-detect"
import Spacer from "../common/Spacer"

export default function FurriesView(): JSX.Element {
    let viewSectionClass = "view-section-container";
    if(isMobile) {
        viewSectionClass += " view-section-container-limit-height";
    }

    return (
        <div id="furries" className={viewSectionClass}>
            <div className="view-content-container">
                <h2 className="view-content-title-small">About "Furries"</h2>
                <p className="view-content-subtitle">Wait, so what exactly is a furry?</p>

                <div className={isMobile ? "view-content-2-col-mobile" : "view-content-2-col-equal"}>
                    <div className="view-content-block">
                        <h3>What are furries?</h3>
                        <p>
                            The term “furry” refers to someone with an appreciation for and/or expresses themselves through anthropomorphic animals. 
                        </p>
                        <Spacer height={12} />
                        <h3>What does “anthropomorphic” mean?</h3>
                        <p>
                            Anthropomorphism is the attribution of human traits and behaviors to nonhuman objects, and anthropomorphic refers to having said traits and behaviors. Anthro animals can be found anywhere in media and video games, from Pink Panther to Bugs Bunny! 
                        </p>
                        <p>
                            Anthromorphism has been alongside humans forever. It dates back to prehistoric times; the oldest known anthropomorphic statue, <a href="https://www.britishmuseum.org/blog/lion-man-ice-age-masterpiece" target="_blank">Löwenmensch ("lion man")</a> discovered in Germany, is known to be between 35,000 and 41,000 years old!

                        </p>
                    </div>
                    <div className="view-content-block">
                        <h3>What do furries do?</h3>
                        <p>
                            Many of those who identify as furries often create visual representations of their “fursona” through various art mediums (drawings, digital art, “fursuits”, etc) for self expression. Furries unite under this common interest and take pride in its immense diversity of talent and interests.
                        </p>
                        <Spacer height={12} />
                        <h3>But I heard bad things...</h3>
                        <p>
                            With 80% of furries identifying as LGBTQ+ as well as untruthful fictional portrayals of the fandom, there are some stigmas and stereotypes associated with the community. We aim to help educate and destigmatize through showcasing the inclusiveness and diversity our community has to offer, so everyone can express themselves without judgment or hostility.

                        </p>
                    </div>
                </div>
                <Spacer height={12}/>
            </div>
        </div>
    )
}