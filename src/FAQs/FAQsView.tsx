import "../App.css"
import "./FAQs.css";
import { BrowserView, MobileView, isMobile } from "react-device-detect"

export default function FAQsView(): JSX.Element {
    return (
        <div id="faq" className="view-section-container">
            <div className="view-content-container">
                <h2 className="view-content-title">FAQs</h2>

                <div className={isMobile ? "view-content-2-col-mobile" : "view-content-2-col-equal"}>
                    <div className="view-content-block">
                        <div className="faq-content-container">
                            <h3>General</h3>
                            <div className="faq-item-container">
                                <p className="faq-question">
                                    Q. Which name do I use, <i>Furries at UMich</i> or <i>Anthro Art Association</i>?
                                </p>
                                <p className="faq-answer">
                                    A: “Anthro Art Association” (AAA) is the official name of the club as registered at the University of Michigan and should be used when referring to the club within the university. “Furries at UMich” may be used when referring to the club in an external context, such as social media.
                                </p>
                            </div>
                            <div className="faq-item-container">
                                <p className="faq-question">
                                    Q: I am an aspiring fursuit maker. What resources does the club have?
                                </p>
                                <p className="faq-answer">
                                    A: We have a variety of basic tools available to us: a sewing machine, a variety of threads and needles, scissors and a seam ripper, and lots of foam, but the biggest resource that we can offer are members who are experienced in the craft! Please note that we do not have the budget to provide more project-specific consumables like fur or other fabric.
                                </p>
                            </div>
                            <div className="faq-item-container">
                                <p className="faq-question">
                                    Q: I am an alumnus and would like to support your club, what can I do?
                                </p>
                                <p className="faq-answer">
                                    A: Thank you for your interest in supporting us! We would greatly appreciate donations (please note they are not tax-deductible) as well as other forms of non-monetary support, such as mentorship or sharing your expertise. Please <a href="mailto:anthroartassociation@gmail.com" target="_blank">send us an email</a>!
                                </p>
                            </div>
                            <h3>Requirements</h3>
                            <div className="faq-item-container">
                                <p className="faq-question">
                                    Q: How much of a commitment is the club?
                                </p>
                                <p className="faq-answer">
                                    A: It's as much of a commitment as you want it to be! Attendance is not required; if the vibe of the club meetings isn't really your thing, you can use our meetings or <a href="https://discord.gg/Jj7tH5zxzg" target="_blank">Discord server</a> as an avenue to meet more furs.
                                </p>
                            </div>
                            <div className="faq-item-container">
                                <p className="faq-question">
                                    Q: Are there any club dues?
                                </p>
                                <p className="faq-answer">
                                    A: No, we do not collect dues from our members. 
                                </p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="view-content-block">
                        <div className="faq-content-container">
                            {/* Can I join? */}
                            <h3>Can I join?</h3>
                            <div className="faq-item-container">
                                <p className="faq-question">
                                    Q: Do I need to be interested in fursuit making?
                                </p>
                                <p className="faq-answer">
                                    A: Not at all, although we do have resources to help you learn fursuit making if you’d like.
                                </p>
                            </div>
                            <div className="faq-item-container">
                                <p className="faq-question">
                                    Q: I don’t own a fursuit. Can I join?
                                </p>
                                <p className="faq-answer">
                                    A: Of course! In fact, most of our members do not yet own a fursuit, and the club is an excellent opportunity to learn to make your first fursuit, if you want.
                                </p>
                            </div>
                            <div className="faq-item-container">
                                <p className="faq-question">
                                    Q: I am not a furry. Can I join?
                                </p>
                                <p className="faq-answer">
                                    A: Yes! We are committed to diversity and inclusion, and everyone who embraces and supports these values is welcome.

                                </p>
                            </div>
                        
                            {/* Join */}
                            <h3>Join</h3>
                            <div className="faq-item-container">
                                <p className="faq-question">
                                    Q: Is there an application process to join?
                                </p>
                                <p className="faq-answer">
                                    A: No, anyone can join by simply joining the <a href="https://discord.gg/Jj7tH5zxzg" target="_blank">Discord server</a> and/or contacting the admins.
                                </p>
                            </div>
                            <div className="faq-item-container">
                                <p className="faq-question">
                                    Q: Do I need to join the Discord server or follow AAA social media?
                                </p>
                                <p className="faq-answer">
                                    A: We highly encourage you to join our online community so that you can interact with other furries on campus, but you can still find and attend our meetings by checking our website periodically or subscribing to <a href="https://calendar.google.com/calendar/u/1?cid=Y185YjdlNTcxZmYwNzk0NzI2MjgzYzI4NTE5MzUzOWIwZDAzNWYzMGIwNmEyMTJiM2ZhYjlmZTNmMjQ3NzE5Zjc0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20" target="_blank">our calendar</a>. Please note that plans may change at the last minute, however.
                                </p>
                            </div>
                            <div className="faq-item-container">
                                <p className="faq-question">
                                    Q: Do I need to register on Maize Pages?
                                </p>
                                <p className="faq-answer">
                                    A: No, but you are welcome to if you’d like.
                                </p>
                            </div>
                            <div className="faq-item-container">
                                <p className="faq-question">
                                    Q: I’m not a current student at the Ann Arbor campus, why do I need to contact the admins to join?
                                </p>
                                <p className="faq-answer">
                                    A: As a registered student organization (RSO) funded by the University of Michigan, we are required to ensure that at least 51% of our roster consists of current students. We ask that you contact us first so that we can continue to comply with this requirement.
                                </p>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
                
                
                
            
            </div>
        </div>
    )
}