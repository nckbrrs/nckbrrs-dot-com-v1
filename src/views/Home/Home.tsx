import React, { useState } from 'react';
import useWindowSize from '../../assets/hooks/useWindowSize';
import { Arrow } from '../../assets/icons/Arrow';
import { NounBubble } from '../../components/NounBubble';
import { contentConfig } from '../../config/contentConfig';

const Home: React.FC = () => {
  const [currentSide, setCurrentSide] = useState('left');
  const windowSize = useWindowSize();

  const onPress = () => {
    setCurrentSide(currentSide === 'left' ? 'right' : 'left');
  }

  return (
    <div id="home" className={windowSize + ' ' + currentSide}>
      <div id="left-side-with-arrow">
        <div id="left-side">
          <div id="name">
            <p id="first-name">nick</p>
            <p id="last-name">barrs</p>
          </div>
          <div id="about">
            <div id="is-and-noun-bubble">
              <p id="is-a">is a</p>
              <div id="noun-bubble-wrapper">
                <NounBubble/>
              </div>
            </div>
            <p id="living-working">living and working in <span style={{whiteSpace: 'nowrap'}}>New York City.</span></p>
          </div>
        </div>
        <div id="arrow">
          <span onClick={onPress}>
            <Arrow/>
          </span>
        </div>
      </div>
      <div id="icon-row-container">
          <div id="icon-row">
            { contentConfig['home'].socialLinks.map((link) => {
              return (
                <div className="icon" key={`${link.name}-icon`}>
                  <div style={{borderRadius: 100}} onClick={() => window.location.href = link['href']}>
                    { link['icon'] }
                  </div>
                  <p className="icon-name">{link['text']}</p>
                </div>
              ); 
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;