import React from "react";
import { useHistory } from "react-router-dom";
import useWindowSize from "../../assets/hooks/useWindowSize";
import { contentConfig } from "../../config/contentConfig";

const Footer: React.FC = () => {
    const windowSize = useWindowSize();
    const history = useHistory();



    return (
        <div id="footer" className={"bx--row " + windowSize}>
            <div className="bx--col"/>
            <div id="links" className="bx--row">
                <div id="my-stuff-link-col" className="bx--col">
                    {/* <a href='/stuff'> */}
                        <div className="link-text" onClick={() => history.push('/stuff')}>My Stuff</div>
                    {/* </a> */}
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