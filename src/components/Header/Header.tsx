import React from "react";
import "react-dom";
import { contentConfig } from '../../assets/contentConfig';

class Header extends React.Component<{}, {}> {
  render() {
    return (
      <div className="bx--row">
        <div className="bx--col">
          <h1 className="header-text">{contentConfig.headerText}</h1>
        </div>
      </div>
    );
  }
}

export default Header;
