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

  const classNames = () => {
    const classNames: string[] = [];
    classNames.push(windowSize);

    if (redirecting) {
      classNames.push('slideOutToLeft');
    } else {
      if (history.location.state?.from && history.location.state.from === '/stuff') {
        classNames.push('slideInFromLeft');
      }
      else {
        classNames.push('slideInFromBelow');
      }
    }

    return classNames.join(' ');
  }
  
  return (
    <div id="home" className={classNames()}>
      <Header handleLogoClick={window.location.reload}/>
      <div id="main-text">
        {[0, 1, 2].map(() => (
          <span>{contentConfig['home'].mainText}</span>
        ))}
      </div>
      <Footer handleMyStuffClick={redirect}/>
    </div>
  )
}

export default Home;