import React from "react";
import "react-dom";

class HeaderBar extends React.Component<{}, {}> {
  render() {
    return (
      <div className="bx--row">
        <div className="bx--col">
          <h1 className="header-text">nick barrs</h1>
        </div>
      </div>
    );
  }
}

export default HeaderBar;
