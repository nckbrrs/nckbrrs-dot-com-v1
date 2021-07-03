import React from "react";
import { contentConfig } from '../../config/contentConfig';


interface StuffState {
  curWidth: number;
}

class Stuff extends React.Component<{}, StuffState> {
  constructor(props) {
    super(props);
    this.updateWidth = this.updateWidth.bind(this);
    this.state = {
      curWidth: window.innerWidth
    }
  }

  updateWidth() {
    this.setState({
      curWidth: document.getElementById("stuff")!.offsetWidth
    })
  }

  componentDidMount() {
    this.updateWidth();
    window.addEventListener("resize", this.updateWidth);
  }

  componentDidUpdate() {
    if (document.getElementById("stuff")!.offsetWidth !== this.state.curWidth) {
      this.updateWidth();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
      <div id="stuff" className="bx--grid bx--grid--full-width">
        <div id="header" className={this.headerClassNames()}>
          <div className="bx--col">
            <a href="/">
              <h1 className="header-text">{contentConfig['home'].headerText}</h1>
            </a>
          </div>
        </div>
        <div id="links">
          <div className="bx--row">
            <div className="bx--col"/>
            <div id="links-col" className="bx--col">
            {
              contentConfig['home'].socialLinks.map((link, i) =>  {
                return (
                  <div className="bx--row">
                    <a href={link['href']}>
                      <div className="link-text">{link['text']}</div>
                    </a>
                  </div>
                )
              })
            }
            </div>
            <div className="bx--col"/>
          </div>
        </div>
      </div>
    )
  }

  headerClassNames() {
    let classNames = ["bx--row"];

    if (this.state.curWidth < 785) {
      classNames.push("small");
    }
    else if (this.state.curWidth < 1335) {
      classNames.push("medium");
    }

    return classNames.join(" ");
  }
}

export default Stuff;


