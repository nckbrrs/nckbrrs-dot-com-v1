import React from "react";
import NBIcon from "../../assets/icons/NB";
import NBIconWithText from "../../assets/icons/NBwithText";
import useWindowSize from "../../assets/hooks/useWindowSize";
import { contentConfig } from "../../config/contentConfig";

interface HeaderProps {
    handleLogoClick: () => void
}

const Header: React.FC<HeaderProps> = (props) => {
    const windowSize = useWindowSize();

    return (
        <div id="header" className={"bx--row " + windowSize}>
            <div id="text-col" className="bx--col">
                <h1 className="header-link" id="header-text" onClick={props.handleLogoClick}>
                    {contentConfig['home'].headerText}
                </h1>
            </div>
            <div id="logo-col" className="bx--col">
                <span className="header-link" onClick={props.handleLogoClick}>
                    <NBIcon />
                    <NBIconWithText/>
                </span>
            </div>
        </div>
    );
}

export default Header;