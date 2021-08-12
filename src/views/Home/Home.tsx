import React from "react";
import { contentConfig } from '../../config/contentConfig';
import NBIcon from '../../assets/icons/NB';
import NBIconWithText from "../../assets/icons/NBwithText";
import useWindowSize from '../../assets/hooks/useWindowSize';

const Home: React.FC = () => {
  const windowSize = useWindowSize();

  function homeClassNames() {
    let classNames = ["bx--grid", "bx--grid--full-width"];

    if (windowSize.width < 485) {
      classNames.push("xsmall");
    }
    else if (windowSize.width < 785) {
      classNames.push("small");
    }
    else if (windowSize.width < 1335) {
      classNames.push("medium");
    }

    return classNames.join(" ");
  }

  return (
    <div id="home" className={homeClassNames()}>
      <div id="header" className="bx--row">
        <div id="text-col" className="bx--col">
          <a href="/">
            <h1 id="header-text">{contentConfig['home'].headerText}</h1>
          </a>
        </div>
        <div id="logo-no-text" className="bx--col">
          <NBIcon/>
        </div>
        <div id="logo-with-text" className="bx--col">
          <NBIconWithText/>
        </div>
      </div>
      <div id="main" className="bx--row">
        <div className="bx--offset-lg-1 bx--col">
          <div id="main-text" data-content={contentConfig['home'].mainText}>
            {contentConfig['home'].mainText}
          </div>
        </div>
        <div className="bx--col-lg-1"/>
      </div>
      <div id="footer" className="bx--row">
        <div className="bx--col"/>
        <div id="links" className="bx--row">
          <div id="my-stuff-link-col" className="bx--col">
            <a href='/stuff'>
              <div className="link-text">My Stuff</div>
            </a>
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
    </div>
  )
}

export default Home;