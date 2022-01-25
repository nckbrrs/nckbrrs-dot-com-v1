import React from "react";
import { contentConfig } from "../../config/contentConfig";

const About: React.FC = () => {
    return (
        <div id="about">
            {['b', 'g', 'r'].map((x) => (
                <div id={x} className="about-instance">
                    <span>
                        {contentConfig['home'].mainText}
                    </span>
                </div>
            ))}
        </div>
    );
}

export default About;