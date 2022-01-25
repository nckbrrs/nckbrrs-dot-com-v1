import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Footer from '../../components/Footer';
import useWindowSize from '../../assets/hooks/useWindowSize';
import { MainContentTypes, WindowSizes } from '../../types/types';

const Home: React.FC = () => {
  const windowSize: WindowSizes = useWindowSize();
  const [mainContentToShow, setMainContentToShow] = useState(MainContentTypes.About);
  const [slideLeft, setSlideLeft] = useState(false);
  const [slideRight, setSlideRight] = useState(false);

  useEffect(() => {
    if (windowSize !== WindowSizes.Mobile) {
      setMainContentToShow(MainContentTypes.About);
    }
  }, [windowSize]);

  const handleLogoClick = () => {
    if (mainContentToShow === MainContentTypes.About) {
      return;
    }
    
    setSlideRight(true);
    setSlideLeft(false);
    setTimeout(() => setMainContentToShow(MainContentTypes.About), 333);
  }

  const handleMyStuffClick = () => {
    setSlideLeft(true);
    setSlideRight(false);
    setTimeout(() => setMainContentToShow(MainContentTypes.Links), 333);
  };

  const classNames = () => {
    const classNames: string[] = [windowSize, 'slideInFromBelow'];
    return classNames.join(' ');
  }
  
  return (
    <div id="home" className={classNames()}>
      <Header 
        handleLogoClick={() => handleLogoClick()}
      />
      <Main
        slideLeft={slideLeft}
        slideRight={slideRight}
        contentToShow={mainContentToShow}
      />
      <Footer
        slideLeft={slideLeft}
        slideRight={slideRight}
        contentToShow={mainContentToShow} 
        handleMyStuffClick={() => handleMyStuffClick()}
      />
    </div>
  );
}

export default Home;