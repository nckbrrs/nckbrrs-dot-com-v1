import React, { useState } from "react";
import Header from '../../components/Header';
import useWindowSize from '../../assets/hooks/useWindowSize';
import Footer from "../../components/Footer/Footer";
import { useHistory } from "react-router-dom";
//import ResumePDF from '../../assets/images/resume.pdf';

const Resume: React.FC = () => {
  const windowSize = useWindowSize();
  const history = useHistory<{from: string}>();
  const [redirecting, setRedirecting] = useState(false);

  const redirectToStuff = () => {
    history.push('/stuff', {
      from: '/'
    });
  }

  const onMyStuffClick = () => {
      setRedirecting(true);
      setTimeout(redirectToStuff, 150);
  }

  const classNames = () => {
    const classNames = ['bx--grid', 'bx--grid--full-width'];
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
    <div id="resume" className={classNames()}>
      <Header
        handleLogoClick={window.location.reload}
      />
      <div id="main" className="bx--row">
        <div className="bx--offset-lg-1 bx--col">
          {/*<iframe src={ResumePDF} width="50%" height="100%"/>*/}
        </div>
        <div className="bx--col-lg-1"/>
      </div>
      <Footer
        handleMyStuffClick={onMyStuffClick}
      />
    </div>
  )
}

export default Resume;