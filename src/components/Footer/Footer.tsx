import React from "react";
import useWindowSize from "../../assets/hooks/useWindowSize";
import { contentConfig } from "../../config/contentConfig";
import { RedirectDestinationType } from "../../types/types";

interface FooterProps {
    handleMyStuffClick: (url: string, destType: RedirectDestinationType) => void
}

const Footer: React.FC<FooterProps> = (props) => {
    const windowSize = useWindowSize();

    return (
        <div id="footer" className={windowSize}>
            <div id="my-stuff-link" className="footer-link" onClick={() => props.handleMyStuffClick('stuff', RedirectDestinationType.Internal)}>
                <span>My Stuff</span>
            </div>
            {contentConfig['home'].socialLinks.map((link) => {
                return (
                    <div className="footer-link" onClick={() => props.handleMyStuffClick(link['href'], RedirectDestinationType.External)}>
                        <span>{link['text']}</span>
                        {link['icon']}
                    </div>
                ); 
            })}
      </div>
    );
}

export default Footer;