import React from "react";
import useWindowSize from "../assets/hooks/useWindowSize";
import { contentConfig } from "../config/contentConfig";
import { MainContentTypes, WindowSizes } from "../types/types";

interface FooterProps {
    contentToShow: MainContentTypes;
    slideLeft: boolean;
    slideRight: boolean;
    handleMyStuffClick: () => void;
}

const Footer: React.FC<FooterProps> = (props) => {
    const windowSize = useWindowSize();

    const classNames = () => {
        let classNames: string[] = [windowSize];
        
        if (props.slideLeft) {
            classNames.push('slideLeft');
        }

        if (props.slideRight) {
            classNames.push('slideRight');
        }

        return classNames.join(' ');
    }

    return (
        <div id="footer" className={classNames()}>
        {   windowSize === WindowSizes.Mobile &&
            <div id="my-stuff-link" className="footer-link" onClick={() => props.handleMyStuffClick()}>
                { props.contentToShow === MainContentTypes.About ? 'My Stuff' : '' }
            </div> 
        }
        {   windowSize !== WindowSizes.Mobile && contentConfig['home'].socialLinks.map((link) => {
            return (
                <div className="footer-link" onClick={() => window.location.href = link['href']}>
                {   windowSize === WindowSizes.Large && 
                    link['text']
                }
                {   windowSize !== WindowSizes.Large && 
                    link['icon']
                }
                </div>
            ); 
        })}
        </div>
    );
}

export default Footer;