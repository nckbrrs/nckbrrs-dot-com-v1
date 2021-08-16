import React from "react";
import NBIcon from "../../assets/icons/NB";
import NBIconWithText from "../../assets/icons/NBwithText";
import useWindowSize from "../../assets/hooks/useWindowSize";
import { contentConfig } from "../../config/contentConfig";
import { useHistory } from "react-router-dom";

const Header: React.FC = () => {
    const windowSize = useWindowSize();
    const history = useHistory();

    return (
        <div id="header" className={"bx--row " + windowSize}>
            <div id="text-col" className="bx--col">
                <h1 className="header-link" id="header-text" onClick={() => history.push('/')}>
                    {contentConfig['home'].headerText}
                </h1>
            </div>
            <div id="logo-col" className="bx--col">
                <span className="header-link" onClick={() => history.push('/')}>
                    <NBIcon />
                    <NBIconWithText/>
                </span>
            </div>
        </div>
    );
}

export default Header;