import React from "react";
import "react-dom";
import { contentConfig } from '../../assets/contentConfig';

class Main extends React.Component<{}, {}> {
  render() {
    return (
      <div className="bx--row main-content">
        <div className="bx--offset-lg-1 bx--col">
            <div className="main-text" data-content={contentConfig.mainText}>
              {contentConfig.mainText}
            </div>
        </div>
        <div className="bx--col-lg-1"/>
      </div>
    );
  }
}

export default Main;
