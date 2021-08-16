import React from "react";
import useWindowSize from "../../assets/hooks/useWindowSize";
import { contentConfig } from "../../config/contentConfig";

interface FooterProps {
    handleMyStuffClick: () => void
}

const Footer: React.FC<FooterProps> = (props) => {
    const windowSize = useWindowSize();

    return (
        <div id="footer" className={"bx--row " + windowSize}>
            <div className="bx--col"/>
            <div id="links" className={"bx--row"}>
                <div id="my-stuff-link-col" className="bx--col">
                    <div className="link-text" onClick={props.handleMyStuffClick}>My Stuff</div>
                </div>
                {contentConfig['home'].socialLinks.map((link) => {
                    return (
                    <div className="bx--col">
                        <a href={link['href']}>
                            <div className="link-text">{link['text']}</div>
                            {link['icon']}
                        </a>
                    </div>
                    ); 
                })}
            </div>
            <div className="bx--col"/>
      </div>
    );
}

export default Footer;