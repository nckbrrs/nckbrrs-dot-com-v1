import React from "react";
import "react-dom";

interface MainProps {
  text: string;
  width: number;
}

class Main extends React.Component<MainProps, {}> {
  
  render() {
    return (
      <div id="main-content" className={this.mainContentClassNames()}>
        <div className="bx--offset-lg-1 bx--col">
          <div id="main-text" data-content={this.props.text}>
            {this.props.text}
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