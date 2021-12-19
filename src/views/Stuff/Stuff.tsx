import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { contentConfig } from '../../config/contentConfig';
import useWindowSize from '../../assets/hooks/useWindowSize';
import Header from '../../components/Header/Header';
import { RedirectDestinationType } from "../../types/types";

const Stuff: React.FC = () => {
  const windowSize = useWindowSize();
  const history = useHistory<{from: string}>();
  const [redirecting, setRedirecting] = useState(false);

  const redirectInternal = (url: string) => {
    history.push(`/${url}`, {from: '/stuff'})
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
    const classNames: string[] = [windowSize];
    const fromPath = history.location.state.from;

    if (redirecting) {
      classNames.push('slideOutToRight');
    } else if (fromPath === '/') {
      classNames.push('slideInFromRight');
    }

    return classNames.join(' ');
  }

  if (windowSize !== "mobile") {
    redirect('/', RedirectDestinationType.Internal);
  }

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
}

export default Stuff;


