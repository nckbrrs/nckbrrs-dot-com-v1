import React from "react";
import "react-dom";
import { contentConfig } from '../../assets/contentConfig';

interface MainState {
  currentWidth: number;
}

class Main extends React.Component<{}, MainState> {
  constructor(props) {
    super(props);
    this.updateWidth = this.updateWidth.bind(this);
    this.state = {
      currentWidth: 0
    }
  }

  updateWidth() {
    this.setState({
      currentWidth: document.getElementById("main-content")!.offsetWidth
    })
  }

  componentDidMount() {
    this.updateWidth();
    window.addEventListener("resize", this.updateWidth);
  }

  componentDidUpdate() {
    if (document.getElementById("main-content")!.offsetWidth !== this.state.currentWidth) {
      this.updateWidth();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
      <div id="main-content" className={this.mainContentClassNames()}>
        <div className="bx--offset-lg-1 bx--col">
          <div id="main-text" className={this.mainTextClassNames()} data-content={contentConfig.mainText}>
            {contentConfig.mainText}
          </div>
        </div>
        <div className="bx--col-lg-1"/>
      </div>
    );
  }

  mainContentClassNames() {
    let classNames = ["bx--row"];

    if (this.state.currentWidth < 600) {
      classNames.push("small");
    }
    else if (this.state.currentWidth < 870) {
      classNames.push("medium");
    }

    return classNames.join(" ");
  }

  mainTextClassNames() {
    if (this.state.currentWidth < 600) {
      return "small";
    }
    else if (this.state.currentWidth < 870) {
      return "medium";
    }
    else {
      return "";
    }
  }
}

export default Main;