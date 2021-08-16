import React from "react";
import NBIcon from "../../assets/icons/NB";
import NBIconWithText from "../../assets/icons/NBwithText";
import useWindowSize from "../../assets/hooks/useWindowSize";
import { contentConfig } from "../../config/contentConfig";

const Header: React.FC = () => {
    const windowSize = useWindowSize();

    return (
        <div id="header" className={"bx--row " + windowSize}>
            <div id="text-col" className="bx--col">
                <a href="/">
                    <h1 id="header-text">{contentConfig['home'].headerText}</h1>
                </a>
            </div>
            <div id="logo-col" className="bx--col">
                <a href="/">
                    <NBIcon/>
                    <NBIconWithText/>
                </a>
            </div>
        </div>
    );
}

export default Header;