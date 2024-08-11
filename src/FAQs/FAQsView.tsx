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
                            <div className="faq-item-container">
                                <p className="faq-question">
                                    Q. Sample question
                                </p>
                                <p className="faq-answer">
                                    A: Lorem ipsum dolor sit amet.
                                </p>
                            </div>
                            <div className="faq-item-container">
                                <p className="faq-question">
                                    Q. Sample question
                                </p>
                                <p className="faq-answer">
                                    A: Lorem ipsum dolor sit amet.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="view-content-block">
                        <div className="faq-content-container">
                            <div className="faq-item-container">
                                <p className="faq-question">
                                    Q. Sample question
                                </p>
                                <p className="faq-answer">
                                    A: Lorem ipsum dolor sit amet.
                                </p>
                            </div>
                            <div className="faq-item-container">
                                <p className="faq-question">
                                    Q. Sample question
                                </p>
                                <p className="faq-answer">
                                    A: Lorem ipsum dolor sit amet.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                
            
            </div>
        </div>
    )
}