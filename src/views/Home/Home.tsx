import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
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
      curWidth: document.getElementById("main-content")!.offsetWidth
    })
  }

  componentDidMount() {
    this.updateWidth();
    window.addEventListener("resize", this.updateWidth);
  }

  componentDidUpdate() {
    if (document.getElementById("main-content")!.offsetWidth !== this.state.curWidth) {
      this.updateWidth();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
      <div id="home" className="bx--grid bx--grid--full-width">
        <Header page="home"/>
        <Main text={contentConfig["home"].mainText} width={this.state.curWidth}/>
        <Footer page="home"/>
      </div>
    )
  }
}

export default Home;