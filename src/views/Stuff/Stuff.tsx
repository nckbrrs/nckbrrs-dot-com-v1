import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { contentConfig } from '../../config/contentConfig';
import useWindowSize from '../../assets/hooks/useWindowSize';
import Header from '../../components/Header/Header';

const Stuff: React.FC = () => {
  const windowSize = useWindowSize();
  const history = useHistory<{from: string}>();
  const [redirecting, setRedirecting] = useState(false);

  const redirectToHome = () => {
    history.push('/', {
      from: '/stuff'
    });
  }

  const onLogoClick = () => {
    setRedirecting(true);
    setTimeout(redirectToHome, 150);
  }

  const classNames = () => {
    const classNames = ['bx--grid', 'bx--grid--full-width'];
    classNames.push(windowSize);

    if (redirecting) {
      classNames.push('slideOutToRight');
    } else {
      if (history.location.state.from === '/') {
        classNames.push('slideInFromRight');
      }
    }

    return classNames.join(' ');
  }

  if (windowSize !== "xsmall") {
    redirectToHome();
  }


  return (
    <div id="stuff" className={classNames()}>
      <Header
        handleLogoClick={onLogoClick}
      />
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


