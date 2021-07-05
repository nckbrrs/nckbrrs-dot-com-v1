import React from "react";
import { contentConfig } from '../../config/contentConfig';

interface HomeState {
  curWidth: number;
}

class Home extends React.Component<{}, HomeState> {
  constructor(props) {
    super(props);
    this.updateWidth = this.updateWidth.bind(this);
    this.state = {
      curWidth: window.innerWidth
    }
  }

  updateWidth() {
    this.setState({
      curWidth: document.getElementById("home")!.offsetWidth
    })
  }

  componentDidMount() {
    this.updateWidth();
    window.addEventListener("resize", this.updateWidth);
    alert("width:" + document.getElementById("App")!.offsetWidth + " height:" + document.getElementById("App")!.offsetHeight);
  }

  componentDidUpdate() {
    if (document.getElementById("home")!.offsetWidth !== this.state.curWidth) {
      this.updateWidth();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {

    return (
      <div id="home" className="bx--grid bx--grid--full-width">
        <div id="header" className={this.headerClassNames()}>
          <div className="bx--col">
            <a href="/">
              <h1 className="header-text">{contentConfig['home'].headerText}</h1>
            </a>
          </div>
        </div>
        <div id="main" className={this.mainContentClassNames()}>
          <div className="bx--offset-lg-1 bx--col">
            <div id="main-text" data-content={contentConfig['home'].mainText}>
              {contentConfig['home'].mainText}
            </div>
          </div>
          <div className="bx--col-lg-1"/>
        </div>
        <div id="footer" className={this.footerClassNames()}>
        <div className="bx--col"/>
        <div id="links" className="bx--row">
          <div id="my-stuff-link-col" className="bx--col">
            <a href='/stuff'>
              <div className="link-text">My Stuff</div>
            </a>
          </div>
          {
            contentConfig['home'].socialLinks.map((link, i) =>  {
              return (
                <div className="bx--col">
                  <a href={link['href']}>
                    <div className="link-text">{link['text']}</div>
                    {link['icon']}
                  </a>
                </div>
              )
            })
          }
        </div>
        <div className="bx--col"/>
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

  mainContentClassNames() {
    let classNames = ["bx--row"];

    if (this.state.curWidth < 785) {
      classNames.push("small");
    }
    else if (this.state.curWidth < 1335) {
      classNames.push("medium");
    }

    return classNames.join(" ");
  }

  footerClassNames() {
    let classNames = ["bx--row"];

    if (this.state.curWidth < 485) {
      classNames.push("x-small");
    }
    else if (this.state.curWidth < 785) {
      classNames.push("small");
    }
    else if (this.state.curWidth < 1335) {
      classNames.push("medium");
    }

    return classNames.join(" ");
  }
}

export default Home;