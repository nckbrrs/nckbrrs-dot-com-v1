import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { contentConfig } from '../../config/contentConfig';
import useWindowSize from '../../assets/hooks/useWindowSize';
import Header from '../../components/Header/Header';
import { RedirectDestinationType } from "../../types/types";

const Stuff: React.FC = () => {

  /*
  return (
    <div id="stuff" className={classNames()}>
      <Header handleLogoClick={() => redirect('', RedirectDestinationType.Internal)}/>
      <div id="links">
        {new Array(3).fill(null).map(() => (
          <div className="container">
            {contentConfig['home'].socialLinks.map((link) =>  (
              <span onClick={() => redirect(link['href'], RedirectDestinationType.External)}>
                {link['text']}
              </span>
            ))}
          </div>
        ))}
      </div>
      <div/>
    </div>
  )
  */

  return (<><h1>hey</h1></>);
}

export default Stuff;


