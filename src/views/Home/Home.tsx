import React, { useState } from "react";
import { contentConfig } from '../../config/contentConfig';
import Header from '../../components/Header';
import useWindowSize from '../../assets/hooks/useWindowSize';
import Footer from "../../components/Footer/Footer";
import { useHistory } from "react-router-dom";
import { RedirectDestinationType } from "../../types/types";

const Home: React.FC = () => {
  const windowSize = useWindowSize();
  const history = useHistory<{from: string}>();
  const [redirecting, setRedirecting] = useState(false);
  const bool = true;

  const classNames = () => {
    const classNames: string[] = [windowSize];
    return classNames.join(' ');
  }

  const redirectInternal = (url: string) => {
    history.push(`/${url}`, {from: '/'})
  }

  const redirectExternal = (url: string) => {
    window.location.href = url;
  }

  const redirect = (url: string, destType: RedirectDestinationType) => {
    if (destType === RedirectDestinationType.Internal) {
      setRedirecting(true);
      setTimeout(() => redirectInternal(url), 100);
      
    } else {
      redirectExternal(url);
    }
  }
  
  return (
    <div id="home" className={classNames()}>
      <Header handleLogoClick={window.location.reload}/>
      <div id="main">
        <>
        {(
          bool ? (
          <div>
            <span>{contentConfig['home'].mainText}</span>
          </div>
          ) : (
          <div>
          {contentConfig['home'].socialLinks.map((link) =>  (
            <span onClick={() => redirect(link['href'], RedirectDestinationType.External)}>
              {link['text'].toLowerCase()}
            </span> 
          ))}
          </div>
          )
        )}
        </>
      </div>
      <Footer handleMyStuffClick={() => { return; }}/>
    </div>
  )
}

export default Home;