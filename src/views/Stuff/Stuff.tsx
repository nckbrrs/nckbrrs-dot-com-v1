import React from "react";
import { Redirect } from "react-router-dom";
import { contentConfig } from '../../config/contentConfig';
import useWindowSize from '../../assets/hooks/useWindowSize';
import Header from '../../components/Header/Header';

const Stuff: React.FC = () => {
  const windowSize = useWindowSize();

  if (windowSize !== "xsmall") {
    return <Redirect to="/" />
  }

  return (
    <div id="stuff" className={"bx--grid bx--grid--full-width " + windowSize}>
      <Header/>
      <div id="links">
        <div className="bx--row">
          <div className="bx--col"/>
          <div id="links-col" className="bx--col">
          {contentConfig['home'].socialLinks.map((link) =>  {
            return (
              <div className="bx--row">
                <div className="bx--col link-col">
                  <a href={link['href']}>
                    <div className="link-text" data-content={link['text']}>{link['text']}</div>
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


