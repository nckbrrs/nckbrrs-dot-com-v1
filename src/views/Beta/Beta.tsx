import React from "react";
import Main from "../../components/Main";
import { TextInput } from "carbon-components-react";

interface BetaState {
  curWidth: number;
  curText: string;
  clickedText: boolean;
}

class Beta extends React.Component<{}, BetaState> {
  constructor(props) {
    super(props);
    this.updateWidth = this.updateWidth.bind(this);
    this.state = {
      curWidth: window.innerWidth,
      curText: '',
      clickedText: false
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
      <div id="beta" className="bx--grid bx--grid--full-width">
        <div className="bx--row">
          <div className="bx--col input">
            {!this.state.clickedText && <TextInput
              id="text-input"
              labelText="type something and i'll render it in big pretty rgb serif"
              placeholder=""
              onChange={(e) => this.setState({curText: e.target.value})}
              width="20"
            />}
          </div>
        </div>
        <div
          onClick={() => {this.setState({clickedText: !this.state.clickedText})}}
        >
          <Main
            text={this.state.curText}
            width={this.state.curWidth}
          />
        </div>
      </div>
    )
  }
}

export default Beta;