import React from "react";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import pic from "../../assets/images/beta.jpeg";

interface BetaState {
  curWidth: number;
}

class Beta extends React.Component<{}, BetaState> {
  constructor(props) {
    super(props);
    this.updateWidth = this.updateWidth.bind(this);
    this.state = {
      curWidth: window.innerWidth
    }
  }

  updateWidth() {
    this.setState({
      curWidth: document.getElementById("beta")!.offsetWidth
    })
  }

  componentDidMount() {
    this.updateWidth();
    window.addEventListener("resize", this.updateWidth);
  }

  componentDidUpdate() {
    if (document.getElementById("beta")!.offsetWidth !== this.state.curWidth) {
      this.updateWidth();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
      <div id="beta">
        <div id="left" className="col">
          <img src={pic} alt=''/>
        </div>
        <div id="right" className="col">
          <Main page="beta" width={this.state.curWidth / 2}/>
          <Footer page="beta"/>
        </div>
      </div>
    )
  }
}

export default Beta;