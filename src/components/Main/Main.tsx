import React from "react";
import "react-dom";

interface MainProps {
  text: string
}

class Main extends React.Component<MainProps, {}> {
  render() {
    return (
      <div className="bx--row main-content">
        <div className="bx--offset-lg-1 bx--col">
            <div className="main-text" data-content={this.props.text}>{this.props.text}</div>
        </div>
        <div className="bx--col-lg-1"/>
      </div>
    );
  }
}

export default Main;
