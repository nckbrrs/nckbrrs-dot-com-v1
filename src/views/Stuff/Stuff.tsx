import React from "react";
import { Redirect } from "react-router-dom";
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
    if (this.state.curWidth > 500) {
      return <Redirect to="/" />
    }

    return (
      <div id="stuff" className="bx--grid bx--grid--full-width">
        <div id="header" className="bx--row">
          <div className="bx--col">
            <a href="/">
              <h1 className="header-text" data-content={contentConfig['home'].headerText}>
                {contentConfig['home'].headerText}
              </h1>
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
}

export default Stuff;


