import React from "react";
import "react-dom";
import { contentConfig } from '../../assets/contentConfig';

interface FooterState {
  currentWidth: number;
}

class Footer extends React.Component<{}, FooterState> {
  constructor(props) {
    super(props);
    this.updateWidth = this.updateWidth.bind(this);
    this.state = {
      currentWidth: 0
    }
  }

  updateWidth() {
    this.setState({
      currentWidth: document.getElementById("footer")!.offsetWidth
    })
  }

  componentDidMount() {
    this.updateWidth();
    window.addEventListener("resize", this.updateWidth);
  }

  componentDidUpdate() {
    if (document.getElementById("footer")!.offsetWidth !== this.state.currentWidth) {
      this.updateWidth();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
      <div id="footer" className={this.footerClassNames()}>
        <div className="bx--col">
          <div id="links">
            {
              contentConfig.socialLinks.map((link) =>  {
                return (
                  <a href={link['href']}>
                    <div className="link-text">{link['text']}</div>
                    {link['icon']}
                  </a>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }

  footerClassNames() {
    let classNames = ["bx--row"];

    if (this.state.currentWidth < 600) {
      classNames.push("small");
    }
    else if (this.state.currentWidth < 1200) {
      classNames.push("medium");
    }

    return classNames.join(" ");
  }
}

export default Footer;
