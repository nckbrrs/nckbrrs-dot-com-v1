import React, { useState } from "react";
import { contentConfig } from '../../config/contentConfig';
import Header from '../../components/Header';
import useWindowSize from '../../assets/hooks/useWindowSize';
import Footer from "../../components/Footer/Footer";
import { useHistory } from "react-router-dom";

const Home: React.FC = () => {
  const windowSize = useWindowSize();
  const history = useHistory();
  const [redirecting, setRedirecting] = useState(false);

  const redirectToStuff = () => {
    history.push('/stuff');
  }

  const onMyStuffClick = () => {
      setRedirecting(true);
      setTimeout(redirectToStuff, 150);
  }

  const classNames = () => {
    const classNames = ['bx--grid', 'bx--grid--full-width'];
    classNames.push(windowSize);

    if (redirecting) {
      classNames.push('redirecting');
    }

    return classNames.join(' ');
  }
  
  return (
    <div id="home" className={classNames()}>
      <Header/>
      <div id="main" className="bx--row">
        <div className="bx--offset-lg-1 bx--col">
          <div id="main-text" data-content={contentConfig['home'].mainText}>
            {contentConfig['home'].mainText}
          </div>
        </div>
        <div className="bx--col-lg-1"/>
      </div>
      <Footer
        handleMyStuffClick={onMyStuffClick}
      />
    </div>
  )
}

export default Home;