import React from "react";
import "react-dom";
import { contentConfig } from '../../config/contentConfig';

interface MainProps {
  page: string;
  width: number;
}

class Main extends React.Component<MainProps, {}> {
  
  render() {
    return (
      <div id="main-content" className={this.mainContentClassNames()}>
        <div className="bx--offset-lg-1 bx--col">
          <div id="main-text" data-content={contentConfig[this.props.page].mainText}>
            {contentConfig[this.props.page].mainText}
          </div>
        </div>
        <div className="bx--col-lg-1"/>
      </div>
    );
  }

  mainContentClassNames() {
    let classNames = ["bx--row"];

    if (this.props.width < 600) {
      classNames.push("small");
    }
    else if (this.props.width < 870) {
      classNames.push("medium");
    }

    return classNames.join(" ");
  }
}

export default Main;