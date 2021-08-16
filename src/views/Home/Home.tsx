import React from "react";
import { contentConfig } from '../../config/contentConfig';
import Header from '../../components/Header';
import useWindowSize from '../../assets/hooks/useWindowSize';
import Footer from "../../components/Footer/Footer";

const Home: React.FC = () => {
  const windowSize = useWindowSize();
  
  return (
    <div id="home" className={"bx--grid bx--grid--full-width " + windowSize}>
      <Header/>
      <div id="main" className="bx--row">
        <div className="bx--offset-lg-1 bx--col">
          <div id="main-text" data-content={contentConfig['home'].mainText}>
            {contentConfig['home'].mainText}
          </div>
        </div>
        <div className="bx--col-lg-1"/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home;