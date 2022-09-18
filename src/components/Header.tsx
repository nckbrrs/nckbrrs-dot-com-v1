import React from "react";
// import N from "../assets/icons/N";
import useWindowSize from "../assets/hooks/useWindowSize";
import { contentConfig } from "../config/contentConfig";
import { WindowSizes } from "../types/types";

interface HeaderProps {
    handleLogoClick: () => void
}

const Header: React.FC<HeaderProps> = (props) => {
    const windowSize = useWindowSize();
    
    return (
        <div id="header" className={windowSize}>
            {   [WindowSizes.Large, WindowSizes.Medium].includes(windowSize) &&
                <div id="text-col" className="header-link" onClick={props.handleLogoClick}>
                    <span>
                        {contentConfig['home'].headerText}
                    </span>
                </div>
            }
            <div id="logo-col" className="header-link" onClick={props.handleLogoClick}>
                {/* <N/> */}
            </div>
        </div>
    );
}

export default Header;