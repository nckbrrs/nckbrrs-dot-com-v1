import React from "react";
import { Redirect } from "react-router-dom";
import { contentConfig } from '../../config/contentConfig';
import NBIconWithText from "../../assets/icons/NBwithText";
import useWindowSize from '../../assets/hooks/useWindowSize';

const Stuff: React.FC = () => {
  const windowSize = useWindowSize();

  if (windowSize.width > 500) {
    return <Redirect to="/" />
  }

  return (
    <div id="stuff" className="bx--grid bx--grid--full-width">
      <div id="header" className="bx--row">
        <div id="logo-col" className="bx--col">
          <a href="/">
            <NBIconWithText/>
            <NBIconWithText/>
            <NBIconWithText/>
          </a>
        </div>
      </div>
      <div id="links">
        <div className="bx--row">
          <div className="bx--col"/>
          <div id="links-col" className="bx--col">
          {contentConfig['home'].socialLinks.map((link) =>  {
            return (
              <div className="bx--row">
                <div className="bx--col link-col">
                  <a href={link['href']}>
                    <div className="link-text">{link['text']}</div>
                  </a>
                </div>
              </div>
            )
          })}
          </div>
          <div className="bx--col"/>
        </div>
      </div>
    </div>
  )
}

export default Stuff;


