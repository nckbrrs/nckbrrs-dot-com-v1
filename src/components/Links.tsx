import React from "react";
import { contentConfig } from "../config/contentConfig";

const Links: React.FC = () => {
    return (
        <div id="links">
            {['b', 'g', 'r'].map((x) => (
                <div id={x} className="links-instance">
                    {contentConfig['home'].socialLinks.map((link) =>  (
                        <span onClick={() => {window.location.href=link['href']}}>
                            {link['text'].toLowerCase()}
                            <br/>
                        </span>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Links;