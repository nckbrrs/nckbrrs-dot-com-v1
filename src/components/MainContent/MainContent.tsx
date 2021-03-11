import React from "react";
import "react-dom";

interface MainContentProps {
  text: string
}

class MainContent extends React.Component<MainContentProps, {}> {
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

export default MainContent;
