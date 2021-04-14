import React from "react";
import "react-dom";
import { contentConfig } from '../../config/contentConfig';

interface MainProps {
  page: string;
}

interface MainState {
  currentWidth: number;
}

class Main extends React.Component<MainProps, MainState> {
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
    console.log(this.state.currentWidth);
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

    if (this.state.currentWidth < 600) {
      console.log("small");
      classNames.push("small");
    }
    else if (this.state.currentWidth < 870) {
      console.log("medium")
      classNames.push("medium");
    }

    return classNames.join(" ");
  }
}

export default Main;