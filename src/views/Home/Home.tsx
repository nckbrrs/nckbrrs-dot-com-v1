import React from "react";
import { contentConfig } from '../../config/contentConfig';
import NBIcon from '../../assets/icons/NB';

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
      curWidth: window.innerWidth
    })
  }

  componentDidMount() {
    this.updateWidth();
    window.addEventListener("resize", this.updateWidth);
  }

  componentDidUpdate() {
    if (window.innerWidth !== this.state.curWidth) {
      this.updateWidth();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
      <div id="home" className={this.homeClassNames()}>
        <div id="header" className="bx--row">
          <div id="text-col" className="bx--col">
            <a href="/">
              <h1 id="header-text">{contentConfig['home'].headerText}</h1>
            </a>
          </div>
          <div id="logo-col" className="bx--col">
            <NBIcon/>
          </div>
        </div>
        <div id="main" className="bx--row">
          <div className="bx--offset-lg-1 bx--col">
            <div id="main-text" data-content={contentConfig['home'].mainText}>
              {contentConfig['home'].mainText}
            </div>
          </div>
          <div className="bx--col-lg-1"/>
        </div>
        <div id="footer" className="bx--row">
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

  homeClassNames() {
    let classNames = ["bx--grid", "bx--grid--full-width"];

    if (this.state.curWidth < 485) {
      classNames.push("xsmall");
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